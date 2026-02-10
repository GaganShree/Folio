"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    slug: string;
    tags: string[];
    image?: string;
}

export function ProjectCard({ title, description, slug, tags, image }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col gap-4 rounded-xl border bg-card p-4 transition-colors hover:bg-accent/50"
        >
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-muted">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                        No Image
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-sans text-xl font-bold tracking-tight">{title}</h3>
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <Link href={`/work/${slug}`} className="absolute inset-0">
                <span className="sr-only">View {title}</span>
            </Link>
        </motion.div>
    );
}
