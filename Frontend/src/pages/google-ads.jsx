// src/pages/google-ads.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const GoogleAdsPage = () => {

  const [activeIndex, setActiveIndex] = useState(0);

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

  // Split into columns
  const leftCol = faqData.slice(0, 6);
  const rightCol = faqData.slice(6);
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ====== HERO SECTION ====== */}
      <section className="bg-[#FFF9F4] py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We build a unique website to convert visitors into customers
            </h1>
            <p className="text-lg mb-8 leading-relaxed">
              Maximize Your Online Visibility with Google Pay-Per-Click Search Ads - Unleash the Power of Targeted Advertising!
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md">
              Let’s discuss →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="./google-ads.png"
              alt="Google Ads Illustration"
             className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 2: A Comprehensive Overview of Google Search Ads Services ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Comprehensive Overview of Google Search Ads Services
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              Google Search Ads serve as a dynamic online advertising solution, enabling businesses to prominently showcase their offerings on Google's search engine results pages (SERPs) precisely when potential customers actively search for relevant keywords or phrases. 
              By intelligently targeting specific keywords, crafting compelling ads, and employing strategic bidding techniques, businesses can enhance their visibility, drive valuable traffic to their websites, and connect with their target audience effectively.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="./ads.png"
              alt="Google Ads Overview"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ====== SECTION 3: Leading the Way as a Google Ads Campaign Agency ====== */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Leading the Way as a Google Ads Campaign Agency in India - Boost Your Online Success with Expert Advertising Strategies!
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Unlocking the Potential of Google Search Ads - Your Comprehensive Guide to Effective Advertising Solutions!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Keyword Targeting</h3>
              <p className="text-gray-600">
                Advertisers select targeted keywords or phrases for their ads to display on Google when users search for them.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ad Creation</h3>
              <p className="text-gray-600">
                Advertisers craft ads with captivating headlines, compelling descriptions, and relevant links that will be showcased on search results pages.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bid Auction</h3>
              <p className="text-gray-600">
                Google employs a bidding system to determine the ads that will be displayed for a specific keyword search. Advertisers participate in this system by placing bids on the amount they are willing to pay for each click on their ad.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ad Rank</h3>
              <p className="text-gray-600">
                When ranking ads on the search results page, Google takes into account various factors including bid amount, ad quality, and other relevant considerations. These factors collectively influence the position and visibility of the ad to ensure optimal user experience.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Ad Display & Cost</h3>
              <p className="text-gray-600">
                Ads labeled as "Ad" or "Sponsored" are prominently showcased on the search results page when a user searches for the targeted keyword or phrase. Advertisers adopt a pay-per-click (PPC) advertising model, where they are only billed when someone clicks on their ad. This cost-effective approach ensures that advertisers pay solely for the engaged audience, maximizing the return on investment for their advertising campaigns.
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
              Looking for Google Search Ads Campaign Services? Choose Us for Expert Assistance!
            </h2>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-md mt-4">
              Let’s discuss →
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="./digital-marketing.png"
              alt="Google Ads CTA"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
     <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#FFF9F4]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          FAQ's Google Search Ads Campaign
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-600">
          Maximize Your Online Success with Brightnestsoft - The Best SEO Company in Coimbatore
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[leftCol, rightCol].map((column, colIdx) => (
            <div key={colIdx} className="space-y-4">
              {column.map((faq, i) => {
                // Unique index calculation
                const globalIndex = colIdx === 0 ? i : i + 6;
                const isOpen = activeIndex === globalIndex;

                return (
                  <div key={globalIndex} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => setActiveIndex(isOpen ? -1 : globalIndex)}
                      className="w-full flex justify-between items-center font-medium cursor-pointer text-left py-2"
                    >
                      <span className={isOpen ? "text-orange-600 transition-colors" : "text-gray-900"}>
                        {faq.question}
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 100, opacity: 1 }} // FIXED HEIGHT
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-y-auto mt-2 pr-2 text-gray-600 text-sm leading-relaxed custom-scrollbar"
                        >
                          <p className="pb-2">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  );
};

export default GoogleAdsPage;