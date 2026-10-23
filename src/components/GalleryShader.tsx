import { useEffect, useState } from 'react'
import {
  FilmGrain,
  getWebGPUSupport,
  ImageTexture,
  Paper,
  Shader,
  Vignette,
} from 'shaders/react'

export default function GalleryShader({ image }: { image: string }) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    let mounted = true
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktopViewport = window.matchMedia('(min-width: 768px)').matches

    if (reduceMotion || !desktopViewport) return undefined

    getWebGPUSupport().then(({ supported }) => {
      if (mounted) setEnabled(supported)
    })

    return () => { mounted = false }
  }, [])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] opacity-85">
      <Shader className="h-full w-full" onUnavailable={() => setEnabled(false)}>
        <ImageTexture url={image} objectFit="cover" />
        <Paper roughness={0.16} grainScale={1.6} displacement={0.08} seed={11} />
        <FilmGrain opacity={0.05} />
        <Vignette opacity={0.16} />
      </Shader>
    </div>
  )
}
