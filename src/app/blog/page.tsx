import { BlogCard } from "@/components/blog/blog-card";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | Recursive",
  description: "Latest insights and updates from the Recursive team",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex-1">
      <Header />
      <div className="container py-24">
        <div className="flex flex-col gap-3">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">the blog</h1>
          <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Check out the latest updates and thoughts from the Recursive team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}
