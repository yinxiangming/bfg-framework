import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Avoid picking parent repo lockfile as Turbopack root when nested under resale/
  turbopack: {
    root: path.resolve(process.cwd()),
  },
}

export default nextConfig
