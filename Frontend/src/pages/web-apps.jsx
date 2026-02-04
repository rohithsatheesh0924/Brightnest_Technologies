// src/pages/web-apps.jsx
import React from 'react';
import { motion } from 'framer-motion';
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

const WebAppsPage = () => {
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
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <motion.section 
        className="bg-[#FFF9F4] py-8 px-4 sm:px-6 lg:px-8"
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
              Elevate Your Web Experience with Creative Web App Design in Coimbatore
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={staggerItem}
            >
              At Brightnestsoft, we are passionate about pushing the boundaries of web app design in Coimbatore. 
              With a team of highly skilled professionals and a wealth of experience, we strive to deliver exceptional digital solutions that make a lasting impact. 
              We believe in combining creativity, technical expertise, and strategic thinking to create web apps that stand out in the competitive online landscape.
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
              src="./webapp.png"
              alt="Web App Illustration"
               className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== SECTION 2: Brightnestsoft Experience Seamless User Journeys ====== */}
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
              Brightnest Experience Seamless User Journeys with Customized Web App Design in Coimbatore
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={staggerItem}
            >
              At Brightnest, we embrace design innovation and constantly explore new techniques and trends. 
              Our aim is to create web app designs that not only meet industry standards but also push creative boundaries.
            </motion.p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="./teamwork.svg"
              alt="Team Working"
               className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== SECTION 3: Unleash Your Business Potential ====== */}
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
            Unleash Your Business Potential with Innovative Web App Design in Coimbatore
          </motion.h2>
          <motion.p 
            className="text-center text-lg mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Transforming Ideas into Engaging Web Apps
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                title: "Web App Design",
                desc: "Our team of talented designers creates stunning and intuitive web app designs tailored to your unique requirements. We blend creativity and functionality to deliver visually appealing interfaces that enhance user engagement."
              },
              { 
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "User Experience (UX) Design",
                desc: "We prioritize user-centric design principles to ensure seamless navigation and an intuitive user experience. Our UX experts conduct in-depth research to understand your target audience and design interfaces that exceed their expectations."
              },
              { 
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Responsive Web Design",
                desc: "In today's mobile-first world, responsiveness is key. We design web apps that adapt effortlessly to different devices and screen sizes, ensuring a consistent and enjoyable user experience across platforms."
              },
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Prototype Development",
                desc: "Before diving into full-scale development, we create interactive prototypes that allow you to visualize the functionality and flow of your web app. This collaborative process ensures that we align our design with your vision."
              },
              { 
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Interactive UI Elements",
                desc: "We incorporate interactive elements, such as animations, transitions, and microinteractions, to make your web app engaging and memorable. Our designers skillfully balance aesthetics and interactivity to create immersive digital experiences."
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
              Stand Out from the Crowd with Cutting-Edge Web App Design in Coimbatore
            </motion.h2>
            <motion.button 
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
               onClick={scrollToContactForm}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4"
            >
              Build Now! →
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="./webapp1.png"
              alt="Web App CTA"
               className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default WebAppsPage;
