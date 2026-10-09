
"use client";

import { useEffect, useState } from "react";
import Container from "./Container";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Articles", href: "#articles" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            onClick={closeMenu}
            className="flex items-center gap-3 text-white"
            aria-label="Deepana Balmoor - Home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 text-sm font-semibold text-purple-300">
              D
            </span>

            <span className="text-base font-medium tracking-wide text-neutral-200">
              Deepana <span className="text-neutral-400">Balmoor</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-sm text-neutral-300 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/Deepana_Balmoor_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-600 px-4 py-2 font-medium text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:bg-purple-500 hover:shadow-purple-500/35 active:scale-95"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-lg p-2 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!isOpen}
          className="mt-4 flex-col gap-4 border-t border-white/10 pt-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block py-1 text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/Deepana_Balmoor_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="inline-flex w-fit rounded-full bg-purple-600 px-4 py-2 font-medium text-white transition-colors hover:bg-purple-500"
          >
            Download Resume
          </a>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
