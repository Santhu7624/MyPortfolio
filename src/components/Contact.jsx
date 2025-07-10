import React from "react";

export default function Contact() {
  return (
    <div className=" mx-auto bg-gray-800 p-4 rounded">
      <h2 className="text-3xl text-center text-gray-300 font-bold mb-6">Contact</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-300 font-medium">Name</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-xl"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-gray-300 font-medium">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded-xl"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 font-medium">Message</label>
          <textarea
            rows="4"
            className="w-full mt-1 p-2 border rounded-xl"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
