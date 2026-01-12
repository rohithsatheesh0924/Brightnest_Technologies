import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F4] text-[#282828]">
      <Navbar />

      {/* Hero */}
      <main className="flex-1">
        <section className="w-full pt-24 pb-16">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm tracking-wide uppercase text-orange-500 mb-2">
                Website Design & Development Company in Coimbatore
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Website Design & Development Company in Coimbatore
              </h1>
              <p className="text-gray-600 mb-4">
                Are you looking for a web development company in Coimbatore that
                can help you create a stunning and functional website for your
                business? Do you want to work with a team of experts who can
                deliver web design, graphics design, web app development,
                e-commerce solutions, SEO service, and digital marketing
                strategies that suit your needs and budget? If yes, then you
                have come to the right place.
              </p>
              <p className="text-gray-600 mb-6">
                Brightnest is a premier provider of web development
                services in Coimbatore, Tamilnadu. We have been in the industry
                for over 5 years and successfully completed hundreds of projects
                for clients across various domains and sectors. We have a
                passion for creating beautiful and user‑friendly websites that
                perform well and help your business grow. [web:3]
              </p>
              <button className="inline-flex items-center px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold shadow hover:bg-orange-600 transition">
                Explore Now
              </button>
            </div>

            {/* Replace this with your illustration/image */}
            <div className="flex justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-orange-100 rounded-3xl flex items-center justify-center shadow-inner">
                <span className="text-orange-400 font-semibold">
                  Hero Illustration
                </span>
              </div>
            </div>
          </div>

          {/* Logos row */}
          <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-10 flex flex-wrap items-center justify-center gap-6">
            <div className="w-24 h-10 bg-gray-100 rounded-md shadow-sm" />
            <div className="w-24 h-10 bg-gray-100 rounded-md shadow-sm" />
            <div className="w-24 h-10 bg-gray-100 rounded-md shadow-sm" />
            <div className="w-24 h-10 bg-gray-100 rounded-md shadow-sm" />
          </div>
        </section>

        {/* Services grid */}
        <section className="w-full py-16 bg-[#FFF2EA]">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-wide text-orange-500 mb-2">
                What we can do for your business
              </p>
              <h2 className="text-2xl md:text-3xl font-bold">
                Brightnestsoft: Your Trusted Partner for Web Development Services
              </h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Brightnestsoft is a creative website design company in Coimbatore,
                Tamilnadu that focuses on delivering effective digital solutions
                for businesses of all sizes. From custom website design to
                comprehensive ecommerce development, our team ensures your online
                presence is professional, responsive, and results‑driven. [web:3]
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Website Design and Development",
                  desc: "Get a professional and responsive website that reflects your brand and engages your audience. We build static, dynamic, and custom web solutions tailored to your goals. [web:3]",
                },
                {
                  title: "Logo Design",
                  desc: "Create a memorable visual identity for your business with our custom logo design services. We craft unique and scalable logos that strengthen your brand recall. [web:3]",
                },
                {
                  title: "E-Commerce Website",
                  desc: "Launch a powerful ecommerce store with secure payments, product management, and user‑friendly navigation to maximize sales and conversions online. [web:3]",
                },
                {
                  title: "CMS Website",
                  desc: "Manage your content with ease using user‑friendly CMS platforms. Update pages, images, and blogs without any technical expertise. [web:3]",
                },
                {
                  title: "Mobile App Development",
                  desc: "Extend your digital presence with high‑performance mobile apps designed for Android and iOS platforms to engage customers on the go. [web:3]",
                },
                {
                  title: "SEO & Digital Marketing",
                  desc: "Improve your visibility on search engines and attract targeted traffic with SEO‑friendly design and digital marketing services. [web:3]",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-100 mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 flex-1">{item.desc}</p>
                  <button className="mt-4 text-sm text-orange-500 font-semibold">
                    Get started today
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-700">
                Elevate your business with Brightnestsoft and transform your
                website into a powerful marketing asset tailored to your unique
                needs. [web:3]
              </p>
              <button className="px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold shadow hover:bg-orange-600 transition">
                Explore Now
              </button>
            </div>
          </div>
        </section>

        {/* Intro stats section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 grid lg:grid-cols-[2fr,1fr] gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-wide text-orange-500 mb-2">
                Interested in getting a web design service for your company?
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Introducing the Leading Web Design Company in Coimbatore
              </h2>
              <p className="text-gray-600 mb-3">
                Brightnestsoft is recognized as one of the leading web design
                companies in Coimbatore, offering tailored solutions that blend
                creativity with functionality. Our experienced team builds
                responsive, SEO‑friendly websites that help businesses stand out
                in a competitive digital landscape. [web:3]
              </p>
              <p className="text-gray-600 mb-4">
                From concept to launch, we manage the entire lifecycle of your
                project, ensuring that every pixel and every line of code serves
                a clear purpose. Whether you need a corporate site, ecommerce
                platform, or custom web application, we deliver on time and
                within budget. [web:3]
              </p>
              <button className="inline-flex items-center px-5 py-2.5 rounded-full border border-orange-500 text-orange-500 text-sm font-semibold hover:bg-orange-50 transition">
                About Us
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FFF9F4] rounded-2xl p-4 text-center shadow-sm">
                <h3 className="text-2xl font-bold mb-1">60+</h3>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Projects
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Brightnestsoft delivered more than 60 successful projects
                  across the globe. [web:3]
                </p>
              </div>
              <div className="bg-[#FFF9F4] rounded-2xl p-4 text-center shadow-sm">
                <h3 className="text-2xl font-bold mb-1">60+</h3>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Clients
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Clients worldwide trust our quality, processes, and timely
                  delivery. [web:3]
                </p>
              </div>
              <div className="bg-[#FFF9F4] rounded-2xl p-4 text-center shadow-sm">
                <h3 className="text-2xl font-bold mb-1">20+</h3>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Team
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  A strong team of passionate designers, developers, and
                  strategists. [web:3]
                </p>
              </div>
              <div className="bg-[#FFF9F4] rounded-2xl p-4 text-center shadow-sm">
                <h3 className="text-2xl font-bold mb-1">5+</h3>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Years
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Over 5 years of experience building digital solutions for
                  diverse industries. [web:3]
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="w-full py-16 bg-[#FFF9F4]">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Technologies we work with
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              From modern frontend frameworks to robust backend platforms,
              Brightnestsoft uses reliable technologies to build secure, scalable,
              and high‑performance web solutions. [web:3]
            </p>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                "iOS",
                "Android",
                "React",
                "Vue",
                "Node",
                "Python",
                "Laravel",
                "PHP",
                "MySQL",
                "MongoDB",
                "WordPress",
                "Shopify",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-white rounded-xl py-3 px-2 shadow-sm text-sm font-medium text-gray-700"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Client Voices, Web Design Excellence
            </h2>
            <p className="text-gray-600 mb-8">
              Hear what our clients say about their experience partnering with
              Brightnestsoft for web design in Coimbatore. [web:3]
            </p>
            <p className="italic text-gray-700 max-w-xl mx-auto mb-4">
              “Brightnest Technologies Pvt Ltd, well experienced web developer
              in Coimbatore, you guys are the best! Keep up the great work!”
              [web:3]
            </p>
            <div className="inline-flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-orange-200 mb-2" />
              <p className="font-semibold text-sm">Mr. L. Komaran</p>
              <p className="text-xs text-gray-500">
                Correspondent - Minerva Public School [web:3]
              </p>
            </div>
          </div>
        </section>

        {/* FAQ + Illustration */}
        <section className="w-full py-16 bg-[#FFF2EA]">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Web Design FAQs: Everything You Need to Know
              </h2>
              <p className="text-gray-600 mb-4">
                Website design questions often arise when businesses start their
                digital journey. At Brightnestsoft, we answer your queries and
                guide you with clear, transparent information. [web:3]
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  • What is Brightnestsoft? A full‑service web, app, and digital
                  marketing company based in Coimbatore, India. [web:5]
                </li>
                <li>
                  • Do you provide responsive design? Yes, all websites are fully
                  responsive and mobile‑friendly. [web:4]
                </li>
                <li>
                  • Can I update my website content? Yes, we build CMS‑based
                  sites so you can edit text, images, and blogs easily. [web:4]
                </li>
                <li>
                  • Do you offer maintenance and support? We provide ongoing
                  support and maintenance packages based on your needs. [web:4]
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-orange-100 rounded-3xl flex items-center justify-center shadow-inner">
                <span className="text-orange-400 font-semibold">
                  FAQ Illustration
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing / Charges */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-wide text-orange-500 mb-2">
                Are you looking for a website design company in or around Coimbatore?
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Web Designing Charges in Coimbatore
              </h2>
              <p className="text-gray-600 mb-3">
                Brightnestsoft offers affordable website design pricing in
                Coimbatore with clear packages that include responsive design,
                SEO‑friendly pages, contact forms, and more. [web:6]
              </p>
              <p className="text-gray-600 mb-6">
                Whether you need a starter website or a fully featured ecommerce
                platform, our pricing ensures you get maximum value without
                compromising on quality or performance. [web:6]
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold shadow hover:bg-orange-600 transition">
                  Get a Quote
                </button>
                <button className="px-6 py-3 rounded-full bg-green-500 text-white text-sm font-semibold shadow hover:bg-green-600 transition">
                  WhatsApp
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-orange-100 rounded-3xl flex items-center justify-center shadow-inner">
                <span className="text-orange-400 font-semibold">
                  Pricing Illustration
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;
