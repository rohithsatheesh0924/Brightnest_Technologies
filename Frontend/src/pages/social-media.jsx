// src/pages/social-media.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SocialMediaPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF9F4] py-4 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Boost Your Online Presence with Expert Social Media Optimization Services in Coimbatore
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Welcome to Brightnestsoft, your trusted destination for top-notch Social Media Optimization (SMO) services in Coimbatore. 
              With our expert team of digital marketing professionals, we specialize in boosting your online presence and driving unparalleled success through optimized social media strategies.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Let’s discuss →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="./social-media.png"
              alt="SMO Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: Drive Social Media Success ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Drive Social Media Success with Proven Optimization Services in Coimbatore
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              At Brightnestsoft, we understand the significance of social media in today's digital landscape. 
              Our goal is to empower businesses like yours to maximize their reach, engage with the target audience, and establish a strong brand presence across various social media platforms. 
              Through our comprehensive SMO services, we ensure that your brand shines brightly amidst the competitive market in Coimbatore. 
              Our approach to SMO revolves around leveraging cutting-edge techniques and industry best practices. 
              We begin by conducting an in-depth analysis of your business, target audience, and competitors. 
              This allows us to formulate a tailored SMO strategy that aligns with your specific goals and objectives.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="./teamwork.svg"
              alt="Team Working"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: Accelerate Your Social Media Success ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Accelerate Your Social Media Success Professional Optimization Services in Coimbatore
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-12 mt-8">
            <div className="lg:w-1/2">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
                Explore Now! →
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="./digital-marketing.png"
                alt="SMO CTA"
                 className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaPage;