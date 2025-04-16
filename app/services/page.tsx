"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Auto Electrical Services on Earthmoving Equipment",
    summary:
      "Expert repairs, rewires, and upgrades for heavy-duty machinery like dozers, graders, excavators, and dump trucks from brands such as CAT, Komatsu, and Liebherr.",
    features: [
      "Electrical diagnostics and fault repair",
      "Machine rewiring and system rebuilds",
      "Component-level troubleshooting",
      "Installation of new electrical hardware",
      "Preventative maintenance checks",
    ],
    image: "/service1.jpg",
    cta: "Get a Quote",
  },
  {
    title: "Field Service",
    summary:
      "Our mobile units deliver fast, workshop-grade diagnostics and repairs anywhere — mine sites, rural zones, or remote terrain.",
    features: [
      "Fully equipped mobile service vans",
      "Rapid on-site diagnostics and repairs",
      "24/7 emergency availability (on request)",
      "Reduced downtime with on-location fixes",
    ],
    image: "/service2.jpg",
    cta: "Book Now",
  },
  {
    title: "Troubleshooting & Fault Finding",
    summary:
      "We find and fix faults with speed and precision — using advanced tools and deep machine knowledge to minimize delays and prevent repeat issues.",
    features: [
      "Fault isolation using digital diagnostics",
      "CAN bus and ECU analysis",
      "Hard-to-trace electrical failures resolved",
      "Quick turnaround and transparent explanations",
    ],
    image: "/service3.jpg",
    cta: "Enquire Now",
  },
  {
    title: "Parts Supply",
    summary:
      "We source and deliver OEM and aftermarket electrical components fast — keeping your repairs on track and your machines running.",
    features: [
      "Starter motors, alternators, relays, sensors",
      "ECUs, switches, fuses, connectors",
      "OEM-matched quality and compatibility",
      "Urgent delivery options available",
    ],
    image: "/service4.jpg",
    cta: "Check Availability",
  },
  {
    title: "Harness Repair & Manufacturing",
    summary:
      "Custom-built wiring harnesses and expert repairs to prevent electrical failures and downtime — built tough for harsh environments.",
    features: [
      "On-site and in-house harness repairs",
      "Custom manufacturing for any make/model",
      "OEM-matching layout and connectors",
      "Continuity testing and quality control",
    ],
    image: "/service5.jpg",
    cta: "Request Repair",
  },
  {
    title: "Simulator Manufacturing",
    summary:
      "Realistic training simulators designed around your fleet — safe, effective, and customizable for mines, contractors, and training centers.",
    features: [
      "Custom operator training platforms",
      "Replicates OEM layouts and controls",
      "Reduce wear on production machines",
      "Ideal for certification and onboarding",
    ],
    image: "/service3.jpg",
    cta: "Request Now",
  },
  {
    title: "Dyno Support",
    summary:
      "Engine dyno testing to validate performance, tune systems, and catch issues early — all under controlled load conditions.",
    features: [
      "Torque and power validation",
      "Post-repair performance checks",
      "Load simulation and stress testing",
      "Ideal for rebuild verification and tuning",
    ],
    image: "/service2.jpg",
    cta: "Book Dyno Session",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-white text-gray-800 px-4 md:px-10 pt-10 pb-20 space-y-24">
        <h1 className="text-4xl font-bold text-center text-black">
          Our Services
        </h1>

        {services.map((service, index) => (
          <motion.section
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-auto">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#ffb200] mb-4">
                {service.title}
              </h2>
              <p className="mb-4">{service.summary}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="text-[#ffb200] mt-0.5" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-[#ffb200] text-black font-semibold px-6 py-2 rounded hover:bg-black hover:text-white transition-all"
              >
                {service.cta}
              </Link>
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA Banner */}
      <section className="overflow-hidden shadow-lg">
        <div className="relative w-full h-[300px] md:h-[400px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/cta-banner.mp4"
          >
            <source src="/cta-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Back to Work?
            </h2>
            <p className="mb-6 max-w-2xl">
              Let our experts handle the tough jobs while you stay focused on
              production.
            </p>
            <Link
              href="/contact"
              className="bg-[#ffb200] text-black font-semibold px-6 py-2 rounded hover:bg-white hover:text-[#ffb200] transition-all"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
