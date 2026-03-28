import React, { useState } from 'react';

const Badge = ({ text, color }) => (
  <span style={{
    padding: '4px 11px', borderRadius: 6, fontSize: '0.74rem', fontWeight: 600,
    color, background: `${color}18`, border: `1px solid ${color}28`,
    fontFamily: "'Space Mono', monospace",
  }}>{text}</span>
);

const ProjectCard = ({ title, subtitle, description, tags, metrics, link, color, icon, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 28, borderRadius: 18,
        background: hovered ? 'rgba(15,23,42,0.97)' : 'rgba(15,23,42,0.7)',
        border: `1px solid ${hovered ? color + '45' : 'rgba(255,255,255,0.07)'}`,
        transition: 'all 0.32s ease',
        transform: hovered ? 'translateY(-5px)' : 'none',
        boxShadow: hovered ? `0 20px 40px ${color}18` : 'none',
        display: 'flex', flexDirection: 'column', gap: 16,
        animation: `fadeUp 0.5s ${index * 0.1}s ease both`,
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
            background: `${color}18`, border: `1px solid ${color}28`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.4rem',
            transition: 'transform 0.3s ease',
            transform: hovered ? 'rotate(-6deg) scale(1.1)' : 'none',
          }}>{icon}</div>
          <div>
            <h3 style={{
              color: '#f1f5f9', fontWeight: 700, fontSize: '1rem', lineHeight: 1.3,
              fontFamily: "'DM Sans', sans-serif",
            }}>{title}</h3>
            {subtitle && (
              <span style={{ fontSize: '0.73rem', color, fontWeight: 600, fontFamily: "'Space Mono', monospace", letterSpacing: '0.03em' }}>
                {subtitle}
              </span>
            )}
          </div>
        </div>
        {link && link !== '#' && (
          <a href={link} target="_blank" rel="noopener noreferrer"
            style={{ color: '#64748b', flexShrink: 0, transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = color}
            onMouseLeave={e => e.target.style.color = '#64748b'}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        )}
      </div>

      {/* Description */}
      <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.72, margin: 0 }}>{description}</p>

      {/* Metrics */}
      {metrics && (
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {metrics.map((m, i) => (
            <div key={i} style={{
              padding: '5px 13px', borderRadius: 8,
              background: `${color}12`, border: `1px solid ${color}25`,
              fontSize: '0.78rem', color, fontWeight: 700,
              fontFamily: "'Space Mono', monospace",
            }}>{m}</div>
          ))}
        </div>
      )}

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {tags.map((tag, i) => <Badge key={i} text={tag} color={color} />)}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Hukukmatik',
      subtitle: 'Multi-Tenant Legal SaaS CRM',
      description: 'Hukuk bürolarının icra takibi, borçlu yönetimi ve finansal operasyonlarını dijitalleştiren bulut tabanlı CRM. Yerel sistemi ölçeklenebilir Multi-Tenant mimarisine taşıdım.',
      icon: '⚖️', color: '#38bdf8',
      tags: ['React', 'Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'Multi-Tenant'],
      metrics: ['Production Level', 'SaaS CRM'],
      link: '#',
    },
    {
      title: 'AI Destekli CV Analiz Servisi',
      subtitle: 'Personal Project / Portfolio',
      description: 'OpenAI API kullanarak işe alım süreçlerindeki manuel CV analiz süresini otomasyonla büyük ölçüde hızlandıran bir backend servisi.',
      icon: '🤖', color: '#34d399',
      tags: ['Python', 'OpenAI API', 'FastAPI', 'LLM', 'Prompt Engineering'],
      metrics: ['%70 daha hızlı analiz'],
      link: '#',
    },
    {
      title: 'Dinamik Kurye & Saha Yönetim Sistemi',
      subtitle: 'Production Level / Case Study',
      description: 'İşveren ve kurye eşleşmesindeki hataları minimize eden OTP tabanlı doğrulama ve backend mimarisi. Gerçek zamanlı saha operasyonlarını destekliyor.',
      icon: '🚚', color: '#a78bfa',
      tags: ['Java', 'Spring Boot', 'OTP', 'REST API', 'MySQL'],
      metrics: ['%90 hata engelleme'],
      link: '#',
    },
    {
      title: 'Personel Takip Uygulaması',
      subtitle: 'Production Level / Case Study',
      description: 'Spring Security ve JWT ile güvenli kimlik doğrulama altyapısı kurulmuş, kullanıcı rollerini ve yetkilendirmeyi yöneten kurumsal düzeyde REST API.',
      icon: '👥', color: '#fb923c',
      tags: ['Java 17+', 'Spring Boot 3', 'Spring Security', 'JWT', 'REST API', 'PostgreSQL'],
      metrics: ['Kurumsal Düzey', 'Role-Based Auth'],
      link: '#',
    },
    {
      title: 'Hastane Yönetim Sistemi',
      subtitle: 'Spring Boot Application / Personal Project',
      description: 'Modern bir React + Spring Boot tabanlı hastane yönetim uygulaması. Hasta kayıtları, randevu yönetimi ve doktor atamalarını içeren uçtan uca bir sistem.',
      icon: '🧑‍💼', color: '#b81414',
      tags: ['Java 17+', 'Spring Boot 3', "Spring Data JPA",'Spring Security', 'JWT', 'REST API', 'MySQL'],
      metrics: ['Role-Based Auth'],
      link: '#',
    },
    
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        .gh-btn { transition: all 0.25s ease; }
        .gh-btn:hover { border-color: rgba(56,189,248,0.35) !important; color: #38bdf8 !important; }
      `}</style>

      <section id="projects" style={{
        background: 'linear-gradient(180deg, #0a1628 0%, #060d1a 100%)',
        color: '#f1f5f9', padding: '110px 32px',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{ maxWidth: 980, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{
              display: 'inline-block', fontFamily: "'Space Mono', monospace",
              fontSize: '0.73rem', color: '#34d399',
              letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 12,
            }}></span>

            <h2 style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700,
              background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: 16,
            }}>Projelerim</h2>

            <p style={{ color: '#64748b', fontSize: '0.98rem', maxWidth: 480, margin: '0 auto' }}>
              Gerçek üretim ortamlarında geliştirdiğim ve katkı sağladığım projeler.
            </p>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: 20,
          }}>
            {projects.map((p, i) => <ProjectCard key={i} {...p} index={i} />)}
          </div>

          {/* GitHub CTA */}
          <div style={{ textAlign: 'center', marginTop: 52 }}>
            <a
              href="https://github.com/muratsinmez"
              target="_blank"
              rel="noopener noreferrer"
              className="gh-btn"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '13px 30px', borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: '#94a3b8', fontSize: '0.93rem', fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub Profilimi Gör
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
