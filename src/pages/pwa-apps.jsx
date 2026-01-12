// src/pages/pwa-apps.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PWAAppsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF9F4] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transforming Businesses with Progressive Web Apps
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              At Brightnestsoft, we specialize in providing top-notch PWA development services that take your business to new heights. 
              Our skilled team of experts combines cutting-edge technologies and industry best practices to deliver exceptional web experiences.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Let’s discuss →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/pwa-hero-illustration.png"
              alt="PWA Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: Brightnestsoft Unleashing the Potential of PWA ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Brightnestsoft Unleashing the Potential of PWA for Unforgettable Experiences
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              At Brightnestsoft, we embrace innovation and stay at the forefront of the latest trends and technologies. 
              We bring fresh ideas and creative solutions to every project, ensuring your PWA stands out.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/pwa-team-illustration.png"
              alt="Team Working"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: Unlock the Power of Progressive Web Apps ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Unlock the Power of Progressive Web Apps with Brightnestsoft: Your Trusted PWA Development Company
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            PWA Development Experts at Your Service
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">PWA Development</h3>
              <p className="text-gray-600">
                We build fast, reliable, and engaging Progressive Web Apps tailored to your business needs. 
                Our expert developers leverage the latest frameworks and tools to create responsive applications that work seamlessly across all devices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">PWA Consultation</h3>
              <p className="text-gray-600">
                Our seasoned professionals offer comprehensive consultation services to help you understand the benefits of PWAs and how they can enhance your business. 
                We analyze your requirements, provide strategic insights, and guide you through the entire PWA development process.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">PWA Optimization</h3>
              <p className="text-gray-600">
                Maximize the performance and user experience of your existing Progressive Web Apps with our optimization services. 
                Our team conducts thorough audits, identifies areas for improvement, and implements optimizations to ensure your PWA operates at its full potential.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">PWA Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate Progressive Web Apps with your existing systems and platforms. 
                We specialize in integrating PWAs with various APIs, databases, and third-party services to enhance functionality and streamline workflows.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">PWA Maintenance and Support</h3>
              <p className="text-gray-600">
                Our commitment to your success doesn’t end with development. 
                We provide ongoing maintenance and support services to keep your PWA running smoothly. 
                From bug fixes to updates and feature enhancements, we’ve got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Revolutionize User Engagement through Progressive Web Apps
            </h2>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4">
              Build Now! →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/pwa-cta-illustration.png"
              alt="PWA CTA"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PWAAppsPage;