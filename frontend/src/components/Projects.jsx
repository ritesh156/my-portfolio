import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/projects`)
      .then(res => setProjects(res.data))
      .catch(err => {
        setProjects([
          { id: 1, title: 'PDFMaster – Document Utility Platform', description: 'A web-based document utility platform for merging, splitting, compressing, converting, and managing PDF files through a simple and responsive interface.', githubUrl: null, liveUrl: null },
          { id: 2, title: 'ProductiView – Browser Productivity Analyzer', description: 'A browser extension that analyzes browsing activity, tracks time spent on websites, categorizes usage, and provides productivity insights through an interactive dashboard.', githubUrl: null, liveUrl: null }
        ]);
      });
  }, []);

  return (
    <section id="projects" className="py-20 bg-brand-navy relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center text-brand-gold mb-12 border-b border-brand-gold/20 pb-4 inline-block w-full">Projects </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((proj, index) => (
              <motion.div 
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-brand-navy border border-brand-gold/20 rounded-xl overflow-hidden hover:border-brand-gold/60 transition-all duration-300"
              >
                {/* Project Image Placeholder - Magic look */}
                <div className="h-48 bg-brand-burgundy/10 flex items-center justify-center border-b border-brand-gold/10 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                   <span className="text-brand-gold/40 text-4xl font-serif tracking-widest">{proj.title.split(' ')[0]}</span>
                </div>
                
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold text-brand-gold mb-3">{proj.title}</h3>
                  <p className="text-brand-parchment/80 mb-6 min-h-[80px]">{proj.description}</p>
                  
                  <div className="flex space-x-4">
                    {/* MODIFY: Add Project GitHub URL here. */}
                    <a
  href={proj.githubUrl || "#"}
  target="_blank"
  rel="noopener noreferrer"
  className={`flex items-center px-4 py-2 rounded border ${
    proj.githubUrl
      ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy'
      : 'border-brand-gold/20 text-brand-gold/30 cursor-not-allowed'
  } transition-colors`}
>
  <FaGithub className="mr-2" /> GitHub
</a>
                    {/* MODIFY: Add Project live URL here. */}
                    <a href={proj.liveUrl || "#"} className={`flex items-center px-4 py-2 rounded border ${proj.liveUrl ? 'bg-brand-burgundy text-white hover:bg-brand-burgundy/80 border-transparent' : 'bg-brand-burgundy/20 text-brand-parchment/30 border-transparent cursor-not-allowed'} transition-colors`}>
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
