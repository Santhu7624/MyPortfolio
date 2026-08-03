import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTimes, FaCheckCircle } from "react-icons/fa";
import AWSSAA from "../images/certs/aws-saa.jpg";
import AWSDA from "../images/certs/aws-da.jpg";
import AzDev from "../images/certs/azure-dev.jpg";
import GCC from "../images/certs/my-gcc-cert.png";

const certs = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    image: AWSSAA,
    accent: "from-orange-400 to-amber-500",
    link: "https://www.credly.com/badges/16bd324c-0802-451d-9463-30ddadca70cd",
  },
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    image: AWSDA,
    accent: "from-orange-400 to-amber-500",
    link: "https://www.credly.com/badges/05ff7e8c-4d0f-4e6f-b088-73d4b30d84f6",
  },
  {
    name: "Azure Developer Associate",
    issuer: "Microsoft",
    image: AzDev,
    accent: "from-blue-500 to-cyan-500",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/SanthoshGanji-5253/CC58D8E479E2B04C?sharingId=B165A2C1C97896FA",
  },
  {
    name: "GCC Certified – Foundation",
    issuer: "GovTech",
    image: GCC,
    accent: "from-indigo-500 to-purple-500",
    popup: true,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="relative px-6 py-10 bg-white rounded-2xl shadow-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      {/* ambient accent */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="relative text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold font-display text-indigo-600 dark:text-cyan-400">
          Certifications
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Verified credentials from AWS, Microsoft &amp; GovTech
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, idx) => {
          const Wrapper = cert.popup ? "button" : "a";
          const wrapperProps = cert.popup
            ? { onClick: () => setSelectedCert(cert), type: "button" }
            : { href: cert.link, target: "_blank", rel: "noopener noreferrer" };

          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <Wrapper
                {...wrapperProps}
                className="group flex flex-col w-full h-full rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow bg-gray-50/50 dark:bg-gray-900/40"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${cert.accent}`} />
                <div className="flex flex-col items-center text-left p-5 flex-1">
                  <div className="relative w-full h-28 flex items-center justify-center mb-4 bg-white dark:bg-gray-800 rounded-lg p-2">
                    <img src={cert.image} alt={cert.name} className="max-h-full max-w-full object-contain" />
                    <span className="absolute -top-2 -right-2 text-emerald-500 bg-white dark:bg-gray-800 rounded-full">
                      <FaCheckCircle className="text-lg" />
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-indigo-500 dark:text-cyan-400 uppercase tracking-wide">
                    {cert.issuer}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                    {cert.name}
                  </h3>
                  <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-medium text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-cyan-400 transition">
                    {cert.popup ? "View certificate" : "Verify credential"}
                    <FaExternalLinkAlt className="text-[10px]" />
                  </span>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>

      {/* Modal for certificate popup */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center pr-6">
              {selectedCert.name}
            </h3>
            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full h-auto object-contain rounded"
            />
          </motion.div>
        </div>
      )}
    </div>
  );
}
