// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ColorBends from "../components/ColorBends";

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Extract numeric value (e.g., "60+" becomes 60)
  const numericValue = parseInt(value, 10) || 0;
  const suffix = value.toString().includes("+") ? "+" : "";

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, numericValue, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

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
  <section className="relative w-full overflow-hidden bg-black">
  {/* Background Layer: ColorBends */}
  <div className="absolute inset-0 z-0">
    <ColorBends 
      speed={0.5}
      amplitude={1.1}
      color1="#EA580C" // Deep Orange
      color2="#7C2D12" // Burnt Orange
      color3="#000000" // Black for deep blending
    />
  </div>

  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10"
  >
    <div className="flex flex-col items-center text-center">
      
      {/* Professional Badge - Dark Mode Style */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6 px-4 py-1.5 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-xl"
      >
        <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-orange-400 font-poppins">
          Establishing Digital Excellence
        </p>
      </motion.div>

      {/* Modern Heading - High Contrast White */}
      <h2 className="font-montserrat text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
        About <span className="text-orange-500">Us</span>
      </h2>

      {/* Location / Meta Info - Light Gray */}
      <div className="flex items-center gap-3 mb-8">
        <div className="h-[1px] w-8 bg-orange-500/50" />
        <p className="font-poppins text-xs md:text-sm font-semibold text-gray-300 uppercase tracking-widest">
          Brightnest Technologies · Coimbatore · India
        </p>
        <div className="h-[1px] w-8 bg-orange-500/50" />
      </div>

      {/* Main Content - Bright White/Gray */}
      <div className="max-w-3xl mx-auto">
        <p className="font-luciole text-gray-100 text-lg md:text-xl leading-relaxed drop-shadow-sm">
          Brightnest Technologies is a premier web design and development company based in Coimbatore, India. 
          We are focused on engineering modern, high‑performing digital experiences that empower brands 
          across the world to thrive in an ever-evolving digital landscape.
        </p>
      </div>

      {/* Subtle Bottom Accent - Glowing Orange */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ delay: 0.5, duration: 1 }}
        className="h-1.5 bg-orange-500 mt-12 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.6)]"
      />
    </div>
  </motion.div>
</section>
      {/* 2. Why choose us – Unique Animation: Left/Right Entrance */}
      <section className="w-full bg-[#FFF2EA]">
  <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT SIDE: Image Circle */}
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInLeft}
      className="flex justify-center"
    >
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-orange-500/10 to-orange-500/30 flex items-center justify-center shadow-xl border-4 border-white overflow-hidden relative group">
        <img 
          src="/about-us-image.jpg" // Replace with your actual image path in the public folder
          alt="Brightnest Technologies Team"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070";
          }}
        />
        {/* Subtle overlay to make it look more professional */}
        <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-transparent transition-colors duration-300" />
      </div>
    </motion.div>

    {/* RIGHT SIDE: Content */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInRight}
    >
      <p className="font-poppins text-xs md:text-sm uppercase tracking-[0.22em] text-orange-500 mb-3 font-bold">
        Web design company in Coimbatore, India
      </p>
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
        Why choose Brightnest Technologies for web development?
      </h2>
      <p className="font-luciole text-gray-600 text-sm md:text-base leading-relaxed mb-4">
        As a full‑service digital partner, Brightnest Technologies offers website design, custom web applications, ecommerce platforms, branding, and digital marketing solutions tailored to your business goals.
      </p>
      <p className="font-luciole text-gray-600 text-sm md:text-base leading-relaxed mb-6">
        The team brings together designers, engineers, and strategists who work closely with you from discovery to launch, ensuring every project is aesthetically strong, technically robust, and aligned with measurable outcomes.
      </p>
      
      <ul className="space-y-4 text-sm md:text-base text-gray-700 font-luciole">
        {[
          "Experienced UI/UX and engineering team based in Coimbatore.",
          "Clear project roadmaps with transparent communication.",
          "Responsive, SEO‑ready websites built on modern stacks.",
          "Focus on performance, scalability, and maintainability."
        ].map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-orange-500 font-bold mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
</section>

      {/* 3. Creative digital agency block - Unique Animation: Content Pop-in */}
     <section className="w-full bg-white overflow-hidden">
  <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT SIDE: Content */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInLeft}
    >
      <p className="font-poppins text-xs uppercase tracking-[0.22em] text-orange-500 mb-2 font-bold">
        Who we are
      </p>
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
        Creative digital agency based in Coimbatore
      </h2>
      <p className="font-luciole text-gray-600 text-sm md:text-base leading-relaxed mb-4">
        Brightnest Technologies combines strategy, design, and technology to build digital products that look sharp and perform reliably. From landing pages to large‑scale web applications, every interface is crafted to feel intuitive and fast.
      </p>
      <p className="font-luciole text-gray-600 text-sm md:text-base leading-relaxed">
        The team partners with startups, SMEs, and enterprises, offering end‑to‑end project ownership—concept, wireframes, design systems, development, testing, and launch support.
      </p>
    </motion.div>

    {/* RIGHT SIDE: Image */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, x: 30 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center md:justify-end"
    >
      <div className="relative group">
        {/* Decorative background glow */}
        <div className="absolute -inset-4 bg-orange-100/50 rounded-[2rem] blur-2xl group-hover:bg-orange-200/50 transition-colors duration-500" />
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="relative w-72 h-60 md:w-96 md:h-72 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
        >
          <img 
            src="/agency-preview.jpg" // Replace with your image in the public folder
            alt="Digital Agency Coimbatore"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026";
            }}
          />
        </motion.div>

        {/* Floating element for extra detail */}
        <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl hidden md:block border border-orange-50 z-20">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 font-poppins">Live Projects</span>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* 4. Stats + short copy - Unique Animation: Staggered Stat Cards */}
     <section className="w-full bg-[#FFF9F4] border-y border-orange-100/50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center">
          
          {/* LEFT SIDE: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
            }}
          >
            <p className="font-poppins text-xs md:text-sm uppercase tracking-[0.25em] text-orange-600 mb-3 font-bold">
              Who we work with
            </p>
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
              Top software and web solutions partner in Coimbatore
            </h3>
            <p className="font-luciole text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
              Brightnest Technologies collaborates with brands across education, healthcare, manufacturing, and retail, delivering reliable software and web solutions that support real business growth.
            </p>
          </motion.div>

          {/* RIGHT SIDE: Animated Stats Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
              }
            }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { val: "60+", lab: "Projects" },
              { val: "60+", lab: "Clients" },
              { val: "20+", lab: "Team" },
              { val: "5+", lab: "Years" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="bg-white rounded-2xl shadow-sm border border-orange-50/50 p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <p className="font-montserrat text-3xl md:text-4xl font-bold text-orange-500 mb-1">
                  <Counter value={stat.val} />
                </p>
                <p className="font-poppins text-[10px] md:text-xs uppercase tracking-widest text-gray-400 font-bold">
                  {stat.lab}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
