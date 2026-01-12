// src/pages/contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF9F4] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contact Helpline and Website Support
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Brightnestsoft is a leading web design agency helping your business with online solutions. 
              If you have any question about our service, please reach out using any of the contacts below.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.002 8-8.995 8C7.002 20 3 16.418 3 12S7.002 4 11.995 4c4.993 0 8.995 3.582 8.995 8z" />
                </svg>
                <span className="font-medium">WhatsApp</span>
              </div>
              <p className="text-lg">+91 9342570575</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.002 8-8.995 8C7.002 20 3 16.418 3 12S7.002 4 11.995 4c4.993 0 8.995 3.582 8.995 8z" />
                </svg>
                <span className="font-medium">Skype</span>
              </div>
              <p className="text-lg">live:brightnestgroup</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v-7H5v7z" />
                </svg>
                <span className="font-medium">Drop Box</span>
              </div>
              <p className="text-lg">info@brightnestsoft.com</p>
              <p className="text-lg">brightnestgroup@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium">Location</span>
              </div>
              <p className="text-lg">India, USA, UAE</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ENQUIRE SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Trusted by The Thousands
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            We would be happy to hear from you. Please fill in the form below or email us your requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Client Logos */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                <img
                  src="/images/client-logo-1.png"
                  alt="Client Logo 1"
                  className="h-12 object-contain"
                />
                <img
                  src="/images/client-logo-2.png"
                  alt="Client Logo 2"
                  className="h-12 object-contain"
                />
                <img
                  src="/images/client-logo-3.png"
                  alt="Client Logo 3"
                  className="h-12 object-contain"
                />
                <img
                  src="/images/client-logo-4.png"
                  alt="Client Logo 4"
                  className="h-12 object-contain"
                />
                <img
                  src="/images/client-logo-5.png"
                  alt="Client Logo 5"
                  className="h-12 object-contain"
                />
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6">To Get Quote! Please fill in the form below or mail us your requirements :)</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <select
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  defaultValue=""
                >
                  <option value="" disabled>Interested in</option>
                  <option>Website Design</option>
                  <option>Mobile App Development</option>
                  <option>SEO</option>
                  <option>Social Media Marketing</option>
                  <option>Google Ads</option>
                  <option>Email Marketing</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                ></textarea>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2"
                    required
                  />
                  <label htmlFor="terms" className="text-sm">
                    I agree to the Terms & Conditions of Brightnestsoft.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md"
                >
                  Send your inquiry →
                </button>
              </form>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <img
                  src="/images/testimonial-avatar-1.png"
                  alt="Mr. L. Kannan"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-lg italic">
                    "Brightnest Technologies Pvt Ltd, well experienced web developer in Coimbatore. You guys are the best! Keep up the great work!"
                  </p>
                  <div className="mt-2">
                    <strong>Mr. L. Kannan</strong>
                    <div className="text-sm text-gray-500">Correspondent - Minerva Public School, Tamilnadu</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <img
                  src="/images/testimonial-avatar-2.png"
                  alt="Mr. Male Ramarao"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-lg italic">
                    "Worthy website design team and affordable price, good approaches."
                  </p>
                  <div className="mt-2">
                    <strong>Mr. Male Ramarao</strong>
                    <div className="text-sm text-gray-500">Managing Director - Showrya BioHydro Labs Medical, Bangalore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;