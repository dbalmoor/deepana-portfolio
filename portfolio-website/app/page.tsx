import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Skills from "@/sections/skills/Skills";
import Experience from "@/sections/experience/Experience";
import Migration from "@/sections/migration/Migration";
import Projects from "@/sections/projects/Projects";
import Contact from "@/sections/contact/Contact";

export default function Home() {
  return (
    <main id="top" className="bg-black text-white">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Migration />
      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}