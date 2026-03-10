import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Planes', path: '/planes' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-jakarta ${
          scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-agency-primary to-agency-secondary flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,242,255,0.4)] relative">
                <span className="relative z-10">V</span>
                <div className="absolute inset-0 bg-white/20 rounded-lg group-hover:opacity-100 opacity-0 transition-opacity" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-agency-primary transition-colors">
                M Studio
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  to={link.path} 
                  className="text-sm font-medium text-slate-300 hover:text-white hover:-translate-y-0.5 transition-all tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/contacto"
                className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white text-center hover:text-agency-bg transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Hablemos
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-3xl md:hidden pt-24 px-4 font-jakarta border-t border-white/10"
          >
            <div className="flex flex-col gap-6 items-center">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-white hover:text-agency-primary transition-colors hover:scale-105 active:scale-95"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 w-full max-w-sm text-center rounded-full bg-gradient-to-r from-agency-primary to-agency-secondary text-white font-bold text-lg shadow-[0_0_30px_rgba(0,242,255,0.3)]"
              >
                Iniciar Proyecto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
