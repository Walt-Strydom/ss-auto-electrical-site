"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownItems = [
    { id: "earth-moving", label: "Auto Electrical Services" },
    { id: "field-service", label: "Field Service" },
    { id: "troubleshooting", label: "Troubleshooting & Fault Finding" },
    { id: "parts", label: "Parts Supply" },
    { id: "harness", label: "Harness Repair" },
    { id: "simulator", label: "Simulator Manufacturing" },
    { id: "dyno", label: "Dyno Support" },
  ];

  const handleMobileNavigate = () => setMobileOpen(false);

  return (
      <header className="bg-white shadow-sm py-2 w-full">

      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="SS Auto Electrical"
            width={140}
            height={36}
            className="hover:opacity-90 transition"
          />
        </Link>

        <div className="hidden md:flex space-x-6 text-black text-sm font-medium items-center">
          <Link href="/" className="hover:text-[#ffb200]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#ffb200]">
            About
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-1 hover:text-[#ffb200] cursor-pointer">
              Services
              <ChevronDown size={16} />
            </div>
            <div
              className="absolute left-0 mt-2 w-72 bg-white shadow-lg rounded p-2 z-10
                         opacity-0 invisible translate-y-4 scale-95
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:scale-100
                         transition-all duration-300 ease-out"
            >
              {dropdownItems.map((item, i) => (
                <Link
                  key={item.id}
                  href={`/services#${item.id}`}
                  className={`block px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-out transform opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="hover:text-[#ffb200]">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 px-6 pt-24 pb-8 space-y-6">
          <div className="flex justify-end">
            <button onClick={() => setMobileOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <Link href="/" className="block text-black hover:text-[#ffb200]" onClick={handleMobileNavigate}>
            Home
          </Link>
          <Link href="/about" className="block text-black hover:text-[#ffb200]" onClick={handleMobileNavigate}>
            About
          </Link>

          <div className="space-y-1">
            <div className="text-black font-medium">Services</div>
            {dropdownItems.map((item) => (
              <Link
                key={item.id}
                href={`/services#${item.id}`}
                className="block pl-4 text-gray-700 hover:text-[#ffb200] transition-all"
                onClick={handleMobileNavigate}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="block text-black hover:text-[#ffb200]"
            onClick={handleMobileNavigate}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
