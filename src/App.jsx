import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // subtle reveal animation using IntersectionObserver
    const items = document.querySelectorAll(".animate");
    const animObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), 70 * idx);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => animObs.observe(el));

    // skill bars
    const bars = document.querySelectorAll(".bar > span");
    const barObs = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const w = el.dataset.width || "0%";
            el.style.width = w;
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.35 }
    );
    bars.forEach((b) => barObs.observe(b));

    // active nav link
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");
    const navObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("active"));
            const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (link) link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((s) => navObs.observe(s));

    // cleanup
    return () => {
      animObs.disconnect();
      barObs.disconnect();
      navObs.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
