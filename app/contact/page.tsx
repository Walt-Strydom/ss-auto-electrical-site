"use client";

import { useState, useRef, useEffect } from "react";
import ScrollToTop from "../../components/ScrollToTop";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const confirmationRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      confirmationRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      <ScrollToTop />

      <div className="bg-white text-gray-800 px-4 md:px-10 pt-16 pb-20 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Contact Us
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone Number</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Service Type</label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            >
              <option value="">Select a service</option>
              <option>Field Service</option>
              <option>Diagnostics & Fault Finding</option>
              <option>Parts Supply</option>
              <option>Harness Manufacturing</option>
              <option>Simulator Manufacturing</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-[#ffb200] text-black font-semibold px-6 py-2 rounded hover:bg-black hover:text-white transition-all"
            >
              Send Message
            </button>
          </div>
        </form>

        {submitted && (
          <div
            ref={confirmationRef}
            className="mt-8 p-4 bg-green-100 border border-green-300 text-green-800 rounded-md text-center"
          >
            ✅ Thank you! Your message has been sent successfully.
          </div>
        )}
      </div>
    </>
  );
}
