import { useEffect, useState } from 'react'
import {
  FilmGrain,
  FlowingGradient,
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
        <FlowingGradient
          colorA="#103e38"
          colorB="#1b5b4f"
          colorC="#e7a85b"
          colorD="#f7f3eb"
          colorSpace="oklch"
          speed={0.18}
          distortion={0.34}
          seed={5}
          opacity={0.16}
          blendMode="softLight"
        />
        <LightLeak opacity={0.17} flicker={0.22} speed={0.35} />
        <FilmGrain opacity={0.08} animated />
        <Vignette opacity={0.2} />
      </Shader>
    </div>
  )
}
