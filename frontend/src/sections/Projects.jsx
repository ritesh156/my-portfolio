import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../services/api';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(res => setProjects(res.data)).catch(console.error);
  }, []);

  return (
    <section id="projects" className="py-20 bg-brand-navy-light border-t border-b border-brand-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-brand-gold mb-12 flex items-center justify-center gap-4 text-center"
        >
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
          Projects
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-navy rounded-xl p-8 border border-brand-gold/20 hover:border-brand-gold/60 transition-colors shadow-lg flex flex-col h-full relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-maroon/10 rounded-full blur-[40px] group-hover:bg-brand-maroon/20 transition-colors pointer-events-none"></div>
              
              <h3 className="text-2xl font-serif text-brand-parchment mb-4">{project.title}</h3>
              <p className="text-brand-parchment/80 leading-relaxed flex-grow mb-8">
                {project.description}
              </p>
              
              <div className="flex gap-4 mt-auto">
                {/* MODIFY: Add project GitHub repository URL here. */}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-brand-navy-light border border-brand-gold/30 rounded text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-colors">
                    <FiGithub /> GitHub
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2 bg-brand-navy-light border border-brand-gold/10 rounded text-brand-gold/30 cursor-not-allowed">
                    <FiGithub /> GitHub (N/A)
                  </span>
                )}

                {/* MODIFY: Add project live/deployed URL here. */}
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-brand-navy-light border border-brand-gold/30 rounded text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-colors">
                    <FiExternalLink /> Live Demo
                  </a>
                ) : (
                  <span className="flex items-center gap-2 px-4 py-2 bg-brand-navy-light border border-brand-gold/10 rounded text-brand-gold/30 cursor-not-allowed">
                    <FiExternalLink /> Live Demo (N/A)
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
