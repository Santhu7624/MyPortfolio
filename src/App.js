// App.jsx
import React, { useEffect, useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import ProfileCard from "./components/profilecard";
// import Skills from "./components/skills";
// import Carousel from "./components/Carousel";
import Techstack from "./components/Techstack";
import Certifications from "./components/certification";
import Home2 from "./components/Home2";

export default function App() {
   const [activeSection, setActiveSection] = useState("");
   useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "about", "skills", "projects", "certificate", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans scroll-smooth">
      {/* Header */}
      {/* <header className="bg-blue-900 text-white shadow sticky top-0 z-50"> */}
      <header className="bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-900 text-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ganji Santhosh</h1>
          <nav className="space-x-6 text-sm font-medium">
            {[
              { id: "Home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "certificate", label: "Certification" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`hover:text-yellow-300 transition-colors ${
                  activeSection === item.id ? "text-yellow-400 underline underline-offset-4" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 space-y-20">
        <section id="Home" className="scroll-mt-20">
          <Home2 />
        </section>
        </main>
      {/* Main content */}
      <main className="container mx-auto px-4 py-10 space-y-20">
        
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
        <p>&copy; 2025 Ganji Santhosh. All rights reserved.</p>
      </footer>
    </div>
  );
}