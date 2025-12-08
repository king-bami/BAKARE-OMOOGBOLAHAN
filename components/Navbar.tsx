import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#experience' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-gray-100/50' : 'bg-transparent py-6 md:py-8'
    }`}>
      <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between px-6 lg:px-12">
        
        {/* Logo - Landscape Text */}
        <a href="#" className="flex items-center gap-2 group z-50">
            <span className={`text-xl md:text-2xl font-black uppercase tracking-tighter transition-colors duration-300 ${
                scrolled ? 'text-brand-900' : 'text-brand-900'
            }`}>
                Omogbolahan Bakare
            </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
            <ul className="flex flex-row space-x-8 font-medium">
                {navLinks.map((link) => (
                <li key={link.name}>
                    <a 
                    href={link.href} 
                    className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand-500 ${
                        scrolled ? 'text-gray-600' : 'text-brand-900/80'
                    }`}
                    >
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>
            
            <a href={SOCIAL_LINKS.email} className={`
                px-6 py-2.5 text-sm font-bold rounded-full transition-all uppercase tracking-wider
                ${scrolled 
                    ? 'bg-brand-900 text-white hover:bg-gray-800' 
                    : 'bg-brand-900 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-brand-900'
                }
            `}>
                Contact Me
            </a>
        </div>

        {/* Mobile Toggle */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="md:hidden z-50 p-2 text-brand-900 focus:outline-none"
        >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Full Screen Menu */}
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center"
                >
                    <ul className="flex flex-col items-center space-y-8">
                        {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                            href={link.href} 
                            className="text-4xl font-bold text-brand-900 hover:text-brand-600 tracking-tighter"
                            onClick={() => setIsOpen(false)}
                            >
                            {link.name}
                            </a>
                        </li>
                        ))}
                        <li className="pt-8">
                            <a href={SOCIAL_LINKS.email} className="px-8 py-4 bg-brand-900 text-white text-lg font-bold rounded-full">
                                Let's Talk
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>

      </div>
    </nav>
  );
};

export default Navbar;