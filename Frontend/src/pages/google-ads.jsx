// src/pages/google-ads.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GoogleAdsPage = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  
  const scrollToContactForm = () => {
    navigate('/contact#contact-form');
    setTimeout(() => {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const faqData = [
    {
      question: "What are Google Search Ads and how do they work?",
      answer: "Google Search Ads are text-based ads that appear on Google’s search results pages when users search for specific keywords. Advertisers bid on keywords and pay only when someone clicks on their ad (PPC model)."
    },
    {
      question: "How can Google Search Ads help businesses reach their target audience?",
      answer: "By targeting specific keywords, businesses can show their ads to users who are actively searching for products or services related to their business, ensuring high intent and relevance."
    },
    {
      question: "What factors determine the ranking of Google Search Ads on the search results page?",
      answer: "Google uses a combination of bid amount, ad quality, and landing page experience to determine ad rank and position."
    },
    {
      question: "What are the benefits of using Google Search Ads for online advertising?",
      answer: "Benefits include precise targeting, measurable ROI, immediate visibility, and the ability to adjust campaigns in real-time based on performance."
    },
    {
      question: "How does the bidding system work in Google Search Ads?",
      answer: "Advertisers set a maximum bid for each keyword. Google runs an auction to determine which ads appear and in what order, considering bid amount, ad quality, and landing page experience."
    },
    {
      question: "What is the importance of keyword selection in Google Search Ads?",
      answer: "Keyword selection is crucial as it determines when and where your ads appear. Proper keyword research ensures your ads are shown to the right audience at the right time."
    },
    {
      question: "Can Google Search Ads be targeted to specific locations or demographics?",
      answer: "Yes, Google Ads allows targeting by location, language, device, and even demographic factors like age and gender."
    },
    {
      question: "What are some best practices for creating compelling ad headlines and descriptions?",
      answer: "Best practices include using strong CTAs, highlighting unique selling points, including keywords, and keeping text concise and clear."
    },
    {
      question: "How can businesses track the performance and effectiveness of their Google Search Ads?",
      answer: "Businesses can use Google Ads’ built-in analytics to track metrics like clicks, impressions, conversion rates, and ROI. They can also integrate with Google Analytics for deeper insights."
    },
    {
      question: "Are there any limitations or restrictions for running Google Search Ads?",
      answer: "Yes, Google has policies on prohibited content, ad format, and landing page quality. Ads must comply with these guidelines to be approved."
    },
    {
      question: "How does Google ensure the relevance and quality of the ads displayed in search results?",
      answer: "Google uses Quality Score, which considers ad relevance, landing page experience, and expected click-through rate to ensure high-quality ads."
    }
  ];

  const leftCol = faqData.slice(0, 6);
  const rightCol = faqData.slice(6);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We build a unique website to convert visitors into customers
              </motion.h1>
              <motion.p 
                className="text-base md:text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Maximize Your Online Visibility with Google Pay-Per-Click Search Ads - Unleash the Power of Targeted Advertising!
              </motion.p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto mx-auto lg:mx-0"
              >
                Let’s discuss →
              </motion.button>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="./google-ads.png"
                alt="Google Ads Illustration"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: A Comprehensive Overview of Google Search Ads Services ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A Comprehensive Overview of Google Search Ads Services
              </motion.h2>
              <motion.p 
                className="text-base md:text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Google Search Ads serve as a dynamic online advertising solution, enabling businesses to prominently showcase their offerings on Google's search engine results pages (SERPs) precisely when potential customers actively search for relevant keywords or phrases. 
                By intelligently targeting specific keywords, crafting compelling ads, and employing strategic bidding techniques, businesses can enhance their visibility, drive valuable traffic to their websites, and connect with their target audience effectively.
              </motion.p>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="./ads.png"
                alt="Google Ads Overview"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: Leading the Way as a Google Ads Campaign Agency ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Leading the Way as a Google Ads Campaign Agency in India - Boost Your Online Success with Expert Advertising Strategies!
          </motion.h2>
          <motion.p 
            className="text-center text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Unlocking the Potential of Google Search Ads - Your Comprehensive Guide to Effective Advertising Solutions!
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { 
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                title: "Keyword Targeting",
                desc: "Advertisers select targeted keywords or phrases for their ads to display on Google when users search for them."
              },
              { 
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                title: "Ad Creation",
                desc: "Advertisers craft ads with captivating headlines, compelling descriptions, and relevant links that will be showcased on search results pages."
              },
              { 
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Bid Auction",
                desc: "Google employs a bidding system to determine the ads that will be displayed for a specific keyword search. Advertisers participate in this system by placing bids on the amount they are willing to pay for each click on their ad."
              },
              { 
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Ad Rank",
                desc: "When ranking ads on the search results page, Google takes into account various factors including bid amount, ad quality, and other relevant considerations. These factors collectively influence the position and visibility of the ad to ensure optimal user experience."
              },
              { 
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Ad Display & Cost",
                desc: "Ads labeled as 'Ad' or 'Sponsored' are prominently showcased on the search results page when a user searches for the targeted keyword or phrase. Advertisers adopt a pay-per-click (PPC) advertising model, where they are only billed when someone clicks on their ad."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Looking for Google Search Ads Campaign Services? Choose Us for Expert Assistance!
              </motion.h2>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContactForm}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto mx-auto lg:mx-0"
              >
                Let’s discuss →
              </motion.button>
            </motion.div>
            <motion.div 
              className="lg:w-1/2 flex justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="./digital-marketing.png"
                alt="Google Ads CTA"
                className="max-w-full h-auto w-64 md:w-80 lg:w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#FFF9F4]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQ's Google Search Ads Campaign
          </motion.h2>
          <motion.p 
            className="text-center text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Maximize Your Online Success with Brightnest - The Best SEO Company in Coimbatore
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {leftCol.map((faq, i) => {
                const globalIndex = i;
                const isOpen = activeIndex === globalIndex;

                return (
                  <div key={globalIndex} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => setActiveIndex(isOpen ? -1 : globalIndex)}
                      className="w-full flex justify-between items-center font-medium cursor-pointer text-left py-2 text-sm md:text-base"
                    >
                      <span className={isOpen ? "text-orange-600" : "text-gray-900"}>
                        {faq.question}
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 pr-2 text-gray-600 text-sm"
                        >
                          <p className="pb-4">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {rightCol.map((faq, i) => {
                const globalIndex = i + 6;
                const isOpen = activeIndex === globalIndex;

                return (
                  <div key={globalIndex} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => setActiveIndex(isOpen ? -1 : globalIndex)}
                      className="w-full flex justify-between items-center font-medium cursor-pointer text-left py-2 text-sm md:text-base"
                    >
                      <span className={isOpen ? "text-orange-600" : "text-gray-900"}>
                        {faq.question}
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-2 pr-2 text-gray-600 text-sm"
                        >
                          <p className="pb-4">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleAdsPage;