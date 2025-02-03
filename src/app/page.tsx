import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Features } from "@/components/features-section";
import { CtaSection } from "@/components/cta-section";
import { AboutTeam } from "@/components/about-team";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";
import { BlogHighlight } from "@/components/blog-highlight";
import { getAllPosts } from "@/lib/blog";

export default async function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <Hero />
      <Features />
      <AboutTeam />
      <Testimonials />
      <BlogHighlight featuredPosts={posts} />
      <CtaSection />
      <Footer />
    </>
  );
}
