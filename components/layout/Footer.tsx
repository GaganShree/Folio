import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t py-12 md:py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} FOLIO. Built with passion and code.
                </p>
                <div className="flex gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="https://github.com" target="_blank" className="hover:text-foreground transition-colors">Github</Link>
                    <Link href="https://linkedin.com" target="_blank" className="hover:text-foreground transition-colors">LinkedIn</Link>
                    <Link href="https://twitter.com" target="_blank" className="hover:text-foreground transition-colors">Twitter</Link>
                </div>
            </div>
        </footer>
    );
}
