// src/pages/Portfolio.jsx
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ✅ CORRECTED: Fixed "onst" → "const"
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    let startTimestamp = null;
    const targetValue = typeof value === 'string' 
      ? (value.includes('%') ? parseInt(value) : 
         (value.includes('+') ? parseInt(value) : 2010))
      : value;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * targetValue));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setHasAnimated(true);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, hasAnimated]);

  // Format display value
  const formatValue = () => {
    if (typeof value === 'string') {
      if (value.includes('%')) return `${count}%`;
      if (value.includes('+')) return `${count}+`;
      return count.toString();
    }
    return count.toString();
  };

  return (
    <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">
      {formatValue()}
    </div>
  );
};

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
  name: "KAHE Research Data Product",
  industry: "Education / Research & Analytics",
  project: "Research Data Management Product for KAHE",
  description:
    "Designed and developed a research data product for Karpagam Academy of Higher Education (KAHE) to manage, organize, and analyze academic research data. The system supports structured data handling, researcher information management, and institutional research insights with a secure and user-friendly interface.",
  results:
    "Improved research data organization, enhanced accessibility for faculty and researchers, streamlined academic workflows, and strengthened the institution’s research management capabilities",
  image: "./Karpagam.png"
},
  {
  id: 2,
  name: "Aadi Super Shakti",
  industry: "FMCG / Home Care Products",
  project: "Product Website for Detergent Powder & Dishwashing Soap",
  description: "Designed and developed a responsive product-focused website for Aadi Super Shakti showcasing detergent powder and dishwashing soap. The website highlights product benefits, usage details, and brand identity with a clean, mobile-first user interface.",
  results: "Enhanced product visibility, improved brand credibility, and increased distributor and customer inquiries",
  image: "./c2.jpg"
},{
  id: 3,
  name: "Dreamfly Education Group",
  industry: "Education / Overseas Medical Consulting",
  project: "MBBS Abroad Educational Agency Website",
  description: "Designed and developed a professional website for Dreamfly Education Group, an MBBS abroad educational consultancy. The website presents university options, country details, eligibility criteria, and student inquiry forms with a clean, trust-focused, and mobile-responsive design.",
  results: "Improved online credibility, increased student inquiries, and streamlined consultation requests",
  image: "./c7.png"
},{
  id: 4,
  name: "Surya Auto Cast",
  industry: "Manufacturing / Automotive Components",
  project: "Corporate Website for Auto Casting Manufacturer",
  description: "Designed and developed a professional corporate website for Surya Auto Cast to showcase automotive casting products, manufacturing capabilities, quality standards, and company profile with a clean, responsive, and industry-focused design.",
  results: "Improved brand presence, increased business inquiries, and enhanced credibility among B2B clients",
  image: "/surya-auto-cast-project.jpg"
},
{
  id: 5,
  name: "AQES Intense Insight",
  industry: "Analytics / Research & Business Intelligence",
  project: "Corporate Website for Data & Insight Company",
  description:
    "Designed and developed a professional corporate website for AQES Intense Insight to showcase data analytics services, research solutions, business intelligence offerings, company expertise, and client-focused insights with a clean, modern, and responsive design.",
  results:
    "Enhanced brand credibility, improved online presence, increased client inquiries, and strengthened visibility in the analytics and research domain",
  image: "./c3.webp"
},
{
  id: 6,
  name: "Mahizhalam Matrimony",
  industry: "Matrimonial / Relationship Services",
  project: "Matrimony Website Design & Development",
  description:
    "Designed and developed a user-friendly matrimony website for Mahizhalam Matrimony to help users find suitable life partners. The platform includes profile listing, search and filter options, secure user registration, and a clean, culturally focused design optimized for all devices.",
  results:
    "Improved user engagement, increased profile registrations, and enhanced trust and credibility among users",
  image: "./c12.webp"
}
]

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
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
              >
                <AnimatedCounter value={stat.value} duration={2000} />
                <div className="text-gray-600 text-xs">{stat.label}</div>
              </motion.div>
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
                   {/* Image */}
<div className={`h-64 lg:h-80 overflow-hidden ${index % 2 === 0 ? 'lg:w-1/2 lg:order-2' : 'lg:w-1/2 lg:order-1'}`}>
  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
    <ProjectImage 
      src={client.image} 
      alt={`${client.name} project`} 
    />
  </div>
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