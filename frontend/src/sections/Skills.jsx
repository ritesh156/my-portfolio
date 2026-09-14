import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getSkills } from '../services/api';

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    getSkills().then(res => {
      const grouped = res.data.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill.name);
        return acc;
      }, {});
      setSkills(grouped);
    }).catch(err => console.error(err));
  }, []);

  return (
    <section id="skills" className="py-20 bg-brand-navy-light border-t border-b border-brand-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-brand-gold mb-12 flex items-center justify-center gap-4 text-center"
        >
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
          Skills
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-brand-navy border border-brand-gold/30 rounded-lg p-6 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-shadow"
            >
              <h3 className="text-xl font-serif text-brand-gold-light mb-4 text-center border-b border-brand-gold/20 pb-2">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex items-center text-brand-parchment/90">
                    <span className="w-2 h-2 rounded-full bg-brand-maroon mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
