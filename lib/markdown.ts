import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content");

export function getPostBySlug(slug: string, type: "projects" | "pages" = "projects") {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = type === "projects"
        ? path.join(CONTENT_PATH, "projects", `${realSlug}.md`)
        : path.join(CONTENT_PATH, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { slug: realSlug, meta: data, content };
}

export function getAllProjects() {
    const projectsPath = path.join(CONTENT_PATH, "projects");
    if (!fs.existsSync(projectsPath)) return [];

    const files = fs.readdirSync(projectsPath);

    return files
        .map((file) => getPostBySlug(file, "projects"))
        .filter((p) => p !== null)
        .sort((a, b) => (a!.meta.date > b!.meta.date ? -1 : 1));
}
