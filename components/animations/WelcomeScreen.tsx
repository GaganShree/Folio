'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function WelcomeScreen() {
    const [show, setShow] = useState(false)
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
        if (!prefersReducedMotion) {
            setShow(true)

            const timer = setTimeout(() => setShow(false), 4000)

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') setShow(false)
            }

            window.addEventListener('keydown', handleKeyDown)
            return () => {
                clearTimeout(timer)
                window.removeEventListener('keydown', handleKeyDown)
            }
        }
    }, [prefersReducedMotion])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    onClick={() => setShow(false)}
                >
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                ease: [0.16, 1, 0.3, 1], // Custom ease-out
                            }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter"
                        >
                            WELCOME
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-4 text-sm uppercase tracking-[0.3em]"
                    >
                        Digital Portfolio 2026
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="absolute bottom-10 left-10 right-10 h-px bg-foreground/20 origin-left"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
