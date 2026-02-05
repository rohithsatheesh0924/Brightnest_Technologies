// src/pages/ecommerce.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Animation Variants (unchanged)
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

const ECommercePage = () => {
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

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <motion.section 
        className="py-12 md:py-6 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              variants={fadeInLeft}
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                variants={staggerItem}
              >
                Elevate Your Online Business with Brightnest's Expert E-Commerce Website Development Services!
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg mb-8 leading-relaxed"
                variants={staggerItem}
              >
                Transform your vision into a stunning online store with our comprehensive E-Commerce website development services. 
                Our expert team combines <span className="font-bold text-orange-500">creative design</span>, seamless functionality, and user-friendly interfaces to deliver an engaging and profitable digital shopping experience.
              </motion.p>
              <motion.button 
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto mx-auto lg:mx-0"
              >
                Explore Pricing →
              </motion.button>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
              variants={fadeInRight}
            >
              <img
                src="./ecm.png"
                alt="E-Commerce Illustration"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ====== SERVICES GRID SECTION ====== */}
      <motion.section 
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6"
            variants={fadeInUp}
          >
            Unleash Your E-Commerce Potential with Brightnest
          </motion.h2>
          <motion.p 
            className="text-center text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Experience Seamless E-Commerce Growth: Discover Brightnest's Expert Website Development Services
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                title: "Custom E-Commerce Website Development",
                desc: "Our skilled developers create bespoke e-commerce websites that reflect your brand identity, engage your customers, and drive conversions. With a user-centric approach, we design intuitive interfaces and seamless shopping experiences that leave a lasting impression."
              },
              { 
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "Responsive and Optimization",
                desc: "We ensure your e-commerce website is fully optimized for all devices and screen sizes. Our responsive design techniques guarantee a flawless user experience, allowing your customers to browse and purchase products effortlessly, whether they're on desktop, mobile, or tablet."
              },
              { 
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "E-Commerce Platform Integration",
                desc: "We specialize in integrating leading e-commerce platforms such as Shopify, WooCommerce, Magento, and more. Our expertise in seamless integration ensures smooth functionality, secure transactions, and efficient inventory management."
              },
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "User Experience (UX) Enhancement",
                desc: "Our UX experts analyze user behavior and preferences to optimize your website's design and layout. We focus on enhancing navigation, simplifying the buying process, and implementing persuasive calls-to-action to increase conversions and drive customer satisfaction."
              },
              { 
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Website Maintenance and Support",
                desc: "At Brightnest, we provide ongoing maintenance and support services to ensure your e-commerce website operates flawlessly. We handle updates, security patches, bug fixes, and offer prompt technical assistance to keep your online store running smoothly."
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
                <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ====== CTA SECTION ====== */}
      <motion.section 
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
              variants={fadeInLeft}
            >
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                variants={staggerItem}
              >
                Empower Your Online Store: Partner with Brightnest for Cutting-Edge E-Commerce
              </motion.h2>
              <motion.button 
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto mx-auto lg:mx-0"
              >
                Explore Pricing →
              </motion.button>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2 flex justify-center mt-8 lg:mt-0"
              variants={fadeInRight}
            >
              <img
                src="./ecom1.png"
                alt="Online Store Illustration"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ECommercePage;