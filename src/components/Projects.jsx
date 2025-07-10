import React from "react";
import { FaCode, FaServer, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";
import att from "../images/profile/ATTLogo_New.jpg";
// const projects = [
//   {
//     title: "Smart Ticketing System",
//     description:
//       "Developed a microservices-based ticketing platform using .NET Core and Angular, deployed on AWS EKS with full CI/CD pipeline.",
//   },
//   {
//     title: "Healthcare Integration Engine",
//     description:
//       "Led interface development using RabbitMQ and WebSphere MQ for secure hospital data exchange, with RESTful APIs and SQL Server.",
//   },
//   {
//     title: "AI-Enhanced Resume Matcher",
//     description:
//       "Created a web app with React and Python backend integrating ML models to match resumes with job descriptions, hosted on AWS Lambda.",
//   },
// ];
const projects = [
  {
    title: "Senior Software Engineer",
    period: "July 2022 – Present",
    company: "ATT Systems Pte Ltd, Singapore",
    description: `
• Full SDLC Participation: Engaged in all phases of the Software Development Life Cycle (SDLC), including requirements analysis, architecture, development, testing, and deployment of web and cloud-based applications.  
• Web Application Development: Designed and developed responsive, secure, and high-performing web applications using ASP.NET Core, C#, Entity Framework, REST APIs, HTML5, CSS, JavaScript, and Bootstrap. Delivered scalable and user-friendly interfaces aligned with business needs.  
• Microservices & Containerization: Engineered scalable microservices architecture using .NET Core, containerized services with Docker, and deployed via AWS Elastic Kubernetes Service (EKS) to ensure high availability and fault tolerance.  
• Cloud Infrastructure & AWS Expertise: Architected and deployed AWS infrastructure using CDK and CloudFormation, optimizing performance, cost, and scalability. Hands-on experience with core AWS services including EC2, S3, EKS, RDS, Lambda, Route 53, ECR, VPC, IAM, SQS, SNS, ELB, CloudFront, and WAF.  
• DevOps & CI/CD: Implemented automated CI/CD pipelines using Atlassian Bamboo framework, improving release speed and reducing deployment errors.  
• System Integration: Facilitated seamless integration with external systems like APEX, SINGPASS, EPIC, and HL7. Ensured secure and reliable data exchange across platforms by coordinating closely with multiple IT stakeholders.  
• Collaboration with Stakeholders: Worked directly with government agencies and internal GCC teams to deliver project-specific components. Collaborated with distributed development teams to support full-cycle application delivery.
    `,
    icon: <FaCode size={24} className="text-blue-500" />,
    logo: att, // replace with ATT logo if available
  },
  {
    title: "Software Engineer",
    period: "July 2020 – June 2022",
    company: "ATT Systems Pte Ltd, Singapore",
    description: `
• Spearheaded the development of high-performance web applications using modern .NET 6 and REST API technologies, improving system throughput.  
• Enhanced user interfaces through efficient front-end implementation, increasing application responsiveness and usability.  
• Integrated various devices, including facial recognition systems, fingerprint scanners, iris scanners, and payment devices, to enhance system functionality.  
• Worked extensively with AWS cloud services, contributing to tasks like deployment, management, and maintenance.  
• Installed and configured SSL Certificates to ensure secure and encrypted application connections.  
• Proficient in installing and configuring messaging systems such as IBM WebSphere MQ, RabbitMQ, and ActiveMQ to support application communication.  
• Partnered with clients in cross-functional project meetings to ensure delivery aligned with business objectives.
    `,
    icon: <FaServer size={24} className="text-green-500" />,
    logo: att,
  },
  {
    title: "Software Developer",
    period: "March 2016 – June 2020",
    company: "ATT Systems Pte Ltd, Singapore",
    description: `
• Built robust applications using C#, ASP.NET, and Web APIs, meeting client specifications within project deadlines.  
• Designed and implemented solutions aligning with client specifications and business needs.  
• Debugged web applications and web services to identify and resolve operational errors.  
• Conducted rigorous testing to ensure smooth functionality and reliability.  
• Enhanced operational efficiency by designing SQL databases, optimizing queries, and implementing stored procedures, reducing query response times.  
• Developed complex Crystal Reports with features like sub-reports, increasing reporting accuracy.  
• Integrated secure payment gateways, such as PayPal, into web applications to enable seamless transactions.  
• Authored comprehensive user manuals and operational guides, reducing onboarding time for new users.  
• Managed installation and configuration of web servers and SQL servers, ensuring smooth and efficient operations.
    `,
    icon: <FaBrain size={24} className="text-purple-500" />,
    logo: att,
  },
];
export default function Projects() {
  return (

     <div className="relative max-w-8xl mx-auto mt-10 px-4">
      {/* Timeline Container with overflow hidden to clip vertical line */}
      <div className="relative px-4 py-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <h2 className="text-3xl text-center font-bold mb-10 text-gray-300">
          Work Experience
        </h2>

        {/* Vertical Line (inside container) */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-4 border-blue-500 z-0" />

        {/* Timeline Items */}
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          const animationVariants = {
            hidden: { opacity: 0, x: isLeft ? -100 : 100 },
            visible: { opacity: 1, x: 0 },
          };

          return (
            <div
              key={index}
              className={`relative mb-12 flex flex-col md:flex-row items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Company + Period - desktop */}
<div
  className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 text-xl text-gray-400 ${
    isLeft
      ? "left-[calc(50%+3rem)] text-right"
      : "right-[calc(50%+3rem)] text-left"
  }`}
>
  <div className="font-semibold text-gray-500 dark:text-gray-300 mb-1">
    {project.company}
  </div>
  <div>{project.period}</div>
</div>
              
              {/* Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6 }}
                variants={animationVariants}
                className={`w-full md:w-1/2 ${
                  isLeft ? "md:pr-12 text-right" : "md:pl-12 text-left"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative z-10 dark:bg-gray-700">
                  <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                    {project.icon}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  {/* Mobile period */}
                  <div className="md:hidden text-sm text-gray-500 mb-1">
                    {project.period}
                  </div>
                  <p className="mt-2 text-left text-gray-700 dark:text-gray-200 whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              </motion.div>

              {/* Center Dot with Logo */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-20 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 w-20 h-20 overflow-hidden">
                <img
                  src={project.logo}
                  alt="Company Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}