// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all pages
import Home from "./pages/Home";
import About from "./pages/About";
import WebDesign from "./pages/web-design";
import LogoDesignPage from "./pages/logo-design";
import ECommercePage from "./pages/ecommerce";
import CMSDevelopmentPage from "./pages/cms-development";
import MatrimonyPage from "./pages/matrimony";
import MobileAppsPage from "./pages/mobile-apps";
import PWAAppsPage from "./pages/pwa-apps";
import WebAppsPage from "./pages/web-apps";
import ERPPOSPage from "./pages/erp-pos";
import SEOPage from "./pages/seo";
import SocialMediaPage from "./pages/social-media";
import GoogleAdsPage from "./pages/google-ads";
import EmailMarketingPage from "./pages/email-marketing";
import ContactPage from "./pages/contact";
import ServicePage from "./pages/services";
import PortfolioPage from "./pages/Portfolio";
import TeamPage from "./pages/Team"; // ✅ Team page imported

import "aos/dist/aos.css";
import "./App.css";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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
      <ScrollToTop />
      <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black/90 overflow-x-hidden">
        <Navbar />

        <main className="pt-24 lg:pt-28 pb-12 lg:pb-16">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<TeamPage />} /> {/* ✅ Team route added */}

            {/* Service Pages */}
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
            <Route path="/all-services" element={<ServicePage />} />

            {/* Other Pages */}
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<div className="text-white p-8">Page not found</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;