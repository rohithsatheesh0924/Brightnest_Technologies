import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoLoop from "../components/LogoLoop";
import Aurora from "../components/Aurora";
import Plasma from "../components/Plasma";
import ColorBends from "../components/ColorBends";


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

const Home = () => {
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
         color1="#EA580C" // Deep Orange
         color2="#7C2D12" // Burnt Orange
         color3="#000000" // Black for deep blending
       />
    <div className="absolute inset-0 bg-black/40 z-0" />
  </div>

  <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center">
    
    {/* Heading Section */}
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
      
      <h1 className="font-montserrat text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-8 text-white tracking-tighter mx-auto">
        <span className="block opacity-90">Website Design &</span>
        <span className="block">Development Company</span>
        <span className="block mt-2">
          in <span className="text-orange-500 drop-shadow-[0_0_20px_rgba(234,88,12,0.4)]">Coimbatore</span>
        </span>
      </h1>
      
      <p className="font-poppins text-gray-300 mb-10 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
        Brightnest Technologies delivers high-performance web ecosystems. We empower businesses in Coimbatore with stunning design and functional excellence tailored to your growth.
      </p>

      {/* Two Professional Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
 {/* CLIENT LOGOS / BOXES */}
<section>
  
  <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="container mx-auto px-4 md:px-8 lg:px-16 mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
>
  {[
    { id: 1, name: "Client 1", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { id: 2, name: "Client 2", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { id: 3, name: "Client 3", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { id: 4, name: "Client 4", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Adobe_Systems_logo_and_wordmark.svg" },
    { id: 5, name: "Client 5", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  ].map((client) => (
    <motion.div 
      key={client.id}
      whileHover={{ scale: 1.1 }}
      className="w-32 h-16 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
    >
      <img 
        src={client.logo} 
        alt={client.name} 
        className="max-w-full max-h-full object-contain filter drop-shadow-sm" 
      />
    </motion.div>
  ))}
</motion.div>
</section>

        {/* Services grid - Unique Animation: Staggered Fade Up Cards */}
        <section className="w-full py-16 bg-[#FFF2EA]">
  <div className="container mx-auto px-4 md:px-8 lg:px-16">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-12"
    >
      <p className="text-xs uppercase tracking-wide text-orange-500 mb-2 font-bold font-poppins">
        What we can do for your business
      </p>
      <h2 className="text-2xl md:text-3xl font-bold font-montserrat">
        Brightnestsoft: Your Trusted Partner for Web Development Services
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-poppins leading-relaxed">
        Brightnestsoft is a creative website design company in Coimbatore,
        Tamilnadu that focuses on delivering effective digital solutions
        for businesses of all sizes. From custom website design to
        comprehensive ecommerce development, our team ensures your online
        presence is professional, responsive, and results‑driven.
      </p>
    </motion.div>

    <motion.div 
      className="grid md:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {[
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
      ].map((item) => (
        <motion.div
          key={item.title}
          variants={fadeInUp}
          whileHover={{ y: -10 }}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
        >
          {/* Circular Image Container */}
          <div className="w-16 h-16 rounded-full bg-orange-50 mb-6 flex items-center justify-center overflow-hidden border border-orange-100 group-hover:bg-orange-500 transition-colors duration-300">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-10 h-10 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
            />
          </div>

          <h3 className="font-bold text-lg mb-3 font-montserrat text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-600 flex-1 font-poppins leading-relaxed">
            {item.desc}
          </p>
          
          <button className="mt-6 text-sm text-orange-600 font-bold text-left flex items-center gap-2 hover:gap-3 transition-all">
            Get started today
            <span className="text-lg">→</span>
          </button>
        </motion.div>
      ))}
    </motion.div>

    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 "
    >
      <p className="text-gray-700 font-poppins text-lg">
        Elevate your business with <strong>Brightnestsoft</strong> and transform your
        website into a powerful marketing asset.
      </p>
      <button className="px-8 py-3 rounded-full bg-orange-500 text-white font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 hover:scale-105 transition-all whitespace-nowrap">
        Explore Now
      </button>
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
            Brightnestsoft is recognized as one of the leading web design
            companies in Coimbatore, offering tailored solutions that blend
            creativity with functionality. Our experienced team builds
            responsive, SEO‑friendly websites that help businesses stand out
            in a competitive digital landscape. [web:3]
          </p>
          <p className="text-gray-600 mb-4 font-poppins">
            From concept to launch, we manage the entire lifecycle of your
            project, ensuring that every pixel and every line of code serves
            a clear purpose. Whether you need a corporate site, ecommerce
            platform, or custom web application, we deliver on time and
            within budget. [web:3]
          </p>
          <button className="inline-flex items-center px-5 py-2.5 rounded-full border border-orange-500 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition">
            About Us
          </button>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { target: 60, title: "60+", label: "Projects", desc: "Brightnestsoft delivered more than 60 successful projects across the globe. [web:3]" },
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
    <section className="w-full py-20 bg-[#FFF9F4] overflow-hidden">
  <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
    
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-gray-900">
        Technologies we work with
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto font-poppins leading-relaxed text-lg">
        From modern frontend frameworks to robust backend platforms,
        Brightnestsoft uses reliable technologies to build secure, scalable,
        and high‑performance web solutions.
      </p>
    </motion.div>

    <div className="w-full">
      <LogoLoop 
        speed={80}           // Adjust speed (pixels per second)
        logoHeight={60}      // Increased size so logos are visible
        gap={60}             // Spacing between logos
        pauseOnHover={true}
              // Adds the nice fade effect on sides
        logos={[
          { src: "/ios.svg", alt: "iOS" },
          { src: "/android.svg", alt: "Android" },
          { src: "/reactjs.svg", alt: "React" },
          { src: "/nodejs.svg", alt: "Node" },
          { src: "/python.svg", alt: "Python" },
          { src: "/laravel.svg", alt: "Laravel" },
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

        {/* Testimonial - Unique Animation: Scale Up Focus */}
       <section className="w-full py-16 bg-white">
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-4 md:px-8 lg:px-16 text-center"
  >
    <h2 className="text-2xl md:text-3xl font-bold mb-2 font-montserrat">
      Client Voices, Web Design Excellence
    </h2>
    <p className="text-gray-600 mb-8 font-poppins">
      Hear what our clients say about their experience partnering with
      Brightnestsoft for web design in Coimbatore.
    </p>
    
    <p className="italic text-gray-700 max-w-xl mx-auto mb-6 font-poppins text-lg">
      “Brightnest Technologies Pvt Ltd, well experienced web developer
      in Coimbatore, you guys are the best! Keep up the great work!”
    </p>

    <div className="inline-flex flex-col items-center">
      {/* Circular Image Container */}
      <div className="w-20 h-20 rounded-full bg-orange-200 mb-3 overflow-hidden border-2 border-orange-500 shadow-sm">
        <img 
          src="/client-avatar.jpg" // Replace with your actual image name in the public folder
          alt="Mr. L. Komaran"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "https://ui-avatars.com/api/?name=L+Komaran&background=ffedd5&color=ea580c";
          }}
        />
      </div>
      
      <p className="font-semibold text-gray-900 text-base font-poppins">Mr. L. Komaran</p>
      <p className="text-xs text-gray-500 font-poppins uppercase tracking-wider">
        Correspondent - Minerva Public School
      </p>
    </div>
  </motion.div>
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
        digital journey. At Brightnestsoft, we answer your queries and
        guide you with clear, transparent information.
      </p>
      
      <ul className="space-y-4 text-sm text-gray-700 font-luciole">
        <li className="flex gap-2">
          <span className="text-orange-500 font-bold">•</span>
          <span><strong>What is Brightnestsoft?</strong> A full‑service web, app, and digital marketing company based in Coimbatore, India.</span>
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
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative w-full max-w-md">
        {/* Subtle background decorative shape */}
        <div className="absolute -inset-4 bg-orange-200/30 rounded-full blur-3xl z-0" />
        
        <img 
          src="/faq-image.jpg" // Ensure this image is in your public folder
          alt="Frequently Asked Questions"
          className="relative z-10 w-full h-auto rounded-3xl shadow-xl object-cover aspect-square md:aspect-auto"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974";
          }}
        />
      </div>
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
        Brightnestsoft offers affordable website design pricing in
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
          className="px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold shadow-lg shadow-orange-200 hover:bg-orange-600 transition font-poppins"
        >
          Get a Quote
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-green-500 text-white text-sm font-semibold shadow-lg shadow-green-200 hover:bg-green-600 transition font-poppins"
        >
          WhatsApp
        </motion.button>
      </div>
    </motion.div>
    
    {/* RIGHT SIDE: Image */}
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <div className="relative w-full max-w-md group">
        {/* Background decorative glow */}
        <div className="absolute inset-0 bg-orange-100 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
        
        <img 
          src="/pricing-details.jpg" // Replace with your actual image path in the public folder
          alt="Web Design Pricing in Coimbatore"
          className="relative z-10 w-full h-auto rounded-3xl shadow-xl object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2022";
          }}
        />
      </div>
    </motion.div>
  </div>
</section>
      </main>
    </div>
  );
};

export default Home;