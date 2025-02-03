import { BlogCard } from "@/components/blog/blog-card";
import { AnimatedHeading } from "@/components/ui/animated-heading";

interface Post {
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
}

interface BlogHighlightProps {
  featuredPosts: Post[];
}

export function BlogHighlight({ featuredPosts }: BlogHighlightProps) {
  // Take only the first 3 posts
  const latestPosts = featuredPosts.slice(0, 3);

  return (
    <section className="container py-24">
      <AnimatedHeading title="from the blog" subtitle="" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {latestPosts.map((post, index) => (
          <div
            key={post.slug}
            className={`
              ${index === 2 ? "hidden md:block" : ""} 
              ${index === 1 ? "hidden sm:block" : ""}
            `}
          >
            <BlogCard
              title={post.title}
              description={post.description}
              date={post.date}
              slug={post.slug}
              coverImage={post.coverImage}
              author={post.author}
              readingTime={post.readingTime}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
