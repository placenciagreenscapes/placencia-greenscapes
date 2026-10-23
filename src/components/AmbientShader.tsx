import { useEffect, useState } from 'react'
import { FlowingGradient, getWebGPUSupport, Shader } from 'shaders/react'

export default function AmbientShader() {
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
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-25">
      <Shader className="h-full w-full" onUnavailable={() => setEnabled(false)}>
        <FlowingGradient
          colorA="#103e38"
          colorB="#1b5b4f"
          colorC="#4f8f7d"
          colorD="#e7a85b"
          colorSpace="oklch"
          speed={0.16}
          distortion={0.22}
          seed={13}
        />
      </Shader>
    </div>
  )
}
