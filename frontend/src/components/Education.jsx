import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    // If backend is down, we use fallback data
    axios.get('http://localhost:8080/api/education')
      .then(res => setEducation(res.data))
      .catch(err => {
        console.log("Using fallback education data");
        setEducation([
          { id: 1, institution: 'Chandigarh University, Punjab', degree: 'Bachelor of Engineering (B.E) - Computer Science & Engineering', duration: '2023 – 2027' },
          { id: 2, institution: 'Holy Mission School, Patna, Bihar', degree: 'Intermediate (CBSE) | Class XII', duration: '2020 – 2022' },
{ id: 3, institution: "St. Michael's High School, Patna, Bihar", degree: 'Matriculation (CBSE) | Class X', duration: '2019 – 2020' }
        ]);
      });
  }, []);

  return (
    <section id="education" className="py-20 bg-brand-navy/95 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center text-brand-gold mb-12 border-b border-brand-gold/20 pb-4 inline-block w-full">Education</h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-navy border border-brand-gold/30 p-6 rounded-lg relative overflow-hidden group hover:border-brand-gold transition-colors"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-brand-parchment group-hover:text-brand-gold transition-colors">
  {edu.id === 1 ? (
    <>
      <a
        href="https://www.careers360.com/courses/bachelor-of-engineering"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        Bachelor of Engineering
      </a>{" "}
      (B.E)
    </>
  ) : (
    edu.degree
  )}
</h3>
                    <p className="text-brand-parchment/70 italic mt-1">{edu.institution}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-3 py-1 bg-brand-burgundy/30 text-brand-gold text-sm rounded-full border border-brand-burgundy w-max">
                     {edu.duration}
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
export default Education;
