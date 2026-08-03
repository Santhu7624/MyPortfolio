// App.jsx
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Techstack from "./components/Techstack";
import Certifications from "./components/certification";
import Home2 from "./components/Home2";

const NAV_ITEMS = [
  { id: "Home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Experience" },
  { id: "certificate", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      const scrollPosition = window.scrollY + 200;
      for (let item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(item.id);
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans scroll-smooth">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "bg-[#0f0c29]/90 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-900"
        }`}
      >
        <div className="container mx-auto px-4 py-3.5 flex justify-between items-center">
          <a href="#Home" className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-400 text-slate-900 font-display font-bold text-sm">
              GS
            </span>
            <span className="text-lg font-bold font-display text-white hidden sm:inline">
              Ganji Santhosh
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "text-cyan-300 bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white text-xl p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile nav panel */}
        {menuOpen && (
          <nav className="md:hidden bg-[#0f0c29]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-cyan-300 bg-white/10"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="container mx-auto px-2 py-4 space-y-5">
        <section id="Home" className="scroll-mt-20">
          <Home2 />
        </section>

        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="skills" className="scroll-mt-20">
          <Techstack />
        </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="certificate" className="scroll-mt-20">
          <Certifications />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 bg-white shadow">
        <p>&copy; {new Date().getFullYear()} Ganji Santhosh. All rights reserved.</p>
      </footer>
    </div>
  );
}
