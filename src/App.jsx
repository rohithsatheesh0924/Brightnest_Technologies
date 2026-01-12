// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all service pages
import Home from "./pages/Home";
import About from "./pages/About";
import WebDesign from "./pages/web-design";        // Website Design
import LogoDesignPage from "./pages/logo-design";  // Logo Design
import ECommercePage from "./pages/ecommerce";    // E-Commerce
import CMSDevelopmentPage from "./pages/cms-development"; // CMS Development
import MatrimonyPage from "./pages/matrimony";    // Matrimony
import MobileAppsPage from "./pages/mobile-apps"; // Mobile Apps
import PWAAppsPage from "./pages/pwa-apps";       // PWA Apps
import WebAppsPage from "./pages/web-apps";       // Web Apps
import ERPPOSPage from "./pages/erp-pos";         // ERP & POS
import SEOPage from "./pages/seo";               // SEO
import SocialMediaPage from "./pages/social-media"; // Social Media Optimization
import GoogleAdsPage from "./pages/google-ads";   // Google Ads
import EmailMarketingPage from "./pages/email-marketing"; // Email Marketing


import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black/90 overflow-x-hidden">
        <Navbar />

        <main className="pt-24 lg:pt-28 pb-12 lg:pb-16">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Service Pages — flat structure */}
            <Route path="/web-design" element={<WebDesign />} />
            <Route path="/logo-design" element={<LogoDesignPage />} />
            <Route path="/ecommerce" element={<ECommercePage />} />
            <Route path="/cms-development" element={<CMSDevelopmentPage />} />
            <Route path="/matrimony" element={<MatrimonyPage />} />
            <Route path="/mobile-apps" element={<MobileAppsPage />} />
            <Route path="/pwa-apps" element={<PWAAppsPage />} />
            <Route path="/web-apps" element={<WebAppsPage />} />
            <Route path="/erp-pos" element={<ERPPOSPage />} />
            <Route path="/seo" element={<SEOPage />} />
            <Route path="/social-media" element={<SocialMediaPage />} />
            <Route path="/google-ads" element={<GoogleAdsPage />} />
            <Route path="/email-marketing" element={<EmailMarketingPage />} />
           

            {/* Fallbacks */}
            <Route path="/services" element={<div className="text-white p-8">Our full range of services</div>} />
            <Route path="/portfolio" element={<div className="text-white p-8">Portfolio Page</div>} />
            <Route path="/contact" element={<div className="text-white p-8">Contact Page</div>} />

            {/* Optional: catch-all 404 */}
            <Route path="*" element={<div className="text-white p-8">Page not found</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;