import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

import { BlogAuthor } from "@/components/blog/blog-author";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getAuthor, getBlogPost } from "@/lib/blog";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  if (!post) {
    notFound();
  }

  const author = getAuthor(post.author);
  if (!author) {
    notFound();
  }

  return (
    <main className="flex-1">
      <Header />
      <article className="container py-24">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-3">
            <time className="text-sm text-muted-foreground">
              {format(new Date(post.date), "MMMM dd, yyyy")}
            </time>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">{post.description}</p>
          </div>

          {post.coverImage && (
            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-gray mt-8 max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <BlogAuthor
            name={author.name}
            bio={author.bio}
            avatar={author.avatar}
            socials={author.socials}
          />
        </div>
      </article>
      <CtaSection />
      <Footer />
    </main>
  );
}
