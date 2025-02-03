import { getAllBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";

export async function BlogSection() {
  // Get all posts and take the 3 most recent ones
  const recentPosts = getAllBlogPosts().slice(0, 3);

  return (
    <section className="container py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">From the Blog</h2>
        <p className="text-muted-foreground">Stay updated with our latest insights and news</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {recentPosts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            slug={post.slug}
            coverImage={post.coverImage}
            author={post.author}
            readingTime={post.readingTime}
          />
        ))}
      </div>
    </section>
  );
}
