// src/pages/social-media.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SocialMediaPage = () => {
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
      <section className="py-12 md:py-6 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Boost Your Online Presence with Expert Social Media Optimization Services in Coimbatore
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Welcome to Brightnest, your trusted destination for top-notch Social Media Optimization (SMO) services in Coimbatore. 
                With our expert team of digital marketing professionals, we specialize in boosting your online presence and driving unparalleled success through optimized social media strategies.
              </motion.p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto mx-auto lg:mx-0"
              >
                Let’s discuss →
              </motion.button>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="./social-media.png"
                alt="SMO Illustration"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: Drive Social Media Success ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Drive Social Media Success with Proven Optimization Services in Coimbatore
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At Brightnest, we understand the significance of social media in today's digital landscape. 
                Our goal is to empower businesses like yours to maximize their reach, engage with the target audience, and establish a strong brand presence across various social media platforms. 
                Through our comprehensive SMO services, we ensure that your brand shines brightly amidst the competitive market in Coimbatore. 
                Our approach to SMO revolves around leveraging cutting-edge techniques and industry best practices. 
                We begin by conducting an in-depth analysis of your business, target audience, and competitors. 
                This allows us to formulate a tailored SMO strategy that aligns with your specific goals and objectives.
              </motion.p>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="./teamwork.svg"
                alt="Team Working"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: Accelerate Your Social Media Success ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Accelerate Your Social Media Success Professional Optimization Services in Coimbatore
          </motion.h2>
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto mx-auto lg:mx-0"
              >
                Explore Now! →
              </motion.button>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="./digital-marketing.png"
                alt="SMO CTA"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;