import { Header } from "@/components/header";
import { Hero2 } from "@/components/hero-2";
import { Features2 } from "@/components/features-section-2";
import { Hero3 } from "@/components/hero-3";
import { Testimonials2 } from "@/components/testimonials-2";
import { CtaSection2 } from "@/components/cta-section-2";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Venture Tools | Web 3 VC Portfolio Management Software",
  description:
    "Never miss a token unlock with the only portfolio management solution with on-chain vesting tracking.",
  openGraph: {
    title: "Recursive Studio Venture Tools",
    description:
      "Never miss a token unlock with the only portfolio management solution with on-chain vesting tracking.",
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
    title: "Recursive Studio Venture Tools",
    description:
      "Never miss a token unlock with the only portfolio management solution with on-chain vesting tracking.",
    images: ["/images/og-image.jpg"], // Same image as OG
  },
};

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
