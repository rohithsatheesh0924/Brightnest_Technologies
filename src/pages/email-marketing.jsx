// src/pages/email-marketing.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const EmailMarketingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF9F4] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted Email Marketing Agency in Coimbatore
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Welcome to Brightnestsoft's Trusted Email Marketing Agency, where we specialize in helping businesses connect and engage with their target audience through the power of email marketing. 
              With our expertise and proven strategies, we are committed to driving results and maximizing your return on investment.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Let’s discuss →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/email-hero-illustration.png"
              alt="Email Marketing Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Unlock the Power of Email Marketing
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Build lasting relationships, drive conversions, and boost ROI with personalized, targeted email campaigns designed for your business.
          </p>
          <div className="flex justify-center">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Get Started Today →
            </button>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default EmailMarketingPage;