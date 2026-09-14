import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy border-t border-brand-gold/20 py-8 text-center">
      <p className="text-brand-parchment/60 font-serif">
        &copy; {new Date().getFullYear()} Ritesh Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
