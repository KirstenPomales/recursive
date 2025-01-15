import { Header } from "@/components/header";
import { Hero2 } from "@/components/hero-2";
import { Features2 } from "@/components/features-section-2";
import { Hero3 } from "@/components/hero-3";
import { Testimonials2 } from "@/components/testimonials-2";
import { CtaSection2 } from "@/components/cta-section-2";
import { Footer } from "@/components/footer";

export default function ToolingPage() {
  return (
    <>
      <Header />
      <Hero2 />
      <Features2 />
      {/* <Hero3 /> */}
      <CtaSection2 />
      <Footer />
    </>
  );
}
