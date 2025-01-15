import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Features } from "@/components/features-section";
import { CtaSection } from "@/components/cta-section";
import { AboutTeam } from "@/components/about-team";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Testimonials />
      <Features />
      <AboutTeam />
      <CtaSection />
      <Footer />
    </>
  );
}
