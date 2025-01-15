import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Leadership } from "@/components/leadership";
import { Hero4 } from "@/components/hero-4";
import { CtaSectionLeader } from "@/components/cta-section-leader";

export const metadata = {
  title: "Leadership | Our Team",
  description: "Meet our experienced leadership team driving innovation and success in web3.",
};

export default function LeadershipPage() {
  return (
    <main className="flex-1">
      <Header />
      <Leadership />
      <Hero4 />
      <CtaSectionLeader />
      <Footer />
    </main>
  );
}
