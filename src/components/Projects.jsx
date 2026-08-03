import React, { useState } from "react";
import { FaCode, FaServer, FaBrain, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import att from "../images/profile/ATTLogo_New.jpg";

const projects = [
  {
    title: "Senior Software Engineer",
    period: "July 2022 – Present",
    company: "ATT Systems Pte Ltd, Singapore",
    icon: <FaCode size={20} className="text-blue-500" />,
    logo: att,
    highlights: [
      "Owned full SDLC for cloud-based web applications — requirements through deployment",
      "Built scalable microservices with .NET Core, containerized with Docker on AWS EKS",
      "Architected AWS infrastructure (EC2, S3, RDS, Lambda, VPC, IAM, CloudFront, WAF) via CDK/CloudFormation",
      "Automated CI/CD with Atlassian Bamboo; integrated APEX, SINGPASS, EPIC & HL7 systems",
    ],
    more: [
      "Designed responsive, secure interfaces with ASP.NET Core, Entity Framework, REST APIs, and Bootstrap",
      "Coordinated with government agencies and internal GCC teams across distributed delivery teams",
    ],
  },
  {
    title: "Software Engineer",
    period: "July 2020 – June 2022",
    company: "ATT Systems Pte Ltd, Singapore",
    icon: <FaServer size={20} className="text-green-500" />,
    logo: att,
    highlights: [
      "Built high-performance web apps with .NET 6 and REST APIs, improving system throughput",
      "Integrated biometric & payment devices — facial recognition, fingerprint and iris scanners",
      "Deployed and maintained AWS cloud services end-to-end; configured SSL for secure connections",
      "Implemented messaging via IBM WebSphere MQ, RabbitMQ, and ActiveMQ",
    ],
    more: [
      "Improved front-end responsiveness and usability across core applications",
      "Partnered directly with clients in cross-functional meetings to align delivery with business goals",
    ],
  },
  {
    title: "Software Developer",
    period: "March 2016 – June 2020",
    company: "ATT Systems Pte Ltd, Singapore",
    icon: <FaBrain size={20} className="text-purple-500" />,
    logo: att,
    highlights: [
      "Built applications with C#, ASP.NET, and Web APIs to client specifications and deadlines",
      "Optimized SQL databases, queries, and stored procedures — cut query response times",
      "Developed complex Crystal Reports with sub-reports, improving reporting accuracy",
      "Integrated PayPal payment gateway for seamless in-app transactions",
    ],
    more: [
      "Debugged web applications and services to resolve operational errors",
      "Authored user manuals and operational guides, reducing new-user onboarding time",
      "Managed installation and configuration of web and SQL servers",
    ],
  },
];

function ExperienceCard({ project, isLeft }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 relative z-10  dark:bg-gray-700 text-left">
      <div className={`flex items-center gap-3 mb-1 ${isLeft ? "md:justify-end" : "md:justify-start"}`}>
        {project.icon}
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{project.title}</h3>
      </div>
      <div className={`md:hidden text-sm text-gray-500 dark:text-gray-400 mb-3`}>
        {project.company} · {project.period}
      </div>

      <ul className="space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="text-sm text-gray-600 dark:text-gray-200 flex gap-2">
            <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
            <span>{h}</span>
          </li>
        ))}
        {expanded &&
          project.more.map((h) => (
            <li key={h} className="text-sm text-gray-600 dark:text-gray-200 flex gap-2">
              <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
              <span>{h}</span>
            </li>
          ))}
      </ul>

      {project.more?.length > 0 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-indigo-500 dark:text-cyan-400 hover:underline"
        >
          {expanded ? "Show less" : `Show ${project.more.length} more`}
          <FaChevronDown className={`text-[10px] transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="relative max-w-8xl mx-auto px-4">
      <div className="px-4 py-8 bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-indigo-600 dark:text-cyan-400">
            Work Experience
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            9+ years at ATT Systems, Singapore
          </p>
        </div>

        {/* Timeline — line + items live in their own container, clear of the heading */}
        <div className="relative mt-10">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-4 border-blue-500 z-0" />

          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;
            const animationVariants = {
              hidden: { opacity: 0, x: isLeft ? -60 : 60 },
              visible: { opacity: 1, x: 0 },
            };

            return (
              <div
                key={project.title}
                className={`relative mb-12 last:mb-0 flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Company + period — desktop */}
                <div
                  className={`hidden md:block absolute top-8 max-w-[14rem] text-sm text-gray-400 ${
                    isLeft ? "left-[calc(50%+3rem)] text-left" : "right-[calc(50%+3rem)] text-right"
                  }`}
                >
                  <div className="font-semibold text-gray-500 dark:text-gray-300 mb-1">
                    {project.company}
                  </div>
                  <div>{project.period}</div>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  variants={animationVariants}
                  className={`w-full md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}
                >
                  <ExperienceCard project={project} isLeft={isLeft} />
                </motion.div>

                {/* Center dot with logo */}
                <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-20 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 w-16 h-16 overflow-hidden shadow-md">
                  <img src={project.logo} alt="ATT Systems logo" className="w-full h-full object-contain p-1.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
