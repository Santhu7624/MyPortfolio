import React from "react";
// import profile from "../images/profile.jpg";

export default function About() {
  return (

    <div class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center p-6">
        {/* <img
            className="w-40 h-40 rounded-full border-4 border-blue-500"
            src={profile}
            alt="Santhosh Ganji"
            /> */}
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h5>
        /*<h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-400">👋 Hi, I'm Santhosh Ganji</h2>*/
        <h2 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">Senior Software Engineer | Full Stack Developer | AWS & Azure Certified | Cloud & Device Integration Specialist</h2>
        {/* <p className="text-gray-800 dark:text-gray-400 mt-2">    
            I'm a passionate and results-driven software engineer with 9 years of experience in building modern web applications using .NET Core, C#, Angular, and JavaScript. I specialize in developing scalable backend systems, integrating smart devices, and automating cloud infrastructure.
            </p> */}
        {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Contact Me
            </button> */}
      </div>
      {/* <h2 className="text-3xl font-bold">About Me</h2> */}
      <div class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">

        </a>
        {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
                I am a Senior Software Engineer with over 8 years of experience in backend and frontend development.
                I specialize in building scalable web applications using .NET Core, C#, and Angular, and have a strong
                foundation in cloud technologies like AWS and containerization using Docker and Kubernetes.
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
                My expertise includes designing microservices architectures, integrating APIs with systems like RabbitMQ and
                IBM WebSphere MQ, and managing CI/CD pipelines with Azure DevOps. I’m passionate about building clean,
                efficient code and delivering high-quality solutions.
            </p> */}

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
          I am a skilled Full Stack Developer with strong experience in building scalable, cloud-native web applications using technologies like ASP.NET Core, C#, React, Angular, and Node.js. I specialize in developing RESTful APIs, designing microservices architectures, and building responsive frontends using TypeScript and JavaScript.

          My expertise spans both application development and infrastructure automation, including hands-on experience with Docker, Kubernetes, GitLab CI/CD, Azure DevOps, and Atlassian Bamboo. I’ve successfully deployed and managed cloud workloads on AWS (EKS) and Azure (AKS), integrating services such as RabbitMQ, ActiveMQ, and IBM WebSphere MQ for middleware communication.

        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
          I'm an AWS Certified Solutions Architect – Associate, AWS Certified Developer – Associate, and a Microsoft Certified Azure Developer Associate, which demonstrates my commitment to continuously learning and applying the latest in cloud and software development practices.
        </p>
      </div>
      {/* <p>
        I am a Senior Software Engineer with over 9 years of experience in backend and frontend development.
        I specialize in building scalable web applications using .NET Core, C#, and Angular, and have a strong
        foundation in cloud technologies like AWS and containerization using Docker and Kubernetes.
      </p>
      <p>
        My expertise includes designing microservices architectures, integrating APIs with systems like RabbitMQ and
        IBM WebSphere MQ, and managing CI/CD pipelines with Azure DevOps. I’m passionate about building clean,
        efficient code and delivering high-quality solutions.
      </p> */}
    </div>
  );
}
