import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skillGroups = [
    {
      category: 'Programming & Backend',
      color: '#38bdf8', icon: '⚙️',
      skills: ['Java 17+', 'Spring Boot 3', 'Python', 'FastAPI', 'RESTful API', 'Microservices', 'React'],
    },
    {
      category: 'AI & Automation',
      color: '#34d399', icon: '🤖',
      skills: ['OpenAI API', 'Prompt Engineering', 'LLM Implementation', 'AI Integration'],
    },
    {
      category: 'Database & Tools',
      color: '#a78bfa', icon: '🗄️',
      skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Git', 'Linux', 'Windows Server'],
    },
    {
      category: 'Support & Ops',
      color: '#fb923c', icon: '🛠️',
      skills: ['Troubleshooting', 'System Performance Monitoring', 'IT Infrastructure', 'L2/L3 Support'],
    },
  ];

  const experience = [
    {
      role: 'Yazılım Lideri & Uygulama Destek Sorumlusu',
      company: 'Hukukmatik Yazılım',
      period: '02/2026 – Günümüz',
      type: 'Uzaktan',
      color: '#38bdf8',
      bullets: [
        'Bulut tabanlı SaaS CRM sisteminde kullanıcı entegrasyonlarını yönetiyor ve teknik hata bildirimlerini Python/React altyapısında çözümlüyorum.',
        'Multi-tenant mimari üzerinde Supabase (PostgreSQL) ile veritabanı yönetimi ve güvenli kimlik doğrulama süreçlerini yürütüyorum.',
      ],
    },
    {
      role: 'IT & Yazılım Destek Uzmanı',
      company: 'Akay Lokman Hekim Hastanesi',
      period: '01/2024 – 03/2025',
      type: 'Ankara',
      color: '#34d399',
      bullets: [
        'Hastane donanım ve yazılım altyapı izleme süreçlerinde hata tespit süresini %50 hızlandırdım.',
        'Kritik sistem hatalarına ilk müdahaleyi yaparak operasyonel kesintileri minimuma indirdim.',
      ],
    },
    {
      role: 'Sistem Destek & Backend Developer',
      company: 'Mamak Belediyesi',
      period: '08/2021 – 01/2024',
      type: 'Ankara',
      color: '#a78bfa',
      bullets: [
        'Sistem loglarını ve performansını izleyerek kesintileri sıfıra indirdim ve veri erişim hızını %40 artırdım.',
        'Monolitik yapının modern Microservices mimarisine taşınma süreçlerinde teknik destek sağladım.',
      ],
    },
  ];

  const education = [
    { school: 'Sinop Üniversitesi',           dept: 'Bilgisayar Mühendisliği (Uzaktan)',          period: '2025 – Devam Ediyor', status: 'Devam Ediyor', color: '#38bdf8' },
    { school: 'Atatürk Üniversitesi',          dept: 'Bilgisayar Programcılığı (Önlisans)',         period: '2022 – 2025',         status: 'Mezun',        color: '#34d399' },
    { school: 'Sağlık Bilimleri Üniversitesi', dept: 'Sağlık Kurumları İşletmeciliği (Önlisans)', period: '2019 – 2021',         status: 'Mezun',        color: '#a78bfa' },
  ];

  const tabs = ['skills', 'experience', 'education'];
  const tabLabels = { skills: 'Yetenekler', experience: 'Deneyim', education: 'Eğitim' };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .skill-tag  { transition: transform 0.2s, border-color 0.2s; cursor: default; }
        .skill-tag:hover  { transform: translateY(-2px); }
        .exp-card   { transition: border-color 0.3s, background 0.3s; }
        .exp-card:hover   { border-color: rgba(56,189,248,0.3) !important; background: rgba(15,23,42,0.95) !important; }
        .tab-btn    { transition: all 0.2s ease; cursor: pointer; font-family: 'DM Sans', sans-serif; }
        .tab-btn:hover    { color: #e2e8f0 !important; }
      `}</style>

      <section id="about" style={{
        background: 'linear-gradient(180deg, #060d1a 0%, #0a1628 100%)',
        color: '#f1f5f9', padding: '110px 32px',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{
              display: 'inline-block', fontFamily: "'Space Mono', monospace",
              fontSize: '0.73rem', color: '#38bdf8',
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12,
            }}></span>

            <h2 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700,
              background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: 18,
            }}>Hakkımda</h2>

            <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: 580, margin: '0 auto', lineHeight: 1.8 }}>
              5 yılı aşkın sistem altyapı ve operasyonel deneyimimi modern yazılım mimarileriyle birleştiren bir Full Stack Developer'ım. 
              Kariyerim boyunca teknik mükemmeliyet ile iş hedefleri arasındaki dengeyi kurmaya odaklandım. Hukukmatik gibi kapsamlı CRM sistemlerinde ürün mimarisi ve teknik liderlik süreçlerini yöneterek, 
              karmaşık iş akışlarını temiz kod ve kullanıcı dostu arayüzlerle dijitalleştiriyorum. Problem çözme yeteneğimi hem kod başında hem de sistem mimarisi tarafında kullanarak uçtan uca değer yaratıyorum.
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
            {tabs.map(tab => (
              <button
                key={tab}
                className="tab-btn"
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 26px', borderRadius: 8, border: '1px solid',
                  borderColor: activeTab === tab ? 'rgba(56,189,248,0.5)' : 'rgba(255,255,255,0.07)',
                  background:  activeTab === tab ? 'rgba(56,189,248,0.12)' : 'transparent',
                  color:       activeTab === tab ? '#38bdf8' : '#64748b',
                  fontWeight: 600, fontSize: '0.88rem',
                }}
              >{tabLabels[tab]}</button>
            ))}
          </div>

          {/* ── SKILLS ── */}
          {activeTab === 'skills' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18, animation: 'fadeUp 0.4s ease' }}>
              {skillGroups.map((g, i) => (
                <div key={i} style={{
                  padding: 24, borderRadius: 16,
                  background: 'rgba(15,23,42,0.7)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                    <span style={{ fontSize: '1.2rem' }}>{g.icon}</span>
                    <h3 style={{ color: g.color, fontWeight: 600, fontSize: '0.88rem', letterSpacing: '0.02em' }}>{g.category}</h3>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {g.skills.map((skill, j) => (
                      <span key={j} className="skill-tag" style={{
                        padding: '5px 12px', borderRadius: 6, fontSize: '0.8rem', fontWeight: 500,
                        color: g.color, background: `${g.color}14`, border: `1px solid ${g.color}28`,
                      }}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
              {/* Certificate */}
              <div style={{
                padding: 24, borderRadius: 16,
                background: 'rgba(15,23,42,0.7)',
                border: '1px solid rgba(251,146,60,0.2)',
                display: 'flex', alignItems: 'center', gap: 16,
              }}>
                <span style={{ fontSize: '2rem' }}>🏆</span>
                <div>
                  <div style={{ color: '#fb923c', fontWeight: 700, fontSize: '0.8rem', marginBottom: 4 }}>SERTİFİKA</div>
                  <div style={{ color: '#e2e8f0', fontWeight: 600 }}>Java Programlama</div>
                  <div style={{ color: '#64748b', fontSize: '0.82rem', marginTop: 2 }}>BTK Akademi  </div>
                  <div style={{ color: '#e2e8f0', fontWeight: 600 }}>İleri Seviye Java</div>
                  <div style={{ color: '#64748b', fontSize: '0.82rem', marginTop: 2 }}>BTK Akademi · İngilizce</div>
                  <div style={{ color: '#e2e8f0', fontWeight: 600 }}>Python</div>
                  <div style={{ color: '#64748b', fontSize: '0.82rem', marginTop: 2 }}>BTK Akademi </div>
                </div>
              </div>
            </div>
          )}

          {/* ── EXPERIENCE ── */}
          {activeTab === 'experience' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, animation: 'fadeUp 0.4s ease' }}>
              {experience.map((exp, i) => (
                <div key={i} className="exp-card" style={{
                  padding: '26px 28px', borderRadius: 16,
                  background: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: `3px solid ${exp.color}`,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
                    <div>
                      <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{exp.role}</h3>
                      <span style={{ color: exp.color, fontWeight: 600, fontSize: '0.88rem' }}>{exp.company}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: '#64748b', fontSize: '0.8rem', fontFamily: "'Space Mono', monospace" }}>{exp.period}</div>
                      <span style={{
                        display: 'inline-block', marginTop: 6,
                        padding: '2px 10px', borderRadius: 999,
                        background: `${exp.color}18`, color: exp.color,
                        fontSize: '0.72rem', fontWeight: 600,
                      }}>{exp.type}</span>
                    </div>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.65 }}>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, animation: 'fadeUp 0.4s ease' }}>
              {education.map((edu, i) => (
                <div key={i} style={{
                  padding: '22px 26px', borderRadius: 16,
                  background: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: `3px solid ${edu.color}`,
                  display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap',
                }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                    background: `${edu.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem',
                  }}>🎓</div>
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem' }}>{edu.school}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: 3 }}>{edu.dept}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#64748b', fontSize: '0.78rem', fontFamily: "'Space Mono', monospace" }}>{edu.period}</div>
                    <span style={{
                      display: 'inline-block', marginTop: 6,
                      padding: '2px 10px', borderRadius: 999,
                      background: `${edu.color}18`, color: edu.color,
                      fontSize: '0.72rem', fontWeight: 600,
                    }}>{edu.status}</span>
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
