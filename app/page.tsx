import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllProjects } from "@/lib/markdown";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ParticlesBackground } from "@/components/animations/ParticlesBackground";
import { TypographicText } from "@/components/ui/TypographicText";

export default function Home() {
  const homeContent = getPostBySlug("home", "pages");
  const featuredProjects = getAllProjects().slice(0, 3);

  return (
    <div className="relative flex flex-col gap-24 py-12 md:py-24 overflow-hidden">
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12 px-4">
        <div className="flex-1 flex flex-col gap-8 text-center md:text-left">
          <TypographicText
            text={homeContent?.meta.title || "I'm a Developer & Designer"}
            className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl font-sans lg:leading-[0.9]"
          />
          <TypographicText
            text={homeContent?.meta.subtitle || "Crafting minimalist, high-performance web experiences with a focus on typography and motion."}
            className="max-w-[700px] text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed"
            delay={0.5}
          />
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Link
              href="/work"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-sm font-medium text-background shadow transition-colors hover:opacity-90"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-foreground/20 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-background shadow-2xl">
            <Image
              src="/IMG_20260106_182126.jpg"
              alt="Profile"
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between mb-12 font-sans">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <Link href="/work" className="text-sm font-medium underline underline-offset-4">
            Browse all
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
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
      </section>

      {/* About Teaser */}
      <section className="bg-muted/30 py-24 px-4 overflow-hidden relative">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row justify-between gap-12 items-start">
          <div className="flex flex-col gap-4 max-w-lg">
            <h2 className="text-3xl font-bold font-sans tracking-tight">The Narrative</h2>
            <p className="text-muted-foreground leading-relaxed">
              Based at the intersection of design and engineering, I specialize in building digital products that feel human. My approach is rooted in simplicity, performance, and accessibility.
            </p>
            <Link href="/about" className="font-bold underline underline-offset-4 font-sans mt-4">Learn my story</Link>
          </div>
          <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black font-sans">05+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Years Experience</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl font-black font-sans">20+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Projects Shipped</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
