import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-brand-gold mb-12 border-b border-brand-gold/20 pb-4 inline-block w-full">About Me</h2>
          <div className="bg-brand-burgundy/10 p-8 rounded-lg border border-brand-gold/20 shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
            <p className="text-lg leading-relaxed text-brand-parchment/90">
              I am currently pursuing a Bachelor of Engineering (B.E) in Computer Science & Engineering at Chandigarh University. 
              I have strong analytical, problem-solving, and communication skills, with knowledge of JavaScript, 
              SQL, OOPs, and web technologies. 
              <br/><br/>
              I am interested in Technology Risk, Cybersecurity, Risk Management, and Digital Transformation. 
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
