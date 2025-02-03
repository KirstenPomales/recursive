import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";
import { Metadata } from "next";
import { HeroAgents } from "@/components/hero-agents";
import { AgentPricing } from "@/components/agent-pricing";
import { AgentBenefits } from "@/components/agent-benefits";
import { AgentProcess } from "@/components/agent-process";
import { ProjectHighlight } from "@/components/project-highlight";

export const metadata: Metadata = {
  title: "AI Agents | Custom Development in 3 Weeks",
  description: "Get your custom AI agent developed in 3 weeks by experienced developers.",
  openGraph: {
    title: "Recursive Studio AI Development",
    description: "Get your custom AI agent developed in 3 weeks by experienced developers",
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
    title: "Recursive Studio AI Development",
    description: "Get your custom AI agent developed in 3 weeks by experienced developers",
    images: ["/images/og-image.jpg"], // Same image as OG
  },
};

export default function AIAgentsPage() {
  return (
    <main className="bg-background">
      <Header />
      <HeroAgents />
      <AgentBenefits />
      <ProjectHighlight />
      <CtaSection />
      <Footer />
    </main>
  );
}
