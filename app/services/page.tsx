export default function ServicesPage() {
  return (
    <div className="container mx-auto px-6 py-12 space-y-16 scroll-smooth">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <section id="earth-moving">
        <h2 className="text-2xl font-semibold mb-2">Auto Electrical Services on Earth Moving Equipment</h2>
        <p>We provide specialized electrical solutions for heavy-duty machinery.</p>
      </section>

      <section id="field-service">
        <h2 className="text-2xl font-semibold mb-2">Field Service</h2>
        <p>Our technicians are available on-site to keep your equipment running.</p>
      </section>

      <section id="troubleshooting">
        <h2 className="text-2xl font-semibold mb-2">Troubleshooting and Fault Finding</h2>
        <p>Fast diagnosis and precision fixes for all auto-electrical systems.</p>
      </section>

      <section id="parts">
        <h2 className="text-2xl font-semibold mb-2">Parts Supply</h2>
        <p>We stock and supply trusted auto-electrical components.</p>
      </section>

      <section id="harness">
        <h2 className="text-2xl font-semibold mb-2">Harness Repair and Manufacturing</h2>
        <p>Custom and OEM harness services tailored to your machinery.</p>
      </section>

      <section id="simulator">
        <h2 className="text-2xl font-semibold mb-2">Simulator Manufacturing</h2>
        <p>We build training simulators for operational excellence.</p>
      </section>

      <section id="dyno">
        <h2 className="text-2xl font-semibold mb-2">Dyno Support</h2>
        <p>Dyno testing support to maintain optimal performance.</p>
      </section>
    </div>
  );
}
