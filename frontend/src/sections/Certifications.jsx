import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getCertifications } from '../services/api';

const Certifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    getCertifications().then(res => setCerts(res.data)).catch(console.error);
  }, []);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-brand-gold mb-12 flex items-center justify-center gap-4 text-center"
        >
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
          Certifications
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-navy p-6 rounded border border-brand-gold/20 flex flex-col h-full relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
              <h3 className="text-xl font-serif font-bold text-brand-parchment mb-2">{cert.title}</h3>
              <p className="text-brand-gold-light mb-1">{cert.provider}</p>
              <p className="text-sm text-brand-parchment/60 mb-4">{cert.issueDate}</p>
              <p className="text-brand-parchment/80 mb-6 flex-grow text-sm leading-relaxed">{cert.description}</p>
              
              {/* MODIFY: Add certificate URL here. */}
              {cert.certificateUrl ? (
                <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto text-center w-full py-2 border border-brand-gold/50 text-brand-gold rounded hover:bg-brand-gold hover:text-brand-navy transition-colors">
                  View Certificate
                </a>
              ) : (
                <span className="inline-block mt-auto text-center w-full py-2 border border-brand-gold/20 text-brand-gold/40 rounded cursor-not-allowed">
                  View Certificate (Coming Soon)
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
