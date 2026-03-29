import React, { useState } from 'react';

const Badge = ({ text, color }) => (
  <span style={{ padding:'4px 10px', fontSize:'.72rem', fontWeight:700, color, background:`${color}18`, border:`1px solid ${color}40`, fontFamily:"'Space Mono',monospace" }}>{text}</span>
);

const ProjectCard = ({ title, subtitle, description, tags, metrics, link, color, icon, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding:24,
        background: hovered ? 'rgba(20,36,62,.95)' : 'rgba(13,27,53,.6)',
        border:`1px solid ${hovered ? color : 'rgba(245,158,11,.15)'}`,
        borderTop: `3px solid ${color}`,
        transition:'all .3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? `0 16px 40px rgba(0,0,0,.4), 0 0 0 1px ${color}30` : 'none',
        display:'flex', flexDirection:'column', gap:14,
        animation:`fadeUp .5s ${index*.08}s ease both`,
      }}
    >
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12 }}>
          <div style={{
            width:46, height:46, flexShrink:0,
            background:`${color}18`, border:`1px solid ${color}40`,
            display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.35rem',
            transition:'transform .3s', transform: hovered ? 'scale(1.12)' : 'none',
          }}>{icon}</div>
          <div>
            <h3 style={{ color:'#f1f5f9', fontWeight:700, fontSize:'.97rem', lineHeight:1.3, fontFamily:"'DM Sans',sans-serif" }}>{title}</h3>
            {subtitle && <span style={{ fontSize:'.7rem', color, fontWeight:700, fontFamily:"'Space Mono',monospace", letterSpacing:'.05em', textTransform:'uppercase' }}>{subtitle}</span>}
          </div>
        </div>
        {link && link !== '#' && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ color:'#8899b0', transition:'color .2s' }}
            onMouseEnter={e => e.target.style.color = color}
            onMouseLeave={e => e.target.style.color = '#8899b0'}
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
            <div key={i} style={{ padding:'4px 12px', background:`${color}18`, border:`1px solid ${color}40`, fontSize:'.75rem', color, fontWeight:700, fontFamily:"'Space Mono',monospace" }}>{m}</div>
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
        <ul style={{ listStyleType:'disc', paddingLeft:'1.1rem', display:'flex', flexDirection:'column', gap:6 }}>
          <li><strong style={{color:'#fbbf24'}}>Yapay Zeka Veri Hattı:</strong> UYAP evraklarını OCR ve NLP ile saniyeler içinde otonom ayrıştıran sistem.</li>
          <li><strong style={{color:'#fbbf24'}}>Modern Frontend:</strong> React.js ve Tailwind ile SPA mimarisi, milisaniye hızında tepki veren UI/UX.</li>
          <li><strong style={{color:'#fbbf24'}}>Finans Motoru:</strong> Python async mimarisi üzerine kurulu Server-Side Validation destekli faiz/kapak hesabı motoru.</li>
          <li><strong style={{color:'#fbbf24'}}>Zero-Trust Güvenlik:</strong> Supabase RLS ve JWT ile banka standartlarında Multi-Tenant veri izolasyonu.</li>
        </ul>
      ),
      icon:'⚖️', color:'#f59e0b',
      tags:['React','Python','Supabase','PostgreSQL','NLP','OCR','RLS'],
      metrics:['Production Level','Amiral Gemisi Proje'], link:'#',
    },
    {
      title:'Kod Adı; Çorba Plus', subtitle:'E-İmza Otomasyon & Çoklayıcı Mimarisi',
      description:(
        <ul style={{ listStyleType:'disc', paddingLeft:'1.1rem', display:'flex', flexDirection:'column', gap:6 }}>
          <li><strong style={{color:'#fb923c'}}>Otonom Çoklu İmza Motoru:</strong> Yüzlerce evrakı tek PIN onayıyla imzalayan batch-processing altyapısı.</li>
          <li><strong style={{color:'#fb923c'}}>Donanım Entegrasyonu:</strong> PKCS#11 kriptografi standartlarına uyumlu USB e-imza akıllı kart entegrasyonu.</li>
          <li><strong style={{color:'#fb923c'}}>Hibrit Mimari:</strong> WebSocket üzerinden gerçek zamanlı işlem durumu aktaran web-masaüstü köprüsü.</li>
          <li><strong style={{color:'#fb923c'}}>Hata Toleranslı:</strong> Ağ kesintilerinde self-healing kuyruk yönetimi.</li>
        </ul>
      ),
      icon:'✍️', color:'#fb923c',
      tags:['Python','Cryptography','PKCS#11','WebSocket','E-İmza','Automation'],
      metrics:['Production Level','Manuel Yükü %90 Azaltır'], link:'#',
    },
    {
      title:'AI Destekli CV Analiz Servisi', subtitle:'Personal Project / Portfolio',
      description:'OpenAI API kullanarak işe alım süreçlerindeki manuel CV analiz süresini otomasyonla büyük ölçüde hızlandıran bir backend servisi.',
      icon:'🤖', color:'#fbbf24',
      tags:['Python','OpenAI API','FastAPI','LLM','Prompt Engineering'],
      metrics:['%70 daha hızlı analiz'], link:'#',
    },
    {
      title:'Dinamik Kurye & Saha Yönetim Sistemi', subtitle:'Production Level / Case Study',
      description:'İşveren ve kurye eşleşmesindeki hataları minimize eden OTP tabanlı doğrulama ve backend mimarisi.',
      icon:'🚚', color:'#f97316',
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
      icon:'🏥', color:'#f59e0b',
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
        .gh-btn:hover { border-color:#f59e0b!important; color:#f59e0b!important; background:rgba(245,158,11,.08)!important; }
        .projects-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        @media(max-width:700px){
          .projects-grid   { grid-template-columns:1fr!important; }
          .projects-section{ padding:100px 16px 110px!important; }
        }
      `}</style>

      <section id="projects" className="projects-section" style={{
        background:'#0d1b35',
        color:'#f1f5f9', padding:'110px 24px 120px',
        fontFamily:"'DM Sans',sans-serif",
        clipPath:'polygon(0 60px, 100% 0, 100% calc(100% - 60px), 0 100%)',
        marginBottom:'-60px', marginTop:'-1px',
        position:'relative', zIndex:2,
      }}>
        {/* amber grid subtle */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:`radial-gradient(rgba(245,158,11,0.12) 1px, transparent 1px)`, backgroundSize:'28px 28px' }} />
        <div style={{ position:'absolute', bottom:'10%', left:'5%', width:360, height:360, background:'radial-gradient(circle,rgba(245,158,11,.08) 0%,transparent 70%)', borderRadius:'50%', filter:'blur(50px)', pointerEvents:'none' }} />

        <div style={{ maxWidth:980, margin:'0 auto', position:'relative', zIndex:1 }}>
          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span style={{ display:'inline-block', fontFamily:"'Space Mono',monospace", fontSize:'.73rem', color:'#f59e0b', letterSpacing:'.16em', textTransform:'uppercase', marginBottom:12 }}>
              
            </span>
            <h2 style={{ fontFamily:"'Space Mono',monospace", fontSize:'clamp(1.7rem,4vw,2.8rem)', fontWeight:700, color:'#f1f5f9', marginBottom:16 }}>
              Projelerim <span style={{ color:'#f59e0b' }}></span>
            </h2>
            <p style={{ color:'#8899b0', fontSize:'.97rem', maxWidth:480, margin:'0 auto' }}>
              Gerçek üretim ortamlarında geliştirdiğim ve katkı sağladığım projeler.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((p,i) => <ProjectCard key={i} {...p} index={i} />)}
          </div>

          <div style={{ textAlign:'center', marginTop:48 }}>
            <a href="https://github.com/muratsinmez" target="_blank" rel="noopener noreferrer" className="gh-btn" style={{
              display:'inline-flex', alignItems:'center', gap:10,
              padding:'12px 28px',
              border:'2px solid rgba(245,158,11,.3)',
              background:'transparent',
              color:'#8899b0', fontSize:'.91rem', fontWeight:600, textDecoration:'none',
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
