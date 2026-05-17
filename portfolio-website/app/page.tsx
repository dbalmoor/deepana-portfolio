import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/hero/Hero";
import About from "@/sections/about/About";
import Skills from "@/sections/skills/Skills";
import Experience from "@/sections/experience/Experience";
import Projects from "@/sections/projects/Projects";
import Contact from "@/sections/contact/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}