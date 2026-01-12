// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <main className="bg-[#FFF9F4] text-[#222]">
      {/* Hero / Intro */}
      <section className="w-full bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-10 py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-sm uppercase tracking-[0.18em] text-orange-500 mb-4">
              Brightnest Technologies · Coimbatore · India
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Brightnest Technologies is a web design and development company based in Coimbatore, India, focused on building modern, high‑performing digital experiences for brands across the world.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us – left image / right text */}
      <section className="w-full bg-[#FFF2EA]">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Illustration placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-orange-500/10 to-orange-500/30 flex items-center justify-center shadow-lg">
              <span className="text-orange-500 font-semibold text-sm">
                About Illustration
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.22em] text-orange-500 mb-3">
              Web design company in Coimbatore, India
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why choose Brightnest Technologies for web development?
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              As a full‑service digital partner, Brightnest Technologies offers website design, custom web applications, ecommerce platforms, branding, and digital marketing solutions tailored to your business goals.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              The team brings together designers, engineers, and strategists who work closely with you from discovery to launch, ensuring every project is aesthetically strong, technically robust, and aligned with measurable outcomes.
            </p>

            <ul className="space-y-3 text-sm md:text-base text-gray-700">
              <li>• Experienced UI/UX and engineering team based in Coimbatore.</li>
              <li>• Clear project roadmaps with transparent communication at every stage.</li>
              <li>• Responsive, SEO‑ready websites built on modern technology stacks.</li>
              <li>• Focus on performance, scalability, and long‑term maintainability.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Creative digital agency block */}
      <section className="w-full bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-orange-500 mb-2">
              Who we are
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Creative digital agency based in Coimbatore
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Brightnest Technologies combines strategy, design, and technology to build digital products that look sharp and perform reliably. From landing pages to large‑scale web applications, every interface is crafted to feel intuitive and fast.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The team partners with startups, SMEs, and enterprises, offering end‑to‑end project ownership—concept, wireframes, design systems, development, testing, and launch support.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-60 md:w-80 md:h-64 rounded-3xl bg-gradient-to-br from-orange-500/15 via-white to-orange-500/10 shadow-xl flex items-center justify-center">
              <span className="text-orange-500 font-semibold text-sm">
                UI Preview Block
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats + short copy */}
      <section className="w-full bg-[#FFF9F4]">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-orange-500 mb-2">
              Who we work with
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Top software and web solutions partner in Coimbatore
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Brightnest Technologies collaborates with brands across education, healthcare, manufacturing, and retail, delivering reliable software and web solutions that support real business growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <p className="text-2xl font-bold text-orange-500 mb-1">60+</p>
              <p className="text-xs uppercase tracking-wider text-gray-500">Projects</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <p className="text-2xl font-bold text-orange-500 mb-1">60+</p>
              <p className="text-xs uppercase tracking-wider text-gray-500">Clients</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <p className="text-2xl font-bold text-orange-500 mb-1">20+</p>
              <p className="text-xs uppercase tracking-wider text-gray-500">Team</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <p className="text-2xl font-bold text-orange-500 mb-1">5+</p>
              <p className="text-xs uppercase tracking-wider text-gray-500">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thrive with us / values + tabs style */}
      <section className="w-full bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-10 py-16 md:py-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Thrive with us
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Partner with a team that treats every build as a product, not just a project—carefully planned, iterated, and improved for long‑term performance.
            </p>
          </div>

          <div className="grid md:grid-cols-[260px,1fr] gap-8">
            {/* Left “tabs” column */}
            <div className="space-y-3">
              {[
                "Igniting innovation",
                "Hitting the mark",
                "Web of possibilities",
                "From local to global"
              ].map((item, i) => (
                <button
                  key={item}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition
                    ${i === 0
                      ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-orange-50"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Right description */}
            <div className="bg-[#FFF9F4] rounded-2xl shadow-sm p-6 md:p-8">
              <h4 className="text-xl font-semibold mb-3">
                Igniting innovation
              </h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                Every engagement starts with understanding your business deeply—your users, processes, and objectives. From there, Brightnest Technologies designs solutions that are not just visually polished but technically scalable.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                The team treats innovation as a discipline: rapid prototyping, quick feedback loops, and pragmatic use of technology to solve real problems, not create complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="w-full bg-[#FFF9F4]">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-10 py-16 md:py-20">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-orange-500 mb-2">
              Our process
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Our web design process
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              A clear, repeatable workflow ensures every website is thoughtfully planned, designed, and launched with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h4 className="font-semibold mb-2">Discover</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Workshops, stakeholder interviews, and audits to clarify goals, audiences, and success metrics before a single pixel is designed.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h4 className="font-semibold mb-2">Prototype</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wireframes and interactive prototypes validate structure, content hierarchy, and user journeys early in the process.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h4 className="font-semibold mb-2">Test & Launch</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rigorous testing across devices, performance checks, and SEO‑ready deployment to ensure a smooth go‑live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients & partners row */}
      <section className="w-full bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-10 py-16 md:py-20">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-orange-500 mb-2">
              Our clients & partners
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              We have built solutions for…
            </h3>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              From local brands to international businesses, Brightnest Technologies supports teams who expect reliable execution and thoughtful design.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center justify-items-center">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="w-20 h-10 sm:w-24 sm:h-12 bg-[#FFF9F4] border border-gray-100 rounded-xl flex items-center justify-center shadow-sm"
              >
                <span className="text-gray-400 text-[11px] sm:text-xs">
                  Logo {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top-of-footer CTA strip */}
      <section className="w-full bg-[#101018] text-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-400 mb-2">
              Looking for a digital partner?
            </p>
            <p className="text-sm md:text-base text-white/80 max-w-xl">
              Brightnest Technologies helps you plan, design, and build the next version of your website or application with a mature, collaborative process.
            </p>
          </div>
          <button className="inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-black text-sm font-semibold shadow hover:bg-orange-400 transition">
            Talk to our team
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;
