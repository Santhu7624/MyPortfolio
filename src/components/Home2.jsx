import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaAws, FaHtml5, FaJsSquare, FaCss3Alt, FaAngular, FaLinkedin, FaFileDownload,
} from "react-icons/fa";
import ASPNET from "../images/.NET-core.png";
import CSharp from "../images/csharp.jpg";
import API from "../images/api2.png";
//import RabbitMq from "../images/RabbitMQ.png";
//import ActiveMq from "../images/active.jpg";
import AzDevops from "../images/Azure-Devops.png";
import profile from "../images/profile/profile7.jpeg";
import CV from "../assets/GanjiSanthosh_SeniorSoftwareEngineer.pdf";

const icons = [
  { name: "C#", icon: <img src={CSharp} alt="CSHARP" className="w-10 h-10"></img>, x: "10%", y: "14%" },
  { name: "ASP.NET Core", icon: <img src={ASPNET} alt="ASP.NET" className="w-10 h-10" />, x: "50%", y: "80%" },
  { name: "REST API", icon: <img src={API} alt="API" className="w-10 h-10" />, x: "30%", y: "83%" },
  { name: "Azure DevOps", icon: <img src={AzDevops} alt="Azure DevOps" className="w-10 h-10"></img>, x: "90%", y: "20%" },

  { name: "Angular", icon: <FaAngular className="text-red-500 text-5xl" />, x: "20%", y: "90%" },
  { icon: <FaReact className="text-cyan-400 text-5xl" />, x: "20%", y: "10%" },
  { icon: <FaNodeJs className="text-green-400 text-5xl" />, x: "60%", y: "15%" },
  { icon: <FaAws className="text-orange-400 text-5xl" />, x: "85%", y: "70%" },
  { icon: <FaHtml5 className="text-orange-600 text-5xl" />, x: "10%", y: "82%" },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, x: "60%", y: "85%" },
  { icon: <FaJsSquare className="text-yellow-400 text-5xl" />, x: "40%", y: "12%" },
];
//const profileSize = "320px"; // change this to adjust size easily

export default function Home2() {
  return (
    <div className="relative rounded-lg  bg-gradient-to-br from-[#0f0c29] via-[#302b63]  overflow-hidden flex items-center justify-center">

      {icons.map((item, idx) => (
  <motion.div
    key={idx}
    initial={{ y: 0 }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4 + idx * 0.3, repeat: Infinity }}
    className="absolute z-10 hidden md:block" // 👈 This line hides icons on mobile
    style={{
      left: item.x,
      top: item.y,
    }}
  >
    {item.icon}
  </motion.div>
))}


      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 py-6 md:px-20 md:py-20 min-h-[130%] md:min-h-0">
        {/* Text Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg space-y-4 text-center md:text-left"
        >
          <p className="text-4xl text-white">👋 Hi I’m </p>
          <h1 className="text-3xl md:text-3xl font-bold text-white">
            <span className="text-cyan-400">GANJI SANTHOSH</span>
          </h1>
          <p className="text-gray-300 text-2xl font-semibold">Senior Full Stack Engineer</p>
          <p className="text-gray-800 text-lg text-white">I'm a passionate developer with expertise in .NET, React, Angular, AWS, Azure, and cloud-based microservices. I build scalable and modern apps.</p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/santhosh-ganji-1b021811b" // replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-800 hover:bg-blue-900 text-white font-semibold transition transform hover:scale-105 shadow-md"
            > <FaLinkedin className="text-xl" />
              Connect on LinkedIn
            </a>

            {/* Download CV Button */}
            <a
              href={CV}// replace with your resume file
              download
              className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold transition transform hover:scale-105 shadow-md"
            ><FaFileDownload className="text-xl" /><span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 100 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative md:ml-08"
        >
          {/* <div className="relative group">
            <img
              src={profile}
              alt="Profile"
              //style={{ width: profileSize, height: profileSize }}
              //className="w-[280px] md:w-[350px] rounded-full shadow-xl transition-all duration-500 group-hover:scale-105"
              className="w-[200px] md:w-[400px] rounded-full border-0 border-blue-300 shadow-xl transition-all duration-500 group-hover:scale-105 px-8 py-8"
            /> */}
            <div className="w-96 h-96 overflow-hidden rounded-full">
            <img
              src={profile}
              className="w-full h-full object-cover object-right translate-x-1/6"
            />
          
            <div className="absolute -inset-2 bg-cyan-500 rounded-3xl blur-2xl opacity-30 z-[-1]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
