// src/pages/matrimony.jsx
import React, { useState } from 'react'; // Added useState
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

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

const MatrimonyPage = () => {
  // Added state logic
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const scrollToContactForm = () => {
    navigate('/contact#contact-form');
    
    // Scroll to form after navigation
    setTimeout(() => {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }; 

  const faqData = [
    {
      question: "What does your matrimony website design offer?",
      answer: "We offer custom-designed, secure, and mobile-friendly matrimony websites with SEO optimization and ongoing support."
    },
    {
      question: "Can you customize the design of matrimony websites to match our brand's identity?",
      answer: "Yes! We tailor every design to reflect your brand's colors, logo, and messaging for a unique and cohesive look."
    },
    {
      question: "How long does it take to develop a matrimony website with your company?",
      answer: "Typically 4–8 weeks, depending on complexity, features, and feedback cycles."
    },
    {
      question: "What features can we expect in a matrimony website developed by your company?",
      answer: "Features include user profiles, search filters, messaging, photo galleries, payment gateways, admin dashboard, and mobile responsiveness."
    },
    {
      question: "Do you provide ongoing support and maintenance for matrimony websites?",
      answer: "Yes! We offer monthly maintenance plans including updates, security patches, backups, and technical support."
    },
    {
      question: "How do I start a matrimony website?",
      answer: "Start with a consultation — we'll discuss your goals, audience, and features, then create a custom plan and timeline."
    },
    {
      question: "How much does it cost to develop a matrimony app?",
      answer: "Pricing varies based on features, complexity, and platform (iOS/Android/Web). Contact us for a customized quote."
    },
    {
      question: "How much does it cost to build a matrimonial website in India?",
      answer: "Starting from ₹50,000 for basic sites, up to ₹3,00,000+ for premium, feature-rich platforms."
    }
  ];

  // Split data into two columns for the grid
  const leftCol = faqData.slice(0, 4);
  const rightCol = faqData.slice(4);
  
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
              Matrimony Website Design Company in Coimbatore
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={staggerItem}
            >
              Are you in the business of matchmaking or operating a matrimony service in Coimbatore? 
              In today's digital age, having an attractive and functional matrimony website is essential to connect potential life partners. 
              Look no further for the best matrimony website design services in Coimbatore.
            </motion.p>
            <motion.button 
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               onClick={scrollToContactForm}
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
              src="./matrimony-web-development.png"
              alt="Matrimony Illustration"
              className="max-w-full h-auto" 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== SECTION 2: Internet Website Designers for Matrimony ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            variants={fadeInLeft}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              variants={staggerItem}
            >
              Internet Website Designers for Matrimony
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={staggerItem}
            >
              At Brightnest, we understand the importance of creating a platform where hearts meet and relationships blossom. 
              Our mission is to help you in your endeavor to bring together individuals searching for love and companionship. 
              We stand out among matrimony website design companies in Coimbatore with our commitment to excellence. 
            </motion.p>
            <motion.div 
              className="flex items-center gap-4"
              variants={staggerItem}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                 onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md flex-1"
              >
                Crafting Love Stories Online →
              </motion.button>
              <span className="text-gray-600 font-medium whitespace-nowrap">or</span>
              <a 
                href="tel:+919342570575" 
                className="text-orange-500 font-semibold hover:underline flex-1 text-center"
              >
                Call Us +91 9342570575
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="./developers.svg "
              alt="Team Working"
              className="max-w-full h-auto" 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== SECTION 3: We Offer Affordable Matrimony Web Design ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]"
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
              We Offer Affordable Matrimony Web Design Company in Coimbatore
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={staggerItem}
            >
              We are not just a web design company; we are your partner in crafting love stories online. 
              Our designs are not only visually appealing but also highly functional, making the journey of finding love a seamless experience. 
            </motion.p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="./teamwork.svg"
              alt="Agency Team"
              className="max-w-full h-auto" 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== SECTION 4: What Sets Us Apart ====== */}
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
            What Sets Us Apart
          </motion.h2>
          <motion.p 
            className="text-center text-lg mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Discover Brightnest's Professional Website Solutions
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                title: "User-Focused Design",
                desc: "We know that your users are at the heart of your business. Our designs are tailored to offer an intuitive user experience."
              },
              { 
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "Security and Privacy",
                desc: "In the world of matrimony, trust is paramount. We implement robust security measures to ensure safety."
              },
              { 
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Mobile Compatibility",
                desc: "Our designs are mobile-responsive, ensuring that your website works beautifully on all smartphones."
              },
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "SEO for Visibility",
                desc: "Your matrimony website deserves to be found. We implement SEO strategies to enhance visibility."
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
              Don't wait any longer to make your mark in the matrimony industry.
            </motion.h2>
            <motion.button 
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               onClick={scrollToContactForm}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4"
            >
              let's create a matrimony website →
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="./coding.png"
              alt="Matrimony CTA"
              className="max-w-full h-auto" 
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
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-6" variants={fadeInUp}>
            FAQ's Matrimony Web Design Services
          </motion.h2>
          <motion.p className="text-center text-lg mb-12 max-w-3xl mx-auto" variants={fadeInUp}>
            Unlock the Power of Creativity: Your Matrimony Web Design FAQs Answered!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {[leftCol, rightCol].map((column, colIdx) => (
              <motion.div key={colIdx} className="space-y-4" variants={colIdx === 0 ? fadeInLeft : fadeInRight}>
                {column.map((faq, i) => {
                  const globalIndex = colIdx === 0 ? i : i + 4;
                  const isOpen = activeIndex === globalIndex;

                  return (
                    <div key={globalIndex} className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => setActiveIndex(isOpen ? -1 : globalIndex)}
                        className="w-full flex justify-between items-center font-medium cursor-pointer text-left py-2"
                      >
                        <span className={isOpen ? "text-orange-600" : "text-gray-900"}>{faq.question}</span>
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 80, opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-y-auto mt-2 pr-2 text-gray-600 custom-scrollbar"
                          >
                            <p>{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MatrimonyPage;