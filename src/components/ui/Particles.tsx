"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

export const Particles = () => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const particleCount = 20;
        const newParticles: Particle[] = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 10,
        }));
        setParticles(newParticles);
    }, []);

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div style={{ y }} className="relative w-full h-full">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-blue-500/20"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.5, 0],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "linear",
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};
