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
  openGraph: {
    title: "Recursive Studio Hackathons",
    description: "We're obsessed with building. Check out our hackathon projects.",
    images: [
      {
        url: "/images/og-image.jpg", // This should be a 1200x630px image
        width: 1200,
        height: 630,
        alt: "Recursive Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recursive Studio Hackathons",
    description: "We're obsessed with building. Check out our hackathon projects.",
    images: ["/images/og-image.jpg"], // Same image as OG
  },
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
