import Image from 'next/image'
import type { ComponentProps } from 'react'

type Props = Omit<ComponentProps<typeof Image>, 'src'> & {
  src: string
  alt: string
}

/** Raster from /public/images/stitch (downloaded from Stitch). */
export default function StitchImage({ className, alt, sizes, ...rest }: Props) {
  return (
    <Image
      alt={alt}
      className={className}
      sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
      {...rest}
    />
  )
}
