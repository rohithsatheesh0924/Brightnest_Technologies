// src/pages/web-apps.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const WebAppsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF9F4] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Elevate Your Web Experience with Creative Web App Design in Coimbatore
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              At Brightnestsoft, we are passionate about pushing the boundaries of web app design in Coimbatore. 
              With a team of highly skilled professionals and a wealth of experience, we strive to deliver exceptional digital solutions that make a lasting impact. 
              We believe in combining creativity, technical expertise, and strategic thinking to create web apps that stand out in the competitive online landscape.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Let’s discuss →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/web-app-hero-illustration.png"
              alt="Web App Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: Brightnestsoft Experience Seamless User Journeys ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Brightnestsoft Experience Seamless User Journeys with Customized Web App Design in Coimbatore
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              At Brightnestsoft, we embrace design innovation and constantly explore new techniques and trends. 
              Our aim is to create web app designs that not only meet industry standards but also push creative boundaries.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/web-app-team-illustration.png"
              alt="Team Working"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: Unleash Your Business Potential ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Unleash Your Business Potential with Innovative Web App Design in Coimbatore
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Transforming Ideas into Engaging Web Apps
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web App Design</h3>
              <p className="text-gray-600">
                Our team of talented designers creates stunning and intuitive web app designs tailored to your unique requirements. 
                We blend creativity and functionality to deliver visually appealing interfaces that enhance user engagement.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">User Experience (UX) Design</h3>
              <p className="text-gray-600">
                We prioritize user-centric design principles to ensure seamless navigation and an intuitive user experience. 
                Our UX experts conduct in-depth research to understand your target audience and design interfaces that exceed their expectations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Web Design</h3>
              <p className="text-gray-600">
                In today’s mobile-first world, responsiveness is key. 
                We design web apps that adapt effortlessly to different devices and screen sizes, ensuring a consistent and enjoyable user experience across platforms.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Prototype Development</h3>
              <p className="text-gray-600">
                Before diving into full-scale development, we create interactive prototypes that allow you to visualize the functionality and flow of your web app. 
                This collaborative process ensures that we align our design with your vision.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive UI Elements</h3>
              <p className="text-gray-600">
                We incorporate interactive elements, such as animations, transitions, and microinteractions, to make your web app engaging and memorable. 
                Our designers skillfully balance aesthetics and interactivity to create immersive digital experiences.
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
              Stand Out from the Crowd with Cutting-Edge Web App Design in Coimbatore
            </h2>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4">
              Build Now! →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/web-app-cta-illustration.png"
              alt="Web App CTA"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebAppsPage;