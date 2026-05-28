import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import profileImg from '../assets/poto1.jpeg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingDelayedVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }
    }
  };

  const handlePrint = (e) => {
    e.preventDefault();
    window.print();
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'calc(var(--header-height) + 20px)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '40px',
        alignItems: 'center',
        width: '100%'
      }} className="hero-grid">
        
        {/* Left Side: Pitch Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--accent-glow)',
              color: 'var(--accent-blue)',
              padding: '6px 16px',
              borderRadius: '50px',
              width: 'fit-content',
              fontSize: '0.85rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              border: '1px solid rgba(37, 99, 235, 0.15)'
            }}
          >
            <Sparkles size={14} /> Mahasiswa Ilmu Komunikasi
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} style={{ margin: 0, fontWeight: '800' }}>
            Halo, Saya <br />
            <span className="gradient-text">Muhamad Mustopa Bisri</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h3 
            variants={itemVariants}
            style={{ 
              fontWeight: '500', 
              color: 'var(--text-primary)',
              opacity: 0.9,
              marginTop: '-8px'
            }}
          >
            Peminatan Komunikasi Pemasaran Digital • Universitas Pakuan
          </motion.h3>

          {/* Bio Description */}
          <motion.p 
            variants={itemVariants} 
            style={{ 
              fontSize: '1.1rem', 
              color: 'var(--text-secondary)', 
              maxWidth: '620px', 
              lineHeight: '1.7',
              margin: '8px 0 16px 0'
            }}
          >
            Mahasiswa semester 5 yang memiliki ketertarikan tinggi dalam dunia media sosial, pembuatan konten kreatif, desain grafis, dan pemasaran digital. Terbuka untuk mengeksplorasi pengalaman baru serta berkontribusi dalam lingkungan kerja yang dinamis dan berorientasi pada hasil.
          </motion.p>

          {/* CTA Actions */}
          <motion.div 
            variants={itemVariants} 
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <a href="#experience" className="btn-primary">
              Lihat Pengalaman <ArrowRight size={18} />
            </a>
            <a href="#cv-print" onClick={handlePrint} className="btn-secondary">
              Unduh CV <Download size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive Animated Graphics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '400px'
          }}
          className="hero-visual"
        >
          {/* Main Visual Circle Backdrops */}
          <div style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
            filter: 'blur(30px)',
            zIndex: 1
          }}></div>

          <div style={{
            position: 'absolute',
            width: '240px',
            height: '240px',
            border: '2px dashed rgba(37, 99, 235, 0.15)',
            borderRadius: '50%',
            animation: 'spin 40s linear infinite',
            zIndex: 1
          }}></div>

          {/* Profile Photo */}
          <div style={{
            position: 'absolute',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '8px solid var(--card-bg)',
            backdropFilter: 'var(--glass-blur)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-secondary)',
          }}>
            <img 
              src={profileImg} 
              alt="Muhamad Mustopa Bisri" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Badge 1: Pembuatan Konten */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{
              position: 'absolute',
              top: '20px',
              left: '-30px',
              padding: '10px 18px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '50px'
            }}
            className="glass-card"
          >
            <span style={{ fontSize: '1.2rem' }}>🎥</span>
            <span style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-primary)' }}>Pembuatan Konten</span>
          </motion.div>

          {/* Badge 2: Pemasaran Digital */}
          <motion.div
            variants={floatingDelayedVariants}
            animate="animate"
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '-30px',
              padding: '10px 18px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '50px'
            }}
            className="glass-card"
          >
            <span style={{ fontSize: '1.2rem' }}>📈</span>
            <span style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-primary)' }}>Pemasaran Digital</span>
          </motion.div>

          {/* Badge 3: Desain Grafis */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            style={{
              position: 'absolute',
              bottom: '120px',
              left: '-40px',
              padding: '10px 18px',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '50px',
              borderLeft: '4px solid var(--accent-blue)'
            }}
            className="glass-card"
          >
            <span style={{ fontSize: '1.2rem' }}>🎨</span>
            <span style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-primary)' }}>Desain Grafis</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
