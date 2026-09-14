import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaReact, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const getIcon = (name) => {
  const n = name.toLowerCase();
  if(n.includes('java') && !n.includes('script')) return <FaJava className="text-2xl" />;
  if(n.includes('javascript')) return <FaJs className="text-2xl" />;
  if(n.includes('html')) return <FaHtml5 className="text-2xl" />;
  if(n.includes('css')) return <FaCss3Alt className="text-2xl" />;
  if(n.includes('sql') || n.includes('dbms')) return <FaDatabase className="text-2xl" />;
  if(n.includes('react')) return <FaReact className="text-2xl" />;
  if(n.includes('spring')) return <SiSpringboot className="text-2xl" />;
  if(n.includes('github')) return <FaGithub className="text-2xl" />;
  if(n.includes('git')) return <FaGitAlt className="text-2xl" />;
  return null;
};

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/skills`)
      .then(res => setSkills(res.data))
      .catch(err => {
        setSkills([
          { id: 1, category: 'Languages', name: 'Java' },
          { id: 2, category: 'Languages', name: 'JavaScript' },
          { id: 3, category: 'Languages', name: 'HTML' },
          { id: 4, category: 'Languages', name: 'CSS' },
          { id: 5, category: 'Languages', name: 'SQL' },
          { id: 6, category: 'Frameworks', name: 'ReactJS' },
          { id: 7, category: 'Frameworks', name: 'Spring Boot' },
          { id: 8, category: 'Concepts', name: 'OOPs' },
          { id: 9, category: 'Concepts', name: 'DBMS' },
          { id: 10, category: 'Tools', name: 'Git' },
          { id: 11, category: 'Tools', name: 'GitHub' }
        ]);
      });
  }, []);

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-20 bg-brand-navy relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center text-brand-gold mb-12 border-b border-brand-gold/20 pb-4 inline-block w-full">Skills Library</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-brand-navy border-2 border-brand-burgundy/40 rounded-xl p-6 text-center hover:border-brand-gold transition-colors shadow-lg"
              >
                <h3 className="text-xl font-bold text-brand-gold mb-6">{category}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.filter(s => s.category === category).map(skill => (
                    <div key={skill.id} className="flex flex-col items-center justify-center p-3 bg-brand-navy/50 border border-brand-gold/20 rounded-lg hover:bg-brand-gold/10 transition-colors w-24">
                      <div className="text-brand-parchment mb-2">{getIcon(skill.name)}</div>
                      <span className="text-sm font-medium text-brand-parchment">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
