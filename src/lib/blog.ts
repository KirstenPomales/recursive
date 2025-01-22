import fs from "fs";
import matter from "gray-matter";
import path from "path";

const blogsDirectory = path.join(process.cwd(), "public/content/blogs");
const authorsDirectory = path.join(process.cwd(), "public/content/authors");

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    coverImage?: string;
    content: string;
    readingTime: number;
}

export interface Author {
    slug: string;
    name: string;
    bio: string;
    avatar: string;
    socials: {
        twitter?: string;
        github?: string;
        linkedin?: string;
    };
}

export function getAllBlogPosts(): BlogPost[] {
    const fileNames = fs.readdirSync(blogsDirectory);
    const allPosts = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(blogsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                content,
                ...data,
            } as BlogPost;
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return allPosts;
}

export function getBlogPost(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(blogsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...data,
        } as BlogPost;
    } catch {
        return null;
    }
}

export function getAuthor(slug: string): Author | null {
    try {
        const fullPath = path.join(authorsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug,
            ...data,
        } as Author;
    } catch {
        return null;
    }
}