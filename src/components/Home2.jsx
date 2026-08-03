import { motion } from "framer-motion";
// import { FaLinkedin, FaFileDownload, FaArrowDown } from "react-icons/fa";
import {
  FaReact, FaNodeJs, FaAws, FaHtml5, FaJsSquare, FaCss3Alt, FaAngular, FaLinkedin, FaFileDownload, FaArrowDown
} from "react-icons/fa";
import ASPNET from "../images/.NET-core.png";
import API from "../images/api2.png";
import CSharp from "../images/csharp.jpg";
import AzDevops from "../images/Azure-Devops.png";
import profileCutout from "../images/profile/profile-cutout.png";
import CV from "../assets/GanjiSanthosh_SeniorSoftwareEngineer.pdf";

// Curated to match the actual stack used across Experience/Tech Stack —
// no icons for tools that aren't backed by the work history.
const badges = [
  { name: "C#", icon: <img src={CSharp} alt="CSHARP" className="w-8 h-8"></img>, x: "-60%", y: "15%" },    
  { name: "ASP.NET Core", icon: <img src={ASPNET} alt="ASP.NET" className="w-8 h-8" />, x: "-90%", y: "10%" },
  { name: "Angular", icon: <FaAngular className="text-red-400 text-3xl" />, x: "00%", y: "30%" },
  { name: "Azure DevOps", icon: <img src={AzDevops} alt="Azure DevOps" className="w-8 h-8"></img>, x: "90%", y: "20%" },
  { icon: <FaReact className="text-cyan-400 text-3xl" />, x: "-30%", y: "10%" },
  
  { icon: <FaAws className="text-orange-400 text-3xl" />, x: "00%", y: "70%" },
  { icon: <FaHtml5 className="text-orange-400 text-3xl" />, x: "-80%", y: "90%" },
  { icon: <FaCss3Alt className="text-blue-400 text-3xl" />, x: "-30%", y: "85%" },
  { icon: <FaJsSquare className="text-yellow-400 text-3xl" />, x: "30%", y: "05%" },

  // { icon: <FaNodeJs className="text-green-400 text-5xl" />, x: "60%", y: "15%" },  
  // { name: "REST API", icon: <img src={API} alt="API" className="w-10 h-10" />, x: "40%", y: "83%" },  
];

// Backend, frontend, and cloud given equal billing — not backend-first.
const pillars = [
  { label: "Backend", detail: ".NET Core · C#" },
  { label: "Frontend", detail: "Angular · React" },
  { label: "Cloud", detail: "AWS · Azure" },
];

export default function Home2() {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-[#0b1220] via-[#151233] to-[#1c1642] overflow-hidden min-h-[560px] md:min-h-[640px]">
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-20 flex flex-col md:flex-row items-center h-full min-h-[560px] md:min-h-[640px]">
        {/* Text panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full md:w-[52%] px-6 pt-14 pb-6 md:pl-16 md:pr-4 text-center md:text-left order-2 md:order-1"
        >
          {/* <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-cyan-300 text-xs font-medium tracking-wide uppercase">
            Available for opportunities
          </span> */}

          <h1 className="font-display mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
            Ganji Santhosh
          </h1>
          <p className="mt-2 text-lg md:text-xl font-semibold text-cyan-300">
            Senior Full Stack Engineer
          </p>
          <p className="mt-4 text-slate-300 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            9+ years building complete systems end to end — backend services in
            .NET Core &amp; C#, Angular &amp; React front ends, and cloud infrastructure on
            AWS &amp; Azure with Docker and Kubernetes.
          </p>

          {/* Three pillars — equal weight, not backend-first */}
          <div className="mt-6 grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 text-center md:text-left"
              >
                <p className="text-white text-sm font-semibold">{p.label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{p.detail}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 mt-8">
            <a
              href="https://www.linkedin.com/in/santhosh-ganji-1b021811b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold transition transform hover:scale-[1.03] shadow-lg shadow-cyan-500/20"
            >
              <FaLinkedin className="text-lg" />
              Connect on LinkedIn
            </a>

            <a
              href={CV}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/25 text-white hover:bg-white/10 font-semibold transition transform hover:scale-[1.03]"
            >
              <FaFileDownload className="text-lg" />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Profile cutout — large, transparent, fills the section instead of a small circular thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative order-1 md:order-2 w-full md:w-[48%] h-[320px] md:h-full md:absolute md:right-0 md:bottom-0 md:min-h-[640px] flex items-end justify-center pointer-events-none"
        >
          {/* ambient glow behind the figure */}
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

          {/* floating tech badges, kept clear of the figure on the left edge of this panel */}
          {badges.map((b, idx) => (
            <motion.div
              key={b.label}
              initial={{ y: 0 }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 3 + idx * 0.1, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:flex absolute items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm z-10"
              // style={{ left: `${4 + idx * 2}%`, top: `${18 + idx * 22}%` }}
              style={{
                      left: b.x,
                      top: b.y,
                    }}
            >
              {b.icon}
            </motion.div>
          ))}

          <img
            src={profileCutout}
            alt="Ganji Santhosh"
            className="relative z-[5] h-full max-h-[280px] md:max-h-[560px] w-auto object-contain object-bottom"
            style={{
              maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="relative z-20 flex justify-center pb-5">
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="text-white/50 hover:text-white/80 transition"
          aria-label="Scroll to About section"
        >
          <FaArrowDown />
        </motion.a>
      </div>
    </div>
  );
}
