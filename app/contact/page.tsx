import { CopyEmail } from "@/components/ui/CopyEmail";

export const metadata = {
    title: "Contact | Folio",
    description: "Let's connect and build something amazing together.",
};

export default function ContactPage() {
    return (
        <div className="container mx-auto max-w-3xl py-12 md:py-24">
            <div className="flex flex-col gap-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-sans">
                    Let's Connect
                </h1>
                <p className="text-xl text-muted-foreground">
                    I'm always open to new opportunities, collaborations, or just a friendly chat about design and technology.
                </p>
            </div>

            <div className="space-y-12">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold font-sans">Drop a message</h2>
                    <CopyEmail email="hello@example.com" />
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold font-sans">Follow me</h2>
                    <div className="flex flex-col gap-2 font-medium">
                        <a href="https://twitter.com" className="text-muted-foreground hover:text-foreground transition-colors">Twitter (X)</a>
                        <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                        <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">Github</a>
                        <a href="https://dribbble.com" className="text-muted-foreground hover:text-foreground transition-colors">Dribbble</a>
                    </div>
                </section>
            </div>
        </div>
    );
}
