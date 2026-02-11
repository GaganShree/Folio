'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) {
        return <>{children}</>
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            {children}
        </motion.div>
    )
}
