import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getEducation } from '../services/api';

const Education = () => {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    getEducation().then(res => {
      // Sort by display order or default id if no order
      const sorted = res.data.sort((a, b) => a.displayOrder - b.displayOrder);
      setEducationList(sorted);
    }).catch(err => console.error(err));
  }, []);

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-brand-gold mb-12 flex items-center justify-center gap-4 text-center"
        >
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
          Education
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
        </motion.h2>

        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-navy-light p-6 rounded-lg border border-brand-gold/20 shadow-md flex flex-col md:flex-row md:items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-serif font-semibold text-brand-parchment">{edu.institution}</h3>
                <p className="text-brand-gold-light mt-1">{edu.degree}</p>
              </div>
              <div className="mt-4 md:mt-0 md:text-right">
                <span className="inline-block px-4 py-1 bg-brand-maroon/30 text-brand-parchment text-sm rounded-full border border-brand-maroon">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
