// src/pages/Team.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TeamPage = () => {
  const navigate = useNavigate();
  
  const scrollToContactForm = () => {
    navigate('/contact#contact-form');
    setTimeout(() => {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Vijaya Chinnaraj",
      role: "Managing Partner",
      image: "/images/team/vijaya.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/brightnest-edutech-a1703a3a9?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      }
    },
    {
      id: 2,
      name: "Dhinakaran Chinnaraj",
      role: "Managing Partner",
      image: "/images/team/surya.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/dhinakaran-c-b100b03a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
       
      }
    },
    {
      id: 3,
      name: "Surya Chinnaraj",
      role: "CEO",
      image: "/images/team/dhinakaran.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/surya-chinnaraj-0a3ba212a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
      }
    },
    {
      id: 4,
      name: "Vimal Vaibhav",
      role: "CDO",
      image: "/images/team/vimal.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/vimal-prabhakar-853100188?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        
      }
    },
    {
      id: 5,
      name: "Aakash Rajan",
      role: "Jr. Web Developer",
      image: "/images/team/aakash.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/aakash10203?utm_source=share_via&utm_content=profile&utm_medium=member_android",
       
      }
    },
    {
      id: 6,
      name: "Rohith Satheeshkumar",
      role: "Jr. Web Developer",
      image: "/images/team/rohith-satheesh.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/rohith--s?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
       
      }
    },
    {
      id: 7,
      name: "Darshan Senthilkumar",
      role: "Jr. UI/UX Designer",
      image: "/images/team/dharshan.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/darshansenthilkumar-b04120325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      {/* Single Team Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Leadership Team
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Meet the talented professionals driving Brightnest Technologies' success
          </p>
        </motion.div>

        {/* Responsive Grid - All Members in One Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Member Photo */}
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ffedd5&color=ea580c`;
                  }}
                />
              </div>
              
              {/* Member Info */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-4">{member.role}</p>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <SocialLink 
                      key={platform} 
                      href={url.trim()} 
                      platform={platform} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContactForm}
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-md"
          >
            Contact Our Team →
          </motion.button>
        </div>
      </section>
    </div>
  );
};

// Social Link Component
const SocialLink = ({ href, platform }) => {
  const icons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.767-1.589 8.198-6.086 8.198-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    dribbble: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.493 15.175c-.243.585-.563 1.133-.953 1.637-2.344-3.178-6.222-3.457-8.588-.625-.303-.388-.619-.744-.944-1.075 2.422 3.081 6.444 3.344 8.831.391-.413.738-.869 1.031-1.356 1.953 1.125 4.281.641 5.169-1.081.031-.069.069-.131.1-.206.65-.038 1.288-.138 1.913-.288-.038.669-.2 1.319-.469 1.931-.938 2.031-3.031 3.328-5.344 3.328-1.188 0-2.328-.319-3.344-.891.519-.094 1.025-.25 1.5-.469-1.75-1.156-2.313-3.469-.938-5.25.306-.397.65-.756 1.031-1.069-1.056-.5-2.25-.375-3.188.375-.938.75-1.438 2.031-1.188 3.25.25 1.219.969 2.25 1.938 2.75-1.031.156-2.094.031-3-.375 1.375-1.313 1.563-3.438.313-4.875C7.328 7.688 5.641 7.5 4.125 8.125c2.375-2.813 6.875-2.5 8.875.313.391-.5.85-.963 1.375-1.375.219-.188.45-.359.688-.531-.031-.125-.063-.25-.094-.375-.375-1.438-1.75-2.5-3.25-2.5-1.094 0-2.094.5-2.781 1.281C6.719 6.563 7.875 8.25 9.625 8.25c.281 0 .563-.063.813-.125-1.125-.563-2.438-.25-3.25.75-.813 1-.75 2.375.188 3.25.938.875 2.313.938 3.25.125.375-.313.688-.75.875-1.25.75 1.063 2.125 1.375 3.313.875 1.188-.5 1.875-1.75 1.875-3.063 0-.625-.188-1.219-.5-1.75z"/>
      </svg>
    )
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-colors"
      aria-label={platform}
    >
      {icons[platform]}
    </a>
  );
};

export default TeamPage;