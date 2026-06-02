"use client";

import { useState } from "react";
import Container from "./Container";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Deepana Balmoor</h1>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-600 px-4 py-2 text-white transition-all duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/40 active:scale-95"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 md:hidden">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>

            <a href="#experience" onClick={() => setIsOpen(false)}>
              Experience
            </a>

            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-purple-300"
            >
              Resume
            </a>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;