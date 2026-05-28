import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Panitia (Divisi Dekorasi)',
      company: 'INDIEFEST 15 - Festival Film Pelajar se Indonesia',
      date: 'Maret - November 2024',
      tasks: [
        'Mendesain dan menata dekorasi venue sesuai konsep festival agar menarik perhatian pengunjung.',
        'Mengelola kebutuhan properti dekorasi agar tampil estetis dan mendukung penuh tema utama acara.',
        'Berkolaborasi erat dengan divisi lain untuk memastikan dekorasi sejalan dengan alur dan kebutuhan teknis acara.',
        'Melakukan evaluasi cepat dan penyesuaian dekorasi selama acara berlangsung agar tetap fungsional dan aman.'
      ]
    },
    {
      role: 'Ketua Pelaksana',
      company: 'Penyuluhan Komunikasi Pemasaran',
      date: 'Mei 2024',
      tasks: [
        'Memimpin keseluruhan proses kegiatan, mulai dari tahap perencanaan, pelaksanaan operasional hingga evaluasi akhir.',
        'Mengkoordinasikan tim pelaksana untuk memastikan pembagian tugas dan tenggat waktu berjalan efektif.',
        'Menyusun konsep acara yang komunikatif dan tepat sasaran bagi peserta penyuluhan.',
        'Mengelola komunikasi dua arah dengan pihak mitra eksternal dan peserta agar kegiatan berjalan profesional.'
      ]
    },
    {
      role: 'Volunteer (Divisi Keamanan)',
      company: 'Maroon Day',
      date: 'November - Desember 2023',
      tasks: [
        'Mengatur keamanan area acara secara keseluruhan, termasuk pengawasan pintu masuk dan alur sirkulasi pengunjung.',
        'Melakukan koordinasi aktif dengan panitia lain untuk menjaga ketertiban dan kenyamanan seluruh peserta.',
        'Menangani situasi darurat secara cepat, tanggap, dan tepat sesuai Standar Operasional Prosedur (SOP) keamanan.',
        'Mendukung kelancaran arus acara dengan menjamin lingkungan kegiatan tetap kondusif.'
      ]
    },
    {
      role: 'Sorting (Daily Worker)',
      company: 'Lazada Mall Warehouse',
      date: 'Juni - Desember 2022',
      tasks: [
        'Melakukan proses penyortiran barang masuk dan keluar sesuai dengan kategori serta standar operasional gudang.',
        'Memastikan tingkat ketepatan dan kecepatan tinggi dalam memisahkan paket untuk efisiensi distribusi.',
        'Membantu menjaga kelancaran alur logistik barang di area gudang penyimpanan.',
        'Melakukan pengecekan fisik kondisi paket secara berkala untuk menjaga kualitas barang dan keamanan pengiriman.'
      ]
    }
  ];

  return (
    <section id="experience" style={{ position: 'relative' }}>
      <h2 className="section-title">Pengalaman Kerja & Volunteer</h2>
      
      <div style={{
        position: 'relative',
        maxWidth: '850px',
        margin: '48px auto 0 auto',
        padding: '0 16px'
      }} className="timeline-container">
        
        {/* Central Vertical Line */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '20px',
          width: '4px',
          background: 'linear-gradient(180deg, var(--accent-blue) 0%, var(--accent-glow) 100%)',
          borderRadius: '2px'
        }} className="timeline-line"></div>

        {/* Timeline Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '50px',
                textAlign: 'left'
              }}
              className="timeline-item"
            >
              {/* Timeline Indicator Circle */}
              <motion.div 
                whileInView={{ scale: [0.5, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '6px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '4px solid var(--accent-blue)',
                  zIndex: 2,
                  boxShadow: '0 0 0 4px var(--accent-glow)'
                }}
                className="timeline-node"
              />

              {/* Experience Card */}
              <div className="glass-card" style={{ padding: '28px' }}>
                {/* Meta Head */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '16px',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '16px'
                }} className="card-header">
                  <div>
                    <h3 style={{ margin: 0, fontWeight: '700', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', color: 'var(--accent-blue)', fontWeight: '600', fontSize: '0.95rem' }}>
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  {/* Date Badge */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-color)',
                    padding: '6px 12px',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: 'var(--text-muted)'
                  }} className="date-badge">
                    <Calendar size={14} />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Task Details List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {exp.tasks.map((task, taskIdx) => (
                    <li key={taskIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.98rem', lineHeight: '1.5' }}>
                      <span style={{ color: 'var(--accent-blue)', marginTop: '4px', flexShrink: 0 }}>
                        <ChevronRight size={16} />
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
