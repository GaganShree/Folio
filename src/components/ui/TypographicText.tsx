"use client";

import { motion } from "framer-motion";

interface TypographicTextProps {
    text: string;
    className?: string;
    delay?: number;
    once?: boolean;
}

export const TypographicText = ({
    text,
    className = "",
    delay = 0,
    once = true,
}: TypographicTextProps) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.div
            style={{ display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial={{ opacity: 0.1, y: 10 }}
            whileInView="visible"
            viewport={{ once }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em" }}
                    key={index}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
