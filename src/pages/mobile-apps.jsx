// src/pages/mobile-apps.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MobileAppsPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF9F4] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Mobile App Development Company In Coimbatore
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              We specialize in creating high-quality mobile applications that cater to your business needs. 
              Our experienced team of developers excels in crafting customized solutions for various platforms, including iOS and Android. 
              Whether you require a native app or a cross-platform solution, we have the expertise to deliver exceptional results.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Let’s discuss →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/mobile-app-hero-illustration.png"
              alt="Mobile App Illustration"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: Brightnestsoft Mobile App Development Agency ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Brightnestsoft Mobile App Development Agency
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              At Brightnestsoft, we are a premier mobile app development agency based in Coimbatore. 
              Our passion lies in leveraging the latest technologies and trends to transform ideas into innovative mobile applications. 
              With a dedicated team of experts and a customer-centric approach, we strive to deliver exceptional results that drive business growth. 
              Our focus on quality, reliability, and user experience sets us apart as a trusted partner for businesses looking to harness the power of mobile technology.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/mobile-app-agency-illustration.png"
              alt="Agency Team"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: Custom Web App Development In Coimbatore ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Custom Web App Development In Coimbatore
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Drive Success with Custom Mobile Apps
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
              <p className="text-gray-600">
                Our UI/UX design services are focused on creating intuitive and visually appealing apps. 
                We understand the importance of user-centric design and strive to provide seamless experiences that captivate your audience. 
                From wireframing and prototyping to user testing and refinement, we ensure that your app stands out with its user-friendly interface.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">App Testing and Quality Assurance</h3>
              <p className="text-gray-600">
                At Brightnestsoft, we prioritize the quality and performance of our mobile apps. 
                Our dedicated testing and quality assurance team conducts rigorous testing to identify any potential issues or bugs. 
                By implementing comprehensive testing strategies, we guarantee that your app functions flawlessly across different devices and platforms, providing a seamless user experience.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">App Maintenance and Support</h3>
              <p className="text-gray-600">
                We believe in establishing long-term partnerships with our clients. 
                Our app maintenance and support services ensure that your mobile application remains up-to-date and operates smoothly. 
                We provide timely updates, security patches, and regular maintenance to enhance the performance and stability of your app, giving you peace of mind while focusing on your core business.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-platform Development</h3>
              <p className="text-gray-600">
                Experience cost-effective solutions with our cross-platform development services. 
                We leverage cutting-edge frameworks like React Native and Flutter to build apps that work seamlessly on both iOS and Android platforms. 
                By optimizing code sharing and development efficiency, we deliver cost-effective solutions without compromising on performance or user experience.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise App Development</h3>
              <p className="text-gray-600">
                Empower your organization with powerful enterprise mobile applications. 
                We have extensive experience in developing scalable and secure apps that streamline your business processes, enhance productivity, and foster collaboration. 
                Our enterprise solutions are tailored to your specific requirements, ensuring seamless integration with your existing systems.
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
              Transforming Ideas into Innovative Mobile Apps — Brightnestsoft Coimbatore
            </h2>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4">
              Let’s Talk Now →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/images/mobile-app-cta-illustration.png"
              alt="Mobile App CTA"
              className="max-w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppsPage;