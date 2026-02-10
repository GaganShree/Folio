'use client'

import { useEffect, useState } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTheme } from 'next-themes'

export function ParticlesBackground() {
    const [init, setInit] = useState(false)
    const prefersReducedMotion = useReducedMotion()
    const { theme } = useTheme()

    useEffect(() => {
        if (!prefersReducedMotion) {
            setInit(true)
        }
    }, [prefersReducedMotion])

    const particlesInit = async (engine: Engine) => {
        await loadSlim(engine)
    }

    if (!init) return null

    const particleColor = theme === 'dark' ? '#ffffff' : '#000000'

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 -z-10 pointer-events-none"
            init={particlesInit}
            options={{
                fullScreen: false,
                background: {
                    color: 'transparent',
                },
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 40,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: particleColor,
                    },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 0.1,
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                    move: {
                        enable: true,
                        speed: 0.4,
                        direction: 'none',
                        random: true,
                        straight: false,
                        outModes: {
                            default: 'out',
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'bubble',
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 200,
                            size: 4,
                            duration: 2,
                            opacity: 0.4,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}
