import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-brand-gold text-lg tracking-widest mb-2 uppercase font-medium">Hello, I am</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-parchment mb-4">
            Ritesh Kumar
          </h1>
          <h3 className="text-2xl md:text-3xl text-brand-gold-light font-serif italic mb-6">
            Aspiring Software Engineer
          </h3>
          <p className="text-brand-parchment/80 text-lg mb-8 max-w-xl mx-auto md:mx-0">
            Java Full Stack Developer &bull; Software Developer
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            {/* MODIFY: Add/update the resume PDF path or deployed resume URL here. */}
            <a href="/assets/resume-placeholder.pdf" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-brand-gold text-brand-navy px-6 py-3 rounded hover:bg-brand-gold-light transition-colors font-medium border border-brand-gold">
              <FiDownload /> Download Resume
            </a>
            <a href="#projects" 
               className="flex items-center gap-2 bg-transparent text-brand-gold px-6 py-3 rounded hover:bg-brand-gold/10 transition-colors font-medium border border-brand-gold">
              View Projects
            </a>
          </div>

          <div className="mt-10 flex gap-6 justify-center md:justify-start">
            {/* MODIFY: Update GitHub link if needed */}
            <a href="https://github.com/ritesh156" target="_blank" rel="noopener noreferrer" className="text-brand-parchment hover:text-brand-gold transition-colors">
              <FiGithub size={28} />
            </a>
            {/* MODIFY: Update LinkedIn link if needed */}
            <a href="https://www.linkedin.com/in/ritesh-kumar-58b47a285/" target="_blank" rel="noopener noreferrer" className="text-brand-parchment hover:text-brand-gold transition-colors">
              <FiLinkedin size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-brand-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden">
            {/* MODIFY: Replace profile image here if a different profile picture is needed. */}
            <img 
              src="/assets/profile.jpg" 
              alt="Ritesh Kumar" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
