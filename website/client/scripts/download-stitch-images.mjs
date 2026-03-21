/**
 * Fetches Stitch HTML exports and downloads unique lh3.googleusercontent image assets into public/images/stitch.
 * Run from package root: node scripts/download-stitch-images.mjs
 */

import { createHash } from 'node:crypto'
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT_DIR = join(ROOT, 'public', 'images', 'stitch')

const HTML_URLS = [
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzIxZjAyNWQ2OTdiMjRiMDZiMzFmMDg2OWRkZmRhMjVlEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzdlMWNmOTkyNDg0OTQ0ODFhYjYxMDFkOGY1NWE3ZWM0EgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzZkYjY1YTcyNzAxZTQ5NjFhNjFiNmZiMWRjNWEyNTlhEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzM0NDkxYTYxODgwOTRmMDhiYzYyNzU2Y2U2ZTRkZDMwEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzlhOTczNWUzM2QzYTRlN2FhNmU1MDdmMWNkODE2MjU1EgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2IyZWVlNzE2MWNkMTQ0MTZiNTllNWE3Y2ExYjJjYzJhEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzM5ODk3NGM1NzM4MjRhZmE5ZDU1MjUwYjg3ZGZjZmU5EgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2U3ODBiYTQ2Njc1MTRlNDVhZjljOGI0NzMxYmY5NTJlEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzQ4ODYzNTFlMzYwYTQ2NzU4ZGNjMzE5NDc0M2I3NDZmEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAzNTNkMzgwYzQ1NTRhZmU4ODMyMGUwYTNjMTdlMWZjEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzcwNWFmOTZjMTY4ZTQ5ODlhMzJjMzQ2YTgzNWU3OGFiEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzlmOWRhODJiYmU2YjQ2NTg4NzI4MDNmNGI5NDA3MmM3EgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzljNjRkYjlmNDQzZTRjMjI4MWVlMmQ3NjVmNmI0YzA4EgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzRiMmIyOGNhMzg4NTRhMDI4NGM3MDlmMDNmZGMyOTNkEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzY3Y2ZlN2UzYTg0MjRlN2NhOThhMzQ0OTM2ZTY5ZTAzEgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
  'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzNmZWE0YzE1NTVkYjRmMjBiMDBhMDBiYjQ0NDA4NzM4EgsSBxDZtaH06RAYAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQwNTIyOTkyMTI0NDU3MzMx&filename=&opi=89354086',
]

const IMG_RE = /src="(https:\/\/lh3\.googleusercontent\.com[^"]+)"/g

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const seen = new Map()
  const manifest = {}

  for (const url of HTML_URLS) {
    const res = await fetch(url, { redirect: 'follow' })
    if (!res.ok) {
      console.warn('skip html', res.status, url.slice(0, 80))
      continue
    }
    const html = await res.text()
    let m
    IMG_RE.lastIndex = 0
    while ((m = IMG_RE.exec(html)) !== null) {
      const src = m[1]
      if (seen.has(src)) continue
      const hash = createHash('sha256').update(src).digest('hex').slice(0, 16)
      const filename = `${hash}.webp`
      seen.set(src, filename)
      const outPath = join(OUT_DIR, filename)
      try {
        const ir = await fetch(src, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; StitchAssetBot/1.0)' } })
        if (!ir.ok) {
          console.warn('img fail', ir.status, src.slice(0, 60))
          continue
        }
        const buf = Buffer.from(await ir.arrayBuffer())
        await writeFile(outPath, buf)
        manifest[src] = `/images/stitch/${filename}`
        console.log('ok', filename, buf.length)
      } catch (e) {
        console.warn('img err', src.slice(0, 60), e.message)
      }
    }
  }

  await writeFile(join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2))
  console.log('done', Object.keys(manifest).length, 'files')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
