import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Certifications = () => {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/certifications')
      .then(res => setCerts(res.data))
      .catch(err => {
        setCerts([
          { id: 1, title: 'AI Tools & AI Workshop', provider: 'be10X', issuedDate: 'November 2025', description: 'Successfully completed the AI Tools & ChatGPT Workshop by be10X. Gained practical exposure to using AI tools and ChatGPT for creating presentations, analysing data, coding, and debugging. The workshop focused on applying AI tools to complete tasks more efficiently and improve productivity in professional and technical work.', certificateUrl: null },
          { id: 2, title: 'Entrepreneurship Drive – IIT Kharagpur', provider: 'Entrepreneurship Cell, IIT Kharagpur', issuedDate: 'September 2023', description: 'Actively participated in the Pan-India Initiative of Entrepreneurship Cell, IIT Kharagpur: Entrepreneurship Awareness Drive – Local Startups Meet 2023. Participated as a student from Chandigarh University and contributed to the successful engagement of the initiative. The experience provided exposure to entrepreneurship awareness and the startup ecosystem.', certificateUrl: null },
          { id: 3, title: 'Elevating Java: From Concepts to Code', provider: 'Chandigarh University', issuedDate: 'June 2025', description: 'Successfully completed 6-week In-House Summer Training 2025 at Chandigarh University on “Elevating Java: From Concepts to Code,” organized by the Department of Computer Science & Engineering.', certificateUrl: null }
        ]);
      });
  }, []);

  return (
    <section id="certifications" className="py-20 bg-brand-navy/95 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center text-brand-gold mb-12 border-b border-brand-gold/20 pb-4 inline-block w-full">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((cert, index) => (
              <motion.div 
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-brand-navy to-brand-navy border-2 border-brand-gold/20 p-6 rounded-xl relative hover:border-brand-gold transition-colors flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">
                  📜
                </div>
                <div className="mb-4 z-10 flex-grow">
                  <h3 className="text-xl font-bold text-brand-parchment mb-2">{cert.title}</h3>
                  <p className="text-brand-gold text-sm font-semibold mb-1">{cert.provider}</p>
                  <p className="text-brand-parchment/50 text-xs italic mb-4">{cert.issuedDate}</p>
                  <p className="text-brand-parchment/80 text-sm">{cert.description}</p>
                </div>
                
                {/* MODIFY: Add certificate URL here. */}
                <div className="mt-4 pt-4 border-t border-brand-gold/20">
                  <a href={cert.certificateUrl || "#"} className={`text-sm font-bold block text-center py-2 rounded border ${cert.certificateUrl ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy' : 'border-brand-gold/20 text-brand-gold/30 cursor-not-allowed'} transition-colors`}>
                    View Certificate
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
export default Certifications;
