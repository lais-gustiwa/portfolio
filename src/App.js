// App.js - Komponen utama
import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('projects');

  // Data proyek
  const projects = [
    {
      id: 1,
      title: "Sistem Kasir",
      description: "Sistem untuk menyimpan dan menambahkan stok barang dan harga pada setiap item.",
      status: "selesai",
      technologies: ["Python"],
      year: "2025"
    }
  ];

  // Data kontak
  const contactInfo = {
    alamat: "Perumahan Tirta Regency, Bandung, Indonesia",
    email: "laisgustiwa@student.inaba.ac.id",
    telepon: "+62 882 0001 32292",
    linkedin: "linkedin.com/in/lais-gustiwa",
    github: "github.com/lais-gustiwa"
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Profil Lais Gustiwa</h1>
        <p>Pengembang Program, Full-Stack & Desainer UI/UX</p>
      </header>

      <div className="main-content">
        {/* Bagian Profil dengan foto dan deskripsi */}
        <section className="profile-section">
          <div className="profile-container">
            <div className="profile-image">
              <img src="/Profil.png" alt="Foto Profil" className="profile-photo"/>
            </div>
            <div className="profile-description">
              <h2>Halo, Saya Lais Gustiwa</h2>
              <p>
                Saya seorang Mahasiswa jurusan Informatika dengan minat besar dalam dunia teknologi. 
                Saya selalu bersemangat untuk belajar hal-hal baru dan mengembangkan keterampilan saya dalam pengembangan program, web, dan desain UI/UX.
                Saya berkomitmen untuk menciptakan solusi digital yang inovatif dan user-friendly.
              </p>
              
              <div className="skills">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigasi untuk Projects dan Contact */}
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Proyek
          </button>
          <button 
            className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Kontak & Alamat
          </button>
        </div>

        {/* Konten berdasarkan tab aktif */}
        <div className="tab-content">
          {activeTab === 'projects' ? (
            <section className="projects-section">
              <h2>Proyek yang Telah dan Sedang Dikerjakan</h2>
              <div className="projects-container">
                {projects.map(project => (
                  <div 
                    key={project.id} 
                    className={`project-card ${project.status === 'selesai' ? 'completed' : 'ongoing'}`}
                  >
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className={`project-status ${project.status}`}>
                        {project.status === 'selesai' ? '✅ Selesai' : '🔄 Berlangsung'}
                      </span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-footer">
                      <span className="project-year">{project.year}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="project-stats">
                <div className="stat">
                  <h3>{projects.filter(p => p.status === 'selesai').length}</h3>
                  <p>Proyek Selesai</p>
                </div>
                <div className="stat">
                  <h3>{projects.filter(p => p.status === 'berlangsung').length}</h3>
                  <p>Proyek Berlangsung</p>
                </div>
                <div className="stat">
                  <h3>{projects.length}</h3>
                  <p>Total Proyek</p>
                </div>
              </div>
            </section>
          ) : (
            <section className="contact-section">
              <h2>Informasi Kontak & Alamat</h2>
              <div className="contact-container">
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div>
                      <h3>Alamat</h3>
                      <p>{contactInfo.alamat}</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div>
                      <h3>Email</h3>
                      <p>{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <div>
                      <h3>Telepon</h3>
                      <p>{contactInfo.telepon}</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">💼</span>
                    <div>
                      <h3>LinkedIn</h3>
                      <p>{contactInfo.linkedin}</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">💻</span>
                    <div>
                      <h3>GitHub</h3>
                      <p>{contactInfo.github}</p>
                    </div>
                  </div>
                </div>
                <div className="map-placeholder">
                  <h3>Lokasi Saya</h3>
                  <a
                  href='https://www.google.com/maps/place/TIRTA+Regency/@-7.0195304,107.6022499,17z/data=!4m14!1m7!3m6!1s0x2e68ebd5a73a69f9:0x5c2c5d18c3986fe2!2sTIRTA+Regency!8m2!3d-7.0195357!4d107.6048248!16s%2Fg%2F11rrt_0pw7!3m5!1s0x2e68ebd5a73a69f9:0x5c2c5d18c3986fe2!8m2!3d-7.0195357!4d107.6048248!16s%2Fg%2F11rrt_0pw7?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{textDecoration: 'none', color: 'inherit'}}
                  >
                    <div className="map">
                    <p>📍 Bandung, Indonesia</p>
                    <div className="map-image">
                      <div className="map-points">
                        <div className="map-point main"></div>
                      </div>
                    </div>
                  </div>
                  </a>
                  <p className="map-note">
                    Saya terbuka untuk peluang kerja remote maupun on-site di area Bandung dan sekitarnya.
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Profil Lais Gustiwa. Dibuat dengan React.</p>
      </footer>
    </div>
  );
}

export default App;