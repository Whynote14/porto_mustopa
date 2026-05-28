import React from 'react';
import { motion } from 'framer-motion';
import { Film, Video, CalendarDays, Sliders } from 'lucide-react';

export default function Organization() {
  const highlights = [
    {
      title: 'Produksi Film',
      description: 'Aktif terlibat dalam perencanaan skenario, syuting, dan penyuntingan video audiovisual.',
      icon: <Video size={24} />
    },
    {
      title: 'Penyelenggaraan Indiefest',
      description: 'Terlibat langsung dalam pelaksanaan festival film pelajar berskala nasional tahunan.',
      icon: <CalendarDays size={24} />
    },
    {
      title: 'Kreativitas Audiovisual',
      description: 'Mengasah keahlian teknis multimedia serta pengarahan dekorasi artistik panggung.',
      icon: <Sliders size={24} />
    }
  ];

  return (
    <section id="organization" style={{ position: 'relative' }}>
      <h2 className="section-title">Organisasi</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          marginTop: '48px',
          width: '100%'
        }}
      >
        {/* Spotlight Banner Card */}
        <div 
          className="glass-card" 
          style={{
            padding: '40px',
            textAlign: 'left',
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'center'
          }}
          className="organization-banner-grid"
        >
          {/* Text Details */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'var(--accent-glow)',
                color: 'var(--accent-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Film size={20} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                Club Lobi Pilm
              </h3>
            </div>
            
            <h4 style={{ color: 'var(--accent-blue)', fontWeight: '600', marginBottom: '16px', fontSize: '1.05rem' }}>
              Divisi Produksi • Himpunan Mahasiswa Universitas Pakuan
            </h4>
            
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              Club Lobi Pilm adalah organisasi kemahasiswaan yang berfokus pada pengembangan kreativitas perfilman dan produksi konten audiovisual mahasiswa Universitas Pakuan. Sebagai bagian dari Divisi Produksi, saya berperan dalam mengeksekusi proyek audiovisual kreatif serta menyelenggarakan pelatihan cinematografi.
            </p>
            
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: 'var(--text-secondary)', margin: 0 }}>
              Pencapaian utama organisasi mencakup penyelenggaraan **Indiefest**, sebuah festival film pendek pelajar tingkat nasional yang menjadi wadah apresiasi karya sineas muda Indonesia.
            </p>
          </div>

          {/* Activities List Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {highlights.map((hl, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '16px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{ color: 'var(--accent-blue)', marginTop: '2px' }}>
                  {hl.icon}
                </div>
                <div>
                  <h5 style={{ margin: '0 0 4px 0', fontSize: '0.98rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {hl.title}
                  </h5>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                    {hl.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
