import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services.js";
import RecentWorks from "./components/Works.js";
import EduXExp from "./components/EduxEx.js";
import Skills from "./components/Skills.js";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Services />
      <RecentWorks />
      <EduXExp />
      <Skills />
    </main>
  );
}
