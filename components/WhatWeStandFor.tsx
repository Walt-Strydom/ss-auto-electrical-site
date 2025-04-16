"use client";

import { Wrench, ShieldCheck, AlertCircle, Rocket } from "lucide-react";

export default function WhatWeStandFor() {
  const items = [
    {
      icon: <Wrench size={40} className="text-[#ffb200] mb-4" />,
      title: "Quality",
      desc: "Work that lasts, parts that perform, and solutions that make sense.",
    },
    {
      icon: <ShieldCheck size={40} className="text-[#ffb200] mb-4" />,
      title: "Honesty",
      desc: "Clear communication, fair pricing, and no hidden surprises.",
    },
    {
      icon: <AlertCircle size={40} className="text-[#ffb200] mb-4" />,
      title: "Action",
      desc: "Fast response, real support, and minimal downtime.",
    },
    {
      icon: <Rocket size={40} className="text-[#ffb200] mb-4" />,
      title: "Your Success",
      desc: "Because when your machines are running, your business is moving.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">What We Stand For</h2>
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
        Precision. Reliability. Accountability.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div>{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-700 max-w-3xl mx-auto mt-12">
        At SS Auto Electrical, we don’t cut corners, and we don’t make excuses.
        We believe in doing the job right, every time. We bring experience,
        skill, and grit to every site, every job, every time.
      </p>
    </section>
  );
}
