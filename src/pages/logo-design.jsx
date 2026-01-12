// src/pages/logo-design.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const LogoDesignPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF9F4] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional Business Logo Design Service
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Get professional logo design services at affordable prices. Stand out with a unique and memorable logo for your business.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Let’s discuss →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/logo-hero-illustration.png"
              alt="Logo Design Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SERVICES SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            We Offer Affordable Logo Design Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-6">
                At Brightnestsoft, we specialize in creating captivating and memorable logo designs that represent your brand’s identity and leave a lasting impression on your audience. 
                Our team of talented designers combines artistic vision with strategic thinking to craft logos that truly stand out.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Custom Logo Design</span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>Logo Redesign</span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Brand Logo Development</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/logo-services-illustration.png"
                alt="Logo Designer"
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            FAQ's Logo Design Services
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Unlock the Power of Creativity: Your Logo Design FAQs Answered!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What is logo design?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Logo design is the process of creating a visual symbol or emblem that represents a brand, company, or product. It should be simple, memorable, and scalable.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Why is a logo important for my business?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  A strong logo builds brand recognition, conveys professionalism, and helps customers identify and remember your business.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How can a professionally designed logo benefit my business?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  A professionally designed logo enhances credibility, attracts customers, and differentiates your brand from competitors.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What is the process of getting a logo designed by Brightnestsoft?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We start with a consultation to understand your brand, then create multiple concepts, refine based on feedback, and deliver final files in all formats.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How long does it take to design a logo?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Typically 5–10 days, depending on complexity and revision rounds.
                </p>
              </details>
            </div>
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Will I own the copyright for the logo design?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes, once payment is completed, you receive full ownership and copyright of the final logo design.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can I request revisions to the logo design?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely! We offer up to 3 rounds of revisions to ensure you’re 100% satisfied with your logo.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What file formats will I receive for my logo?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  You’ll receive AI, EPS, PNG, JPG, SVG, and PDF files — perfect for print, web, and social media.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What if I need additional design services along with the logo?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We offer full branding packages including business cards, letterheads, social media kits, and more.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can I provide input or ideas during the logo design process?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! Your input is crucial — we encourage collaboration to ensure your vision comes to life.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoDesignPage;