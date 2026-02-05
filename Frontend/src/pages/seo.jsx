// src/pages/seo.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SEOPage = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  
  const scrollToContactForm = () => {
    navigate('/contact#contact-form');
    setTimeout(() => {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const faqData = [
    {
      q: "Why is SEO important for my business?",
      a: "SEO helps your website rank higher in search engine results, driving more organic traffic and potential customers to your site."
    },
    {
      q: "How long does it take to see results from SEO?",
      a: "Results typically take 3–6 months, depending on competition, industry, and current website health."
    },
    {
      q: "Can SEO help my local business in Coimbatore?",
      a: "Absolutely! Local SEO helps your business appear in local searches, attracting nearby customers."
    },
    {
      q: "Is it necessary to hire an SEO company for my business?",
      a: "While you can do SEO yourself, hiring experts saves time and ensures best practices are followed for optimal results."
    },
    {
      q: "How does Brightnest’s SEO service work?",
      a: "We start with an audit, then create a custom strategy, implement optimizations, and provide ongoing reporting and adjustments."
    },
    {
      q: "Can SEO really make a difference for my local business in Coimbatore?",
      a: "Yes! SEO increases visibility, drives targeted traffic, and boosts conversions — essential for local business growth."
    },
    {
      q: "How long does it take to see results from SEO efforts?",
      a: "Most clients see measurable improvements within 3–6 months, with continued growth over time."
    },
    {
      q: "Can you optimize my website for search engines (SEO)?",
      a: "Yes! We optimize on-page elements, technical structure, and content to align with search engine guidelines."
    },
    {
      q: "How does SEO contribute to my website’s overall user experience?",
      a: "Good SEO improves site speed, mobile-friendliness, and content clarity — all of which enhance user experience."
    },
    {
      q: "Can Brightnest help with content creation for SEO purposes?",
      a: "Yes! We create high-quality, keyword-optimized content that engages users and ranks well in search engines."
    },
    {
      q: "How will Brightnest measure the success of my SEO campaign?",
      a: "We use analytics tools to track traffic, rankings, conversions, and ROI — providing clear, actionable insights."
    }
  ];

  const leftCol = faqData.slice(0, 6);
  const rightCol = faqData.slice(6);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Leading SEO Company in Coimbatore
              </h1>
              <p className="text-base md:text-lg mb-8 leading-relaxed">
                Brightnest, the leading SEO company in Coimbatore! Our team of expert professionals is dedicated to helping your business reach new heights by implementing effective SEO strategies. 
                As the top SEO company in Coimbatore, we have a proven track record of delivering exceptional results to businesses of all sizes.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto mx-auto lg:mx-0"
              >
                Let’s discuss →
              </motion.button>
            </div>
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <img
                src="./seo.png"
                alt="SEO Illustration"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: Comprehensive SEO Services ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive SEO Services
              </h2>
              <p className="text-base md:text-lg mb-8 leading-relaxed">
                At Brightnest, we understand that search engine optimization is crucial for visibility and driving targeted traffic to your website. 
                Our comprehensive SEO services are tailored to meet your specific needs and goals. 
                Whether you’re a local business in Coimbatore or looking to expand your reach globally, we have the expertise to help you achieve your objectives.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <img
                src="./teamwork.svg"
                alt="Team Working"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: Unleash Your Business Potential ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
            Unleash Your Business Potential with Innovative Web App Design in Coimbatore
          </h2>
          <p className="text-center text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            Transforming Ideas into Engaging Web Apps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                title: "Experience and Expertise",
                desc: "With years of experience in the industry, we have honed our skills and knowledge to provide you with top-notch SEO solutions. Our team of SEO experts stays up-to-date with the latest trends and algorithms to ensure your website stays ahead of the competition."
              },
              { 
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "Customized Strategies",
                desc: "We understand that each business is unique, which is why we develop customized SEO strategies tailored to your specific goals. Whether you need on-page optimization, off-page link building, keyword research, or content creation, we have you covered."
              },
              { 
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Results-Driven Approach",
                desc: "Our main focus is on delivering tangible results for your business. We continuously monitor and analyze the performance of your website, making data-driven adjustments to improve its visibility and rankings on search engine result pages (SERPs)."
              },
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Ethical Practices",
                desc: "Brightnest strictly adheres to white hat SEO practices. We prioritize ethical strategies that comply with search engine guidelines, ensuring long-term success for your website."
              },
              { 
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Transparent Reporting",
                desc: "We believe in complete transparency when it comes to our SEO services. You will receive regular reports detailing the progress of your campaign, including keyword rankings, organic traffic growth, and other key performance indicators."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Unlock Your Website’s Potential with Brightnest - The Top SEO Company in Coimbatore
              </h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto mx-auto lg:mx-0"
              >
                Explore Pricing →
              </motion.button>
            </div>
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <img
                src="./seo2 (2).png"
                alt="SEO CTA"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-gray-900">
            FAQ's SEO Services
          </h2>
          <p className="text-center text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto text-gray-700">
            Maximize Your Online Success with Brightnest - The Best SEO Company in Coimbatore
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {leftCol.map((faq, i) => {
                const globalIndex = i;
                const isOpen = activeIndex === globalIndex;

                return (
                  <div key={globalIndex} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => setActiveIndex(isOpen ? -1 : globalIndex)}
                      className="w-full flex justify-between items-center font-medium cursor-pointer text-left py-2 text-sm md:text-base"
                    >
                      <span className={isOpen ? "text-orange-600" : "text-gray-900"}>
                        {faq.q}
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 pr-2 text-gray-600 text-sm"
                        >
                          <p className="pb-4">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {rightCol.map((faq, i) => {
                const globalIndex = i + 6;
                const isOpen = activeIndex === globalIndex;

                return (
                  <div key={globalIndex} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => setActiveIndex(isOpen ? -1 : globalIndex)}
                      className="w-full flex justify-between items-center font-medium cursor-pointer text-left py-2 text-sm md:text-base"
                    >
                      <span className={isOpen ? "text-orange-600" : "text-gray-900"}>
                        {faq.q}
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 pr-2 text-gray-600 text-sm"
                        >
                          <p className="pb-4">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOPage;