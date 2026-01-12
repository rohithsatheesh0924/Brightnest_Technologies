// src/pages/logo-design.jsx
import React from 'react';
import { motion } from 'framer-motion';
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
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              variants={staggerItem}
            >
              Professional Business Logo Design Service
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
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
            variants={fadeInRight}
          >
            <img
              src="/images/logo-hero-illustration.png"
              alt="Logo Design Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
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
            className="text-3xl md:text-4xl font-bold text-center mb-6"
            variants={fadeInUp}
          >
            We Offer Affordable Logo Design Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft}>
              <motion.p 
                className="mb-6"
                variants={staggerItem}
              >
                At Brightnestsoft, we specialize in creating captivating and memorable logo designs that represent your brand's identity and leave a lasting impression on your audience. 
                Our team of talented designers combines artistic vision with strategic thinking to craft logos that truly stand out.
              </motion.p>
              <motion.div 
                className="space-y-3"
                variants={staggerContainer}
              >
                <motion.div className="flex items-start space-x-2" variants={staggerItem}>
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom Logo Design</span>
                </motion.div>
                <motion.div className="flex items-start space-x-2" variants={staggerItem}>
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Logo Redesign</span>
                </motion.div>
                <motion.div className="flex items-start space-x-2" variants={staggerItem}>
                  <svg className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Brand Logo Development</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex justify-center"
              variants={fadeInRight}
            >
              <img
                src="/images/logo-services-illustration.png"
                alt="Logo Designer"
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====== FAQ SECTION ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-6"
            variants={fadeInUp}
          >
            FAQ's Logo Design Services
          </motion.h2>
          <motion.p 
            className="text-center text-lg mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Unlock the Power of Creativity: Your Logo Design FAQs Answered!
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div className="space-y-4" variants={fadeInLeft}>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What is logo design?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  Logo design is the process of creating a visual symbol or emblem that represents a brand, company, or product. It should be simple, memorable, and scalable.
                </motion.p>
              </motion.details>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Why is a logo important for my business?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  A strong logo builds brand recognition, conveys professionalism, and helps customers identify and remember your business.
                </motion.p>
              </motion.details>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How can a professionally designed logo benefit my business?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  A professionally designed logo enhances credibility, attracts customers, and differentiates your brand from competitors.
                </motion.p>
              </motion.details>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What is the process of getting a logo designed by Brightnestsoft?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  We start with a consultation to understand your brand, then create multiple concepts, refine based on feedback, and deliver final files in all formats.
                </motion.p>
              </motion.details>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How long does it take to design a logo?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  Typically 5–10 days, depending on complexity and revision rounds.
                </motion.p>
              </motion.details>
            </motion.div>
            <motion.div className="space-y-4" variants={fadeInRight}>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Will I own the copyright for the logo design?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  Yes, once payment is completed, you receive full ownership and copyright of the final logo design.
                </motion.p>
              </motion.details>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can I request revisions to the logo design?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  Absolutely! We offer up to 3 rounds of revisions to ensure you're 100% satisfied with your logo.
                </motion.p>
              </motion.details>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What file formats will I receive for my logo?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  You'll receive AI, EPS, PNG, JPG, SVG, and PDF files — perfect for print, web, and social media.
                </motion.p>
              </motion.details>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What if I need additional design services along with the logo?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  We offer full branding packages including business cards, letterheads, social media kits, and more.
                </motion.p>
              </motion.details>
              <motion.details 
                className="group border-b border-gray-200 pb-4"
                variants={staggerItem}
                whileHover={{ y: -2 }}
              >
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can I provide input or ideas during the logo design process?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <motion.p 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  Yes! Your input is crucial — we encourage collaboration to ensure your vision comes to life.
                </motion.p>
              </motion.details>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default LogoDesignPage;
