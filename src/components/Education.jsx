import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      institution: 'Universitas Pakuan Bogor',
      degree: 'S1 Komunikasi Pemasaran Digital',
      faculty: 'Fakultas Ilmu Sosial & Ilmu Budaya (FISIB)',
      period: '2023 - Saat Ini (Semester 5)',
      location: 'Bogor, Jawa Barat',
      icon: <GraduationCap size={28} />,
      details: [
        'Fokus pada perencanaan media sosial, strategi digital marketing, periklanan, dan hubungan masyarakat.',
        'Mempelajari analisis audiens digital, manajemen kampanye kreatif, serta perilaku konsumen.',
        'Aktif terlibat dalam organisasi kemahasiswaan dan kepanitiaan festival film.'
      ]
    },
    {
      institution: 'SMK Negeri 1 Depok',
      degree: 'Rekayasa Perangkat Lunak (RPL)',
      faculty: 'Jurusan Rekayasa Perangkat Lunak',
      period: '2019 - 2022',
      location: 'Depok, Jawa Barat',
      icon: <Code size={28} />,
      details: [
        'Mempelajari dasar-dasar pemrograman, pengembangan aplikasi web, dan basis data.',
        'Mengembangkan pemikiran logika terstruktur dan dasar-dasar UI/UX design.',
        'Memberikan keunggulan kompetitif berupa pemahaman teknis dalam mengoperasikan alat digital pemasaran.'
      ]
    }
  ];

  return (
    <section id="education">
      <h2 className="section-title">Pendidikan</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        marginTop: '48px',
        width: '100%'
      }} className="education-grid">
        {educationList.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-card"
            style={{
              padding: '32px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <div>
              {/* Header section with Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'var(--accent-glow)',
                  color: 'var(--accent-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid rgba(37, 99, 235, 0.1)'
                }}>
                  {edu.icon}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {edu.institution}
                  </h3>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                    {edu.faculty}
                  </span>
                </div>
              </div>

              {/* Title & Info badging */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--bg-tertiary)',
                  padding: '6px 12px',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-color)'
                }}>
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--bg-tertiary)',
                  padding: '6px 12px',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border-color)'
                }}>
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Degree Title */}
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                {edu.degree}
              </h4>

              {/* Bullet highlights */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {edu.details.map((detail, detIdx) => (
                  <li key={detIdx} style={{
                    position: 'relative',
                    paddingLeft: '16px',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: '8px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-blue)'
                    }} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
