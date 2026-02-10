"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-6">
                    <Link href="/" className="font-sans font-bold text-xl tracking-tighter">
                        FOLIO<span className="text-muted-foreground">.</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                    pathname === item.href ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
