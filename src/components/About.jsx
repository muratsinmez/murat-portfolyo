import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skillGroups = [
    {
      category: 'Arayüz Geliştirme (Frontend)',
      color: '#f59e0b', icon: '🖥️',
      skills: ['React.js', 'Tailwind CSS', 'SPA Mimarisi', 'State Management', 'UI/UX Optimizasyonu', 'Responsive Design'],
    },
    {
      category: 'Sunucu Tarafı Geliştirme (Backend)',
      color: '#fb923c', icon: '⚙️',
      skills: ['Python', 'FastAPI', 'Asenkron Mimari', 'Java 17+', 'Spring Boot 3', 'RESTful API', 'Microservices', 'JWT & Spring Security'],
    },
    {
      category: 'Veritabanı Yönetimi & Güvenlik',
      color: '#fbbf24', icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Multi-Tenant Mimari', 'RLS (Satır Düzeyinde Güvenlik)', 'Veri İzolasyonu'],
    },
    {
      category: 'Sistem Altyapısı & DevOps',
      color: '#f97316', icon: '🛠️',
      skills: ['Linux Server Yönetimi', 'Windows Server Yönetimi', 'Git & Versiyon Kontrolü', 'Sistem İzleme & Loglama', 'Hata Toleranslı Görev Kuyrukları', 'BT Altyapı Desteği'],
    },
    {
      category: 'Yapay Zeka & Otomasyon',
      color: '#ef4444', icon: '🤖',
      skills: ['OpenAI API', 'İstem Mühendisliği (Prompt Engineering)', 'OCR & NLP Veri Ayrıştırma', 'WebSocket ile Gerçek Zamanlı İletişim', 'E-İmza Entegrasyonu (PKCS#11)', 'Donanım Entegrasyonu'],
    },
  ];

  const experience = [
    {
      role: 'Yazılım Lideri & Uygulama Destek Sorumlusu', company: 'Hukukmatik Yazılım',
      period: '02/2026 – Günümüz', type: 'Uzaktan', color: '#f59e0b',
      bullets: [
        'Bulut tabanlı SaaS CRM sisteminde kullanıcı entegrasyonlarını yönetiyor ve teknik hata bildirimlerini Python/React altyapısında çözümlüyorum.',
        'Multi-tenant mimari üzerinde Supabase (PostgreSQL) ile veritabanı yönetimi ve güvenli kimlik doğrulama süreçlerini yürütüyorum.',
      ],
    },
    {
      role: 'IT & Yazılım Destek Uzmanı', company: 'Akay Lokman Hekim Hastanesi',
      period: '01/2024 – 03/2025', type: 'Ankara', color: '#fb923c',
      bullets: [
        'Hastane donanım ve yazılım altyapı izleme süreçlerinde hata tespit süresini %50 hızlandırdım.',
        'Kritik sistem hatalarına ilk müdahaleyi yaparak operasyonel kesintileri minimuma indirdim.',
      ],
    },
    {
      role: 'Sistem Destek & Backend Developer', company: 'Mamak Belediyesi',
      period: '08/2021 – 01/2024', type: 'Ankara', color: '#fbbf24',
      bullets: [
        'Sistem loglarını ve performansını izleyerek kesintileri sıfıra indirdim ve veri erişim hızını %40 artırdım.',
        'Monolitik yapının modern Microservices mimarisine taşınma süreçlerinde teknik destek sağladım.',
      ],
    },
  ];

  const education = [
    { school: 'Sinop Üniversitesi',           dept: 'Bilgisayar Mühendisliği (Uzaktan)',         period: '2025 – Devam Ediyor', status: 'Devam Ediyor', color: '#f59e0b' },
    { school: 'Atatürk Üniversitesi',          dept: 'Bilgisayar Programcılığı (Önlisans)',        period: '2022 – 2025',         status: 'Mezun',        color: '#fb923c' },
    { school: 'Sağlık Bilimleri Üniversitesi', dept: 'Sağlık Kurumları İşletmeciliği (Önlisans)', period: '2019 – 2021',         status: 'Mezun',        color: '#fbbf24' },
  ];

  const tabs = ['skills', 'experience', 'education'];
  const tabLabels = { skills: 'Yetenekler', experience: 'Deneyim', education: 'Eğitim' };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        .skill-tag  { transition:transform .2s; cursor:default; }
        .skill-tag:hover  { transform:translateY(-2px); }
        .exp-card   { transition:border-color .3s,background .3s; }
        .exp-card:hover   { background:rgba(13,27,53,0.8)!important; }
        .tab-btn    { transition:all .2s ease; cursor:pointer; font-family:'DM Sans',sans-serif; }
        .tab-btn:hover    { color:#f59e0b!important; }

        .skills-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        @media(max-width:640px) {
          .skills-grid  { grid-template-columns:1fr!important; }
          .skill-row    { flex-direction:column!important; gap:10px!important; }
          .skill-divider{ display:none!important; }
          .skill-label  { width:auto!important; }
          .about-section{ padding:100px 16px 110px!important; }
          .tab-row      { gap:6px!important; }
          .tab-btn      { padding:8px 12px!important; font-size:.78rem!important; }
          .exp-header   { flex-direction:column!important; }
          .exp-meta     { text-align:left!important; }
          .edu-card     { flex-wrap:wrap!important; }
          .edu-meta     { text-align:left!important; }
          .cert-row     { flex-direction:column!important; }
        }
      `}</style>

      <section id="about" className="about-section" style={{
        background: '#12100a',
        color: '#f1f5f9', padding: '110px 24px 120px',
        fontFamily: "'DM Sans',sans-serif",
        clipPath: 'polygon(0 0, 100% 60px, 100% 100%, 0 calc(100% - 60px))',
        marginBottom: '-60px', marginTop: '-1px',
        position: 'relative', zIndex: 1,
      }}>
        {/* Dot grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `radial-gradient(rgba(245,158,11,0.12) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: 350, height: 350, background: 'radial-gradient(circle,rgba(245,158,11,.08) 0%,transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ display: 'inline-block', fontFamily: "'Space Mono',monospace", fontSize: '.73rem', color: '#f59e0b', letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 12 }}>
              
            </span>
            <h2 style={{ fontFamily: "'Space Mono',monospace", fontSize: 'clamp(1.7rem,4vw,2.8rem)', fontWeight: 700, color: '#f1f5f9', marginBottom: 18 }}>
              Hakkımda <span style={{ color: '#f59e0b' }}></span>
            </h2>
            <p style={{ color: '#a89278', fontSize: '1rem', maxWidth: 580, margin: '0 auto', lineHeight: 1.8 }}>
              5 yılı aşkın sistem altyapı ve operasyonel deneyimimi modern yazılım mimarileriyle birleştiren bir Full Stack Developer'ım.
              Teknik ekipler ile son kullanıcı arasında köprü kurarak operasyonel süreçleri hızlandırırım.
            </p>
          </div>

          {/* Tabs */}
          <div className="tab-row" style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 44, flexWrap: 'wrap' }}>
            {tabs.map(tab => (
              <button key={tab} className="tab-btn" onClick={() => setActiveTab(tab)} style={{
                padding: '10px 24px', border: '1px solid',
                borderColor: activeTab === tab ? '#f59e0b' : 'rgba(245,158,11,.2)',
                background:  activeTab === tab ? '#f59e0b' : 'transparent',
                color:       activeTab === tab ? '#0d1b35' : '#a89278',
                fontWeight: 700, fontSize: '.88rem',
              }}>{tabLabels[tab]}</button>
            ))}
          </div>

          {/* ── SKILLS ── */}
          {activeTab === 'skills' && (
            <div style={{ animation: 'fadeUp .4s ease' }}>
              <div
                className="skills-grid"
                style={{ animation: 'fadeUp .4s ease' }}
                onMouseLeave={e => {
                  e.currentTarget.querySelectorAll('.skill-card').forEach(c => {
                    c.style.opacity = '1';
                    c.style.transform = 'scale(1)';
                  });
                }}
              >
                {skillGroups.map((g, i) => (
                  <div
                    key={i}
                    className="skill-card"
                    onMouseEnter={e => {
                      const parent = e.currentTarget.closest('.skills-grid');
                      parent.querySelectorAll('.skill-card').forEach(c => {
                        if (c !== e.currentTarget) {
                          c.style.opacity = '0.4';
                          c.style.transform = 'scale(0.97)';
                        } else {
                          c.style.opacity = '1';
                          c.style.transform = 'scale(1.02)';
                          c.style.boxShadow = `0 8px 32px ${g.color}25`;
                        }
                      });
                    }}
                    style={{
                      padding: '22px 20px',
                      background: 'rgba(13,27,53,.5)',
                      border: '1px solid rgba(245,158,11,.15)',
                      borderTop: `3px solid ${g.color}`,
                      transition: 'opacity .25s ease, transform .25s ease, box-shadow .25s ease, border-color .25s ease',
                      cursor: 'default',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
                      <span style={{ fontSize: '1.15rem' }}>{g.icon}</span>
                      <h3 style={{ color: g.color, fontWeight: 700, fontSize: '.8rem', letterSpacing: '.04em', lineHeight: 1.3 }}>
                        {g.category}
                      </h3>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                      {g.skills.map((s, j) => (
                        <span key={j} style={{
                          padding: '5px 11px', fontSize: '.75rem', fontWeight: 600,
                          color: g.color, background: `${g.color}14`, border: `1px solid ${g.color}40`,
                        }}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certs — full width below grid */}
              <div style={{
                marginTop: 14, padding: 22,
                background: 'rgba(13,27,53,.5)',
                border: '1px solid rgba(245,158,11,.2)',
                borderTop: '3px solid #f59e0b',
                display: 'flex', alignItems: 'flex-start', gap: 20,
              }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>🏆</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#f59e0b', fontWeight: 700, fontSize: '.76rem', marginBottom: 14, letterSpacing: '.1em', textTransform: 'uppercase' }}>Sertifikalar & Dil</div>
                  <div className="cert-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {[
                      ['Java Programlama', 'BTK Akademi', '#f59e0b'],
                      ['İleri Seviye Java', 'BTK Akademi', '#fb923c'],
                      ['Python', 'BTK Akademi', '#fbbf24'],
                      ['İngilizce', 'B1 Seviyesi', '#f97316'],
                    ].map(([name, inst, color]) => (
                      <div key={name} style={{ padding: '8px 16px', background: `${color}12`, border: `1px solid ${color}40`, borderTop: `2px solid ${color}` }}>
                        <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '.84rem' }}>{name}</div>
                        <div style={{ color: '#a89278', fontSize: '.72rem', marginTop: 2 }}>{inst}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── EXPERIENCE ── */}
          {activeTab === 'experience' && (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: 14, animation: 'fadeUp .4s ease' }}
              onMouseLeave={e => {
                e.currentTarget.querySelectorAll('.exp-card').forEach(c => {
                  c.style.opacity = '1';
                  c.style.transform = 'scale(1)';
                  c.style.boxShadow = 'none';
                });
              }}
            >
              {experience.map((exp, i) => (
                <div key={i} className="exp-card" style={{ padding: '24px 22px', background: 'rgba(13,27,53,.4)', border: '1px solid rgba(245,158,11,.15)', borderLeft: `3px solid ${exp.color}`, transition: 'opacity .25s ease, transform .25s ease, box-shadow .25s ease' }}
                  onMouseEnter={e => {
                    const parent = e.currentTarget.closest('[style]');
                    parent.querySelectorAll('.exp-card').forEach(c => {
                      if (c !== e.currentTarget) {
                        c.style.opacity = '0.4';
                        c.style.transform = 'scale(0.98)';
                      } else {
                        c.style.opacity = '1';
                        c.style.transform = 'scale(1.01)';
                        c.style.boxShadow = `0 8px 32px ${exp.color}20`;
                      }
                    });
                  }}
                >
                  <div className="exp-header" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                    <div>
                      <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '.97rem', marginBottom: 4 }}>{exp.role}</h3>
                      <span style={{ color: exp.color, fontWeight: 700, fontSize: '.86rem' }}>{exp.company}</span>
                    </div>
                    <div className="exp-meta" style={{ textAlign: 'right' }}>
                      <div style={{ color: '#a89278', fontSize: '.78rem', fontFamily: "'Space Mono',monospace" }}>{exp.period}</div>
                      <span style={{ display: 'inline-block', marginTop: 5, padding: '2px 10px', background: `${exp.color}22`, color: exp.color, fontSize: '.7rem', fontWeight: 700, border: `1px solid ${exp.color}50` }}>{exp.type}</span>
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, color: '#c4b49a', fontSize: '.86rem', lineHeight: 1.65 }}>
                        <span style={{ color: exp.color, flexShrink: 0 }}>▸</span>{b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* ── EDUCATION ── */}
          {activeTab === 'education' && (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: 12, animation: 'fadeUp .4s ease' }}
              onMouseLeave={e => {
                e.currentTarget.querySelectorAll('.edu-card').forEach(c => {
                  c.style.opacity = '1';
                  c.style.transform = 'scale(1)';
                  c.style.boxShadow = 'none';
                });
              }}
            >
              {education.map((edu, i) => (
                <div key={i} className="edu-card" style={{ padding: '20px 22px', background: 'rgba(13,27,53,.4)', border: '1px solid rgba(245,158,11,.15)', borderLeft: `3px solid ${edu.color}`, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', transition: 'opacity .25s ease, transform .25s ease, box-shadow .25s ease' }}
                  onMouseEnter={e => {
                    const parent = e.currentTarget.closest('[style]');
                    parent.querySelectorAll('.edu-card').forEach(c => {
                      if (c !== e.currentTarget) {
                        c.style.opacity = '0.4';
                        c.style.transform = 'scale(0.98)';
                      } else {
                        c.style.opacity = '1';
                        c.style.transform = 'scale(1.01)';
                        c.style.boxShadow = `0 8px 32px ${edu.color}20`;
                      }
                    });
                  }}
                >
                  <div style={{ width: 44, height: 44, flexShrink: 0, background: `${edu.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>🎓</div>
                  <div style={{ flex: 1, minWidth: 160 }}>
                    <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '.93rem' }}>{edu.school}</h3>
                    <p style={{ color: '#a89278', fontSize: '.83rem', marginTop: 3 }}>{edu.dept}</p>
                  </div>
                  <div className="edu-meta" style={{ textAlign: 'right' }}>
                    <div style={{ color: '#a89278', fontSize: '.76rem', fontFamily: "'Space Mono',monospace" }}>{edu.period}</div>
                    <span style={{ display: 'inline-block', marginTop: 5, padding: '2px 10px', background: `${edu.color}22`, color: edu.color, fontSize: '.7rem', fontWeight: 700 }}>{edu.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default About;