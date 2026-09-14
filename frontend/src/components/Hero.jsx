import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-burgundy/10 via-brand-navy to-brand-navy z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-brand-gold mb-4">Ritesh Kumar</h1>
          <h2 className="text-2xl md:text-3xl text-brand-parchment mb-4">Aspiring Software Engineer</h2>
          <p className="text-lg text-brand-parchment/80 mb-8 italic">Java Full Stack Developer • Software Developer</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            {/* MODIFY: Add/update the resume PDF path or deployed resume URL here. */}
            <a
  href="https://drive.google.com/file/d/1aQorKbOm7bzfX-NEScr6rvk4RMhIgylX/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 bg-brand-gold text-brand-navy font-bold rounded-md hover:bg-yellow-500 transition-colors"
>
  Download Resume
</a>
            <a href="#projects" className="px-8 py-3 border border-brand-gold text-brand-gold font-bold rounded-md hover:bg-brand-gold/10 transition-colors">
              View Projects
            </a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start space-x-6 mt-8">
            {/* MODIFY: Add GitHub URL here. */}
            <a href="https://github.com/ritesh156" target="_blank" rel="noreferrer" className="text-brand-parchment hover:text-brand-gold transition-colors text-3xl">
              <FaGithub />
            </a>
            {/* MODIFY: Add LinkedIn URL here. */}
            <a href="https://www.linkedin.com/in/ritesh-kumar-58b47a285/" target="_blank" rel="noreferrer" className="text-brand-parchment hover:text-brand-gold transition-colors text-3xl">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-4 border-brand-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            {/* MODIFY: Replace profile image here if a different profile picture is needed. */}
            <img 
              src="/assets/profile.jpg" 
              alt="Ritesh Kumar" 
              className="w-full h-full object-cover rounded-full filter brightness-90 hover:brightness-100 transition-all duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
export default Hero;
