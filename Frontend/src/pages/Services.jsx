// src/pages/Services.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
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
    <div className="bg-white">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Digital & Creative Solutions for Global Enterprises
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            Brightnestsoft delivers enterprise-grade digital solutions that drive growth, efficiency, and innovation. Our expertise spans web development, mobile applications, and strategic digital marketing—tailored for businesses with global ambitions.
          </p>

          {/* Stats Cards - No routing needed (static info) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "4+", label: "Mobile Applications", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )},
              { value: "60+", label: "Enterprise Websites", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3m9 0a9 9 0 00-9-9" />
                </svg>
              )},
              { value: "10+", label: "E-Commerce Platforms", icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l1.6-8H7m0 0L6 7m0 6v6a2 2 0 002 2h8a2 2 0 002-2v-6m-8 0V9a2 2 0 012-2h.01" />
                </svg>
              )}
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-7 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-orange-50 rounded-full mb-5 mx-auto text-orange-600">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                <div className="text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website & Graphic Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-4">Digital Excellence</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-5">Website & Brand Identity</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Strategic design that aligns with your business vision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Logo & Brand Identity",
                desc: "Craft a distinctive brand identity that resonates with your audience and reflects your corporate values.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l3 3c.391.391.586.902.586 1.414v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />
                  </svg>
                ),
                path: "/logo-design"
              },
              {
                title: "Corporate Website Design",
                desc: "High-performance websites engineered for conversion, accessibility, and seamless user experience.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3m9 0a9 9 0 00-9-9" />
                  </svg>
                ),
                path: "/web-design"
              },
              {
                title: "E-Commerce Solutions",
                desc: "Scalable, secure, and conversion-optimized online stores built for global markets.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l1.6-8H7m0 0L6 7m0 6v6a2 2 0 002 2h8a2 2 0 002-2v-6m-8 0V9a2 2 0 012-2h.01" />
                  </svg>
                ),
                path: "/ecommerce"
              },
              {
                title: "CMS Development",
                desc: "Custom content management systems that empower your team with full control and flexibility.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                path: "/cms-development"
              }
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className="group p-8 border border-gray-200 rounded-xl hover:border-orange-300 transition-all duration-300 block"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* App Development */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-4">Technology Innovation</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-5">Application Development</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">End-to-end development of scalable, secure, and future-ready applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Mobile Application Development",
                desc: "Native and cross-platform mobile solutions designed for performance, security, and user engagement.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                path: "/mobile-apps"
              },
              {
                title: "Progressive Web Apps (PWA)",
                desc: "Web applications with native-like performance, offline capabilities, and seamless installation.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                path: "/pwa-apps"
              },
              {
                title: "Web Application Development",
                desc: "Robust, scalable web applications built with modern frameworks and cloud-native architecture.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-1.343 3-3s-1.343-3-3-3m9 0a9 9 0 00-9-9" />
                  </svg>
                ),
                path: "/web-apps"
              },
              {
                title: "ERP & POS Systems",
                desc: "Integrated business management solutions that streamline operations and enhance decision-making.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                path: "/erp-pos"
              }
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className="group p-8 border border-gray-200 rounded-xl hover:border-orange-300 transition-all duration-300 block"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-4">Growth Strategy</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-5">Digital Marketing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Data-driven strategies that accelerate market penetration and ROI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Search Engine Optimization (SEO)",
                desc: "Sustainable organic growth through technical excellence and content strategy.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                path: "/seo"
              },
              {
                title: "Social Media Marketing",
                desc: "Strategic brand presence across platforms with measurable engagement and conversion.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                path: "/social-media"
              },
              {
                title: "Digital Media Advertising",
                desc: "Precision-targeted campaigns across Google, Meta, and programmatic networks.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                path: "/google-ads"
              },
              {
                title: "Email Marketing Automation",
                desc: "Personalized, automated email journeys that nurture leads and retain customers.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                path: "/email-marketing"
              }
            ].map((item, idx) => (
              <Link 
                key={idx} 
                to={item.path}
                className="group p-8 border border-gray-200 rounded-xl hover:border-orange-300 transition-all duration-300 block"
              >
                <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-4">Methodology</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-5">Our Enterprise Delivery Framework</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A proven agile methodology refined through hundreds of successful global engagements.
            </p>
          </div>

          {/* Process Steps - Static content (no routing) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: "Discovery", desc: "Stakeholder alignment and solution scoping." },
              { title: "Design", desc: "UX research and interactive prototyping." },
              { title: "Development", desc: "Agile sprints with CI/CD pipelines." },
              { title: "Deployment", desc: "Zero-downtime release and monitoring." },
              { title: "Optimization", desc: "Performance tuning and feature iteration." },
              { title: "Support", desc: "24/7 SLA-backed maintenance." },
              { title: "Governance", desc: "Security, compliance, and audit readiness." },
              { title: "Innovation", desc: "Continuous improvement and tech scouting." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-orange-300 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 font-bold mb-4 mx-auto">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Industry Solutions - Static content (no routing) */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">Industry-Specific Expertise</h3>
            <p className="text-gray-600 text-center mb-10">Solutions tailored to your sector’s unique challenges</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Real Estate", "Travel & Hospitality", "Education", "Logistics",
                "Events", "Retail & E-Commerce", "Healthcare", "Financial Services",
                "Food & Beverage", "On-Demand Services", "Grocery", "Enterprise SaaS"
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-lg border border-gray-200 text-center hover:border-orange-300 transition-colors"
                >
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA - Routes to contact page */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Enterprise Pricing Solutions</h3>
            <p className="text-orange-600 font-semibold mb-6">Custom quotes based on your business requirements</p>
            <Link 
              to="/contact" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-10 rounded-lg transition-colors duration-300 inline-block"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;