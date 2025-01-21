import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services.js";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Services />
    </main>
  );
}
