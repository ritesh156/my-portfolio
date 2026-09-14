import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-navy-light relative border-t border-b border-brand-gold/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-brand-gold mb-8 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-brand-gold/50"></span>
            About Me
            <span className="h-[1px] w-12 bg-brand-gold/50"></span>
          </h2>
          
          <div className="bg-brand-navy/50 p-8 rounded-lg border border-brand-gold/20 shadow-lg text-left leading-relaxed text-brand-parchment/90 text-lg">
            <p className="mb-4">
              I am currently pursuing a B.E. in Computer Science & Engineering at Chandigarh University. 
              I have strong analytical, problem-solving, and communication skills, with knowledge of JavaScript, SQL, OOPs, and web technologies.
            </p>
            <p className="mb-4">
              I am interested in Technology Risk, Cybersecurity, Risk Management, and Digital Transformation. 
            </p>
            <p>
              I am eager to apply my technical understanding and analytical skills to support security, 
              compliance, risk assessment, and technology-driven business solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
