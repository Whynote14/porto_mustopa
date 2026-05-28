import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Organisasi', href: '#organization' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled ? 'var(--card-bg)' : 'transparent',
        backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
          }} className="gradient-text">
            Mustopa Bisri.
          </span>
        </a>

        {/* Desktop Menu */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '24px', alignItems: 'center' }}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '500',
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    position: 'relative',
                    padding: '8px 0',
                  }}
                  className="nav-link"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={toggleTheme}
              style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} className="gradient-text" /> : <Moon size={18} style={{ color: 'var(--accent-blue)' }} />}
            </button>
            <a href="#contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
              Hubungi <ArrowRight size={14} />
            </a>
          </div>
        </nav>

        {/* Mobile Nav Button */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="mobile-nav-toggle-container">
          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              left: 0,
              width: '100%',
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 99,
            }}
            className="mobile-nav-menu"
          >
            <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', gap: '16px' }}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      color: 'var(--text-primary)',
                      display: 'block',
                      padding: '8px 0',
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ justifyContent: 'center', marginTop: '8px' }}
            >
              Hubungi Sekarang <ArrowRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
