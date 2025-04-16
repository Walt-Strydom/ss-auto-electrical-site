"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const WhatWeStandFor = dynamic(() => import("../components/WhatWeStandFor"), {
  ssr: false,
});

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Subscribed email:", email);
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 animate-fade-in before:absolute before:inset-0 before:bg-black/50 before:z-0"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold italic drop-shadow-lg mb-6">
          Powering Performance, Wherever You Are
        </h1>
        <Link
          href="/contact"
          className="z-10 bg-[#ffb200] text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition mt-6"
        >
          Contact Us
        </Link>
      </section>

      {/* What We Stand For Section */}
      <section className="animate-fade-in">
        <WhatWeStandFor />
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-100 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news and offers.
          </p>
          {subscribed ? (
            <p className="text-green-600 font-medium">
              Thank you for subscribing!
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#ffb200] text-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
