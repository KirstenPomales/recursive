"use client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { HeroEmbedded } from "@/components/hero-embedded";
import { EmbeddedServices } from "@/components/embedded-services";
import { EmbeddedProcess } from "@/components/embedded-process";
import { EmbeddedTechnologies } from "@/components/embedded-technologies";
import { EmbeddedWhyChoose } from "@/components/embedded-why-choose";
import { TestimonialsEmbedded } from "@/components/testimonials-embedded";

export default function EmbeddedEngineeringPage() {
  return (
    <main className="bg-background">
      <Header />
      <HeroEmbedded />
      <EmbeddedServices />
      <TestimonialsEmbedded />
      <EmbeddedProcess />

      <CtaSection />
      <Footer />
    </main>
  );
}
