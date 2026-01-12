import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

// 🔥 Updated Services Structure to Match Your Image
const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  {
    name: "Services",
    to: "/services",
    dropdown: [
      {
        name: "Website & Graphic Design",
        subItems: [
          { label: "Logo Design", to: "/logo-design" },
          { label: "Website Design", to: "/web-design" },
          { label: "E-Commerce Website", to: "/ecommerce" },
          { label: "CMS Website", to: "/cms-development" },
          { label: "Matrimony Website Development", to: "/matrimony" },
          { label: "Personal Website Design", to: "/personal-website" },
          { label: "Redesign Website", to: "/redesign" },
          { label: "Personal Portfolio", to: "/portfolio" }
        ]
      },
      {
        name: "App Development",
        subItems: [
          { label: "Mobile App Development", to: "/mobile-apps" },
          { label: "PWA App Development", to: "/pwa-apps" },
          { label: "Web App Development", to: "/web-apps" },
          { label: "Business ERP & POS Software", to: "/erp-pos" }
        ]
      },
      {
        name: "Digital Marketing",
        subItems: [
          { label: "SEO", to: "/seo" },
          { label: "Social Media Marketing", to: "/social-media" },
          { label: "Google Ads", to: "/google-ads" },
          { label: "Email Marketing", to: "/email-marketing" }
        ]
      },
      {
        name: "Our Service",
        subItems: [
          { label: "All Service", to: "/all-services" }
        ]
      }
    ]
  },
  { name: "Portfolio", to: "/portfolio" },
  { name: "Contact", to: "/contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setSelectedCategory(null);
  }, [location]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
        setSelectedCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const servicesItem = navItems.find(item => item.name === "Services");

  return (
    <>
      <nav 
        className={`fixed z-50 mx-auto max-w-7xl transition-all duration-500 ${
          scrolled 
            ? "top-2 left-6 right-6 h-16 bg-black/95 backdrop-blur-xl shadow-lg border border-orange-500/20" 
            : "top-6 left-8 right-8 h-20 bg-black/90 backdrop-blur-2xl shadow-xl border border-orange-500/30"
        } rounded-2xl px-6 lg:px-8`}
        ref={dropdownRef}
      >
        <div className="flex items-center justify-between h-full">
          
          {/* 🏢 Logo */}
          <Link 
            to="/" 
            className="flex items-center group hover:no-underline"
            onClick={() => {
              setIsServicesOpen(false);
              setSelectedCategory(null);
            }}
          >
            <div className={`bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${
              scrolled ? 'w-11 h-11 mr-3' : 'w-14 h-14 mr-4'
            }`}>
              <span className={`font-black text-white ${
                scrolled ? 'text-lg' : 'text-2xl'
              }`}>B</span>
            </div>
            <div>
              <span className={`font-bold tracking-tight block ${
                scrolled 
                  ? 'text-lg leading-5' 
                  : 'text-2xl lg:text-3xl leading-tight'
              }`}>
                Brightnest Technologies
              </span>
              {!scrolled && (
                <span className="font-semibold tracking-wider text-orange-400 block text-sm lg:text-base">
                  Coimbatore
                </span>
              )}
            </div>
          </Link>

          {/* 💼 Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.name !== "Services" ? (
                  <Link
                    to={item.to}
                    className="px-5 py-2.5 text-white/80 hover:text-orange-400 text-sm font-semibold rounded-xl border border-transparent hover:border-orange-500/50 hover:bg-orange-500/5 backdrop-blur-sm transition-all duration-300"
                    onClick={() => {
                      setIsServicesOpen(false);
                      setSelectedCategory(null);
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (!isServicesOpen) {
                        setIsServicesOpen(true);
                        setSelectedCategory(null);
                      } else {
                        setIsServicesOpen(false);
                        setSelectedCategory(null);
                      }
                    }}
                    className={`px-5 py-2.5 bg-black/95 text-white/80 hover:text-orange-400 text-sm font-semibold rounded-xl border border-transparent hover:border-orange-500/50 hover:bg-orange-500/5 backdrop-blur-sm transition-all duration-300 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                      isServicesOpen
                        ? 'text-orange-400 border-orange-500/50 bg-orange-500/10 !ring-2 !ring-orange-500/30'
                        : ''
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isServicesOpen ? "rotate-180 text-orange-400" : "text-orange-400/70"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {/* 🗂️ SERVICES DROPDOWN — MATCHES YOUR IMAGE */}
                {item.name === "Services" && isServicesOpen && (
                  <div 
                    className={`absolute top-full left-0 mt-3 bg-black/95 backdrop-blur-2xl border border-orange-500/20 rounded-2xl shadow-2xl shadow-black/50 z-50 overflow-hidden transition-all duration-300 ${
                      selectedCategory 
                        ? 'w-[600px]'   // Expanded width for sub-items
                        : 'w-[200px]'   // Only category names
                    }`}
                  >
                    <div className="flex">
                      {/* LEFT PANEL — FIXED WIDTH, CLEAN SPACING */}
                      <div className="w-[200px] flex-shrink-0 p-4">
                        <h5 className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">Our Services</h5>
                        <div className="space-y-1.5">
                          {servicesItem.dropdown.map((cat) => (
                            <button
                              key={cat.name}
                              type="button"
                              onClick={() => setSelectedCategory(cat.name)}
                              className={`w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg transition-colors text-white/85 hover:text-orange-400 hover:bg-orange-500/5 ${
                                selectedCategory === cat.name
                                  ? 'text-orange-400 bg-orange-500/10 font-semibold'
                                  : 'bg-black/95'
                              }`}
                            >
                              {cat.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* RIGHT PANEL — ONLY ON SELECT */}
                      {selectedCategory && (
                        <div className="flex-1 p-4 border-l border-orange-500/10">
                          <h6 className="text-orange-400 font-semibold text-sm mb-2.5">{selectedCategory}</h6>
                          <div className="space-y-1.5">
                            {servicesItem.dropdown
                              .find(cat => cat.name === selectedCategory)
                              ?.subItems.map((sub) => (
                                <Link
                                  key={sub.label}
                                  to={sub.to}
                                  className="block px-3 py-2 text-white/75 hover:text-orange-400 text-sm font-medium hover:bg-orange-500/5 rounded-lg transition-all duration-200"
                                  onClick={() => {
                                    setIsServicesOpen(false);
                                    setSelectedCategory(null);
                                  }}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 🎯 CTA & Mobile Button */}
          <div className="flex items-center space-x-3">
            <Link
              to="/contact"
              className="hidden xl:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 hover:scale-105 transition-all duration-300 border border-orange-500/30"
            >
              Get Quote
            </Link>
            
            <Link
              to="/contact"
              className="hidden md:inline-flex lg:hidden xl:hidden items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold text-xs rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              Contact
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 bg-black/40 border border-orange-500/30 rounded-xl hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-black/95 backdrop-blur-2xl border border-orange-500/20 rounded-2xl shadow-2xl p-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.name !== "Services" ? (
                    <Link 
                      to={item.to}
                      className="block py-3 px-4 text-white/80 hover:text-orange-400 hover:bg-orange-500/5 rounded-xl text-sm font-semibold transition-all duration-300 border-l-2 border-transparent hover:border-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <button 
                        className="w-full text-left py-3 px-4 text-white/80 hover:text-orange-400 hover:bg-orange-500/5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-between border-l-2 border-transparent hover:border-orange-500" 
                        onClick={() => {
                          if (!isServicesOpen) {
                            setIsServicesOpen(true);
                            setSelectedCategory(null);
                          } else {
                            setIsServicesOpen(false);
                            setSelectedCategory(null);
                          }
                        }}
                      >
                        {item.name}
                        <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180 text-orange-400' : 'text-orange-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isServicesOpen && (
                        <div className="ml-6 mt-2 space-y-2 border-l-2 border-orange-500 pl-3">
                          {servicesItem.dropdown.map((cat) => (
                            <div key={cat.name}>
                              <button
                                type="button"
                                onClick={() => setSelectedCategory(prev => prev === cat.name ? null : cat.name)}
                                className="w-full text-left text-white/90 hover:text-orange-400 text-sm font-medium py-2 px-2 rounded flex items-center justify-between"
                              >
                                {cat.name}
                                <svg
                                  className={`w-3.5 h-3.5 text-orange-400/70 transition-transform ${
                                    selectedCategory === cat.name ? 'rotate-90' : ''
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>

                              {selectedCategory === cat.name && (
                                <div className="mt-1.5 space-y-1.5">
                                  {cat.subItems.map((sub) => (
                                    <Link
                                      key={sub.label}
                                      to={sub.to}
                                      className="block text-white/75 hover:text-orange-400 text-sm px-3 py-1.5 hover:bg-orange-500/5 rounded transition-all"
                                      onClick={() => {
                                        setIsOpen(false);
                                        setIsServicesOpen(false);
                                        setSelectedCategory(null);
                                      }}
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;