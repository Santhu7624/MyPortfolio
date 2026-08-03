import React from "react";
import { FaServer, FaCloud, FaExchangeAlt, FaCode, FaCertificate } from "react-icons/fa";

const expertise = [
  {
    icon: <FaServer className="text-indigo-500 text-xl" />,
    title: "Backend & Architecture",
    points: [
      "9+ years designing scalable, secure systems with .NET Core, C#, ASP.NET Core MVC",
      "REST API design and microservices architecture for production workloads",
    ],
  },
  {
    icon: <FaCode className="text-amber-500 text-xl" />,
    title: "Frontend",
    points: [
      "Angular and TypeScript for responsive, production UIs",
      "End-to-end ownership — wiring front ends directly to the APIs behind them",
    ],
  },
  {
    icon: <FaCloud className="text-cyan-500 text-xl" />,
    title: "Cloud & DevOps",
    points: [
      "Docker & Kubernetes in production on AWS EKS and Azure AKS",
      "CI/CD pipelines with GitLab CI/CD, Azure DevOps, and Atlassian Bamboo",
    ],
  },
  {
    icon: <FaExchangeAlt className="text-emerald-500 text-xl" />,
    title: "Integration & Messaging",
    points: [
      "Enterprise middleware with RabbitMQ, ActiveMQ, and IBM WebSphere MQ",
      "Asynchronous, distributed communication across large systems",
    ],
  },
];

export default function About() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-8 pb-6 text-center border-b border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
          Experience &amp; Expertise
        </h2>
        <p className="mt-2 text-sm font-medium text-indigo-600 dark:text-cyan-400 uppercase tracking-wide">
          Senior Full Stack Engineer · .NET Core + Angular · AWS &amp; Azure Certified
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Senior Full Stack Developer with 9+ years building complete systems end to
          end — backend architecture and API design, Angular front ends, and the
          cloud infrastructure and DevOps pipelines that run them in production.
        </p>
      </div>

      {/* Expertise grid — scannable instead of five paragraphs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-6">
        {expertise.map((block) => (
          <div
            key={block.title}
            className="rounded-xl border border-gray-100 dark:border-gray-700 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-900">
                {block.icon}
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-white">{block.title}</h3>
            </div>
            <ul className="space-y-1.5">
              {block.points.map((p) => (
                <li key={p} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Certification callout — links down to the dedicated section instead of repeating it */}
      <a
        href="#certificate"
        className="flex items-center justify-center gap-2 mx-6 mb-6 px-4 py-3 rounded-lg bg-indigo-50 dark:bg-gray-900 text-indigo-700 dark:text-cyan-400 text-sm font-medium hover:bg-indigo-100 dark:hover:bg-gray-700 transition"
      >
        <FaCertificate />
        AWS &amp; Azure certified — see certifications
      </a>
    </div>
  );
}
