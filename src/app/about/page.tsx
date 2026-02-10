import { getPostBySlug } from "@/lib/markdown";

export const metadata = {
    title: "About | Folio",
    description: "Learn more about my background, skills, and design philosophy.",
};

export default function AboutPage() {
    const post = getPostBySlug("about", "pages");

    if (!post) {
        return <div>Content not found.</div>;
    }

    return (
        <div className="container mx-auto max-w-3xl py-12 md:py-24">
            <div className="flex flex-col gap-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-sans">
                    {post.meta.title}
                </h1>
                <p className="text-xl text-muted-foreground italic">
                    {post.meta.description}
                </p>
            </div>
            <article className="prose prose-zinc dark:prose-invert max-w-none">
                {post.content.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </article>

            <div className="mt-16 grid gap-8 md:grid-cols-2 pt-16 border-t font-sans">
                <div>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-muted-foreground">Capabilities</h2>
                    <ul className="space-y-2">
                        <li>Frontend Engineering</li>
                        <li>UI/UX Design</li>
                        <li>Technical Writing</li>
                        <li>Creative Direction</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4 uppercase tracking-widest text-muted-foreground">Toolkit</h2>
                    <ul className="space-y-2 font-mono text-sm">
                        <li>React / Next.js</li>
                        <li>TypeScript / Node.js</li>
                        <li>Tailwind CSS / Framer Motion</li>
                        <li>Figma / Adobe Suite</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
