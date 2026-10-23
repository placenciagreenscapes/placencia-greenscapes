import { useEffect, useRef, useState } from 'react'
import { getWebGPUSupport, ImageTexture, NoiseDissolve, Shader } from 'shaders/react'

type Props = {
  image: string
  showAfter: boolean
}

export default function BeforeAfterShader({ image, showAfter }: Props) {
  const [enabled, setEnabled] = useState(false)
  const [progress, setProgress] = useState(showAfter ? 0 : 1)
  const progressRef = useRef(progress)

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

  useEffect(() => {
    if (!enabled) return undefined
    const target = showAfter ? 0 : 1
    const start = progressRef.current
    const startedAt = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const eased = Math.min(1, (now - startedAt) / 680)
      const next = start + (target - start) * (1 - Math.pow(1 - eased, 3))
      progressRef.current = next
      setProgress(next)
      if (eased < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [enabled, showAfter])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2]">
      <Shader className="h-full w-full" onUnavailable={() => setEnabled(false)}>
        <ImageTexture url={image} objectFit="cover" />
        <NoiseDissolve progress={progress} scale={5} softness={0.34} seed={7} />
      </Shader>
    </div>
  )
}
