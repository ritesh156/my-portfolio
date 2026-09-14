import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    axios.post('http://localhost:8080/api/contact_messages', formData)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-20 bg-brand-navy relative border-t border-brand-gold/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center text-brand-gold mb-12 border-b border-brand-gold/20 pb-4 inline-block w-full">Contact me (Get in Touch)</h2>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold text-brand-parchment mb-6">Let's Connect</h3>
              <p className="text-brand-parchment/70 mb-8">
                Feel free to reach out for collaborations, opportunities, or just to say hello.
              </p>
              
              <div className="space-y-6">
                {/* MODIFY: Contact Email */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-brand-parchment/50">Email</p>
                    <a href="mailto:riteshspl005@gmail.com" className="text-brand-parchment hover:text-brand-gold transition-colors">riteshspl005@gmail.com</a>
                  </div>
                </div>
                
                {/* MODIFY: Contact Phone */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-brand-parchment/50">Phone</p>
                    <a href="tel:+919907830031" className="text-brand-parchment hover:text-brand-gold transition-colors">+91 9907830031</a>
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-8 pt-8 border-t border-brand-gold/10">
                  {/* MODIFY: Social Links */}
                  <a href="https://github.com/ritesh156" target="_blank" rel="noreferrer" className="w-10 h-10 bg-brand-navy border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-parchment hover:bg-brand-gold hover:text-brand-navy transition-all">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/ritesh-kumar-58b47a285/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-brand-navy border border-brand-gold/30 rounded-full flex items-center justify-center text-brand-parchment hover:bg-brand-gold hover:text-brand-navy transition-all">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 bg-brand-burgundy/5 p-8 rounded-xl border border-brand-gold/20 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-parchment/70 mb-2">Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-brand-navy border border-brand-gold/30 rounded-md px-4 py-3 text-brand-parchment focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-parchment/70 mb-2">Email</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-brand-navy border border-brand-gold/30 rounded-md px-4 py-3 text-brand-parchment focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-parchment/70 mb-2">Subject</label>
                  <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-brand-navy border border-brand-gold/30 rounded-md px-4 py-3 text-brand-parchment focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-parchment/70 mb-2">Message</label>
                  <textarea required rows="4" name="message" value={formData.message} onChange={handleChange} className="w-full bg-brand-navy border border-brand-gold/30 rounded-md px-4 py-3 text-brand-parchment focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-brand-gold text-brand-navy font-bold py-3 px-4 rounded-md hover:bg-yellow-500 transition-colors disabled:opacity-50">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-400 text-center mt-4">Failed to send message. Is the backend running?</p>}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
