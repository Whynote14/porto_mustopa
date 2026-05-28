import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';

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

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setShowToast(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setShowToast(false), 3000);
  };

  const contactDetails = [
    {
      type: 'Email',
      value: 'bsrimhmdmstpa789@gmail.com',
      action: 'mailto:bsrimhmdmstpa789@gmail.com',
      icon: <Mail size={22} />,
      btnLabel: 'Kirim Email'
    },
    {
      type: 'Telepon',
      value: '+62 819 3167 9766',
      action: 'tel:+6281931679766',
      icon: <Phone size={22} />,
      btnLabel: 'Hubungi'
    },
    {
      type: 'Instagram',
      value: '@mstpaaaa_',
      action: 'https://instagram.com/mstpaaaa_',
      icon: <Instagram size={22} />,
      btnLabel: 'Kunjungi'
    }
  ];

  return (
    <section id="contact" style={{ position: 'relative' }}>
      <h2 className="section-title">Kontak Saya</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '0.9fr 1.1fr',
        gap: '40px',
        marginTop: '48px',
        textAlign: 'left'
      }} className="contact-grid">
        
        {/* Left Side: Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <h3 style={{ marginBottom: '8px', fontWeight: '600' }}>Hubungi Langsung</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Jangan ragu untuk menghubungi saya melalui salah satu saluran di bawah ini. Saya akan berusaha merespons secepat mungkin.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {contactDetails.map((detail, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'var(--accent-glow)',
                    color: 'var(--accent-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {detail.icon}
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>
                      {detail.type}
                    </span>
                    <a
                      href={detail.action}
                      target={detail.type === 'Instagram' ? '_blank' : '_self'}
                      rel="noreferrer"
                      style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}
                      className="hover-underline"
                    >
                      {detail.value}
                    </a>
                  </div>
                </div>

                {/* Direct Action and Copy Buttons */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {detail.type !== 'Instagram' && (
                    <button
                      onClick={() => copyToClipboard(detail.value, detail.type)}
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-primary)',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      title={`Salin ${detail.type}`}
                    >
                      {copiedType === detail.type ? (
                        <Check size={16} style={{ color: '#10b981' }} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  )}
                  <a
                    href={detail.action}
                    target={detail.type === 'Instagram' ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="btn-primary"
                    style={{
                      padding: '8px 14px',
                      fontSize: '0.8rem',
                      borderRadius: '8px',
                      boxShadow: 'none'
                    }}
                  >
                    {detail.btnLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            backgroundColor: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            marginTop: '8px'
          }}>
            <MapPin size={20} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Berdomisili di <strong>Bogor, Jawa Barat</strong>. Bersedia melakukan pekerjaan secara onsite maupun remote/hybrid.
            </span>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{ padding: '32px' }}
        >
          <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>Kirim Pesan</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nama Lengkap</label>
              <input
                id="name"
                type="text"
                required
                className="form-control"
                placeholder="Masukkan nama Anda"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Alamat Email</label>
              <input
                id="email"
                type="email"
                required
                className="form-control"
                placeholder="nama@email.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Pesan Anda</label>
              <textarea
                id="message"
                required
                className="form-control"
                placeholder="Tuliskan pesan atau penawaran kerja sama Anda di sini..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', gap: '10px', marginTop: '8px' }}>
              Kirim Pesan <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="toast-msg"
          >
            <Check size={18} />
            <span>Pesan Anda berhasil dikirim! Terima kasih.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Branding */}
      <div style={{
        marginTop: '100px',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '32px',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem'
      }}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Muhamad Mustopa Bisri. All rights reserved.
        </p>
        <p style={{ margin: '4px 0 0 0', fontSize: '0.8rem' }}>
          Dibuat menggunakan React.js &amp; Vanilla CSS.
        </p>
      </div>
    </section>
  );
}
