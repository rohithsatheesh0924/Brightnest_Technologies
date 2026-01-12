// src/pages/web-design.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const WebDesignPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF2EA] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Affordable Choice for Web Design Company in Coimbatore
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              At Brightnestsoft, we are your premier and affordable choice for{" "}
              <span className="text-red-600 font-semibold">web design services in Coimbatore</span>. 
              Your premier destination for exceptional website design and top-tier web development services in Coimbatore! 
              We take immense pride in offering comprehensive web solutions that are not only budget-friendly but also guarantee top-notch quality and outstanding results. 
              Our mission is clear: we create custom web solutions that are marked by excellence, innovation, and speed. 
              As the best website design company in Coimbatore, we specialize in a wide range of services tailored to meet your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
                Start Your Website Now →
              </button>
              <span className="text-gray-600 self-center">or</span>
              <Link to="tel:+919342570575" className="text-orange-500 font-semibold hover:underline">
                Call Us +91 9342570575
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/hero-illustration.png"
              alt="Web Design Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== WHY WE ARE CONSIDERED THE BEST ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why We Are Considered the Best Web Design Company in Coimbatore
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="mb-4">
                  We wear the badge of the <span className="font-bold text-red-600">best web design Coimbatore company</span> with pride. 
                  This has been possible due to our relentless pursuit of excellence in ecommerce web development. 
                  We understand the nuances of digital representation, tailoring solutions that set your brand apart digitally.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="mb-4">
                  Our acumen goes beyond building visually appealing websites. 
                  We make sure they’re designed to do business.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="mb-4">
                  We consider various factors such as loading speed, UX design, SEO optimization, and so much more while developing your platform. 
                  We pride ourselves on our transparent communication and willingness to educate our partners.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="mb-4">
                  It’s crucial for us that you understand what you’re investing in. 
                  Speaking of investment, our <span className="font-bold text-red-600">website design pricing and packages</span> have been meticulously designed to offer value for money. 
                  They are neither hidden nor complex but laid out transparently.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="mb-4">
                  Our commitment extends to a fair pricing model that doesn’t compromise on quality or service.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Start Your Website Now →
            </button>
            <span className="text-gray-600 self-center">or</span>
            <Link to="tel:+919342570575" className="text-orange-500 font-semibold hover:underline">
              Call Us +91 9342570575
            </Link>
          </div>
        </div>
      </section>

      {/* ====== SERVICES GRID ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            We Offer Affordable Website Design Services
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Are you looking for a website that adapts seamlessly to all devices? Look no further! 
            Our expertise lies in crafting mobile-responsive websites that ensure a flawless user experience on every screen. 
            But we don't stop there. We excel in creating active static websites, data-driven dynamic websites, portal web development, multimedia and open-source web development services. 
            Your online presence is in good hands with us.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Website Development</h3>
              <p className="text-gray-600">
                We create bespoke websites tailored to your specific business needs and target audience. 
                Our team ensures that your website reflects your brand identity, engages visitors, and provides seamless user experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Web Design</h3>
              <p className="text-gray-600">
                We optimize your website for seamless viewing across all devices and screen sizes. 
                Our web responsive design techniques ensure a consistent and engaging user experience, whether your visitors access your site on desktop, mobile, or tablet.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web UI/UX Design</h3>
              <p className="text-gray-600">
                Our web UI/UX design services focus on creating visually appealing and intuitive interfaces that captivate your audience. 
                We prioritize user-centric design to enhance engagement, navigation, and overall user experience on your website.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Website Maintenance and Support</h3>
              <p className="text-gray-600">
                At Brightnestsoft, we provide ongoing maintenance and support services to ensure your e-commerce website operates flawlessly. 
                We handle updates, security patches, bug fixes, and offer prompt technical assistance to keep your online store running smoothly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Optimized Web Design</h3>
              <p className="text-gray-600">
                In today’s digital landscape, SEO is crucial. That’s why we offer top-notch SEO services and SEO-optimized web designing to ensure that your website ranks high in search engine results and attracts the right audience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">E-Commerce Solutions</h3>
              <p className="text-gray-600">
                We build robust, scalable, and secure e-commerce platforms that drive sales and customer loyalty. 
                From product catalogs to checkout flows, we handle it all with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== COMPREHENSIVE WEB DEVELOPMENT SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF2EA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Comprehensive Website Development Services in Coimbatore: HTML & PHP Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    An insight into our services takes you through a labyrinth of <span className="font-bold text-red-600">digital solutions</span>. 
                    We offer comprehensive web development services, specializing in both HTML and PHP solutions. 
                    These platforms give us the flexibility to deliver both dynamic and static websites.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    Our team is no ordinary web design Coimbatore company. We have domain experts who pose years of experience. 
                    They decode complex HTML and PHP codes to implement innovative design ideas, making your website functionally rich and visually stunning.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    Don’t worry, our website design pricing and packages cater to every type of business. 
                    Be it a start-up or an established company, our pricing structure fits all, keeping the quality high and prices competitive.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    As you explore our service, know we are steadfast in providing an all-around solution. 
                    We don’t define your needs; rather, the requirements of your business shape <span className="font-bold text-red-600">our services</span>. 
                    The result is a website that resonates with your brand’s vision and functionality.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    From the technicalities of comprehensive website development services in Coimbatore, let’s dive into another crucial aspect - Responsive Web Designs. 
                    We’re peeling back the layers on efficiency and aesthetics combined, that truly revolutionize the user experience.
                  </span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
                  Start Your Website Now →
                </button>
                <span className="text-gray-600 self-center">or</span>
                <Link to="tel:+919342570575" className="text-orange-500 font-semibold hover:underline">
                  Call Us +91 9342570575
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/team-illustration.png"
                alt="Team Working"
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== RESPONSIVE WEB DESIGNS SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Responsive Web Designs: Efficiency and Aesthetics Combined
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/images/responsive-illustration.png"
                alt="Responsive Design"
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div>
              <p className="mb-4">
                What’s a website without responsiveness? Our web development methods pivot around an essential element - responsiveness. 
                A responsive website assures adaptability, making your site look good on any screen size.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    Being a veteran web design Coimbatore company, we blend efficiency and aesthetics to deliver an unrivaled digital experience. 
                    Our designs not just look good, but also have smooth navigation, quick loading times, and, above all, a user-friendly interface.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    Investing in a website without burning holes in your pocket is what our website design pricing and packages promise. 
                    We provide cost-effective solutions without compromising on quality. Every penny you spend assures value in return.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    As you explore our service, we assure you won’t be left with <span className="font-bold text-red-600">unanswered website design questions</span>. 
                    Our team of experts is always ready to guide you. We ensure that you’re not just purchasing a service, but a partnership with a team that’s passionate about transforming your digital presence.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    Pioneering the art of blending efficiency and aesthetics with web design is merely the surface of our expertise. 
                    Prepare to dive deep with us as we peel back the layers and reveal why we are reputed as the finest web design company in Coimbatore.
                  </span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
                  Start Your Website Now →
                </button>
                <span className="text-gray-600 self-center">or</span>
                <Link to="tel:+919342570575" className="text-orange-500 font-semibold hover:underline">
                  Call Us +91 9342570575
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRANSFORM YOUR ONLINE BUSINESS SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Transform Your Online Business
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Discover Brightnestsoft’s Professional Website Solutions
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="/images/business-illustration.png"
                alt="Transform Business"
                className="max-w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mb-6">
                Explore Pricing →
              </button>
              <p className="text-gray-600 mt-4">
                Looking for quality digital solutions for your business? Brightnestsoft digital agency is the best in India, USA, UAE, and Singapore. 
                We offer a range of services, including web and logo design, web app development, SEO, and digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            FAQ's Web Design Services
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Unlock the Power of Creativity: Your Web Design FAQs Answered!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What is website design?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Website design is the process of planning, conceptualizing, and arranging content online. 
                  It involves creating the layout, visual elements, and user interface of a website.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Why is website design important for my business?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  A well-designed website builds trust, enhances credibility, and improves user experience — directly impacting conversions and customer retention.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What services does Brightnestsoft offer in website design?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We offer custom website development, responsive design, UI/UX design, SEO optimization, e-commerce solutions, and ongoing maintenance.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How long does it take to design and develop a website?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Typically 2–6 weeks, depending on complexity, revisions, and content readiness.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can I have input in the website design process?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Absolutely! Your feedback and vision are integral to our collaborative design process.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Do you redesign existing websites?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes, we specialize in modernizing and optimizing existing websites for better performance, design, and user experience.
                </p>
              </details>
            </div>
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Will my website be mobile-friendly?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! All websites we design are fully responsive and tested across all device sizes.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can you optimize my website for search engines (SEO)?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes, we build SEO-optimized websites with semantic HTML, fast loading speeds, and structured data to help you rank higher.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Will my website be easy to update and maintain?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We use modern CMS platforms or provide training so you can easily manage your site content.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What about website hosting and domain registration?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We offer domain registration and reliable hosting packages tailored to your project’s needs.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can you provide ongoing support and maintenance after the website is launched?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! We offer monthly maintenance plans including updates, backups, security checks, and technical support.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Types of website design</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We design static sites, dynamic sites, e-commerce stores, portfolios, blogs, and custom web applications.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default WebDesignPage;