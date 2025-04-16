"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-12 py-16 space-y-16">
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
          <h2 className="text-xl font-semibold text-[#ffb200] mb-2">
            Built on Experience. Driven by Results.
          </h2>
          <p className="leading-relaxed">
            SS Auto Electrical is built on hands-on industry experience and a
            commitment to doing things properly. We understand the pressure of
            downtime, the cost of delays, and the value of having someone who
            knows exactly what they’re doing.
          </p>
        </div>
        <Image
          src="/about.jpg"
          alt="About SS Auto Electrical"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/about2.jpg"
          alt="Industry Work"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <div>
          <h2 className="text-xl font-semibold text-[#ffb200] mb-2">
            Industry Focus
          </h2>
          <p className="leading-relaxed">
            We work across industries like mining, construction, and heavy
            transport, providing expert electrical services for earthmoving and
            high-demand machinery. From diagnostics and field repairs to harness
            manufacturing and simulator builds, our focus is always on
            performance, reliability, and getting your gear back to work—fast.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl font-semibold text-[#ffb200] mb-2">
            Our Approach
          </h2>
          <p className="leading-relaxed">
            Whether you need urgent breakdown support or long-term solutions, we
            bring sharp technical skills, a no-fuss attitude, and a genuine
            drive to deliver.
          </p>
        </div>
        <Image
          src="/about3.jpg"
          alt="Hands-on Repair"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/about4.jpg"
          alt="Mission Image"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <div>
          <h2 className="text-xl font-semibold text-[#ffb200] mb-2">
            Our Mission
          </h2>
          <p className="leading-relaxed">
            To keep heavy machinery moving through expert auto electrical
            services, fast field support, and dependable solutions—minimizing
            downtime, maximizing performance.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl font-semibold text-[#ffb200] mb-2">
            Our Vision
          </h2>
          <p className="leading-relaxed">
            To be the go-to name in auto electrical services for heavy equipment
            across Australia—trusted for our precision, integrity, and ability
            to get the job done no matter where or when.
          </p>
        </div>
        <Image
          src="/about5.jpg"
          alt="Vision Image"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </section>
    </div>
  );
}
