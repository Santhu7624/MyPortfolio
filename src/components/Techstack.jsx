import {
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaAws, FaMicrosoft, FaDatabase,
  FaCloud, FaServer, FaAngular, FaDocker, FaGitlab, FaCubes, FaTools, FaBoxes, FaPython,
} from "react-icons/fa";
import ASPNET from "../images/aspnet.jpg";
import CSharp from "../images/csharp.jpg";
import API from "../images/api2.png";
import RabbitMq from "../images/RabbitMQ.png";
import ActiveMq from "../images/active.jpg";
import AzDevops from "../images/Azure-Devops.png";
import awseks from "../images/aws-eks.png";
import azureaks from "../images/Kubernetes.png";

const techStack = [
  {
    category: "Languages",
    accent: "border-t-indigo-400",
    items: [
      { name: "C#", icon: <img src={CSharp} alt="C#" className="w-8 h-8 rounded" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "Python", icon: <FaPython className="text-green-600" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    category: "Web Development",
    accent: "border-t-cyan-400",
    items: [
      { name: "ASP.NET Core", icon: <img src={ASPNET} alt="ASP.NET" className="w-8 h-8 rounded" /> },
      { name: "Angular", icon: <FaAngular className="text-red-500" /> },
      { name: "REST API", icon: <img src={API} alt="API" className="w-8 h-8 rounded" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    ],
  },
  {
    category: "Database",
    accent: "border-t-emerald-400",
    items: [
      { name: "MS SQL Server", icon: <FaServer className="text-red-600" /> },
      { name: "MySQL", icon: <FaDatabase className="text-blue-600" /> },
      { name: "Oracle", icon: <FaDatabase className="text-orange-500" /> },
      { name: "PostgreSQL", icon: <FaDatabase className="text-indigo-600" /> },
    ],
  },
  {
    category: "Cloud",
    accent: "border-t-orange-400",
    items: [
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "Azure", icon: <FaMicrosoft className="text-blue-700" /> },
      { name: "GCC-GovTech", icon: <FaCloud className="text-blue-700" /> },
    ],
  },
  {
    category: "Containerization, DevOps & CI/CD",
    accent: "border-t-blue-400",
    items: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Kubernetes", icon: <FaCubes className="text-blue-400" /> },
      { name: "Microservices", icon: <FaBoxes className="text-orange-500" /> },
      { name: "EKS", icon: <img src={awseks} alt="AWS EKS" className="w-8 h-8 rounded" /> },
      { name: "AKS", icon: <img src={azureaks} alt="Azure AKS" className="w-8 h-8 rounded" /> },
      { name: "Azure DevOps", icon: <img src={AzDevops} alt="Azure DevOps" className="w-8 h-8 rounded" /> },
      { name: "Atlassian Bamboo", icon: <FaTools className="text-green-700" /> },
      { name: "GitLab", icon: <FaGitlab className="text-orange-600" /> },
    ],
  },
  {
    category: "Middleware",
    accent: "border-t-purple-400",
    items: [
      { name: "RabbitMQ", icon: <img src={RabbitMq} alt="RabbitMQ" className="w-8 h-8 rounded" /> },
      { name: "ActiveMQ", icon: <img src={ActiveMq} alt="ActiveMQ" className="w-8 h-8 rounded" /> },
      { name: "IBM WebSphere", icon: <FaTools className="text-blue-800" /> },
    ],
  },
];

export default function Techstack() {
  return (
    <div className="px-6 py-8 bg-white rounded-2xl shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl font-bold font-display text-center mb-8 text-indigo-600 dark:text-cyan-400">
        Tech Stack
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {techStack.map((section) => (
          <div
            key={section.category}
            className={`rounded-xl border border-gray-100 dark:border-gray-700 border-t-4 ${section.accent} p-5`}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-200 mb-4">
              {section.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 pl-1 pr-3 py-1.5 rounded-full bg-gray-50 dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-200"
                >
                  <span className="text-lg flex items-center justify-center w-6 h-6">{item.icon}</span>
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
