import { getAllProjects } from "@/lib/markdown";
import { ProjectCard } from "@/components/ui/ProjectCard";

export const metadata = {
    title: "Work | Folio",
    description: "A showcase of my recent projects and contributions.",
};

export default function WorkPage() {
    const projects = getAllProjects();

    return (
        <div className="container mx-auto max-w-5xl py-12 md:py-24">
            <div className="flex flex-col gap-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-sans">
                    Selected Work
                </h1>
                <p className="text-muted-foreground text-lg max-w-[600px]">
                    A collection of projects where I've blended engineering with design to solve real-world problems.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <ProjectCard
                        key={project!.slug}
                        slug={project!.slug}
                        title={project!.meta.title}
                        description={project!.meta.description}
                        tags={project!.meta.tags}
                        image={project!.meta.image}
                    />
                ))}
            </div>
        </div>
    );
}
