import React from "react";
import "../Hero.css"; // for optional animation or custom background
import profile from "../images/profile/profile2.jpeg"; // Replace with your own image
import { useEffect, useState } from "react";
// import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import {
    FaNodeJs,
    FaJsSquare,
    FaCode,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
  FaGithub,
  FaAws,
  FaMicrosoft,
  FaDatabase,
  FaGitAlt,
  FaLaptopCode,
  FaCloud,
  FaServer,
  FaCodeBranch,
  FaTerminal,
  FaAngular,
   FaDocker,
  FaGitlab,
  FaCogs,
  FaCubes,
  FaTools,
  FaNetworkWired,
  FaBoxes,
  
} from "react-icons/fa";
import ASPNET from "../images/aspnet.jpg";
import CSharp from "../images/csharp.jpg";
import API from "../images/api2.png";
import RabbitMq from "../images/RabbitMQ.png";
import ActiveMq from "../images/active.jpg";
import AzDevops from "../images/Azure-Devops.png";



export default function Home() {
//      const icons = [
//         { name: "C#", icon: <img src={CSharp} alt="CSHARP" className="w-8 h-8"></img> },
//         { name: "ASP.NET Core", icon: <img src={ASPNET} alt="ASP.NET" className="w-8 h-8" /> },
//         { name: "REST API", icon: <img src={API} alt="API" className="w-8 h-8"/> },
//         { icon: <img src={AzDevops} alt="Azure DevOps" className="w-8 h-8"></img> },

//         { icon: <FaReact className="text-cyan-400 text-4xl" />, x: "20%", y: "10%" },
//         { icon: <FaNodeJs className="text-green-400 text-4xl" />, x: "70%", y: "15%" },
//         { icon: <FaAws className="text-orange-400 text-4xl" />, x: "85%", y: "70%" },
//         { icon: <FaGitAlt className="text-red-500 text-4xl" />, x: "10%", y: "80%" },
//         { icon: <FaHtml5 className="text-orange-600 text-4xl" />, x: "30%", y: "85%" },
//         { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, x: "60%", y: "88%" },
//         { icon: <FaJsSquare className="text-yellow-400 text-4xl" />, x: "40%", y: "25%" },
//         { icon: <FaDocker className="text-blue-500" /> },
//         { icon: <FaCubes className="text-blue-400" /> },
//         { icon: <FaBoxes className="text-orange-500" /> },           
//         { icon: <FaTools className="text-green-700" /> },
//         { icon: <FaGitlab className="text-orange-800" /> },
//   ];

const initialIcons = [
    { name: "C#", icon: <img src={CSharp} alt="C#" className="w-8 h-8" /> },
    { name: "ASP.NET Core", icon: <img src={ASPNET} alt="ASP.NET" className="w-8 h-8" /> },
    { name: "REST API", icon: <img src={API} alt="API" className="w-8 h-8" /> },
    { name: "Azure DevOps", icon: <img src={AzDevops} alt="Azure DevOps" className="w-8 h-8" /> },
    { icon: <FaReact className="text-cyan-400 text-4xl" /> },
    { icon: <FaNodeJs className="text-green-400 text-4xl" /> },
    { icon: <FaAws className="text-orange-400 text-4xl" /> },
    { icon: <FaGitAlt className="text-red-500 text-4xl" /> },
    { icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    { icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
    { icon: <FaDocker className="text-blue-500 text-4xl" /> },
    { icon: <FaCubes className="text-blue-400 text-4xl" /> },
    { icon: <FaBoxes className="text-orange-500 text-4xl" /> },
    { icon: <FaTools className="text-green-700 text-4xl" /> },
    { icon: <FaGitlab className="text-orange-800 text-4xl" /> },
  ];
  const [icons, setIcons] = useState([]);
 {/* Floating icons */}
  useEffect(() => {
    const rows = 4;
    const cols = 4;
    const spacingX = 100 / cols;
    const spacingY = 100 / rows;

    const randomizedIcons = initialIcons.map((item, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;

      const baseX = col * spacingX;
      const baseY = row * spacingY;

      const randomOffsetX = Math.random() * 10 - 5; // ±5%
      const randomOffsetY = Math.random() * 10 - 5;

      return {
        ...item,
        x: `${baseX + randomOffsetX}%`,
        y: `${baseY + randomOffsetY}%`,
      };
    });

    setIcons(randomizedIcons);
  }, []);


  return (
   <div className="relative w-full h-[80vh] bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center px-4 md:px-20">
  {/* Floating icons */}
  {icons.map((item, idx) => (
        <div
          key={idx}
          className="absolute animate-float-slow z-20"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: `${idx * 0.4}s`,
          }}
        >
          {item.icon}
        </div>
      ))}
  {/* Main Content */}
  <div className="z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl w-full">
    {/* Glass text panel */}
    <div className="md:w-1/2 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg space-y-4 text-center md:text-left animate-slide-up-slow">
    <p className="text-lg text-white">Hi There!</p>
    <h1 className="text-4xl md:text-5xl font-bold text-white">
        I’M <span className="text-cyan-400">SANTHOSH GANJI</span>
    </h1>
    <p className="text-gray-300">Full Stack Developer</p>
    <p className="text-xl font-semibold text-white">Programmer</p>
    </div>

    {/* Big profile photo */}
    
    {/* <div className="absolute top-0 right-0 transform translate-x-[-50%] translate-y-[50%] md:translate-x-[-60%] md:translate-y-[70%] animate-slide-down-slow"> */}

    <div className="top-0 right-0 transform translate-x-[-50%] translate-y-[50%] md:translate-x-[-60%] md:translate-y-[70%] flex justify-center relative animate-slide-down-slow">
  <div className="relative group">
    <img
      src={profile}
      alt="Profile"
      className="w-[280px] md:w-[350px] rounded-3xl shadow-xl transition-all duration-500 group-hover:scale-105"
    />
    <div className="absolute -inset-2 bg-cyan-500 rounded-3xl blur-2xl opacity-30 z-[-1]" />
  </div>
</div>
  </div>
</div>
  );
}