import {
  
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,

  FaAws,
  FaMicrosoft,
  FaDatabase,

  FaCloud,
  FaServer,

 
  FaAngular,
   FaDocker,
  FaGitlab,

  FaCubes,
  FaTools,
 
  FaBoxes,
  
} from "react-icons/fa";
import ASPNET from "../images/aspnet.jpg";
import CSharp from "../images/csharp.jpg";
import API from "../images/api2.png";
import RabbitMq from "../images/RabbitMQ.png";
import ActiveMq from "../images/active.jpg";
import AzDevops from "../images/Azure-Devops.png";
// import {
//   SiCsharp,
//   SiTypescript,
//   SiRedux,
//   SiMui,
//   SiPostgresql,
//   SiMongodb,
//   SiMysql,
//   SiVisualstudiocode,
//   SiPostman,
//   SiAzure,
// } from "react-icons/si";

const techStack = [
  {
    category: "Languages",
    items: [
      { name: "C#", icon: <img src={CSharp} alt="CSHARP" className="w-8 h-8"></img> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },      
      
    ],
  },
  {
    category: "Web Development",
    items: [
        {
        name: "ASP.NET Core",
        icon: <img src={ASPNET} alt="ASP.NET" className="w-8 h-8" />
        },
      { name: "React", icon: <FaReact className="text-cyan-500" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500" /> },
      { name: "Node.js", icon: <FaNode className="text-green-600" /> },      
      { name: "REST API", icon: <img src={API} alt="API" className="w-8 h-8"/> },
      
    ],
  },
{
  category: "Database",
  items: [
    
    { name: "MS SQL Server", icon: <FaServer className="text-red-600" /> },
    { name: "MySQL", icon: <FaDatabase className="text-blue-600" /> },
    { name: "Oracle", icon: <FaDatabase className="text-orange-500" /> },
    { name: "PostgreSQL", icon: <FaDatabase className="text-indigo-600" /> },
  ],
},
{
  category: "Cloud",
  items: [
    { name: "AWS", icon: <FaAws className="text-orange-400" /> },
    { name: "Azure", icon: <FaMicrosoft className="text-blue-700" /> },
  ],
},
{
  category: "Containerization, DevOps & CI/CD",
  items: [
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Kubernetes", icon: <FaCubes className="text-blue-400" /> },
    { name: "Microservices", icon: <FaBoxes className="text-orange-500" /> },
    { name: "EKS", icon: <FaCloud className="text-blue-600" /> },
    { name: "AKS", icon: <FaCloud className="text-indigo-600" /> },
    { name: "Azure DevOps", icon: <img src={AzDevops} alt="Azure DevOps" className="w-8 h-8"></img> },
    { name: "Atlassian Bamboo", icon: <FaTools className="text-green-700" /> },
    { name: "GitLab", icon: <FaGitlab className="text-orange-600" /> },
  ],
},
{
  category: "Middleware",
  items: [
    { name: "RabbitMQ", icon:<img src={RabbitMq} alt="RabbitMQ" className="w-8 h-8"/> },
    { name: "ActiveMQ", icon: <img src={ActiveMq} alt="ActiveMQ" className="w-8 h-8"/> },
    { name: "IBM WebSphere", icon: <FaTools className="text-blue-800" /> },
  ],
},

];

export default function Techstack() {
  return (
    <div className="px-4 py-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center mb-6 font-semibold text-gray-800 dark:text-gray-300">Tech Stack</h2>
      {techStack.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-400">{section.category}</h2>
          <div className="flex flex-wrap gap-6">
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center w-20 text-center text-sm text-gray-700 dark:text-gray-300"
              >
                <div className="text-3xl mb-1">{item.icon}</div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}