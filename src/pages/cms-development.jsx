// src/pages/cms-development.jsx
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

const CMSDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <motion.section 
        className=" py-16 px-4 sm:px-6 lg:px-8"
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
              Streamline Your Online Presence with Brightnestsoft Professional CMS Website Development
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={staggerItem}
            >
              At Brightnestsoft, we specialize in providing professional CMS (Content Management System) website development services that empower businesses to effectively manage and showcase their online content. 
              Our team of skilled developers and designers are experienced in creating dynamic and user-friendly CMS websites.
            </motion.p>
            <motion.button 
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md"
            >
              Explore Pricing →
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="/images/cms-hero-illustration.png"
              alt="CMS Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== SERVICES GRID SECTION ====== */}
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
            Transform Your Digital Experience with Brightnestsoft Custom CMS Website Solutions
          </motion.h2>
          <motion.p 
            className="text-center text-lg mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            We are dedicated to empowering businesses with professional CMS website development services. 
            Our team combines technical expertise and creative insights to create dynamic and user-friendly websites that enable seamless content management.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                title: "CMS Selection and Integration",
                desc: "We assist in selecting the most suitable CMS for your specific requirements. Whether it's WordPress, Drupal, Joomla, or another CMS, we seamlessly integrate the chosen system into your website, ensuring a smooth and efficient content management process."
              },
              { 
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "Responsive Design",
                desc: "We ensure your CMS website is responsive and optimized for seamless viewing across various devices and screen sizes. Our experts implement responsive design techniques to deliver an optimal user experience, regardless of the device being used."
              },
              { 
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Theme and Template Customization",
                desc: "Brightnestsoft offers theme and template customization services to ensure your CMS website stands out from the crowd. We work closely with you to understand your design preferences and branding guidelines, resulting in a visually appealing and unique website."
              },
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Content Organization and Structuring",
                desc: "Our team helps you organize and structure your website's content in a logical and user-friendly way. We assist in designing navigation menus, implementing categories and tags, and creating an information architecture that enhances user experience and facilitates content discovery."
              },
              { 
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Training and Support",
                desc: "Brightnestsoft provides comprehensive training and ongoing support to ensure you can effectively manage and update your CMS website. We offer guidance on content creation, system usage, and troubleshooting, empowering you to make the most of your CMS platform."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ====== CTA SECTION ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
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
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              variants={staggerItem}
            >
              Choose Brightnestsoft for Professional CMS Website Development
            </motion.h2>
            <motion.button 
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4"
            >
              Explore Pricing →
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="/images/cms-cta-illustration.png"
              alt="CMS Development Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
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
            FAQ's CMS Website Development Services
          </motion.h2>
          <motion.p 
            className="text-center text-lg mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Unlock the Power of Creativity: Your CMS Website Development FAQs Answered!
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div className="space-y-4" variants={fadeInLeft}>
              {[
                {
                  question: "What are CMS Website Development Services?",
                  answer: "CMS Website Development Services involve creating and customizing websites using Content Management Systems like WordPress, Drupal, or Joomla, allowing easy content updates without coding."
                },
                {
                  question: "Which CMS platforms does Brightnestsoft specialize in?",
                  answer: "We specialize in WordPress, Drupal, Joomla, and other popular CMS platforms tailored to your business needs."
                },
                {
                  question: "Can Brightnestsoft customize the design and layout of a CMS website?",
                  answer: "Yes! We offer full theme and template customization to match your brand identity and design preferences."
                }
              ].map((faq, index) => (
                <motion.details 
                  key={index}
                  className="group border-b border-gray-200 pb-4"
                  variants={staggerItem}
                  whileHover={{ y: -2 }}
                >
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>{faq.question}</span>
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
                    {faq.answer}
                  </motion.p>
                </motion.details>
              ))}
            </motion.div>
            <motion.div className="space-y-4" variants={fadeInRight}>
              {[
                {
                  question: "Does Brightnestsoft provide CMS website maintenance and support?",
                  answer: "Absolutely! We offer ongoing maintenance, security updates, and technical support to keep your site running smoothly."
                },
                {
                  question: "Can I migrate an existing website to a CMS platform?",
                  answer: "Yes, we handle seamless migration of your existing website to any CMS platform while preserving your content and SEO."
                }
              ].map((faq, index) => (
                <motion.details 
                  key={index}
                  className="group border-b border-gray-200 pb-4"
                  variants={staggerItem}
                  whileHover={{ y: -2 }}
                >
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>{faq.question}</span>
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
                    {faq.answer}
                  </motion.p>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CMSDevelopmentPage;
