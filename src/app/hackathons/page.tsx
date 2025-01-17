import { Projects } from "@/components/projects";
import { HeroHackathons } from "@/components/hero-hackathons";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { Metadata } from "next";
import { Hackathons } from "@/components/hackathons";

export const metadata: Metadata = {
  title: "Hackathons",
  description: "We're obsessed with building. Check out our hackathon projects.",
};

export default function HackathonsPage() {
  return (
    <main>
      <Header />
      <HeroHackathons />
      <Hackathons />
      <CtaSection />
      <Footer />
    </main>
  );
}
