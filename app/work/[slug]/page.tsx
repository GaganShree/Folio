import { getPostBySlug } from "@/lib/markdown";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getPostBySlug(slug, "projects");
    if (!project) return { title: "Project Not Found" };
    return { title: `${project.meta.title} | Folio` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getPostBySlug(slug, "projects");

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto max-w-4xl py-12 md:py-24">
            <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
            >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Work
            </Link>

            <div className="flex flex-col gap-6 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-sans">
                    {project.meta.title}
                </h1>
                <div className="flex flex-wrap gap-2">
                    {project.meta.tags.map((tag: string) => (
                        <span key={tag} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {project.meta.image && (
                <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl bg-muted mb-16 border">
                    <img
                        src={project.meta.image}
                        alt={project.meta.title}
                        className="h-full w-full object-cover"
                    />
                </div>
            )}

            <article className="prose prose-zinc dark:prose-invert max-w-none">
                <MDXRemote source={project.content} />
            </article>

            <div className="mt-24 pt-12 border-t flex justify-between items-center font-sans">
                <p className="text-muted-foreground text-sm">Was this project interesting?</p>
                <Link href="/contact" className="font-bold underline underline-offset-4">Let's discuss it</Link>
            </div>
        </div>
    );
}
