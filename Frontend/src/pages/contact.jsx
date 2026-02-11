// src/pages/Contact.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const ContactPage = () => {
  // Scroll to form when URL has #contact-form
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash === '#contact-form') {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        setTimeout(() => {
          formSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        whatsapp: formData.whatsapp,
        service: formData.service,
        message: formData.message,
      });

      if (response.data.success) {
        setStatus("✅ Message sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          service: "Website Design",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-orange-100 selection:text-orange-600">
      {/* ====== HERO SECTION ====== */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/30">
        <div className="max-w-6xl mx-auto">
          {/* Header - Same Content, Professional Styling */}
          <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-4 md:mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs md:text-sm">Get in Touch</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Helpline & <br />
              <span className="text-orange-500">Website Support</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Brightnest is a creative website design company in Coimbatore, Tamilnadu that focuses on delivering effective digital solutions for businesses of all sizes.
            </p>
          </div>

          {/* Contact Cards - Your Exact Info, Professional Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                label: 'WhatsApp Business', 
                value: '+91 87787 31912',
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396 0 12.032c0 2.123.556 4.197 1.61 6.011L0 24l6.105-1.602a11.832 11.832 0 005.937 1.598h.005c6.635 0 12.033-5.395 12.036-12.031a11.811 11.811 0 00-3.479-8.528z"/>
                  </svg>
                )
              },
              { 
                label: 'Skype ID', 
                value: 'live:brightnestgroup',
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 13.045c0-1.477-.281-2.884-.795-4.17C21.757 3.322 17.518 0 12.557 0c-1.233 0-2.411.213-3.51.594C7.618.174 6.132 0 4.608 0 2.062 0 0 2.063 0 4.608c0 1.524.174 3.01.594 4.439C.213 10.146 0 11.324 0 12.557c0 4.961 3.322 9.2 7.829 10.648.429.514.835 1.029 1.415 1.415C10.146 23.787 11.324 24 12.557 24c1.233 0 2.411-.213 3.51-.594 1.43.42 2.915.594 4.439.594 2.545 0 4.608-2.063 4.608-4.608 0-1.524-.174-3.01-.594-4.439.421-1.043.594-2.221.594-3.454zM12.75 19c-3.69 0-5.75-1.851-5.75-3.323 0-.742.547-1.221 1.25-1.221.71 0 1.15.441 1.34 1.031.43 1.33 1.53 2.051 3.16 2.051 1.62 0 2.76-.751 2.76-1.821 0-.961-.73-1.461-2.48-1.881l-1.95-.47c-2.87-.691-4.08-1.981-4.08-3.951 0-2.852 2.44-4.413 5.43-4.413 3.23 0 5.21 1.501 5.21 2.962 0 .701-.52 1.171-1.21 1.171-.78 0-1.07-.531-1.26-.981-.46-.981-1.39-1.541-2.74-1.541-1.43 0-2.43.621-2.43 1.581 0 .841.67 1.321 2.14 1.681l1.95.47c3.15.761 4.42 2.031 4.42 4.161C18.55 17.209 16.14 19 12.75 19z"/>
                  </svg>
                )
              },
              { 
                label: 'Corporate Mail', 
                value: 'info@brightnesttechnologies.in',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              { 
                label: 'Global Presence', 
                value: 'India • USA • UAE',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-5 md:p-6 bg-white rounded-xl border border-gray-200 hover:border-orange-300 transition-colors duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-3 md:mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-xs md:text-sm uppercase tracking-wide mb-1 md:mb-2">{item.label}</h3>
                <p className="text-gray-700 text-sm md:text-base font-medium break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== INQUIRY & TRUST SECTION ====== */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
            
            {/* Left Column: Trust & Testimonials */}
            <motion.div 
  className="lg:col-span-2 space-y-8 md:space-y-10"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  <div>
    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 md:mb-4 tracking-tighter leading-tight">
      Trusted by <span className="text-orange-500">Industry Leaders.</span>
    </h2>
    <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm font-medium">
      Join an elite global network. We transform complex enterprise requirements into high-performance digital legacy.
    </p>
  </div>

  {/* Client Logos Grid - Using your public folder images */}
 <div className="grid grid-cols-3 gap-4 md:gap-6">
  {[
    "/c1.webp",
    "/c2.jpg", 
    "/c3.webp",
    "/c4.webp",
    "/c5.webp",
    "/c6.png"
  ].map((src, i) => (
    <img 
      key={i} 
      src={src} 
      alt={`Client ${i + 1}`} 
      className="h-5 md:h-6 w-auto object-contain" 
      onError={(e) => {
        e.target.style.display = 'none';
      }}
    />
  ))}
</div>

  {/* Testimonials - With Online Avatar Images */}
  <div className="space-y-3 md:space-y-4">
    {[
      { 
        name: "Mr.  Vineeth Chandran", 
        role: "MD • Aqutech ERP Solutions, Sharjah, UAE", 
        text: "Consistent excellence and technical depth.", 
        avatar: "https://ui-avatars.com/api/?name=L.+Kannan&background=ffedd5&color=ea580c&size=64" 
      },
      { 
        name: "Mr. Male Ramarao", 
        role: "MD • Showrya BioHydro", 
        text: "Strategic partners for commercial scale.", 
        avatar: "https://ui-avatars.com/api/?name=Male+Ramarao&background=ffedd5&color=ea580c&size=64" 
      }
    ].map((t, idx) => (
      <div 
        key={idx} 
        className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 group"
      >
        <p className="text-slate-600 italic mb-3 md:mb-4 text-xs md:text-sm leading-relaxed">
          "{t.text}"
        </p>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-7 md:w-8 h-7 md:h-8 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all">
            <img 
              src={t.avatar} 
              alt={t.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h4 className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-widest">
              {t.name}
            </h4>
            <p className="text-[8px] md:text-[10px] font-bold text-orange-500 uppercase tracking-tight">
              {t.role}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</motion.div>

            {/* Right Column: High-Fidelity Form - WITH ID */}
            <motion.div 
              id="contact-form" 
              className="lg:col-span-3 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Minimalist Floating Badge */}
              <div className="absolute top-0 right-4 md:right-12 transform -translate-y-1/2 z-20">
                <div className="bg-slate-900 text-white px-3 md:px-5 py-1 md:py-1.5 rounded-full font-black text-[8px] md:text-[10px] uppercase tracking-[0.3em] shadow-2xl">
                  Secure Link
                </div>
              </div>

              {/* Form Container - Frosted Glass MNC Look */}
              <div className="relative bg-white border border-slate-100 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.06)] rounded-2xl md:rounded-[2.5rem] p-6 md:p-8 lg:p-12">
                <div className="mb-6 md:mb-10">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight mb-1">Initiate Project Brief</h3>
                  <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Global Solutions Architect Hub</p>
                </div>
                
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  {/* Input Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1">
                      <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="w-full bg-slate-50/50 border border-transparent rounded-xl md:rounded-xl px-4 md:px-5 py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none" 
                        placeholder="Full Name" 
                        required 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full bg-slate-50/50 border border-transparent rounded-xl md:rounded-xl px-4 md:px-5 py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none" 
                        placeholder="alex@company.com" 
                        required 
                      />
                    </div>
                  </div>

                  {/* Input Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1">
                      <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full bg-slate-50/50 border border-transparent rounded-xl md:rounded-xl px-4 md:px-5 py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none" 
                        placeholder="+91 000 000 0000" 
                        required 
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Whatsapp</label>
                      <input 
                        type="text" 
                        name="whatsapp" 
                        value={formData.whatsapp} 
                        onChange={handleChange} 
                        className="w-full bg-slate-50/50 border border-transparent rounded-xl md:rounded-xl px-4 md:px-5 py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none" 
                        placeholder="WhatsApp / Skype ID" 
                      />
                    </div>
                  </div>

                  {/* Service Select */}
                  <div className="space-y-1">
                    <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.25em] text-orange-600">Service</label>
                    <div className="relative">
                     <div className="relative">
  <select 
    name="service" 
    value={formData.service} 
    onChange={handleChange} 
    required
    className="w-full bg-slate-50/50 border border-transparent rounded-xl md:rounded-xl px-4 md:px-5 py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none appearance-none cursor-pointer invalid:text-slate-300 pr-10"
  >
    <option value="" disabled hidden>Selection Area</option>
    <option value="Website Design">Website Design</option>
    <option value="Mobile App Development">Mobile App Development</option>
    <option value="SEO">Enterprise SEO</option>
    <option value="E-Commerce Solutions">E-Commerce Solutions</option>
    <option value="CMS Development">CMS Development</option>
    <option value="Matrimony Solutions">Matrimony Solutions</option>
    <option value="PWA Apps">PWA Apps</option>
    <option value="Web Apps">Web Apps</option>
    <option value="ERP & POS">ERP & POS</option>
    <option value="Social Media Marketing">Social Media Marketing</option>
    <option value="Google Ads">Google Ads</option>
    <option value="Email Marketing">Email Marketing</option>
  </select>
  
  {/* Custom Dropdown Arrow */}
  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
    <svg 
      className="w-4 h-4 text-orange-500" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
  
  {/* Custom Styling for Options */}
  <style jsx>{`
    select option {
      background-color: #fff;
      color: #1e293b;
      padding: 8px 12px;
    }
    
    select option:checked,
    select option:hover {
      background-color: #ffedd5 !important;
      color: #ea580c !important;
      font-weight: bold;
    }
    
    /* Selected option styling */
    select:focus option:checked {
      background-color: #fed7aa !important;
      color: #c2410c !important;
    }
  `}</style>
</div>
                      <div className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Area */}
                  <div className="space-y-1">
                    <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">Message Details</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={2} 
                      className="w-full bg-slate-50/50 border border-transparent rounded-xl md:rounded-xl px-4 md:px-5 py-2.5 md:py-3.5 text-xs md:text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none resize-none"
                      placeholder="Objectives and scope..." 
                      required 
                    />
                  </div>

                  <div className="flex items-start gap-2 md:gap-3 py-1 md:py-2">
                    <input 
                      type="checkbox" 
                      className="w-3 h-3 md:w-4 md:h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500/20 accent-orange-600 cursor-pointer mt-0.5" 
                      id="terms" 
                      required 
                    />
                    <label htmlFor="terms" className="text-[8px] md:text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] cursor-pointer leading-tight">
                      I acknowledge the <span className="text-slate-900 underline font-black">Brightnest Privacy Protocol</span> and Data Policy.
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, boxShadow: '0 10px 25px -8px rgba(249,115,22,0.3)' }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 md:py-4 bg-slate-900 text-white rounded-xl md:rounded-xl font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-2 md:gap-3"
                  >
                    {loading ? "Establishing Uplink..." : "Transmit Project Brief"}
                  </motion.button>

                  {status && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      className={`p-2 md:p-3 rounded-lg text-center text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] border ${
                        status.includes('✅') 
                          ? 'bg-green-50 border-green-100 text-green-700' 
                          : 'bg-red-50 border-red-100 text-red-700'
                      }`}
                    >
                      {status}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;