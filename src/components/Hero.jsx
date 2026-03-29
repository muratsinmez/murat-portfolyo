import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [titleIdx, setTitleIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const titles = ['Software Developer', 'Backend Engineer', 'AI Entegrasyon Uzmanı', 'Support Specialist'];

  useEffect(() => {
    const current = titles[titleIdx];
    let t;
    if (typing) {
      if (displayText.length < current.length)
        t = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
      else t = setTimeout(() => setTyping(false), 2000);
    } else {
      if (displayText.length > 0)
        t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      else { setTitleIdx((titleIdx + 1) % titles.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [displayText, typing, titleIdx]);

  const stats = [
    { value:'5+',  label:'Yıl Deneyim'             },
    { value:'21+', label:'Tamamlanan Proje'          },
    { value:'%70', label:'AI ile Verimlilik Artışı'  },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulseAmber{ 0%,100%{box-shadow:0 0 0 0 rgba(245,158,11,.5)} 50%{box-shadow:0 0 0 8px rgba(245,158,11,0)} }
        @keyframes gridFlow { from{background-position:0 0} to{background-position:40px 40px} }
        @keyframes spinRing { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }

        .h1{animation:fadeUp .6s .1s ease both}
        .h2{animation:fadeUp .6s .2s ease both}
        .h3{animation:fadeUp .6s .35s ease both}
        .h4{animation:fadeUp .6s .5s ease both}
        .h5{animation:fadeUp .6s .65s ease both}
        .h6{animation:fadeUp .6s .8s ease both}

        .btn-amber { transition:opacity .2s,transform .2s; }
        .btn-amber:hover { opacity:.85; transform:translateY(-2px); }
        .btn-ghost { transition:background .2s,transform .2s; }
        .btn-ghost:hover { background:rgba(245,158,11,.14)!important; transform:translateY(-2px); }
        .stat-pill:hover { transform:translateY(-3px); transition:transform .25s; }

        .hero-row { display:flex; align-items:center; gap:64px; flex-wrap:wrap; justify-content:center; }
        .hero-left { flex:1 1 400px; min-width:260px; display:flex; flex-direction:column; align-items:flex-start; }
        .hero-photo-wrap { flex:0 0 auto; display:flex; justify-content:center; }
        .hero-photo-size { position:relative; width:290px; height:290px; }

        @media(max-width:640px){
          .hero-row        { flex-direction:column-reverse!important; gap:32px!important; text-align:center; }
          .hero-left       { align-items:center!important; min-width:0!important; flex:none!important; width:100%; }
          .hero-badge      { margin:0 auto 24px!important; }
          .hero-buttons    { justify-content:center!important; }
          .hero-stats      { justify-content:center!important; }
          .hero-photo-size { width:220px!important; height:220px!important; }
        }
      `}</style>

      <section id="home" style={{
        minHeight:'100vh',
        display:'flex', alignItems:'center', justifyContent:'center',
        position:'relative', overflow:'hidden',
        background:'#0d1b35',
        fontFamily:"'DM Sans',sans-serif",
        padding:'100px 24px 120px',
        /* Sharp diagonal cut at bottom */
        clipPath:'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
        marginBottom:'-60px',
      }}>
        {/* Grid bg */}
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          backgroundImage:`linear-gradient(rgba(245,158,11,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(245,158,11,.05) 1px,transparent 1px)`,
          backgroundSize:'40px 40px', animation:'gridFlow 10s linear infinite',
        }} />
        {/* Glow blobs */}
        <div style={{ position:'absolute', top:'10%', left:'5%', width:420, height:420, background:'radial-gradient(circle,rgba(245,158,11,.1) 0%,transparent 70%)', borderRadius:'50%', filter:'blur(50px)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'15%', right:'5%', width:320, height:320, background:'radial-gradient(circle,rgba(251,146,60,.07) 0%,transparent 70%)', borderRadius:'50%', filter:'blur(50px)', pointerEvents:'none' }} />

        <div className="hero-row" style={{ position:'relative', zIndex:1, maxWidth:1100, width:'100%' }}>

          {/* LEFT */}
          <div className="hero-left">
            <div className="h1 hero-badge" style={{
              display:'inline-flex', alignItems:'center', gap:8,
              padding:'6px 16px', borderRadius:0,
              border:'1px solid rgba(245,158,11,.4)',
              borderLeft:'3px solid #f59e0b',
              background:'rgba(245,158,11,.08)',
              marginBottom:28,
            }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'#f59e0b', display:'inline-block', animation:'pulseAmber 2s infinite' }} />
              <span style={{ color:'#d4b483', fontSize:'.8rem', fontWeight:500, letterSpacing:'.05em' }}>
                Ankara, Türkiye — İş Arayışında
              </span>
            </div>

            <h1 className="h2" style={{
              fontFamily:"'Space Mono',monospace",
              fontSize:'clamp(2rem,4.5vw,3.8rem)',
              fontWeight:700, lineHeight:1.1,
              color:'#f1f5f9', marginBottom:14,
            }}>
              Murat{' '}
              <span style={{ color:'#f59e0b' }}>SİNMEZ</span>
            </h1>

            <div className="h3" style={{
              fontFamily:"'Space Mono',monospace",
              fontSize:'clamp(.85rem,1.8vw,1.2rem)',
              color:'#fb923c', minHeight:'2em', marginBottom:20,
            }}>
              {displayText}
              <span style={{ display:'inline-block', width:2, height:'1.1em', background:'#fb923c', marginLeft:3, verticalAlign:'middle', animation:'blink 1s step-end infinite' }} />
            </div>

            <p className="h4" style={{ fontSize:'1rem', color:'#94a3b8', lineHeight:1.8, marginBottom:36, maxWidth:460 }}>
              5+ yıllık deneyimle karmaşık sistem hatalarını yapay zeka araçlarıyla çözen,
              Java/Spring Boot ve Python/FastAPI ile üretim kalitesinde sistemler geliştiren bir mühendis.
            </p>

            <div className="h5 hero-buttons" style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:44 }}>
              <a href="#projects" className="btn-amber" style={{
                padding:'13px 28px', borderRadius:0,
                background:'#f59e0b',
                color:'#0d1b35', fontWeight:700, fontSize:'.95rem',
                textDecoration:'none',
                boxShadow:'4px 4px 0px #c47d08',
              }}>Projelerimi Gör →</a>
              <a href="#contact" className="btn-ghost" style={{
                padding:'13px 28px', borderRadius:0,
                background:'transparent',
                border:'2px solid #f59e0b',
                color:'#f59e0b', fontWeight:600, fontSize:'.95rem',
                textDecoration:'none',
              }}>İletişime Geç</a>
            </div>

            <div className="h6 hero-stats" style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              {stats.map((s,i) => (
                <div key={i} className="stat-pill" style={{
                  padding:'14px 20px', borderRadius:0,
                  background:'rgba(245,158,11,.08)',
                  borderBottom:'2px solid #f59e0b',
                  textAlign:'center', transition:'transform .25s',
                }}>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:'1.6rem', fontWeight:700, color:'#f59e0b' }}>{s.value}</div>
                  <div style={{ color:'#8899b0', fontSize:'.7rem', marginTop:4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: photo */}
          <div className="hero-photo-wrap h2">
            <div className="hero-photo-size">
              <div style={{ position:'absolute', inset:-4, borderRadius:'50%', background:'conic-gradient(#f59e0b,#fb923c,#f59e0b)', animation:'spinRing 5s linear infinite', zIndex:0 }} />
              <div style={{ position:'absolute', inset:3, borderRadius:'50%', background:'#0d1b35', zIndex:1 }} />
              <img src="/assets/murat.jpg" alt="Murat SİNMEZ" style={{ position:'absolute', inset:8, width:'calc(100% - 16px)', height:'calc(100% - 16px)', borderRadius:'50%', objectFit:'cover', objectPosition:'center 15%', zIndex:2, display:'block' }} />
              {/* Badge */}
              <div style={{
                position:'absolute', bottom:10, right:-12, zIndex:3,
                padding:'8px 14px', borderRadius:0,
                background:'#0d1b35', borderLeft:'3px solid #f59e0b',
                border:'1px solid rgba(245,158,11,.4)',
                boxShadow:'4px 4px 0 rgba(0,0,0,.4)',
                display:'flex', alignItems:'center', gap:8,
              }}>
                <span style={{ fontSize:'1rem' }}>☕</span>
                <div>
                  <div style={{ color:'#f59e0b', fontSize:'.68rem', fontWeight:700, fontFamily:"'Space Mono',monospace", letterSpacing:'.08em' }}>AVAILABLE</div>
                  <div style={{ color:'#8899b0', fontSize:'.6rem' }}>İş Arayışında</div>
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
