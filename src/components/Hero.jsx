import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  const titles = ['Software Developer', 'Backend Engineer', 'AI Entegrasyon Uzmanı', 'Support Specialist'];

  useEffect(() => {
    const current = titles[titleIdx];
    let timeout;
    if (typing) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        setTitleIdx((titleIdx + 1) % titles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, typing, titleIdx]);

  const stats = [
    { value: '5+',  label: 'Yıl Deneyim'          },
    { value: '21+',  label: 'Tamamlanan Proje'       },
    { value: '%70', label: 'AI ile Verimlilik Artışı' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes pulseGreen {
          0%,100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
          50%     { box-shadow: 0 0 0 8px rgba(52,211,153,0);  }
        }
        @keyframes gridFlow {
          from { background-position: 0 0;       }
          to   { background-position: 40px 40px; }
        }
        @keyframes spinRing {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50%     { opacity: 0; }
        }

        .h-anim1 { animation: fadeUp 0.6s 0.1s ease both; }
        .h-anim2 { animation: fadeUp 0.6s 0.2s ease both; }
        .h-anim3 { animation: fadeUp 0.6s 0.35s ease both; }
        .h-anim4 { animation: fadeUp 0.6s 0.5s ease both; }
        .h-anim5 { animation: fadeUp 0.6s 0.65s ease both; }
        .h-anim6 { animation: fadeUp 0.6s 0.8s ease both; }

        .btn-cta-primary  { transition: opacity 0.2s, transform 0.2s; }
        .btn-cta-primary:hover  { opacity: 0.85; transform: translateY(-2px); }
        .btn-cta-outline  { transition: background 0.2s, transform 0.2s; }
        .btn-cta-outline:hover  { background: rgba(56,189,248,0.14) !important; transform: translateY(-2px); }
        .stat-pill:hover  { transform: translateY(-3px); transition: transform 0.25s ease; }

        /* Responsive: stack columns on small screens */
        @media (max-width: 768px) {
          .hero-inner   { flex-direction: column-reverse !important; text-align: center; }
          .hero-left    { align-items: center !important; }
          .hero-buttons { justify-content: center !important; }
          .hero-stats   { justify-content: center !important; }
          .hero-badge   { margin: 0 auto 28px !important; }
        }
      `}</style>

      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: '#060d1a',
          fontFamily: "'DM Sans', sans-serif",
          padding: '100px 32px 60px',
        }}
      >
        {/* Subtle grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridFlow 10s linear infinite',
        }} />

        {/* Glow blobs */}
        <div style={{
          position: 'absolute', top: '10%', left: '5%',
          width: 480, height: 480,
          background: 'radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(48px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%',
          width: 360, height: 360,
          background: 'radial-gradient(circle, rgba(16,185,129,0.09) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(48px)', pointerEvents: 'none',
        }} />

        {/* Content row */}
        <div className="hero-inner" style={{
          position: 'relative', zIndex: 1,
          maxWidth: 1100, width: '100%',
          display: 'flex', alignItems: 'center',
          gap: 72, flexWrap: 'wrap', justifyContent: 'center',
        }}>

          {/* ── LEFT: text ── */}
          <div className="hero-left" style={{ flex: '1 1 400px', minWidth: 280, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

            {/* Status badge */}
            <div className="h-anim1 hero-badge" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 999,
              border: '1px solid rgba(56,189,248,0.25)',
              background: 'rgba(56,189,248,0.07)',
              marginBottom: 28,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#34d399',
                display: 'inline-block',
                animation: 'pulseGreen 2s infinite',
              }} />
              <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                Ankara, Türkiye — İş Arayışında
              </span>
            </div>

            {/* Name */}
            <h1 className="h-anim2" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 700, lineHeight: 1.1,
              color: '#f1f5f9', marginBottom: 14,
            }}>
              Murat{' '}
              <span style={{
                background: 'linear-gradient(135deg, #38bdf8, #34d399)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                SİNMEZ
              </span>
            </h1>

            {/* Typewriter */}
            <div className="h-anim3" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
              color: '#38bdf8', minHeight: '2em', marginBottom: 20,
            }}>
              {displayText}
              <span style={{
                display: 'inline-block', width: 2, height: '1.1em',
                background: '#38bdf8', marginLeft: 3, verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            </div>

            {/* Description */}
            <p className="h-anim4" style={{
              fontSize: '1rem', color: '#94a3b8', lineHeight: 1.8,
              marginBottom: 36, maxWidth: 460,
            }}>
              5+ yıllık deneyimle karmaşık sistem hatalarını yapay zeka araçlarıyla çözen,
              Java/Spring Boot ve Python/FastAPI ile üretim kalitesinde sistemler geliştiren bir mühendis.
            </p>

            {/* CTA Buttons */}
            <div className="h-anim5 hero-buttons" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 44 }}>
              <a href="#projects" className="btn-cta-primary" style={{
                padding: '13px 28px', borderRadius: 10,
                background: 'linear-gradient(135deg, #0ea5e9, #10b981)',
                color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(14,165,233,0.28)',
              }}>
                Projelerimi Gör →
              </a>
              <a href="#contact" className="btn-cta-outline" style={{
                padding: '13px 28px', borderRadius: 10,
                background: 'rgba(56,189,248,0.06)',
                border: '1px solid rgba(56,189,248,0.28)',
                color: '#38bdf8', fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none',
              }}>
                İletişime Geç
              </a>
            </div>

            {/* Stats */}
            <div className="h-anim6 hero-stats" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              {stats.map((s, i) => (
                <div key={i} className="stat-pill" style={{
                  padding: '14px 20px', borderRadius: 12,
                  background: 'rgba(15,23,42,0.85)',
                  border: '1px solid rgba(56,189,248,0.12)',
                  textAlign: 'center', transition: 'transform 0.25s ease',
                }}>
                  <div style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '1.6rem', fontWeight: 700,
                    background: 'linear-gradient(135deg, #38bdf8, #34d399)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>{s.value}</div>
                  <div style={{ color: '#64748b', fontSize: '0.72rem', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: photo ── */}
          <div className="h-anim2" style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 290, height: 290 }}>

              {/* Spinning gradient ring */}
              <div style={{
                position: 'absolute', inset: -4,
                borderRadius: '50%',
                background: 'conic-gradient(#38bdf8, #34d399, #38bdf8)',
                animation: 'spinRing 5s linear infinite',
                zIndex: 0,
              }} />

              {/* Dark gap between ring and photo */}
              <div style={{
                position: 'absolute', inset: 3,
                borderRadius: '50%',
                background: '#060d1a',
                zIndex: 1,
              }} />

              {/* Profile photo */}
              <img
                src="/assets/murat.jpg"
                alt="Murat SİNMEZ"
                style={{
                  position: 'absolute', inset: 8,
                  width: 'calc(100% - 16px)', height: 'calc(100% - 16px)',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  zIndex: 2,
                  display: 'block',
                }}
              />

              {/* AVAILABLE badge */}
              <div style={{
                position: 'absolute', bottom: 10, right: -12, zIndex: 3,
                padding: '8px 14px', borderRadius: 10,
                background: 'rgba(6,13,26,0.96)',
                border: '1px solid rgba(52,211,153,0.35)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <span style={{ fontSize: '1rem' }}>☕</span>
                <div>
                  <div style={{
                    color: '#34d399', fontSize: '0.68rem', fontWeight: 700,
                    fontFamily: "'Space Mono', monospace", letterSpacing: '0.08em',
                  }}>AVAILABLE</div>
                  <div style={{ color: '#64748b', fontSize: '0.62rem' }}>İş Arayışında</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
