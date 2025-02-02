import HeroSection from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services.js";
import RecentWorks from "../components/Works.js";
import EduXExp from "../components/EduxEx.js";
import Skills from "../components/Skills.js";
import Message from "../components/Message.js";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import ScrollContext from "../components/SmoothScroll.js";
import Animation from "../components/ScrollAnimation.js";

export default function Home() {
  return (
    <ScrollContext>
      <main className="font-just-sans">
        <nav className="fixed w-full z-50">
          <Animation delay={0} initialY={-10} initialScale={1}>
            <Navbar />
          </Animation>
        </nav>
        <section className="pt-12">
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
    </ScrollContext>
  );
}
