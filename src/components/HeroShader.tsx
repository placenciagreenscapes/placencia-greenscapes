import { useEffect, useState } from 'react'
import {
  FilmGrain,
  getWebGPUSupport,
  ImageTexture,
  LightLeak,
  Shader,
  Vignette,
} from 'shaders/react'

function canUseHeroShader() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const desktopViewport = window.matchMedia('(min-width: 768px)').matches
  return !reduceMotion && desktopViewport
}

export default function HeroShader() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    let mounted = true
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktopViewport = window.matchMedia('(min-width: 768px)')

    const sync = () => {
      if (!canUseHeroShader()) {
        setEnabled(false)
        return
      }

      getWebGPUSupport().then(({ supported }) => {
        if (mounted) setEnabled(supported)
      })
    }

    sync()
    reduceMotion.addEventListener('change', sync)
    desktopViewport.addEventListener('change', sync)

    return () => {
      mounted = false
      reduceMotion.removeEventListener('change', sync)
      desktopViewport.removeEventListener('change', sync)
    }
  }, [])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
      <Shader
        className="h-full w-full"
        toneMapping="aces"
        onUnavailable={() => setEnabled(false)}
      >
        <ImageTexture url="/images/hero-bg.jpg" objectFit="cover" />
        <LightLeak opacity={0.12} />
        <FilmGrain opacity={0.08} />
        <Vignette opacity={0.2} />
      </Shader>
    </div>
  )
}
