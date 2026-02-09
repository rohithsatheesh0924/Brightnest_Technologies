import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  ChevronRight,
  ArrowRight 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/95 backdrop-blur-xl border-t border-orange-500/10 py-10 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/*  Flex container with items-start for perfect top alignment */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-6 lg:gap-8 -mx-4">
          
          {/*  BRAND */}
          <div className="sm:w-1/2 lg:w-1/4 px-4">
           <div className="flex items-center mb-4">
  <img 
    src="/b png.png" 
    alt="Brightnest" 
    className="h-8 w-auto mr-3" 
  />
  <div>
    <h4 className="text-xl font-bold text-white tracking-tight whitespace-nowrap">
      Brightnest Technologies
    </h4>
    <p className="text-orange-400 text-xs font-medium tracking-wide mt-0.5">
      Coimbatore
    </p>
  </div>
</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Leading web design & development agency delivering enterprise-grade digital solutions.
            </p>
          </div>

          {/*  COMPANY */}
         <div className="sm:w-1/2 lg:w-1/4 px-4">
  <h5 className="text-lg font-semibold text-orange-400 mb-3 pb-2 border-b border-orange-500/10">
    Company
  </h5>
  <div className="space-y-2.5">
    {[
      { label: "About", path: "/about" },
      { label: "Team", path: "/team" }, 
      { label: "Careers", path: "/careers" },
      { label: "Services", path: "/all-services" } 
    ].map((item, idx) => (
      <Link 
        key={idx}
        to={item.path}
        className="group flex items-center text-white/70 hover:text-orange-400 text-sm font-medium py-1 transition-all duration-300"
      >
        <ChevronRight 
          className="w-3.5 h-3.5 text-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
        />
        <span>{item.label}</span>
      </Link>
    ))}
  </div>
</div>

          {/*  SERVICES */}
          <div className="sm:w-1/2 lg:w-1/4 px-4 ">
            <h5 className="text-lg font-semibold text-orange-400 mb-3 pb-2 border-b border-orange-500/10 ">
              Services
            </h5>
            <div className="space-y-2.5 ">
              {["Web Design", "Web Development", "E-Commerce", "SEO", "Digital Marketing", "Mobile Apps"].map((item, idx) => (
                <a 
                  key={idx}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group flex items-center text-white/70 hover:text-orange-400 text-sm font-medium py-1 transition-all duration-300"
                >
                  <ChevronRight 
                    className="w-3.5 h-3.5 text-orange-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                  <span>{item}</span>
                </a>
              ))}
            </div>
          </div>

         {/* CONTACT */}
<div className="sm:w-1/2 lg:w-1/4 px-4">
  <h5 className="text-lg font-semibold text-orange-400 mb-3 pb-2 border-b border-orange-500/10">
    Contact
  </h5>
  <div className="space-y-4">
    {/* Phone */}
    <a 
      href="tel:+918778731912" 
      className="group flex items-center p-0.5 transition-colors"
    >
      <div className="w-8 h-8 bg-orange-500/20 rounded-md flex items-center justify-center flex-shrink-0 mr-3">
        <Phone className="w-4 h-4 text-orange-400" />
      </div>
      <span className="text-white/80 text-sm group-hover:text-orange-400 transition-colors">
        +91 87787 31912
      </span>
    </a>
    
    {/* Email */}
    <a 
      href="mailto:info@brightnesttechnologies.in" 
      className="group flex items-center p-0.5 transition-colors"
    >
      <div className="w-8 h-8 bg-orange-500/20 rounded-md flex items-center justify-center flex-shrink-0 mr-3">
        <Mail className="w-4 h-4 text-orange-400" />
      </div>
      <span className="text-white/80 text-sm group-hover:text-orange-400 transition-colors truncate">
        info@brightnesttechnologies.in
      </span>
    </a>
    
    {/* Address */}
    <div className="flex items-start p-0.5">
      <div className="w-8 h-8 bg-orange-500/20 rounded-md flex items-start justify-center pt-0.5 flex-shrink-0 mr-3">
        <MapPin className="w-4 h-4 text-orange-400 mt-0.5" />
      </div>
      <div className="text-white/80 text-sm leading-relaxed">
        1/174 F, Vinobaji Nagar<br />
        Naripallam Road, Odanthurai,<br />
        Mettupalayam, Coimbatore,<br />
        Tamil Nadu - 641301
      </div>
    </div>
  </div>

  {/* Social Icons - Centered */}
  <div className="flex space-x-3 mt-6 justify-center">
    {[
      { icon: Linkedin, href: "https://linkedin.com/company/brightnestsoft" },
      { icon: Twitter, href: "https://twitter.com/brightnestsoft" },
      { icon: Instagram, href: "https://instagram.com/brightnestsoft" }
    ].map(({ icon: Icon, href }, idx) => (
      <a
        key={idx}
        href={href.trim()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 bg-black/30 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-orange-500 hover:border-orange-500/50 hover:text-white transition-all duration-300"
        aria-label={`Follow us on ${['LinkedIn', 'Twitter', 'Instagram'][idx]}`}
      >
        <Icon className="w-4 h-4" />
      </a>
    ))}
  </div>
</div>
        </div>

        {/*  COPYRIGHT */}
        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm font-medium">
              © {new Date().getFullYear()} Brightnest Technologies Pvt Ltd. All rights reserved.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              
              <a 
                href="tel:+919894567890"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold text-sm rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;