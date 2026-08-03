import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const CONTACT = {
  email: "santhoshganji1@gmail.com",
  phone: "+65 8227 4240",
  linkedin: "https://www.linkedin.com/in/santhosh-ganji-1b021811b",
  location: "Singapore",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-800">
        {/* Info panel — matches the Home hero gradient */}
        <div className="relative bg-gradient-to-br from-[#0b1220] via-[#151233] to-[#1c1642] p-8 md:p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-indigo-600 dark:text-cyan-400">Let's talk</h2>
            <p className="mt-3 text-slate-300 text-sm max-w-sm">
              Open to new opportunities and interesting problems. Reach out directly
              or send a message and I'll get back to you.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 group">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 group-hover:bg-cyan-400 group-hover:text-slate-900 transition">
                <FaEnvelope />
              </span>
              <span className="text-sm text-slate-200 group-hover:text-cyan-300 transition">
                {CONTACT.email}
              </span>
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 group-hover:bg-cyan-400 group-hover:text-slate-900 transition">
                <FaPhone />
              </span>
              <span className="text-sm text-slate-200 group-hover:text-cyan-300 transition">
                {CONTACT.phone}
              </span>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 group-hover:bg-cyan-400 group-hover:text-slate-900 transition">
                <FaLinkedin />
              </span>
              <span className="text-sm text-slate-200 group-hover:text-cyan-300 transition">
                Connect on LinkedIn
              </span>
            </a>
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
                <FaMapMarkerAlt />
              </span>
              <span className="text-sm text-slate-200">{CONTACT.location}</span>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-5 bg-white dark:bg-gray-800">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-[1.01]"
          >
            <FaPaperPlane className="text-sm" />
            Send Message
          </button>
          <p className="text-xs text-gray-400 text-center">
            Opens your email client with this message pre-filled.
          </p>
        </form>
      </div>
    </div>
  );
}
