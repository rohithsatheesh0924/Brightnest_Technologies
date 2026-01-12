// src/pages/ecommerce.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ECommercePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className=" py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Elevate Your Online Business with Brightnestsoft’s Expert E-Commerce Website Development Services!
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Transform your vision into a stunning online store with our comprehensive E-Commerce website development services. 
              Our expert team combines <span className="font-bold text-red-600">creative design</span>, seamless functionality, and user-friendly interfaces to deliver an engaging and profitable digital shopping experience.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Explore Pricing →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/ecommerce-hero-illustration.png"
              alt="E-Commerce Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SERVICES GRID SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Unleash Your E-Commerce Potential with Brightnestsoft
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Experience Seamless E-Commerce Growth: Discover Brightnestsoft's Expert Website Development Services
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom E-Commerce Website Development</h3>
              <p className="text-gray-600">
                Our skilled developers create bespoke e-commerce websites that reflect your brand identity, engage your customers, and drive conversions. 
                With a user-centric approach, we design intuitive interfaces and seamless shopping experiences that leave a lasting impression.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive and Optimization</h3>
              <p className="text-gray-600">
                We ensure your e-commerce website is fully optimized for all devices and screen sizes. 
                Our responsive design techniques guarantee a flawless user experience, allowing your customers to browse and purchase products effortlessly, whether they're on desktop, mobile, or tablet.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">E-Commerce Platform Integration</h3>
              <p className="text-gray-600">
                We specialize in integrating leading e-commerce platforms such as Shopify, WooCommerce, Magento, and more. 
                Our expertise in seamless integration ensures smooth functionality, secure transactions, and efficient inventory management.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">User Experience (UX) Enhancement</h3>
              <p className="text-gray-600">
                Our UX experts analyze user behavior and preferences to optimize your website's design and layout. 
                We focus on enhancing navigation, simplifying the buying process, and implementing persuasive calls-to-action to increase conversions and drive customer satisfaction.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Website Maintenance and Support</h3>
              <p className="text-gray-600">
                At Brightnestsoft, we provide ongoing maintenance and support services to ensure your e-commerce website operates flawlessly. 
                We handle updates, security patches, bug fixes, and offer prompt technical assistance to keep your online store running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 ">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empower Your Online Store: Partner with Brightnestsoft for Cutting-Edge E-Commerce
            </h2>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4">
              Explore Pricing →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/ecommerce-cta-illustration.png"
              alt="Online Store Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ECommercePage;