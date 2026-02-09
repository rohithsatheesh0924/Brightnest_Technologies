// src/pages/Portfolio.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PortfolioPage = () => {
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

  // Image fallback component
  const ProjectImage = ({ src, alt }) => {
    const [imageError, setImageError] = useState(false);

    if (imageError) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          Project Image
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        onError={() => setImageError(true)}
      />
    );
  };

  const clients = [
    {
      id: 1,
      name: "Minerva Public School",
      industry: "Education",
      project: "Enterprise Website & Student Portal",
      description: "Comprehensive digital transformation including responsive website, student management portal, and parent communication system serving 5000+ students across 3 campuses.",
      results: "42% increase in parent engagement, 65% reduction in administrative workload",
      image: "/minerva-project.jpg"
    },
    {
      id: 2,
      name: "Showrya BioHydro",
      industry: "Agriculture & Sustainability",
      project: "E-Commerce Platform & Inventory Management",
      description: "End-to-end e-commerce solution with real-time inventory tracking, automated order processing, and integrated payment gateways.",
      results: "280% revenue growth in first year, 95% customer retention rate",
      image: "/showrya-project.jpg"
    },
    {
      id: 3,
      name: "Coimbatore Medical Center",
      industry: "Healthcare",
      project: "Patient Management System & Telemedicine",
      description: "Secure HIPAA-compliant patient portal with appointment scheduling, medical records access, and video consultation capabilities.",
      results: "78% reduction in no-show appointments, 90% patient satisfaction score",
      image: "/cmc-project.jpg"
    },
    {
      id: 4,
      name: "Tamil Nadu Tourism Board",
      industry: "Government & Travel",
      project: "Digital Tourism Platform",
      description: "Multilingual tourism platform featuring interactive maps, booking integration, and cultural content showcasing 120+ destinations.",
      results: "1.2M+ monthly visitors, 35% increase in domestic tourism bookings",
      image: "/tntb-project.jpg"
    },
    {
      id: 5,
      name: "Urban Retail Group",
      industry: "Retail & E-Commerce",
      project: "Omnichannel Retail Platform",
      description: "Unified commerce platform connecting 15 physical stores with online marketplace, real-time inventory sync, and personalized experiences.",
      results: "55% increase in online sales, 40% improvement in inventory accuracy",
      image: "/urban-retail-project.jpg"
    },
    {
      id: 6,
      name: "Global Logistics Solutions",
      industry: "Logistics & Transportation",
      project: "Fleet Management & Tracking System",
      description: "Real-time fleet tracking system with route optimization, fuel monitoring, and predictive maintenance for 500+ vehicles.",
      results: "23% reduction in fuel costs, 30% improvement in delivery efficiency",
      image: "/gls-project.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Enterprise Digital Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients across diverse industries
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { value: "50+", label: "Clients" },
              { value: "12+", label: "Industries" },
              { value: "98%", label: "Retention" },
              { value: "2010", label: "Established" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-2xl font-bold text-orange-600 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid - Framer Motion Scroll Animation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: "easeOut"
                  }
                }}
                viewport={{ 
                  once: true,
                  margin: "-100px"
                }}
                className="group"
              >
                {/* Project Card - Alternating Layout */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:items-center`}>
                    {/* Content */}
                    <div className={`p-6 md:p-8 ${index % 2 === 0 ? 'lg:w-1/2 lg:order-1' : 'lg:w-1/2 lg:order-2'}`}>
                      <h3 className="font-bold text-gray-900 text-xl mb-2">{client.name}</h3>
                      <p className="text-orange-600 text-sm font-medium mb-4">{client.industry}</p>
                      <h4 className="font-bold text-gray-900 mb-3">{client.project}</h4>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{client.description}</p>
                      
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg mb-6">
                        <p className="text-green-800 font-medium text-xs">
                          <span className="font-bold">Results:</span> {client.results}
                        </p>
                      </div>

                      <button
                        onClick={scrollToContactForm}
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors text-sm"
                      >
                        Start Your Project
                      </button>
                    </div>
                    
                    {/* Image */}
                    <div className={`h-64 lg:h-80 overflow-hidden ${index % 2 === 0 ? 'lg:w-1/2 lg:order-2' : 'lg:w-1/2 lg:order-1'}`}>
                      <ProjectImage 
                        src={client.image} 
                        alt={`${client.name} project`} 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-orange-100 text-lg mb-8"
          >
            Partner with Brightnest Technologies to create enterprise-grade digital solutions.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContactForm}
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Schedule Consultation →
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;