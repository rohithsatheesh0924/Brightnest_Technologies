import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";  // 👈 ADD THIS LINE
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoLoop from "../components/LogoLoop";
import Aurora from "../components/Aurora";
import Plasma from "../components/Plasma";
import ColorBends from "../components/ColorBends";
import GridScan from "../components/GridScan";
import Hyperspeed from "../components/Hyperspeed";
import TextType from "../components/TextType";

const CountUp = ({ to }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, to, count]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

{/* 1. PLACE THIS SUB-COMPONENT OUTSIDE YOUR MAIN Home FUNCTION */}
const ClientLogo = ({ client }) => (
  <motion.div 
    whileHover={{ scale: 1.1, y: -8 }}
    whileTap={{ scale: 0.95 }}
    className="w-44 h-24 flex items-center justify-center cursor-pointer group"
  >
    <img 
      src={client.logo} 
      alt={client.name} 
      className="max-w-[140px] max-h-[55px] object-contain transition-all duration-500 
                 /* LAYER 1: Default State - Black & Semi-Transparent */
                 filter brightness-0 opacity-40 
                 /* LAYER 2: Hover/Touch State - Original Color & Full Opacity */
                 group-hover:filter-none group-hover:opacity-100" 
    />
  </motion.div>
);

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const TypewriterText = ({ text, delay = 0, className }) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayText('');
      setCurrentIndex(0);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, text]);

  return <span className={className}>{displayText}</span>;
};


const Home = () => {
const navigate = useNavigate(); 

  const handleExplore = () => {
    navigate('/all-services');  
  };
  const scrollToContactForm = () => {
    navigate('/contact#contact-form');
    
    // Scroll to form after navigation
    setTimeout(() => {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };


  const serviceRoutes = {
    "Website Design and Development": "/web-design",
    "Logo Design": "/logo-design", 
    "E-Commerce Website": "/ecommerce",
    "CMS Website": "/cms-development",
    "Mobile App Development": "/mobile-apps",
    "SEO & Digital Marketing": "/seo"
  };

  const services = [
    { 
      title: "Website Design and Development", 
      image: "https://cdn-icons-png.flaticon.com/512/2210/2210153.png",
      desc: "Get a professional and responsive website that reflects your brand and engages your audience. We build static, dynamic, and custom web solutions." 
    },
    { 
      title: "Logo Design", 
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
      desc: "Create a memorable visual identity for your business with our custom logo design services. We craft unique and scalable logos." 
    },
    { 
      title: "E-Commerce Website", 
      image: "https://cdn-icons-png.flaticon.com/512/1162/1162499.png",
      desc: "Launch a powerful ecommerce store with secure payments, product management, and user‑friendly navigation to maximize sales." 
    },
    { 
      title: "CMS Website", 
      image: "https://cdn-icons-png.flaticon.com/512/3534/3534033.png",
      desc: "Manage your content with ease using user‑friendly CMS platforms. Update pages, images, and blogs without any technical expertise." 
    },
    { 
      title: "Mobile App Development", 
      image: "https://cdn-icons-png.flaticon.com/512/2586/2586488.png",
      desc: "Extend your digital presence with high‑performance mobile apps designed for Android and iOS platforms to engage customers." 
    },
    { 
      title: "SEO & Digital Marketing", 
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055644.png",
      desc: "Improve your visibility on search engines and attract targeted traffic with SEO‑friendly design and digital marketing services." 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#282828] overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
     {/* <Aurora
  color1="#FF8C00"  // Primary Tech Orange
  color2="#FFA500"  // Radiant Orange
  color3="#FFD580"  // Soft Highlight Orange
/> */}


        {/* Hero Section - Unique Animation: Left Slide Reveal */}
 <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-12 pb-20 overflow-hidden bg-black text-center">
  {/* Background Layer: ColorBends */}
  <div className="absolute inset-0 z-0">
    <ColorBends 
      speed={0.5}
      amplitude={1.1}
      color1="#EA580C"
      color2="#7C2D12"
      color3="#000000"
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_85%)] z-[1]" />
  </div>

  <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center">
    {/* Content Wrapper */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      <p className="font-luciole text-xs md:text-sm tracking-[0.3em] uppercase text-orange-400 mb-6 font-bold">
        Premier Digital Solutions
      </p>
      
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-montserrat text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8 text-white tracking-tighter mx-auto"
      >
        {/* Mobile: Single line | Desktop: Two lines */}
        <span className="hidden sm:block opacity-90 mb-2">
          {["W", "e", "b", "s", "i", "t", "e", "\u00A0", "D", "e", "s", "i", "g", "n", "\u00A0", "&"].map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.05, duration: 0.6, ease: "easeOut" }}
              className="inline-block"
            >
              {char === "\u00A0" ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
        
       {/* Mobile: Two-line layout */}
<span className="sm:hidden block">
  {/* Line 1: "Website Design &" */}
  <span className="block opacity-90 mb-2 text-xl">
    {["W", "e", "b", "s", "i", "t", "e", "\u00A0", "D", "e", "s", "i", "g", "n", "\u00A0", "&"].map((char, idx) => (
      <motion.span
        key={idx}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: idx * 0.02, duration: 0.4, ease: "easeOut" }}
        className="inline-block"
      >
        {char === "\u00A0" ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
  
  {/* Line 2: "Development Company" */}
  <span className="block opacity-90 mb-2 text-xl">
    {["D", "e", "v", "e", "l", "o", "p", "m", "e", "n", "t", "\u00A0", "C", "o", "m", "p", "a", "n", "y"].map((char, idx) => (
      <motion.span
        key={idx + 100} // Unique key for second line
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 + idx * 0.02, duration: 0.4, ease: "easeOut" }}
        className="inline-block"
      >
        {char === "\u00A0" ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
</span>
        
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="hidden sm:block mb-2"
        >
          {["D", "e", "v", "e", "l", "o", "p", "m", "e", "n", "t", "\u00A0", "C", "o", "m", "p", "a", "n", "y"].map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 + idx * 0.04, duration: 0.5, ease: "easeOut" }}
              className="inline-block"
            >
              {char === "\u00A0" ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>

        <motion.span 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="block mt-2"
        >
          {"in\u00A0"}
          {["C", "o", "i", "m", "b", "a", "t", "o", "r", "e"].map((letter, idx) => (
            <motion.span 
              key={idx}
              initial={{ y: 100, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                textShadow: [
                  "0 0 10px rgba(234,88,12,0.3)",
                  "0 0 20px rgba(234,88,12,0.4)",
                  "0 0 30px rgba(234,88,12,0.5)",
                  "0 0 20px rgba(234,88,12,0.4)"
                ],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                delay: 1.6 + idx * 0.05, 
                duration: 0.6,
                textShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
              }}
              className="text-orange-500 drop-shadow-[0_0_20px_rgba(234,88,12,0.4)] inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </motion.h2>
      
      <p className="font-poppins text-gray-300 mb-10 leading-relaxed text-base md:text-lg max-w-2xl mx-auto drop-shadow-sm">
        Brightnest Technologies delivers high-performance web ecosystems. We empower businesses in Coimbatore with stunning design and functional excellence tailored to your growth.
      </p>

      {/* Two Professional Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/all-services')}
          className="font-poppins px-10 py-4 rounded-full bg-orange-500 text-white text-sm font-bold shadow-[0_10px_30px_rgba(234,88,12,0.4)] hover:bg-orange-600 transition-all w-full sm:w-auto"
        >
          Explore Services
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="font-poppins px-10 py-4 rounded-full border border-white/30 text-white text-sm font-bold backdrop-blur-sm transition-all w-full sm:w-auto"
        >
          View Portfolio
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>

        {/* Services grid - Unique Animation: Staggered Fade Up Cards */}
         <section className="w-full py-16 bg-[#FFF2EA]">
  <div className="container mx-auto px-4 md:px-8 lg:px-16">
    {/* Header - With Entry Animation */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <p className="text-xs uppercase tracking-wide text-orange-500 mb-2 font-bold font-poppins">
        What we can do for your business
      </p>
      <h2 className="text-2xl md:text-3xl font-bold font-montserrat">
        Brightnest: Your Trusted Partner for Web Development Services
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-poppins leading-relaxed">
        Brightnest is a creative website design company in Coimbatore,
        Tamilnadu that focuses on delivering effective digital solutions
        for businesses of all sizes. From custom website design to
        comprehensive ecommerce development, our team ensures your online
        presence is professional, responsive, and results‑driven.
      </p>
    </motion.div>

    {/* Cards Grid - With Staggered Entry Animation */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
          >
            {/* Circular Image Container */}
            <div className="w-16 h-16 rounded-full bg-orange-50 mb-6 flex items-center justify-center overflow-hidden border border-orange-100 
                          group-hover:bg-orange-500 
                          group-hover:shadow-lg 
                          group-hover:shadow-orange-200 
                          transition-all duration-300">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-10 h-10 object-contain" 
              />
            </div>

            <h3 className="font-bold text-lg mb-3 font-montserrat text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 flex-1 font-poppins leading-relaxed">
              {item.desc}
            </p>
            
            {/* Navigation Button with Motion */}
            <motion.button 
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(serviceRoutes[item.title])}
              className="mt-6 text-sm text-orange-600 font-bold text-left flex items-center gap-2 hover:gap-3 transition-all group-hover:text-orange-500"
            >
              Get started today
              <span className="text-lg">→</span>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* CTA - With Entry Animation */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <p className="text-gray-700 font-poppins text-lg">
        Elevate your business with <strong>Brightnest</strong> and transform your
        website into a powerful marketing asset.
      </p>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/all-services')}
        className="px-8 py-3 rounded-full bg-orange-500 text-white font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 hover:scale-105 transition-all whitespace-nowrap"
      >
        Explore Now
      </motion.button>
    </motion.div>
  </div>
</section>

        {/* Intro stats section - Unique Animation: Individual Item Pop-in */}
       <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid lg:grid-cols-[2fr,1fr] gap-10 items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
          <p className="font-poppins text-xs uppercase tracking-wide text-orange-500 mb-2">
            Interested in getting a web design service for your company?
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Introducing the Leading Web Design Company in Coimbatore
          </h2>
          <p className="text-gray-600 mb-3 font-poppins">
            Brightnest is recognized as one of the leading web design
            companies in Coimbatore, offering tailored solutions that blend
            creativity with functionality. Our experienced team builds
            responsive, SEO‑friendly websites that help businesses stand out
            in a competitive digital landscape.
          </p>
          <p className="text-gray-600 mb-4 font-poppins">
            From concept to launch, we manage the entire lifecycle of your
            project, ensuring that every pixel and every line of code serves
            a clear purpose. Whether you need a corporate site, ecommerce
            platform, or custom web application, we deliver on time and
            within budget.
          </p>
          <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate('/about')}
      className="inline-flex items-center px-5 py-2.5 rounded-full border border-orange-500 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition-all duration-300"
    >
      About Us
    </motion.button>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { target: 60, title: "60+", label: "Projects", desc: "Brightnest delivered more than 60 successful projects across the globe. [web:3]" },
            { target: 60, title: "60+", label: "Clients", desc: "Clients worldwide trust our quality, processes, and timely delivery. [web:3]" },
            { target: 20, title: "20+", label: "Team", desc: "A strong team of passionate designers, developers, and strategists. [web:3]" },
            { target: 5, title: "5+", label: "Years", desc: "Over 5 years of experience building digital solutions for diverse industries. [web:3]" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#FFF9F4] rounded-2xl p-4 text-center shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-1">
                <CountUp to={stat.target} />+
              </h3>
              <p className="font-poppins text-xs uppercase tracking-wide text-gray-500">{stat.label}</p>
              <p className="font-poppins text-xs text-gray-600 mt-2">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

        {/* Technologies - Unique Animation: Staggered Fade Up */}
   {/* --- SECTION 1: TECHNOLOGIES (STAYS AS IS) --- */}
<section className="relative w-full py-20 bg-[#FFF9F4] overflow-hidden z-20 shadow-xl">
  <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp} // Ensure fadeInUp is defined in your file
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-gray-900">
        Technologies we work with
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-poppins leading-relaxed text-lg">
        From modern frontend frameworks to robust backend platforms,
        Brightnest uses reliable technologies to build secure, scalable,
        and high‑performance web solutions.
      </p>
    </motion.div>

    <div className="w-full">
      <LogoLoop 
        speed={80} 
        logoHeight={60} 
        gap={60} 
        pauseOnHover={true}
        logos={[
          { src: "./ios.svg", alt: "iOS" },
          { src: "./android.svg", alt: "Android" },
          { src: "./reactjs.svg", alt: "React" },
          { src: "./nodejs.svg", alt: "Node" },
          { src: "./python.svg", alt: "Python" },
          { src: "./laravel.svg", alt: "Laravel" },
          { src: "/php.svg", alt: "PHP" },
          { src: "/mysql.svg", alt: "MySQL" },
          { src: "/mongodb.svg", alt: "MongoDB" },
          { src: "/wordpress.svg", alt: "WordPress" },
          { src: "/shopify.svg", alt: "Shopify" },
        ]} 
      />
    </div>
  </div>
</section>

{/* --- SECTION 2: TESTIMONIAL (3-LAYER WITH FIXED BG) --- */}
<section className="relative w-full py-32 overflow-hidden flex items-center justify-center min-h-[600px] bg-black">
  {/* LAYER 1: Fixed Background Image */}
  <div 
    className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat grayscale-[30%]"
    style={{ 
      backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')`,
      // bg-fixed creates the parallax effect where image doesn't move
    }}
  />

  {/* LAYER 2: Black Overlay (Higher contrast for fixed backgrounds) */}
  <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[1px]" />

  {/* LAYER 3: Content Layer - Animating Bottom to Top */}
  <motion.div 
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="container relative z-20 mx-auto px-4 md:px-8 lg:px-16 text-center"
>
  <div className="inline-flex items-center gap-3 mb-6">
    <div className="w-1 h-6 bg-orange-500"></div>
    <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Client Testimonials</span>
  </div>
  
  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
    Trusted by Industry Leaders Worldwide
  </h2>
  
  <p className="text-white mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
    For over 15 years, global enterprises have partnered with Brightnest to transform their digital presence and drive measurable business outcomes.
  </p>
  
  <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="flex justify-center mb-8">
      <svg className="w-12 h-12 text-orange-500 opacity-20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
    </div>
    
    <p className="italic text-gray-800 mb-10 text-xl md:text-2xl leading-relaxed font-medium">
      "Brightnest has been our strategic digital partner for over 8 years. Their enterprise-grade solutions have consistently delivered ROI and technical excellence that exceeds industry standards."
    </p>

    <div className="inline-flex items-center gap-6">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center border-2 border-orange-200">
        <span className="text-orange-700 font-bold text-lg">LK</span>
      </div>
      
      {/* Info */}
      <div className="text-left">
        <p className="font-bold text-gray-900 text-xl">Mr. L. Komaran</p>
        <p className="text-gray-600 text-sm font-medium">Correspondent • Minerva Public School</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 001.022.672l3.124.45c1.184.172 1.603 1.518.76 2.254l-2.254 1.947a1 1 0 00-.364 1.118l.63 3.124c.172 1.184-.76 2.042-1.842 1.603l-2.824-1.14a1 1 0 00-1.118 0l-2.824 1.14c-1.082.439-2.014-.419-1.842-1.603l.63-3.124a1 1 0 00-.364-1.118L2.61 9.347c-.843-.736-.424-2.082.76-2.254l3.124-.45a1 1 0 001.022-.672L9.049 2.927z" />
</svg>
          ))}
          <span className="text-xs text-gray-500 ml-2">Enterprise Client • 8+ Years</span>
        </div>
      </div>
    </div>
  </div>
</motion.div>
</section>



        {/* Clients Section - Unique Animation: Hover Pop for Logos */}
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-orange-500 font-semibold mb-2">OUR CLIENTS & PARTNERS</p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">We have built solutions for…</h3>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            From local brands to international businesses, Brightnest Technologies supports teams who expect reliable execution and thoughtful design.
          </p>
        </motion.div>
    
        {/* Simple Responsive Grid Gallery */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            "/c1.webp",
            "/c2.jpg",
            "/c3.webp",
            "/c4.webp",
            "/c5.webp",
            "/c6.png",
            "/c7.png",
            "/c8.png",
            "/c9.webp",
            "/c10.png",
            "/c11.png",
            "/c12.webp",
            "/c13.webp",
            "/c14.png",
            "/c15.webp",
            "/c16.png",
            "/c17.webp",
            "/c18.webp",
            "/c19.png"
          ].map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200 hover:border-orange-300 transition-colors"
            >
              <img
                src={src}
                alt={`Client ${index + 1}`}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  // Optional: show fallback icon
                  const parent = e.target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="text-gray-400 text-xs">Logo ${index + 1}</div>`;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>


        {/* FAQ - Unique Animation: Bottom Slide Up */}
      <section className="w-full py-16 bg-[#FFF2EA]">
  <div className="container mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT SIDE: Content */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInLeft}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-2 font-montserrat text-gray-900">
        Web Design FAQs: Everything You Need to Know
      </h2>
      <p className="text-gray-600 mb-6 font-poppins leading-relaxed">
        Website design questions often arise when businesses start their
        digital journey. At Brightnest, we answer your queries and
        guide you with clear, transparent information.
      </p>
      
      <ul className="space-y-4 text-sm text-gray-700 font-luciole">
        <li className="flex gap-2">
          <span className="text-orange-500 font-bold">•</span>
          <span><strong>What is Brightnest?</strong> A full‑service web, app, and digital marketing company based in Coimbatore, India.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-orange-500 font-bold">•</span>
          <span><strong>Do you provide responsive design?</strong> Yes, all websites are fully responsive and mobile‑friendly.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-orange-500 font-bold">•</span>
          <span><strong>Can I update my website content?</strong> Yes, we build CMS‑based sites so you can edit text, images, and blogs easily.</span>
        </li>
        <li className="flex gap-2">
          <span className="text-orange-500 font-bold">•</span>
          <span><strong>Do you offer maintenance?</strong> We provide ongoing support and maintenance packages based on your needs.</span>
        </li>
      </ul>
    </motion.div>
    
    {/* RIGHT SIDE: Image */}
   <motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Professional "Out-Quint" easing
  className="flex justify-center items-center"
>
  <img 
    src="/faq.png" 
    alt="Frequently Asked Questions"
    className="w-full h-auto max-w-lg object-contain"
    onError={(e) => {
      e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974";
    }}
  />
</motion.div>
  </div>
</section>
        {/* Pricing - Unique Animation: Right Slide Reveal */}
       <section className="w-full py-16 bg-white">
  <div className="container mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-10 items-center">
    
    {/* LEFT SIDE: Content */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInLeft}
    >
      <p className="text-xs uppercase tracking-wide text-orange-500 mb-2 font-bold font-poppins">
        Are you looking for a website design company in or around Coimbatore?
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-3 font-montserrat text-gray-900">
        Web Designing Charges in Coimbatore
      </h2>
      <p className="text-gray-600 mb-3 font-poppins leading-relaxed">
        Brightnest offers affordable website design pricing in
        Coimbatore with clear packages that include responsive design,
        SEO‑friendly pages, contact forms, and more.
      </p>
      <p className="text-gray-600 mb-6 font-poppins leading-relaxed">
        Whether you need a starter website or a fully featured ecommerce
        platform, our pricing ensures you get maximum value without
        compromising on quality or performance.
      </p>
      
      <div className="flex gap-4">
       <motion.button 
  whileHover={{ scale: 1.05 }} 
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate('/contact')}
  className="px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all duration-300 font-poppins"
>
  Get a Quote
</motion.button>

        <motion.button 
  whileHover={{ scale: 1.05 }} 
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    window.open('https://wa.me/918778731912', '_blank');
  }}
  className="px-6 py-3 rounded-full bg-green-500 text-white text-sm font-semibold shadow-lg shadow-green-200 hover:bg-green-600 transition-all duration-300 font-poppins flex items-center gap-2"
>
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
  WhatsApp
</motion.button>

      </div>
    </motion.div>
    
    {/* RIGHT SIDE: Image */}
   <motion.div 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex justify-center items-center"
>
  <img 
    src="/team-support.svg" 
    alt="Web Design Pricing in Coimbatore"
    className="w-full h-auto object-contain max-h-[500px]" 
    // "object-contain" ensures no cropping, "max-h" keeps it professional
    onError={(e) => {
      e.target.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022";
    }}
  />
</motion.div>
  </div>
</section>
      </main>
    </div>
  );
};

export default Home;