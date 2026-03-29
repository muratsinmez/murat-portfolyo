import React, { useState } from 'react';

const Badge = ({ text, color }) => (
  <span style={{
    padding:'4px 10px', borderRadius:6, fontSize:'.72rem', fontWeight:600,
    color, background:`${color}18`, border:`1px solid ${color}28`,
    fontFamily:"'Space Mono',monospace",
  }}>{text}</span>
);

const ProjectCard = ({ title, subtitle, description, tags, metrics, link, color, icon, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding:24, borderRadius:18,
        background: hovered ? 'rgba(15,23,42,.97)' : 'rgba(15,23,42,.7)',
        border:`1px solid ${hovered ? color+'45' : 'rgba(255,255,255,.07)'}`,
        transition:'all .32s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 20px 40px ${color}18` : 'none',
        display:'flex', flexDirection:'column', gap:14,
        animation:`fadeUp .5s ${index*.08}s ease both`,
      }}
    >
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{
            width:46, height:46, borderRadius:12, flexShrink:0,
            background:`${color}18`, border:`1px solid ${color}28`,
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'1.35rem',
            transition:'transform .3s ease',
            transform: hovered ? 'rotate(-6deg) scale(1.1)' : 'none',
          }}>{icon}</div>
          <div>
            <h3 style={{ color:'#f1f5f9', fontWeight:700, fontSize:'.97rem', lineHeight:1.3, fontFamily:"'DM Sans',sans-serif" }}>{title}</h3>
            {subtitle && <span style={{ fontSize:'.7rem', color, fontWeight:600, fontFamily:"'Space Mono',monospace", letterSpacing:'.03em' }}>{subtitle}</span>}
          </div>
        </div>
        {link && link !== '#' && (
          <a href={link} target="_blank" rel="noopener noreferrer"
            style={{ color:'#64748b', flexShrink:0, transition:'color .2s' }}
            onMouseEnter={e => e.target.style.color = color}
            onMouseLeave={e => e.target.style.color = '#64748b'}
          >
            <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        )}
      </div>

      <div style={{ color:'#94a3b8', fontSize:'.86rem', lineHeight:1.72 }}>{description}</div>

      {metrics && (
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {metrics.map((m,i) => (
            <div key={i} style={{ padding:'4px 12px', borderRadius:8, background:`${color}12`, border:`1px solid ${color}25`, fontSize:'.75rem', color, fontWeight:700, fontFamily:"'Space Mono',monospace" }}>{m}</div>
          ))}
        </div>
      )}

      <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginTop:'auto' }}>
        {tags.map((tag,i) => <Badge key={i} text={tag} color={color} />)}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title:'Hukukmatik CRM', subtitle:'Yazılım Lideri / Multi-Tenant SaaS',
      description:(
        <ul style={{ listStyleType:'disc', paddingLeft:'1.1rem', display:'flex', flexDirection:'column', gap:7 }}>
          <li><strong>Yapay Zeka Veri Hattı:</strong> UYAP evraklarını OCR ve NLP ile saniyeler içinde otonom ayrıştıran sistem.</li>
          <li><strong>Modern Frontend:</strong> React.js ve Tailwind ile SPA mimarisi, milisaniye hızında tepki veren UI/UX.</li>
          <li><strong>Finans Motoru:</strong> Python async mimarisi üzerine kurulu, Server-Side Validation destekli faiz/kapak hesabı motoru.</li>
          <li><strong>Zero-Trust Güvenlik:</strong> Supabase RLS ve JWT ile banka standartlarında Multi-Tenant veri izolasyonu.</li>
        </ul>
      ),
      icon:'⚖️', color:'#38bdf8',
      tags:['React','Python','Supabase','PostgreSQL','NLP','OCR','RLS'],
      metrics:['Production Level','Amiral Gemisi Proje'], link:'#',
    },
    {
      title:'Çorba Plus', subtitle:'E-İmza Otomasyon & Çoklayıcı Mimarisi',
      description:(
        <ul style={{ listStyleType:'disc', paddingLeft:'1.1rem', display:'flex', flexDirection:'column', gap:7 }}>
          <li><strong>Otonom Çoklu İmza Motoru:</strong> Yüzlerce evrakı tek PIN onayıyla imzalayan batch-processing altyapısı.</li>
          <li><strong>Donanım Entegrasyonu:</strong> PKCS#11 kriptografi standartlarına tam uyumlu USB e-imza akıllı kart entegrasyonu.</li>
          <li><strong>Hibrit Mimari:</strong> WebSocket üzerinden gerçek zamanlı işlem durumu aktaran web-masaüstü köprüsü.</li>
          <li><strong>Hata Toleranslı:</strong> Ağ kesintilerinde veri kaybını önleyen self-healing kuyruk yönetimi.</li>
        </ul>
      ),
      icon:'✍️', color:'#f43f5e',
      tags:['Python','Cryptography','PKCS#11','WebSocket','E-İmza','Automation'],
      metrics:['Production Level','Manuel Yükü %90 Azaltır'], link:'#',
    },
    {
      title:'AI Destekli CV Analiz Servisi', subtitle:'Personal Project / Portfolio',
      description:'OpenAI API kullanarak işe alım süreçlerindeki manuel CV analiz süresini otomasyonla büyük ölçüde hızlandıran bir backend servisi.',
      icon:'🤖', color:'#34d399',
      tags:['Python','OpenAI API','FastAPI','LLM','Prompt Engineering'],
      metrics:['%70 daha hızlı analiz'], link:'#',
    },
    {
      title:'Dinamik Kurye & Saha Yönetim Sistemi', subtitle:'Production Level / Case Study',
      description:'İşveren ve kurye eşleşmesindeki hataları minimize eden OTP tabanlı doğrulama ve backend mimarisi.',
      icon:'🚚', color:'#a78bfa',
      tags:['Java','Spring Boot','OTP','REST API','MySQL'],
      metrics:['%90 hata engelleme'], link:'#',
    },
    {
      title:'Personel Takip Uygulaması', subtitle:'Production Level / Case Study',
      description:'Spring Security ve JWT ile güvenli kimlik doğrulama altyapısı kurulmuş, rol bazlı yetkilendirme yöneten kurumsal REST API.',
      icon:'👥', color:'#fb923c',
      tags:['Java 17+','Spring Boot 3','Spring Security','JWT','REST API','PostgreSQL'],
      metrics:['Kurumsal Düzey','Role-Based Auth'], link:'#',
    },
    {
      title:'Hastane Yönetim Sistemi', subtitle:'Spring Boot Application / Personal Project',
      description:'Modern React + Spring Boot tabanlı hastane yönetim uygulaması. Hasta kayıtları, randevu yönetimi ve doktor atamalarını içeren uçtan uca sistem.',
      icon:'🏥', color:'#b81414',
      tags:['Java 17+','Spring Boot 3','Spring Data JPA','Spring Security','JWT','MySQL'],
      metrics:['Role-Based Auth'], link:'#',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        .gh-btn { transition:all .25s ease; }
        .gh-btn:hover { border-color:rgba(56,189,248,.35)!important; color:#38bdf8!important; }

        /* Grid: 2 col on desktop, 1 col on mobile */
        .projects-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
        @media(max-width:700px){
          .projects-grid { grid-template-columns:1fr!important; }
          .projects-section { padding:80px 16px!important; }
        }
      `}</style>

      <section id="projects" className="projects-section" style={{
        background:'linear-gradient(180deg,#0a1628 0%,#060d1a 100%)',
        color:'#f1f5f9', padding:'110px 24px',
        fontFamily:"'DM Sans',sans-serif",
      }}>
        <div style={{ maxWidth:980, margin:'0 auto' }}>

          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span style={{ display:'inline-block', fontFamily:"'Space Mono',monospace", fontSize:'.73rem', color:'#34d399', letterSpacing:'.16em', textTransform:'uppercase', marginBottom:12 }}>
              // my_projects
            </span>
            <h2 style={{ fontFamily:"'Space Mono',monospace", fontSize:'clamp(1.7rem,4vw,2.8rem)', fontWeight:700, background:'linear-gradient(135deg,#f1f5f9,#94a3b8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:16 }}>
              Projelerim
            </h2>
            <p style={{ color:'#64748b', fontSize:'.97rem', maxWidth:480, margin:'0 auto' }}>
              Gerçek üretim ortamlarında geliştirdiğim ve katkı sağladığım projeler.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((p,i) => <ProjectCard key={i} {...p} index={i} />)}
          </div>

          <div style={{ textAlign:'center', marginTop:48 }}>
            <a href="https://github.com/muratsinmez" target="_blank" rel="noopener noreferrer" className="gh-btn" style={{
              display:'inline-flex', alignItems:'center', gap:10,
              padding:'12px 28px', borderRadius:10,
              border:'1px solid rgba(255,255,255,.1)', background:'rgba(255,255,255,.04)',
              color:'#94a3b8', fontSize:'.91rem', fontWeight:600, textDecoration:'none',
            }}>
              <svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24">
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
