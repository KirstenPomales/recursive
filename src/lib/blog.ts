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

export function getAllPosts() {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
    } as {
      slug: string;
      title: string;
      description: string;
      date: string;
      coverImage: string;
      author: {
        name: string;
        image: string;
      };
      readingTime: string;
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
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
