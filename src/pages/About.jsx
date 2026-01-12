// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const About = () => {
  return (
    <main className="bg-[#FFF9F4] text-[#222]">
      {/* 1. Hero / Intro - Unique Animation: Slow Fade Down */}
      <section className="w-full bg-white">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-sm uppercase tracking-[0.18em] text-orange-500 mb-4">
              Brightnest Technologies · Coimbatore · India
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Brightnest Technologies is a web design and development company based in Coimbatore, India, focused on building modern, high‑performing digital experiences for brands across the world.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Why choose us – Unique Animation: Left/Right Entrance */}
      <section className="w-full bg-[#FFF2EA]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            className="flex justify-center"
          >
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-orange-500/10 to-orange-500/30 flex items-center justify-center shadow-lg">
              <span className="text-orange-500 font-semibold text-sm">About Illustration</span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
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
          </motion.div>
        </div>
      </section>

      {/* 3. Creative digital agency block - Unique Animation: Content Pop-in */}
      <section className="w-full bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-orange-500 mb-2">Who we are</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Creative digital agency based in Coimbatore</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Brightnest Technologies combines strategy, design, and technology to build digital products that look sharp and perform reliably. From landing pages to large‑scale web applications, every interface is crafted to feel intuitive and fast.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              The team partners with startups, SMEs, and enterprises, offering end‑to‑end project ownership—concept, wireframes, design systems, development, testing, and launch support.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-72 h-60 md:w-80 md:h-64 rounded-3xl bg-gradient-to-br from-orange-500/15 via-white to-orange-500/10 shadow-xl flex items-center justify-center">
              <span className="text-orange-500 font-semibold text-sm">UI Preview Block</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Stats + short copy - Unique Animation: Staggered Stat Cards */}
      <section className="w-full bg-[#FFF9F4]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-orange-500 mb-2">Who we work with</p>
            <h3 className="text-xl md:text-2xl font-bold mb-3">Top software and web solutions partner in Coimbatore</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Brightnest Technologies collaborates with brands across education, healthcare, manufacturing, and retail, delivering reliable software and web solutions that support real business growth.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
          >
            {[
              { val: "60+", lab: "Projects" },
              { val: "60+", lab: "Clients" },
              { val: "20+", lab: "Team" },
              { val: "5+", lab: "Years" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-sm p-4"
              >
                <p className="text-2xl font-bold text-orange-500 mb-1">{stat.val}</p>
                <p className="text-xs uppercase tracking-wider text-gray-500">{stat.lab}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Thrive with us - Unique Animation: Slide and Focus */}
      <section className="w-full bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Thrive with us</h3>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Partner with a team that treats every build as a product, not just a project—carefully planned, iterated, and improved for long‑term performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-[260px,1fr] gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-3"
            >
              {["Igniting innovation", "Hitting the mark", "Web of possibilities", "From local to global"].map((item, i) => (
                <motion.button
                  key={item}
                  variants={fadeInLeft}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition ${i === 0 ? "bg-orange-500 text-white border-orange-500 shadow-sm" : "bg-white text-gray-700 border-gray-200"}`}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#FFF9F4] rounded-2xl shadow-sm p-6 md:p-8"
            >
              <h4 className="text-xl font-semibold mb-3">Igniting innovation</h4>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                Every engagement starts with understanding your business deeply—your users, processes, and objectives. From there, Brightnest Technologies designs solutions that are not just visually polished but technically scalable.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                The team treats innovation as a discipline: rapid prototyping, quick feedback loops, and pragmatic use of technology to solve real problems, not create complexity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Process section - Unique Animation: Card Stagger */}
      <section className="w-full bg-[#FFF9F4]">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-orange-500 mb-2">Our process</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Our web design process</h3>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              A clear, repeatable workflow ensures every website is thoughtfully planned, designed, and launched with confidence.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              { t: "Discover", d: "Workshops, stakeholder interviews, and audits to clarify goals before a single pixel is designed." },
              { t: "Prototype", d: "Wireframes and interactive prototypes validate structure and user journeys early in the process." },
              { t: "Test & Launch", d: "Rigorous testing across devices, performance checks, and SEO‑ready deployment." }
            ].map((step, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white rounded-2xl shadow-sm p-6">
                <h4 className="font-semibold mb-2">{step.t}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Clients - Unique Animation: Scale-in Grid */}
      <section className="w-full bg-white">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-orange-500 mb-2">Our clients & partners</p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">We have built solutions for…</h3>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              From local brands to international businesses, Brightnest Technologies supports teams who expect reliable execution and thoughtful design.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center justify-items-center"
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                className="w-20 h-10 sm:w-24 sm:h-12 bg-[#FFF9F4] border border-gray-100 rounded-xl flex items-center justify-center shadow-sm"
              >
                <span className="text-gray-400 text-[11px] sm:text-xs">Logo {i + 1}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CTA strip - Unique Animation: Bottom Pop */}
      <section className="w-full bg-[#101018] text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-orange-400 mb-2">Looking for a digital partner?</p>
            <p className="text-sm md:text-base text-white/80 max-w-xl">
              Brightnest Technologies helps you plan, design, and build the next version of your website or application with a mature, collaborative process.
            </p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-black text-sm font-semibold shadow hover:bg-orange-400 transition"
          >
            Talk to our team
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
