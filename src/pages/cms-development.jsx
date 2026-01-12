// src/pages/cms-development.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CMSDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Streamline Your Online Presence with Brightnestsoft Professional CMS Website Development
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              At Brightnestsoft, we specialize in providing professional CMS (Content Management System) website development services that empower businesses to effectively manage and showcase their online content. 
              Our team of skilled developers and designers are experienced in creating dynamic and user-friendly CMS websites.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Explore Pricing →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/cms-hero-illustration.png"
              alt="CMS Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SERVICES GRID SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Transform Your Digital Experience with Brightnestsoft Custom CMS Website Solutions
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            We are dedicated to empowering businesses with professional CMS website development services. 
            Our team combines technical expertise and creative insights to create dynamic and user-friendly websites that enable seamless content management.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">CMS Selection and Integration</h3>
              <p className="text-gray-600">
                We assist in selecting the most suitable CMS for your specific requirements. Whether it’s WordPress, Drupal, Joomla, or another CMS, we seamlessly integrate the chosen system into your website, ensuring a smooth and efficient content management process.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Design</h3>
              <p className="text-gray-600">
                We ensure your CMS website is responsive and optimized for seamless viewing across various devices and screen sizes. 
                Our experts implement responsive design techniques to deliver an optimal user experience, regardless of the device being used.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Theme and Template Customization</h3>
              <p className="text-gray-600">
                Brightnestsoft offers theme and template customization services to ensure your CMS website stands out from the crowd. 
                We work closely with you to understand your design preferences and branding guidelines, resulting in a visually appealing and unique website.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Content Organization and Structuring</h3>
              <p className="text-gray-600">
                Our team helps you organize and structure your website’s content in a logical and user-friendly way. 
                We assist in designing navigation menus, implementing categories and tags, and creating an information architecture that enhances user experience and facilitates content discovery.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Training and Support</h3>
              <p className="text-gray-600">
                Brightnestsoft provides comprehensive training and ongoing support to ensure you can effectively manage and update your CMS website. 
                We offer guidance on content creation, system usage, and troubleshooting, empowering you to make the most of your CMS platform.
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
              Choose Brightnestsoft for Professional CMS Website Development
            </h2>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4">
              Explore Pricing →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/cms-cta-illustration.png"
              alt="CMS Development Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            FAQ's CMS Website Development Services
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Unlock the Power of Creativity: Your CMS Website Development FAQs Answered!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What are CMS Website Development Services?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  CMS Website Development Services involve creating and customizing websites using Content Management Systems like WordPress, Drupal, or Joomla, allowing easy content updates without coding.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Which CMS platforms does Brightnestsoft specialize in?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We specialize in WordPress, Drupal, Joomla, and other popular CMS platforms tailored to your business needs.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can Brightnestsoft customize the design and layout of a CMS website?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! We offer full theme and template customization to match your brand identity and design preferences.
                </p>
              </details>
            </div>
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Does Brightnestsoft provide CMS website maintenance and support?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely! We offer ongoing maintenance, security updates, and technical support to keep your site running smoothly.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can I migrate an existing website to a CMS platform?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes, we handle seamless migration of your existing website to any CMS platform while preserving your content and SEO.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default CMSDevelopmentPage;