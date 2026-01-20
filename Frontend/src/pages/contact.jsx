// src/pages/contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  // --- REFERRAL CODE LOGIC START ---
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
console.log(formData);
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
  // --- REFERRAL CODE LOGIC END ---

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-orange-100 selection:text-orange-600">
      
      <style>
        {`
          @keyframes colorband {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-colorband {
            background: linear-gradient(-45deg, #fff9f4, #ffeada, #f0f7ff, #ffffff, #fff5eb);
            background-size: 400% 400%;
            animation: colorband 12s ease-in-out infinite;
          }
        `}
      </style>

      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden animate-colorband py-24 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.4)_100%)] pointer-events-none" />
        
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-orange-100 mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-orange-600 font-bold uppercase tracking-[0.25em] text-[10px]">Get in Touch</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Contact Helpline & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-orange-600">
                Website Support
              </span>
            </motion.h2>
          </div>

          {/* Contact Info Cards */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'WhatsApp Business', value: '+91 9342570575', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396 0 12.032c0 2.123.556 4.197 1.61 6.011L0 24l6.105-1.602a11.832 11.832 0 005.937 1.598h.005c6.635 0 12.033-5.395 12.036-12.031a11.811 11.811 0 00-3.479-8.528z' },
              { label: 'Skype ID', value: 'live:brightnestgroup', icon: 'M24 13.045c0-1.477-.281-2.884-.795-4.17C21.757 3.322 17.518 0 12.557 0c-1.233 0-2.411.213-3.51.594C7.618.174 6.132 0 4.608 0 2.062 0 0 2.063 0 4.608c0 1.524.174 3.01.594 4.439C.213 10.146 0 11.324 0 12.557c0 4.961 3.322 9.2 7.829 10.648.429.514.835 1.029 1.415 1.415C10.146 23.787 11.324 24 12.557 24c1.233 0 2.411-.213 3.51-.594 1.43.42 2.915.594 4.439.594 2.545 0 4.608-2.063 4.608-4.608 0-1.524-.174-3.01-.594-4.439.421-1.043.594-2.221.594-3.454zM12.75 19c-3.69 0-5.75-1.851-5.75-3.323 0-.742.547-1.221 1.25-1.221.71 0 1.15.441 1.34 1.031.43 1.33 1.53 2.051 3.16 2.051 1.62 0 2.76-.751 2.76-1.821 0-.961-.73-1.461-2.48-1.881l-1.95-.47c-2.87-.691-4.08-1.981-4.08-3.951 0-2.852 2.44-4.413 5.43-4.413 3.23 0 5.21 1.501 5.21 2.962 0 .701-.52 1.171-1.21 1.171-.78 0-1.07-.531-1.26-.981-.46-.981-1.39-1.541-2.74-1.541-1.43 0-2.43.621-2.43 1.581 0 .841.67 1.321 2.14 1.681l1.95.47c3.15.761 4.42 2.031 4.42 4.161C18.55 17.209 16.14 19 12.75 19z' },
              { label: 'Corporate Mail', value: 'info@brightnestsoft.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v-7H5v7z' },
              { label: 'Global Presence', value: 'India • USA • UAE', icon: 'M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -12, transition: { duration: 0.4 } }}
                className="relative bg-white/40 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] hover:shadow-orange-300/20 hover:border-orange-200 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-2xl flex items-center justify-center mb-10 group-hover:bg-orange-600 group-hover:rotate-12 group-hover:scale-110 shadow-sm transition-all duration-500">
                  <svg className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-black text-slate-400 text-[11px] uppercase tracking-[0.3em] mb-4 group-hover:text-orange-600 transition-colors">{item.label}</h3>
                <p className="text-slate-900 break-words text-base font-extrabold leading-relaxed">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ====== INQUIRY & TRUST SECTION ====== */}
     <section className="py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
  <div className="max-w-6xl mx-auto"> {/* Decreased max-width for tighter look */}
    <div className="grid lg:grid-cols-5 gap-12 items-start">
      
      {/* Left Column: Trust & Testimonials */}
      <motion.div 
        className="lg:col-span-2 space-y-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
            Trusted by <span className="text-orange-500">Industry Leaders.</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
            Join an elite global network. We transform complex enterprise requirements into high-performance digital legacy.
          </p>
        </div>

        {/* Client Logos Grid - Smaller & Clean */}
        <div className="grid grid-cols-3 gap-6 opacity-30 grayscale hover:opacity-60 transition-opacity duration-700">
          {[1, 2, 3, 4, 5].map(i => (
            <img key={i} src={`/images/client-logo-${i}.png`} alt="MNC Client" className="h-6 w-auto object-contain" />
          ))}
        </div>

        {/* Testimonials - Minimalist MNC Style */}
        <div className="space-y-4">
          {[
            { name: "Mr. L. Kannan", role: "Correspondent • Minerva Public", text: "Consistent excellence and technical depth.", img: "1" },
            { name: "Mr. Male Ramarao", role: "MD • Showrya BioHydro", text: "Strategic partners for commercial scale.", img: "2" }
          ].map((t, idx) => (
            <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-500 group">
              <p className="text-slate-600 italic mb-4 text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={`/images/testimonial-avatar-${t.img}.png`} alt={t.name} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">{t.name}</h4>
                  <p className="text-[10px] font-bold text-orange-500 uppercase tracking-tight">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Column: High-Fidelity Form */}
      <motion.div 
        className="lg:col-span-3 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Minimalist Floating Badge */}
        <div className="absolute top-0 right-12 transform -translate-y-1/2 z-20">
          <div className="bg-slate-900 text-white px-5 py-1.5 rounded-full font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl">
            Secure Link
          </div>
        </div>

        {/* Form Container - Frosted Glass MNC Look */}
        <div className="relative bg-white border border-slate-100 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.06)] rounded-[2.5rem] p-8 md:p-12">
          <div className="mb-10">
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1">Initiate Project Brief</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Solutions Architect Hub</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Input Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 ml-1">Name</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange} 
                  className="w-full bg-slate-50/50 border border-transparent rounded-xl px-5 py-3.5 text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none" 
                  placeholder="Full Name" required 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 ml-1">Email</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange} 
                  className="w-full bg-slate-50/50 border border-transparent rounded-xl px-5 py-3.5 text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none" 
                  placeholder="alex@company.com" required 
                />
              </div>
            </div>

            {/* Input Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 ml-1">Phone Number</label>
                <input 
                  type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                  className="w-full bg-slate-50/50 border border-transparent rounded-xl px-5 py-3.5 text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none" 
                  placeholder="+91 000 000 0000" required 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 ml-1">Whatsapp</label>
                <input 
                  type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} 
                  className="w-full bg-slate-50/50 border border-transparent rounded-xl px-5 py-3.5 text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none" 
                  placeholder="WhatsApp / Skype ID" 
                />
              </div>
            </div>

            {/* Service Select */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-600 ml-1">Service</label>
              <div className="relative">
                <select 
                  name="service" value={formData.service} onChange={handleChange} required
                  className="w-full bg-slate-50/50 border border-transparent rounded-xl px-5 py-3.5 text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none appearance-none cursor-pointer invalid:text-slate-300"
                >
                  <option value="" disabled hidden>Selection Area</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="SEO">Enterprise SEO</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 ml-1">Message Details</label>
              <textarea 
                name="message" value={formData.message} onChange={handleChange} rows={3} 
                className="w-full bg-slate-50/50 border border-transparent rounded-xl px-5 py-3.5 text-sm font-bold text-slate-800 focus:bg-white focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none resize-none" 
                placeholder="Objectives and scope..." required 
              />
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500/20 accent-orange-600 cursor-pointer" id="terms" required />
              <label htmlFor="terms" className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.1em] cursor-pointer leading-tight">
                I acknowledge the <span className="text-slate-900 underline font-black">Brightnestsoft Privacy Protocol</span> and Data Policy.
              </label>
            </div>

            <motion.button
              whileHover={{ scale: 1.01, boxShadow: '0 15px 30px -10px rgba(249,115,22,0.3)' }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-slate-900 text-white rounded-xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-orange-600 transition-all flex items-center justify-center gap-3"
            >
              {loading ? "Establishing Uplink..." : "Transmit Project Brief"}
            </motion.button>

            {status && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`p-3 rounded-lg text-center text-[9px] font-black uppercase tracking-[0.2em] border ${status.includes('✅') ? 'bg-green-50 border-green-100 text-green-700' : 'bg-red-50 border-red-100 text-red-700'}`}>
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