import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContact } from '../services/api';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitContact(formData);
      setStatus({ type: 'success', msg: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-navy-light border-t border-brand-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-brand-gold mb-12 flex items-center justify-center gap-4 text-center"
        >
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
          Contact
          <span className="h-[1px] w-12 bg-brand-gold/50"></span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif text-brand-parchment mb-4">Get In Touch</h3>
              <p className="text-brand-parchment/80">
                I am open to new opportunities, collaborations, and discussions. 
                Feel free to reach out to me!
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:riteshspl005@gmail.com" className="flex items-center gap-4 text-brand-parchment hover:text-brand-gold transition-colors">
                <div className="w-12 h-12 bg-brand-navy border border-brand-gold/30 flex items-center justify-center rounded-full text-brand-gold">
                  <FiMail size={20} />
                </div>
                {/* MODIFY: Update email if needed */}
                <span className="text-lg">riteshspl005@gmail.com</span>
              </a>
              
              <a href="tel:+919907830031" className="flex items-center gap-4 text-brand-parchment hover:text-brand-gold transition-colors">
                <div className="w-12 h-12 bg-brand-navy border border-brand-gold/30 flex items-center justify-center rounded-full text-brand-gold">
                  <FiPhone size={20} />
                </div>
                {/* MODIFY: Update phone if needed */}
                <span className="text-lg">+91 9907830031</span>
              </a>

              <a href="https://github.com/ritesh156" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-brand-parchment hover:text-brand-gold transition-colors">
                <div className="w-12 h-12 bg-brand-navy border border-brand-gold/30 flex items-center justify-center rounded-full text-brand-gold">
                  <FiGithub size={20} />
                </div>
                {/* MODIFY: Update GitHub if needed */}
                <span className="text-lg">github.com/ritesh156</span>
              </a>

              <a href="https://www.linkedin.com/in/ritesh-kumar-58b47a285/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-brand-parchment hover:text-brand-gold transition-colors">
                <div className="w-12 h-12 bg-brand-navy border border-brand-gold/30 flex items-center justify-center rounded-full text-brand-gold">
                  <FiLinkedin size={20} />
                </div>
                {/* MODIFY: Update LinkedIn if needed */}
                <span className="text-lg">linkedin.com/in/ritesh-kumar-58b47a285</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="bg-brand-navy p-8 rounded-lg border border-brand-gold/20 shadow-lg space-y-4">
              {status.msg && (
                <div className={`p-4 rounded ${status.type === 'success' ? 'bg-green-900/50 text-green-200 border-green-500/50' : 'bg-red-900/50 text-red-200 border-red-500/50'} border`}>
                  {status.msg}
                </div>
              )}
              <div className="space-y-2">
                <label className="text-brand-parchment text-sm">Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-brand-navy-light border border-brand-gold/30 rounded p-3 text-brand-parchment focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-brand-parchment text-sm">Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-brand-navy-light border border-brand-gold/30 rounded p-3 text-brand-parchment focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-brand-parchment text-sm">Subject</label>
                <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-brand-navy-light border border-brand-gold/30 rounded p-3 text-brand-parchment focus:outline-none focus:border-brand-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-brand-parchment text-sm">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full bg-brand-navy-light border border-brand-gold/30 rounded p-3 text-brand-parchment focus:outline-none focus:border-brand-gold transition-colors"></textarea>
              </div>
              <button disabled={isSubmitting} type="submit" className="w-full bg-brand-gold text-brand-navy font-bold py-3 rounded hover:bg-brand-gold-light transition-colors disabled:opacity-50">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
