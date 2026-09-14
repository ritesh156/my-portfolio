import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/experience')
      .then(res => setExperiences(res.data))
      .catch(err => {
        setExperiences([
          { id: 1, role: 'Java Trainee', company: 'Chandigarh University', duration: 'May 2025 – June 2025', description: 'Completed a six-week In-House Summer Training at Chandigarh University on “Elevating Java: From Concepts to Code.” Gained practical knowledge of Java programming, coding concepts, and problem-solving through hands-on training.', certificateUrl: 'https://drive.google.com/file/d/1Yti47rU1Gw0EknAEsDe_16gmukKvH9Hc/view?usp=sharing' }
        ]);
      });
  }, []);

  return (
    <section id="experience" className="py-20 bg-brand-navy/95 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center text-brand-gold mb-12 border-b border-brand-gold/20 pb-4 inline-block w-full">Experience</h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-burgundy/5 border border-brand-gold/30 p-8 rounded-lg relative hover:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-gold">{exp.role}</h3>
                    <p className="text-brand-parchment/80 font-medium text-lg">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1 bg-brand-navy border border-brand-gold/50 text-brand-parchment rounded-full text-sm">
                    {exp.duration}
                  </div>
                </div>
                <p className="text-brand-parchment/90 leading-relaxed mt-4">{exp.description}</p>
                
                {/* MODIFY: Add the Java Training certificate/experience URL here. */}
                {/* Java Training Certificate */}
<div className="mt-6">
  <a
    href={exp.certificateUrl || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-sm font-bold ${
      exp.certificateUrl
        ? 'text-brand-gold hover:underline'
        : 'text-brand-parchment/40 cursor-not-allowed'
    }`}
  >
    {exp.certificateUrl
      ? 'View Details/Certificate ↗'
      : 'Certificate details coming soon'}
  </a>
</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Experience;
