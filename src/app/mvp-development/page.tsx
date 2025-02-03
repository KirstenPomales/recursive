import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { Metadata } from "next";
import { HeroAgents } from "@/components/hero-agents";
import { AgentPricing } from "@/components/agent-pricing";
import { AgentBenefits } from "@/components/agent-benefits";
import { AgentProcess } from "@/components/agent-process";

export const metadata: Metadata = {
  title: "Web 3 MVP Development | Custom Development in 3 Weeks",
  description:
    "Work with former VC backed founders to scope and develop your MVP in under 3 weeks.",
  openGraph: {
    title: "MVP Development Services",
    description: "Professional MVP development services to bring your idea to life",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MVP Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development Services",
    description: "Professional MVP development services to bring your idea to life",
    images: ["/images/og-image.png"],
  },
};

export default function MVPDevelopmentPage() {
  return (
    <main className="bg-background">
      <Header />

      <CtaSection />
      <Footer />
    </main>
  );
}
