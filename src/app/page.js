import HeroSection from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services.js";
import RecentWorks from "../components/Works.js";
import EduXExp from "../components/EduxEx.js";
import Skills from "../components/Skills.js";
import Message from "../components/Message.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

export default function Home() {
  return (
    <main className="font-just-sans">
      <nav className="fixed w-full z-10">
        <Navbar />
      </nav>
      <section className="pt-24">
        <HeroSection />
        <About />
        <Services />
        <RecentWorks />
        <EduXExp />
        <Skills />
        <Message />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
