import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Leadership } from "@/components/leadership";
import { Hero4 } from "@/components/hero-4";

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
      <Footer />
    </main>
  );
}
