import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Features } from "@/components/features-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Features />
      <CtaSection />
      <Footer />
    </>
  );
}
