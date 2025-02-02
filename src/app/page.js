"use client";
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
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const worksRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const messageRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext>
      <main className="font-just-sans">
        <nav className="fixed w-full z-50">
          {/* <Animation delay={0} initialY={-10} initialScale={1}> */}
          <Navbar
            scrollToSection={scrollToSection}
            refs={{
              aboutRef,
              skillsRef,
              worksRef,
              heroRef,
              messageRef,
              educationRef,
              servicesRef,
            }}
          />
          {/* </Animation> */}
        </nav>
        <section className="md:pt-8 lg:pt-14" ref={heroRef} id="about">
          <HeroSection />
        </section>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={servicesRef} id="services">
          <Services />
        </section>
        <section ref={worksRef} id="works">
          <RecentWorks />
        </section>
        <section ref={educationRef} id="education">
          <EduXExp />
        </section>
        <section ref={skillsRef} id="skills">
          <Skills />
        </section>
        <section ref={messageRef} id="message">
          <Message />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </ScrollContext>
  );
}
