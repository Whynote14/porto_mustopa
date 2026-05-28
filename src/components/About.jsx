import React from 'react';
import { motion } from 'framer-motion';
import { Palette, TrendingUp, MessageSquare, Brain, Sparkles, Users, MapPin, Mail, Phone } from 'lucide-react';

const Instagram = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function About() {
  const skills = [
    { name: 'Desain Grafis', icon: <Palette size={28} />, color: '#3b82f6', desc: 'Mahir menggunakan tools desain untuk membuat konten visual yang menarik dan profesional.' },
    { name: 'Basic Marketing', icon: <TrendingUp size={28} />, color: '#2563eb', desc: 'Memahami dasar-dasar pemasaran digital, strategi media sosial, dan analisis audiens.' },
    { name: 'Komunikatif', icon: <MessageSquare size={28} />, color: '#0ea5e9', desc: 'Kemampuan berkomunikasi secara efektif dalam tim maupun presentasi publik.' },
    { name: 'Critical Thinking', icon: <Brain size={28} />, color: '#38bdf8', desc: 'Mampu menganalisis masalah secara mendalam dan menemukan solusi kreatif.' },
    { name: 'Kreatifitas', icon: <Sparkles size={28} />, color: '#1d4ed8', desc: 'Menghasilkan ide-ide inovatif untuk konten, kampanye, dan proyek kreatif.' },
    { name: 'Leadership', icon: <Users size={28} />, color: '#0284c7', desc: 'Pengalaman memimpin tim dalam organisasi dan kepanitiaan berbagai acara.' },
  ];

  const infoItems = [
    { icon: <MapPin size={18} />, label: 'Lokasi', value: 'Kota Bogor, Jawa Barat', link: null },
    { icon: <Phone size={18} />, label: 'Telepon', value: '+62 819 3167 9766', link: 'tel:+6281931679766' },
    { icon: <Mail size={18} />, label: 'Surel', value: 'bsrimhmdmstpa789@gmail.com', link: 'mailto:bsrimhmdmstpa789@gmail.com' },
    { icon: <Instagram size={18} />, label: 'Instagram', value: '@mstpaaaa_', link: 'https://instagram.com/mstpaaaa_' },
  ];

  return (
    <section id="about">
      <h2 className="section-title">Tentang Saya</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        marginTop: '32px'
      }} className="about-grid">
        
        {/* Left Column: Biography & Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}
        >
          <div>
            <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>Biografi Singkat</h3>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Saya adalah mahasiswa semester 5 di Universitas Pakuan, Program Studi Ilmu Komunikasi dengan fokus peminatan Komunikasi Pemasaran Digital. Memiliki ketertarikan mendalam dalam pengelolaan media sosial, pembuatan konten kreatif, desain grafis, dan strategi digital marketing.
            </p>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem', margin: 0 }}>
              Saya aktif mengasah kemampuan praktis melalui berbagai kepanitiaan acara dan keterlibatan organisasi. Dengan latar belakang pendidikan menengah di bidang Rekayasa Perangkat Lunak, saya memiliki kombinasi unik berupa pemahaman teknis digital dan keterampilan komunikasi kreatif yang siap diterapkan dalam dunia industri.
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>Informasi Kontak</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }} className="info-grid">
              {infoItems.map((item, idx) => (
                <div 
                  key={idx} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center' }}>
                    {item.icon}
                  </div>
                  <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>
                      {item.label}
                    </span>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        style={{ fontSize: '0.88rem', fontWeight: '500', color: 'var(--text-primary)', wordBreak: 'break-all' }}
                        className="hover-underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.88rem', fontWeight: '500', color: 'var(--text-primary)' }}>
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Keahlian (Skills) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}
        >
          <div>
            <h3 style={{ marginBottom: '12px', fontWeight: '600' }}>Keahlian & Kompetensi</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Berikut adalah beberapa keterampilan utama yang saya miliki dan terus saya kembangkan:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px'
            }} className="skills-grid">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ 
                    y: -6, 
                    boxShadow: `0 12px 28px ${skill.color}22`,
                    borderColor: skill.color 
                  }}
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    cursor: 'default',
                    transition: 'border-color 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: skill.color,
                  }}>
                    {skill.icon}
                  </div>
                  <span style={{
                    fontWeight: '600',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                  }}>
                    {skill.name}
                  </span>
                  <span style={{
                    fontSize: '0.85rem',
                    lineHeight: '1.5',
                    color: 'var(--text-secondary)',
                  }}>
                    {skill.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
