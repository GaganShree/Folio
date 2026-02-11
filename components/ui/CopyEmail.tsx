"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className="flex items-center gap-2 p-2 rounded-lg border bg-muted/50 w-fit">
            <code className="text-sm font-mono px-2">{email}</code>
            <button
                onClick={handleCopy}
                className="p-1 px-2 text-xs flex items-center gap-1.5 rounded bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
                {copied ? (
                    <>
                        <Check className="w-3 h-3" />
                        Copied
                    </>
                ) : (
                    <>
                        <Copy className="w-3 h-3" />
                        Copy
                    </>
                )}
            </button>
        </div>
    );
}
