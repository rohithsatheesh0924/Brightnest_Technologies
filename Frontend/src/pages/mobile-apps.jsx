// src/pages/mobile-apps.jsx
import React from 'react';
import { motion } from 'framer-motion';
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

const MobileAppsPage = () => {
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
              Mobile App Development Company In Coimbatore
            </motion.h1>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={staggerItem}
            >
              We specialize in creating high-quality mobile applications that cater to your business needs. 
              Our experienced team of developers excels in crafting customized solutions for various platforms, including iOS and Android. 
              Whether you require a native app or a cross-platform solution, we have the expertise to deliver exceptional results.
            </motion.p>
            <motion.button 
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContactForm}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md"
            >
              Let's discuss →
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="./mobile-app.png"
              alt="Mobile App Illustration"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== SECTION 2: Brightnest Mobile App Development Agency ====== */}
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
              Brightnest Mobile App Development Agency
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 leading-relaxed"
              variants={staggerItem}
            >
              At Brightnest, we are a premier mobile app development agency based in Coimbatore. 
              Our passion lies in leveraging the latest technologies and trends to transform ideas into innovative mobile applications. 
              With a dedicated team of experts and a customer-centric approach, we strive to deliver exceptional results that drive business growth. 
              Our focus on quality, reliability, and user experience sets us apart as a trusted partner for businesses looking to harness the power of mobile technology.
            </motion.p>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="./app-development.png"
              alt="Agency Team"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ====== SECTION 3: Custom Web App Development In Coimbatore ====== */}
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
            Custom Web App Development In Coimbatore
          </motion.h2>
          <motion.p 
            className="text-center text-lg mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Drive Success with Custom Mobile Apps
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                title: "UI/UX Design",
                desc: "Our UI/UX design services are focused on creating intuitive and visually appealing apps. We understand the importance of user-centric design and strive to provide seamless experiences that captivate your audience. From wireframing and prototyping to user testing and refinement, we ensure that your app stands out with its user-friendly interface."
              },
              { 
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "App Testing and Quality Assurance",
                desc: "At Brightnest, we prioritize the quality and performance of our mobile apps. Our dedicated testing and quality assurance team conducts rigorous testing to identify any potential issues or bugs. By implementing comprehensive testing strategies, we guarantee that your app functions flawlessly across different devices and platforms, providing a seamless user experience."
              },
              { 
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "App Maintenance and Support",
                desc: "We believe in establishing long-term partnerships with our clients. Our app maintenance and support services ensure that your mobile application remains up-to-date and operates smoothly. We provide timely updates, security patches, and regular maintenance to enhance the performance and stability of your app, giving you peace of mind while focusing on your core business."
              },
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Cross-platform Development",
                desc: "Experience cost-effective solutions with our cross-platform development services. We leverage cutting-edge frameworks like React Native and Flutter to build apps that work seamlessly on both iOS and Android platforms. By optimizing code sharing and development efficiency, we deliver cost-effective solutions without compromising on performance or user experience."
              },
              { 
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Enterprise App Development",
                desc: "Empower your organization with powerful enterprise mobile applications. We have extensive experience in developing scalable and secure apps that streamline your business processes, enhance productivity, and foster collaboration. Our enterprise solutions are tailored to your specific requirements, ensuring seamless integration with your existing systems."
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
              Transforming Ideas into Innovative Mobile Apps — Brightnest Coimbatore
            </motion.h2>
            <motion.button 
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContactForm}
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md mt-4"
            >
              Let's Talk Now →
            </motion.button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src="./mobile-app-developer.png"
              alt="Mobile App CTA"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default MobileAppsPage;