import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Leadership } from "@/components/leadership";
import { Hero4 } from "@/components/hero-4";
import { CtaSectionLeader } from "@/components/cta-section-leader";
import { HackathonsSection } from "@/components/hackathons-section";

export const metadata = {
  title: "Leadership | Our Team",
  description: "Meet our experienced leadership team driving innovation and success in web3.",
  openGraph: {
    title: "Recursive Studio's Leadership",
    description: "Meet our experienced leadership team driving innovation and success in web3.",
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
    title: "Recursive Studio's Leadership",
    description: "Meet our experienced leadership team driving innovation and success in web3.",
    images: ["/images/og-image.jpg"], // Same image as OG
  },
};

export default function LeadershipPage() {
  return (
    <main className="flex-1">
      <Header />
      <Leadership />
      <HackathonsSection />
      <Hero4 />
      <CtaSectionLeader />
      <Footer />
    </main>
  );
}
