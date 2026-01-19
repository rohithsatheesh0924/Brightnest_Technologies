// src/pages/contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-orange-100 selection:text-orange-600">
      
      {/* ====== HERO SECTION ====== */}
   
<section className="relative overflow-hidden bg-white py-24 px-4 md:px-8 lg:px-16">
  {/* Modern Architectural Background Elements */}
  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
  
  <motion.div 
    className="max-w-7xl mx-auto relative z-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
  >
    {/* Header Section */}
    <div className="text-center max-w-4xl mx-auto mb-20">
      <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
        </span>
        <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-[10px]">Get in Touch</span>
      </motion.div>
      
      <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
        Contact Helpline & <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
          Website Support
        </span>
      </motion.h2>
    </div>

    {/* Contact Info Cards */}
    <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { 
          label: 'WhatsApp Business', 
          value: '+91 9342570575', 
          icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396 0 12.032c0 2.123.556 4.197 1.61 6.011L0 24l6.105-1.602a11.832 11.832 0 005.937 1.598h.005c6.635 0 12.033-5.395 12.036-12.031a11.811 11.811 0 00-3.479-8.528z' 
        },
        { 
          label: 'Skype ID', 
          value: 'live:brightnestgroup', 
          icon: 'M24 13.045c0-1.477-.281-2.884-.795-4.17C21.757 3.322 17.518 0 12.557 0c-1.233 0-2.411.213-3.51.594C7.618.174 6.132 0 4.608 0 2.062 0 0 2.063 0 4.608c0 1.524.174 3.01.594 4.439C.213 10.146 0 11.324 0 12.557c0 4.961 3.322 9.2 7.829 10.648.429.514.835 1.029 1.415 1.415C10.146 23.787 11.324 24 12.557 24c1.233 0 2.411-.213 3.51-.594 1.43.42 2.915.594 4.439.594 2.545 0 4.608-2.063 4.608-4.608 0-1.524-.174-3.01-.594-4.439.421-1.043.594-2.221.594-3.454zM12.75 19c-3.69 0-5.75-1.851-5.75-3.323 0-.742.547-1.221 1.25-1.221.71 0 1.15.441 1.34 1.031.43 1.33 1.53 2.051 3.16 2.051 1.62 0 2.76-.751 2.76-1.821 0-.961-.73-1.461-2.48-1.881l-1.95-.47c-2.87-.691-4.08-1.981-4.08-3.951 0-2.852 2.44-4.413 5.43-4.413 3.23 0 5.21 1.501 5.21 2.962 0 .701-.52 1.171-1.21 1.171-.78 0-1.07-.531-1.26-.981-.46-.981-1.39-1.541-2.74-1.541-1.43 0-2.43.621-2.43 1.581 0 .841.67 1.321 2.14 1.681l1.95.47c3.15.761 4.42 2.031 4.42 4.161C18.55 17.209 16.14 19 12.75 19z'
        },
        { 
          label: 'Corporate Mail', 
          value: 'info@brightnestsoft.com', 
          value2: 'brightnestgroup@gmail.com', 
          icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v-7H5v7z' 
        },
        { 
          label: 'Global Presence', 
          value: 'India • USA • UAE', 
          icon: 'M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' 
        }
      ].map((item, idx) => (
        <motion.div 
          key={idx}
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
          className="relative bg-white/70 backdrop-blur-md p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.1)] hover:border-orange-100 transition-all duration-500 group"
        >
          {/* Animated Icon Container */}
          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:rotate-6 transition-all duration-500">
            <svg 
              className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-500" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d={item.icon} />
            </svg>
          </div>
          
          <h3 className="font-black text-slate-400 text-[11px] uppercase tracking-[0.25em] mb-4 group-hover:text-orange-500 transition-colors">
            {item.label}
          </h3>
          
          <div className="space-y-1">
            <p className="text-slate-800 break-words text-base font-bold leading-relaxed">
              {item.value}
            </p>
            {item.value2 && (
              <p className="text-slate-500 break-words text-sm font-semibold italic">
                {item.value2}
              </p>
            )}
          </div>

          {/* Subtle Decorative Gradient Link effect */}
          <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</section>

      {/* ====== INQUIRY & TRUST SECTION ====== */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Left Column: Trust & Testimonials */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted by Thousands</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Join our community of satisfied clients worldwide. We turn requirements into results.
              </p>

              {/* Client Logos Grid */}
              <div className="grid grid-cols-3 gap-8 mb-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`/images/client-logo-${i}.png`} alt="Client" className="h-10 object-contain" />
                ))}
              </div>

              {/* Individual Testimonials */}
              <div className="space-y-6">
                {[
                  { name: "Mr. L. Kannan", role: "Correspondent - Minerva Public School", text: "Brightnest Technologies Pvt Ltd, well experienced web developer in Coimbatore. You guys are the best!", img: "1" },
                  { name: "Mr. Male Ramarao", role: "MD - Showrya BioHydro Labs Medical", text: "Worthy website design team and affordable price, good approaches.", img: "2" }
                ].map((t, idx) => (
                  <div key={idx} className="bg-[#FFF9F4] p-6 rounded-2xl border border-orange-50">
                    <p className="text-gray-700 italic mb-4 leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-200 rounded-full overflow-hidden">
                        <img src={`/images/testimonial-avatar-${t.img}.png`} alt={t.name} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900">{t.name}</h4>
                        <p className="text-xs text-orange-600">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Quick Quote
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Tell us about your project</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Contact Number</label>
                    <input type="tel" placeholder="+91 ..." className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400">WhatsApp</label>
                    <input type="text" placeholder="WhatsApp Number" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Service Required</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none cursor-pointer">
                    <option>Website Design</option>
                    <option>Mobile App Development</option>
                    <option>SEO</option>
                    <option>Social Media Marketing</option>
                    <option>Google Ads</option>
                    <option>Email Marketing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Message Details</label>
                  <textarea rows={4} placeholder="Describe your requirements..." className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
                </div>

                <div className="flex items-center space-x-3 p-2">
                  <input type="checkbox" id="terms" className="w-5 h-5 accent-orange-500 cursor-pointer" required />
                  <label htmlFor="terms" className="text-sm text-gray-500">
                    I agree to the <span className="text-orange-600 font-semibold cursor-pointer">Terms & Conditions</span>
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg shadow-[0_15px_30px_-10px_rgba(249,115,22,0.4)] hover:bg-orange-600 transition-all duration-300"
                >
                  Send Inquiry Now →
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;