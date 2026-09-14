import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getExperience } from '../services/api';

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    getExperience().then(res => setExperience(res.data)).catch(console.error);
  }, []);

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-brand-gold mb-12 flex items-center justify-center gap-4 text-center"
        >
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
          Experience
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
        </motion.h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-gold/50 before:to-transparent">
          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-navy bg-brand-gold text-brand-navy shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-brand-navy-light p-6 rounded-lg border border-brand-gold/20 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="font-serif text-xl font-bold text-brand-parchment">{exp.role}</h3>
                  <time className="text-brand-gold-light text-sm italic">{exp.period}</time>
                </div>
                <div className="text-brand-gold/80 font-medium mb-4">{exp.company}</div>
                <p className="text-brand-parchment/80 leading-relaxed mb-4">{exp.description}</p>
                {/* MODIFY: Add the Java Training certificate/experience URL here. */}
                {exp.certificateUrl && (
                  <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-gold-light transition-colors text-sm border-b border-brand-gold pb-0.5">
                    View Credentials
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
