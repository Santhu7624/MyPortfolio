import React from "react";
import profilePic from "../images/profile.jpg"; // adjust path as needed

export default function ProfileCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center p-6">
        <img
          className="w-40 h-40 rounded-full border-4 border-blue-500"
          src={profilePic}
          alt="Santhosh Ganji"
        />
        <h2 className="mt-4 text-xl font-semibold text-gray-800">Santhosh Ganji</h2>
        <p className="text-gray-800 dark:text-gray-400 text-center mt-2">
          Senior Software Engineer with 9 years in .NET, AWS, and frontend technologies.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Contact Me
        </button>
      </div>
    </div>
  );
}