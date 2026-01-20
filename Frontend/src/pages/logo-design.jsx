// src/pages/logo-design.jsx
import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { Link } from 'react-router-dom';

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
    transition: { staggerChildren: 0.15 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const LogoDesignPage = () => {
  // Hooks must be inside the component body
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    { q: "What is logo design?", a: "Logo design is the process of creating a visual symbol or emblem that represents a brand, company, or product. It should be simple, memorable, and scalable." },
    { q: "Why is a logo important for my business?", a: "A strong logo builds brand recognition, conveys professionalism, and helps customers identify and remember your business." },
    { q: "How can a professionally designed logo benefit my business?", a: "A professionally designed logo enhances credibility, attracts customers, and differentiates your brand from competitors." },
    { q: "What is the process of getting a logo designed by Brightnestsoft?", a: "We start with a consultation to understand your brand, then create multiple concepts, refine based on feedback, and deliver final files in all formats." },
    { q: "How long does it take to design a logo?", a: "Typically 5–10 days, depending on complexity and revision rounds." },
    { q: "Will I own the copyright for the logo design?", a: "Yes, once payment is completed, you receive full ownership and copyright of the final logo design." },
    { q: "Can I request revisions to the logo design?", a: "Absolutely! We offer up to 3 rounds of revisions to ensure you're 100% satisfied with your logo." },
    { q: "What file formats will I receive for my logo?", a: "You'll receive AI, EPS, PNG, JPG, SVG, and PDF files — perfect for print, web, and social media." },
    { q: "What if I need additional design services?", a: "We offer full branding packages including business cards, letterheads, social media kits, and more." },
    { q: "Can I provide input during the process?", a: "Yes! Your input is crucial — we encourage collaboration to ensure your vision comes to life." }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <motion.section 
        className="bg-[#FFF9F4] py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={fadeInLeft}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-montserrat"
              variants={staggerItem}
            >
              Professional Business Logo Design Service
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 leading-relaxed font-poppins"
              variants={staggerItem}
            >
              Get professional logo design services at affordable prices. Stand out with a unique and memorable logo for your business.
            </motion.p>
            <motion.button 
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md"
            >
              Let's discuss →
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/logo-top.png"
              alt="Logo Design Illustration"
              className="max-w-full h-auto object-contain" 
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1572044162444-ad60f128bde3?q=80&w=2070";
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== SERVICES SECTION ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6 font-montserrat"
            variants={fadeInUp}
          >
            We Offer Affordable Logo Design Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.p 
                className="mb-6 font-poppins leading-relaxed"
                variants={staggerItem}
              >
                At Brightnestsoft, we specialize in creating captivating and memorable logo designs that represent your brand's identity and leave a lasting impression on your audience. 
                Our team of talented designers combines artistic vision with strategic thinking to craft logos that truly stand out.
              </motion.p>
              <motion.div 
                className="space-y-3"
                variants={staggerContainer}
              >
                {[
                  { label: "Custom Logo Design", path: "M5 13l4 4L19 7" },
                  { label: "Logo Redesign", path: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
                  { label: "Brand Logo Development", path: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" }
                ].map((item, idx) => (
                  <motion.div key={idx} className="flex items-start space-x-2" variants={staggerItem}>
                    <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.path} />
                    </svg>
                    <span className="font-poppins">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              variants={fadeInRight}
            >
              <img
                src="/logo-page2.png"
                alt="Logo Designer"
                className="max-w-full h-auto object-contain drop-shadow-lg"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1572044162444-ad60f128bde3?q=80&w=2070";
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====== FAQ SECTION ====== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold font-montserrat text-gray-900 mb-6">
              FAQ's <span className="text-orange-500">Logo Design</span> Services
            </h2>
            <p className="text-gray-600 text-lg font-poppins max-w-2xl mx-auto">
              Unlock the Power of Creativity: Your Logo Design FAQs Answered!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 items-start min-h-[500px]">
            {[0, 1].map((colIndex) => (
              <div key={colIndex} className="space-y-4">
                {faqData.slice(colIndex * 5, (colIndex + 1) * 5).map((faq, i) => {
                  const actualIndex = colIndex * 5 + i;
                  const isOpen = activeIndex === actualIndex;

                  return (
                    <motion.div 
                      key={actualIndex}
                      className={`border-b border-orange-100 transition-colors duration-300 ${
                        isOpen ? 'bg-orange-50/50 rounded-t-xl' : ''
                      }`}
                    >
                      <button
                        onClick={() => setActiveIndex(isOpen ? null : actualIndex)}
                        className="w-full flex justify-between items-center py-5 px-4 text-left font-bold font-poppins text-gray-800 transition-all"
                      >
                        <span className={isOpen ? 'text-orange-600' : 'text-gray-800'}>
                          {faq.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          className="text-orange-500"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="px-4 pb-6 text-gray-600 leading-relaxed font-poppins text-sm md:text-base">
                              {faq.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoDesignPage;