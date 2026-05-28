import { MapPin, Phone, Mail } from 'lucide-react';

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

export default function PrintCV() {
  return (
    <div className="print-cv-container" style={{
      fontFamily: "'Inter', sans-serif",
      color: '#333333',
      lineHeight: '1.5',
      fontSize: '12px',
      padding: '40px',
      background: '#ffffff',
      maxWidth: '800px',
      margin: '0 auto',
    }}>
      {/* Header Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '40px',
        borderBottom: '2px solid #333333',
        paddingBottom: '20px',
        marginBottom: '20px'
      }}>
        {/* Left Header: Name & Contacts */}
        <div>
          <h1 style={{
            fontSize: '26px',
            fontWeight: '800',
            color: '#1a1a1a',
            margin: '0 0 16px 0',
            textTransform: 'uppercase',
            letterSpacing: '-0.5px',
            lineHeight: '1.1'
          }}>
            Muhamad Mustopa Bisri
          </h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={14} style={{ color: '#555' }} />
              <span>Kota Bogor, Jawa Barat</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={14} style={{ color: '#555' }} />
              <span>+62 819 3167 9766</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={14} style={{ color: '#555' }} />
              <span>bsrimhmdmstpa789@gmail.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Instagram size={14} style={{ color: '#555' }} />
              <span>@mstpaaaa_</span>
            </div>
          </div>
        </div>

        {/* Right Header: Short Summary */}
        <div style={{ textAlign: 'justify', fontSize: '11.5px', color: '#444' }}>
          Mahasiswa semester 5 di Universitas Pakuan, Program Studi Ilmu Komunikasi dengan fokus peminatan Komunikasi Pemasaran Digital yang memiliki ketertarikan dalam dunia media sosial, pembuatan konten, desain grafis, dan digital marketing. Terbuka untuk pengalaman baru dan bergabung dengan lingkungan kerja yang dinamis.
        </div>
      </div>

      {/* Section: Pengalaman */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{
          fontSize: '14px',
          fontWeight: '700',
          textTransform: 'uppercase',
          borderBottom: '1.5px solid #1a1a1a',
          paddingBottom: '4px',
          margin: '0 0 16px 0',
          color: '#1a1a1a',
          letterSpacing: '0.5px'
        }}>
          Pengalaman
        </h2>

        {/* Job 1 */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '12px', color: '#1a1a1a' }}>
            <span>INDIEFEST 15 – PANITIA ( DIVISI DEKORASI )</span>
            <span>Mar – Nov 2024</span>
          </div>
          <div style={{ fontSize: '11px', fontStyle: 'italic', color: '#666', marginBottom: '6px' }}>
            ( Festival Film Pelajar se Indonesia )
          </div>
          <ul style={{ margin: 0, paddingLeft: '16px' }}>
            <li>Mendesain dan menata dekorasi venue sesuai konsep festival.</li>
            <li>Mengelola kebutuhan properti dekorasi agar tampil estetis dan mendukung tema acara.</li>
            <li>Berkolaborasi dengan divisi lain untuk memastikan dekorasi sejalan dengan alur dan kebutuhan acara.</li>
            <li>Melakukan evaluasi dan penyesuaian dekorasi selama acara agar tetap fungsional dan menarik.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '12px', color: '#1a1a1a' }}>
            <span>PENYULUHAN – KETUA PELAKSANA</span>
            <span>Mei 2024</span>
          </div>
          <ul style={{ margin: '6px 0 0 0', paddingLeft: '16px' }}>
            <li>Memimpin keseluruhan proses kegiatan, mulai dari perencanaan, pelaksanaan hingga evaluasi.</li>
            <li>Mengkoordinasikan tim untuk memastikan pembagian tugas berjalan efektif.</li>
            <li>Menyusun konsep acara dan memastikan kegiatan penyuluhan berjalan tersusun, komunikatif, dan tepat sasaran.</li>
            <li>Mengelola komunikasi dengan pihak mitra dan peserta agar kegiatan berjalan lancar dan profesional.</li>
          </ul>
        </div>

        {/* Job 3 */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '12px', color: '#1a1a1a' }}>
            <span>MAROON DAY – VOLUNTEER ( DIVISI KEAMANAN )</span>
            <span>Nov – Des 2023</span>
          </div>
          <ul style={{ margin: '6px 0 0 0', paddingLeft: '16px' }}>
            <li>Mengatur keamanan area acara, termasuk pengawasan pintu masuk dan alur pengunjung.</li>
            <li>Melakukan koordinasi dengan panitia lain untuk menjaga ketertiban dan kenyamanan peserta.</li>
            <li>Menangani situasi darurat secara cepat dan tepat sesuai SOP keamanan.</li>
            <li>Mendukung kelancaran acara dengan memastikan lingkungan tetap aman dan kondusif.</li>
          </ul>
        </div>

        {/* Job 4 */}
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '12px', color: '#1a1a1a' }}>
            <span>LAZADA MALL – SORTING ( DAILY WORKER )</span>
            <span>Jun – Des 2022</span>
          </div>
          <ul style={{ margin: '6px 0 0 0', paddingLeft: '16px' }}>
            <li>Melakukan proses penyortiran barang sesuai kategori dan standar operasional.</li>
            <li>Memastikan ketepatan dan kecepatan dalam memisahkan paket untuk distribusi.</li>
            <li>Membantu menjaga kelancaran alur logistik di area gudang.</li>
            <li>Melakukan pengecekan kondisi paket untuk menjaga kualitas dan keamanan pengiriman.</li>
          </ul>
        </div>
      </div>

      {/* Section: Pendidikan */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{
          fontSize: '14px',
          fontWeight: '700',
          textTransform: 'uppercase',
          borderBottom: '1.5px solid #1a1a1a',
          paddingBottom: '4px',
          margin: '0 0 16px 0',
          color: '#1a1a1a',
          letterSpacing: '0.5px'
        }}>
          Pendidikan
        </h2>

        {/* Uni */}
        <div style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: '#1a1a1a' }}>
            <span>UNIVERSITAS PAKUAN BOGOR – KOMUNIKASI PEMASARAN DIGITAL</span>
            <span>2023 – Saat ini</span>
          </div>
          <div style={{ color: '#444', marginTop: '4px' }}>
            Program Studi Ilmu Komunikasi, Fakultas Ilmu Sosial & Ilmu Budaya.
          </div>
        </div>

        {/* SMK */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: '#1a1a1a' }}>
            <span>SMK NEGERI 1 DEPOK – REKAYASA PERANGKAT LUNAK</span>
            <span>2019 – 2022</span>
          </div>
          <div style={{ color: '#444', marginTop: '4px' }}>
            Jurusan Rekayasa Perangkat Lunak
          </div>
        </div>
      </div>

      {/* Section: Organisasi & Keahlian (Two Columns) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: '40px'
      }}>
        {/* Left: Organisasi */}
        <div>
          <h2 style={{
            fontSize: '14px',
            fontWeight: '700',
            textTransform: 'uppercase',
            borderBottom: '1.5px solid #1a1a1a',
            paddingBottom: '4px',
            margin: '0 0 12px 0',
            color: '#1a1a1a'
          }}>
            Organisasi
          </h2>
          <div style={{ fontWeight: '700', color: '#1a1a1a', marginBottom: '6px' }}>
            CLUB LOBI PILM – DIVISI PRODUKSI
          </div>
          <div style={{ textAlign: 'justify', fontSize: '11px', color: '#444', lineHeight: '1.4' }}>
            Organisasi perfilman di bawah Himpunan Mahasiswa Universitas Pakuan yang berfokus pada pengembangan produksi film dan kreativitas audiovisual. Menyelenggarakan pelatihan, proyek film mahasiswa, serta event tahunan Indiefest, festival film pelajar tingkat nasional.
          </div>
        </div>

        {/* Right: Keahlian */}
        <div>
          <h2 style={{
            fontSize: '14px',
            fontWeight: '700',
            textTransform: 'uppercase',
            borderBottom: '1.5px solid #1a1a1a',
            paddingBottom: '4px',
            margin: '0 0 12px 0',
            color: '#1a1a1a'
          }}>
            Keahlian
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px 16px',
            fontSize: '11px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '6px', color: '#333' }}>●</span> Desain Grafis
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '6px', color: '#333' }}>●</span> Critical Thinking
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '6px', color: '#333' }}>●</span> Basic Marketing
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '6px', color: '#333' }}>●</span> Kreatifitas
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '6px', color: '#333' }}>●</span> Komunikatif
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '6px', color: '#333' }}>●</span> Leadership
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
