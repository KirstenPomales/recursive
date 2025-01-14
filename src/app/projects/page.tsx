import { Projects } from "@/components/projects";
import { HeroProjects } from "@/components/hero-projects";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CtaSection } from "@/components/cta-section";

export const metadata = {
  title: "Projects | Our Portfolio",
  description: "Explore how we've helped major web 3 startups achive their goals.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1">
      <Header />
      <HeroProjects />
      <Projects />
      <CtaSection />
      <Footer />
    </main>
  );
}
