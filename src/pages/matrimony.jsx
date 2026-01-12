// src/pages/matrimony.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MatrimonyPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF9F4] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Matrimony Website Design Company in Coimbatore
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Are you in the business of matchmaking or operating a matrimony service in Coimbatore? 
              In today’s digital age, having an attractive and functional matrimony website is essential to connect potential life partners. 
              Look no further for the best matrimony website design services in Coimbatore.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Let’s discuss →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/matrimony-hero-illustration.png"
              alt="Matrimony Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: Internet Website Designers for Matrimony ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/matrimony-team-illustration.png"
              alt="Team Working"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Internet Website Designers for Matrimony
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              At Brightnestsoft, we understand the importance of creating a platform where hearts meet and relationships blossom. 
              Our mission is to help you in your endeavor to bring together individuals searching for love and companionship. 
              We stand out among matrimony website design companies in Coimbatore with our commitment to excellence. 
              Our team of experienced professionals possesses a deep understanding of what it takes to make a successful matrimony website. 
              Whether you are just starting or looking to revamp your existing site, we’ve got you covered.
            </p>
            <div className="flex items-center gap-4">
  <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md flex-1">
    Crafting Love Stories Online →
  </button>
  <span className="text-gray-600 font-medium whitespace-nowrap">or</span>
  <a href="tel:+919342570575" className="text-orange-500 font-semibold hover:underline flex-1 text-center">
    Call Us +91 9342570575
  </a>
</div>

          </div>
        </div>
      </section>

      {/* ====== SECTION 3: We Offer Affordable Matrimony Web Design Company in Coimbatore ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We Offer Affordable Matrimony Web Design Company in Coimbatore
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              We are not just a web design company; we are your partner in crafting love stories online. 
              Our designs are not only visually appealing but also highly functional, making the journey of finding love a seamless experience. 
              If you’re searching for internet website designers for matrimony, your search ends here. 
              Our team has a strong portfolio of successfully designed matrimony websites that have united countless hearts in Coimbatore and beyond.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/matrimony-agency-illustration.png"
              alt="Agency Team"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 4: What Sets Us Apart ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Discover Brightnestsoft's Professional Website Solutions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">User-Focused Design</h3>
              <p className="text-gray-600">
                We know that your users are at the heart of your business. Our designs are tailored to offer an intuitive and enjoyable user experience, making it easier for potential matches to connect.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Security and Privacy</h3>
              <p className="text-gray-600">
                In the world of matrimony, trust and privacy are paramount. We implement robust security measures to ensure the safety of user data and maintain confidentiality.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Compatibility</h3>
              <p className="text-gray-600">
                With the majority of users accessing websites through mobile devices, our designs are mobile-responsive, ensuring that your website looks and works beautifully on smartphones and tablets.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO for Visibility</h3>
              <p className="text-gray-600">
                Your matrimony website deserves to be found by those seeking love. We implement SEO strategies to enhance your website’s visibility in search engines, attracting more users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don’t wait any longer to make your mark in the matrimony industry.
            </h2>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4">
              let’s create a matrimony website →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/matrimony-cta-illustration.png"
              alt="Matrimony CTA"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            FAQ's Matrimony Web Design Services
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Unlock the Power of Creativity: Your Matrimony Web Design FAQs Answered!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What does your matrimony website design offer?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  We offer custom-designed, secure, and mobile-friendly matrimony websites with SEO optimization and ongoing support.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Can you customize the design of matrimony websites to match our brand’s identity?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! We tailor every design to reflect your brand’s colors, logo, and messaging for a unique and cohesive look.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How long does it take to develop a matrimony website with your company?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Typically 4–8 weeks, depending on complexity, features, and feedback cycles.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>What features can we expect in a matrimony website developed by your company?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Features include user profiles, search filters, messaging, photo galleries, payment gateways, admin dashboard, and mobile responsiveness.
                </p>
              </details>
            </div>
            <div className="space-y-4">
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Do you provide ongoing support and maintenance for matrimony websites?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! We offer monthly maintenance plans including updates, security patches, backups, and technical support.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How do I start a matrimony website?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Start with a consultation — we’ll discuss your goals, audience, and features, then create a custom plan and timeline.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How much does it cost to develop a matrimony app?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Pricing varies based on features, complexity, and platform (iOS/Android/Web). Contact us for a customized quote.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>How much does it cost to build a matrimonial website in India?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">
                  Starting from ₹50,000 for basic sites, up to ₹3,00,000+ for premium, feature-rich platforms — all inclusive of design, development, and launch.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MatrimonyPage;