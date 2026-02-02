// src/pages/web-design.jsx
import React, { useState } from 'react'; // Added useState here
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

const WebDesignPage = () => {
  const navigate = useNavigate(); 
  const [activeIndex, setActiveIndex] = useState(0);
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
    { q: "What is website design?", a: "Website design is the process of planning, conceptualizing, and arranging content online. It involves creating the layout, visual elements, and user interface of a website." },
    { q: "Why is website design important for my business?", a: "A well-designed website builds trust, enhances credibility, and improves user experience — directly impacting conversions and customer retention." },
    { q: "What services does Brightnestsoft offer in website design?", a: "We offer custom website development, responsive design, UI/UX design, SEO optimization, e-commerce solutions, and ongoing maintenance." },
    { q: "How long does it take to design and develop a website?", a: "Typically 2–6 weeks, depending on complexity, revisions, and content readiness." },
    { q: "Can I have input in the website design process?", a: "Absolutely! Your feedback and vision are integral to our collaborative design process." },
    { q: "Do you redesign existing websites?", a: "Yes, we specialize in modernizing and optimizing existing websites for better performance, design, and user experience." },
    { q: "Will my website be mobile-friendly?", a: "Yes! All websites we design are fully responsive and tested across all device sizes." },
    { q: "Can you optimize my website for search engines (SEO)?", a: "Yes, we build SEO-optimized websites with semantic HTML, fast loading speeds, and structured data to help you rank higher." },
    { q: "Will my website be easy to update and maintain?", a: "We use modern CMS platforms or provide training so you can easily manage your site content." },
    { q: "What about website hosting and domain registration?", a: "We offer domain registration and reliable hosting packages tailored to your project's needs." },
    { q: "Can you provide ongoing support and maintenance after the website is launched?", a: "Yes! We offer monthly maintenance plans including updates, backups, security checks, and technical support." },
    { q: "Types of website design", a: "We design static sites, dynamic sites, e-commerce stores, portfolios, blogs, and custom web applications." }
  ];

  // Defined these constants here to fix the "not defined" errors
  const leftCol = faqData.slice(0, 6);
  const rightCol = faqData.slice(6);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <motion.section 
        className="bg-[#FFF2EA] py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <motion.div className="lg:w-1/2" variants={fadeInLeft}>
            <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" variants={staggerItem}>
              Affordable Choice for Web Design Company in Coimbatore
            </motion.h1>
            <motion.p className="text-lg mb-8 leading-relaxed" variants={staggerItem}>
              At Brightnestsoft, we are your premier and affordable choice for{" "}
              <span className="text-orange-500 font-semibold">web design services in Coimbatore</span>. 
              Your premier destination for exceptional website design and top-tier web development services in Coimbatore! 
              We take immense pride in offering comprehensive web solutions that are not only budget-friendly but also guarantee top-notch quality and outstanding results. 
            </motion.p>
            <motion.div className="flex flex-row items-center gap-4 mt-8" variants={staggerItem}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                 onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md whitespace-nowrap"
              >
                Start Your Website Now →
              </motion.button>
              <span className="text-gray-600">or</span>
              <Link to="tel:+919342570575" className="text-orange-500 font-semibold hover:underline whitespace-nowrap">
                Call Us +91 9342570575
              </Link>
            </motion.div>
          </motion.div>
          <motion.div className="lg:w-1/2 flex justify-center" variants={fadeInRight}>
            <img src="./web-des.png" alt="Web Design Illustration" className="max-w-full h-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== WHY WE ARE CONSIDERED THE BEST ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12" variants={fadeInUp}>
            Why We Are Considered the Best Web Design Company in Coimbatore
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "We wear the badge of the <span class='font-bold text-orange-500'>best web design Coimbatore company</span> with pride. This has been possible due to our relentless pursuit of excellence in ecommerce web development.",
              "Our acumen goes beyond building visually appealing websites. We make sure they're designed to do business.",
              "We consider various factors such as loading speed, UX design, SEO optimization, and so much more while developing your platform.",
              "It's crucial for us that you understand what you're investing in. Speaking of investment, our <span class='font-bold text-orange-500'>website design pricing and packages</span> have been laid out transparently.",
              "Our commitment extends to a fair pricing model that doesn't compromise on quality or service."
            ].map((content, index) => (
              <motion.div key={index} className="flex items-start space-x-3" variants={staggerItem}>
                <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-12 flex flex-row items-center justify-center gap-4 flex-wrap" variants={staggerItem}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-all duration-300 shadow-md whitespace-nowrap"
            >
              Start Your Website Now →
            </motion.button>
            <span className="text-gray-600">or</span>
            <Link to="tel:+919342570575" className="text-orange-500 font-semibold hover:underline whitespace-nowrap">
              Call Us +91 9342570575
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ====== COMPREHENSIVE WEB DEVELOPMENT SECTION ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF2EA]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-6" variants={fadeInUp}>
            Comprehensive Website Development Services in Coimbatore
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeInLeft}>
              <motion.ul className="space-y-4" variants={staggerContainer}>
                {[
                  "An insight into our services takes you through a labyrinth of <span class='font-bold text-orange-500'>digital solutions</span>.",
                  "Our team is no ordinary web design Coimbatore company. We have domain experts who pose years of experience.",
                  "Don't worry, our website design pricing and packages cater to every type of business.",
                  "We don't define your needs; rather, the requirements of your business shape <span class='font-bold text-orange-500'>our services</span>.",
                  "From technicalities to aesthetics, we revolutionize the user experience."
                ].map((content, index) => (
                  <motion.li key={index} className="flex items-start space-x-2" variants={staggerItem}>
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: content }} />
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div className="mt-8 flex flex-row items-center gap-4" variants={staggerItem}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                   onClick={scrollToContactForm}
                  className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md whitespace-nowrap"
                >
                  Start Your Website Now →
                </motion.button>
                <span className="text-gray-600">or</span>
                <Link to="tel:+919342570575" className="text-orange-500 font-semibold hover:underline whitespace-nowrap">
                  Call Us +91 9342570575
                </Link>
              </motion.div>
            </motion.div>
            <motion.div className="flex justify-center" variants={fadeInRight}>
              <img src="./developers.svg" alt="Team Working" className="max-w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====== RESPONSIVE WEB DESIGNS SECTION ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-6" variants={fadeInUp}>
            Responsive Web Designs: Efficiency and Aesthetics Combined
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div className="flex justify-center order-2 md:order-1" variants={fadeInLeft}>
              <img src="./teamwork.svg" alt="Responsive Design" className="max-w-full h-auto" />
            </motion.div>
            <motion.div variants={fadeInRight} className="order-1 md:order-2">
              <motion.p className="mb-4" variants={staggerItem}>
                What's a website without responsiveness? Our methods pivot around essential responsiveness for any screen size.
              </motion.p>
              <motion.ul className="space-y-4" variants={staggerContainer}>
                {[
                  "We blend efficiency and aesthetics to deliver an unrivaled digital experience.",
                  "Cost-effective solutions without compromising on quality.",
                  "A partnership with a team passionate about your digital presence.",
                  "The finest web design company in Coimbatore."
                ].map((content, index) => (
                  <motion.li key={index} className="flex items-start space-x-2" variants={staggerItem}>
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{content}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div className="mt-8 flex flex-row items-center gap-4 flex-wrap" variants={staggerItem}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                    onClick={scrollToContactForm}
                  className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md whitespace-nowrap"
                >
                  Start Your Website Now →
                </motion.button>
                <span className="text-gray-600">or</span>
                <Link to="tel:+919342570575" className="text-orange-500 font-semibold hover:underline whitespace-nowrap">
                  Call Us +91 9342570575
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====== TRANSFORM YOUR ONLINE BUSINESS SECTION ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-6" variants={fadeInUp}>
            Transform Your Online Business
          </motion.h2>
          <motion.p className="text-center text-lg mb-12 max-w-3xl mx-auto" variants={fadeInUp}>
            Discover Brightnestsoft's Professional Website Solutions
          </motion.p>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div className="lg:w-1/2" variants={fadeInLeft}>
              <img src="./web-top4.png" alt="Transform Business" className="max-w-full h-auto" />
            </motion.div>
            <motion.div className="lg:w-1/2" variants={fadeInRight}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                 onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mb-6"
              >
                Explore Pricing →
              </motion.button>
              <motion.p className="text-gray-600 mt-4" variants={staggerItem}>
                Looking for quality digital solutions for your business? Brightnestsoft is the best in India, USA, UAE, and Singapore.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====== FAQ SECTION ====== */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF2EA]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-6" variants={fadeInUp}>
            FAQ's Web Design Services
          </motion.h2>
          <motion.p className="text-center text-lg mb-12 max-w-3xl mx-auto" variants={fadeInUp}>
            Unlock the Power of Creativity: Your Web Design FAQs Answered!
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {[leftCol, rightCol].map((column, colIdx) => (
              <motion.div key={colIdx} className="space-y-4" variants={colIdx === 0 ? fadeInLeft : fadeInRight}>
                {column.map((item, i) => {
                  const globalIndex = colIdx === 0 ? i : i + 6;
                  const isOpen = activeIndex === globalIndex;
                  return (
                    <div key={globalIndex} className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => setActiveIndex(isOpen ? -1 : globalIndex)}
                        className="w-full flex justify-between items-center font-medium cursor-pointer text-left py-2"
                      >
                        <span className={isOpen ? "text-orange-500" : "text-gray-900"}>{item.q}</span>
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
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
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-2 pr-2 text-gray-600"
                          >
                            <p className="pb-4">{item.a}</p>
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

export default WebDesignPage;