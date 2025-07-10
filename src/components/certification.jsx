
import React, { useState } from "react";
import AWSSAA from "../images/certs/aws-saa.jpg";
import AWSDA from "../images/certs/aws-da.jpg";
import AzDev from "../images/certs/azure-dev.jpg";
import GCC from "../images/certs/my-gcc-cert.png";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const certs = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      image: AWSSAA,
      link: "https://www.credly.com/badges/16bd324c-0802-451d-9463-30ddadca70cd", // replace with your actual badge URL
    },
    {
      name: "AWS Certified Developer – Associate",
      image: AWSDA,
      link: "https://www.credly.com/badges/05ff7e8c-4d0f-4e6f-b088-73d4b30d84f6", // replace with your actual badge URL
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      image: AzDev,
      link: "https://learn.microsoft.com/api/credentials/share/en-us/SanthoshGanji-5253/CC58D8E479E2B04C?sharingId=B165A2C1C97896FA", // replace with your link
    },
    {
      name: "GCC Certified - Foundation",
      image: GCC,
      popup: true
    },
  ];

  return (
     <div className="px-6 py-10 bg-white max-w-8xl mx-auto border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-2xl text-center font-bold text-gray-300 mb-6">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {certs.map((cert, idx) =>
          cert.popup ? (
            <div
              key={idx}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer block p-4 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-sm font-medium text-gray-300 text-center">
                {cert.name}
              </h3>
            </div>
          ) : (
            <a
              key={idx}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-gray-200 rounded-lg hover:shadow-lg transition"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-32 object-contain mb-4"
              />
              <h3 className="text-sm font-medium text-gray-300 text-center">
                {cert.name}
              </h3>
            </a>
          )
        )}
      </div>

      {/* Modal for certificate popup */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
              {selectedCert.name}
            </h3>
            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full h-auto object-contain rounded"
            />
            <button
              onClick={() => setSelectedCert(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 block mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}