import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const body = encodeURIComponent(`Ad: ${form.name}\nEmail: ${form.email}\n\nMesaj:\n${form.message}`);
    window.open(`mailto:muratsinmez06@gmail.com?subject=Portfolyö İletişim - ${form.name}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    { icon:'📧', label:'E-posta', value:'muratsinmez06@gmail.com', href:'mailto:muratsinmez06@gmail.com', color:'#38bdf8' },
    { icon:'📱', label:'Telefon', value:'0501 504 60 20',           href:'tel:+905015046020',              color:'#34d399' },
    { icon:'📍', label:'Konum',   value:'Ankara, Türkiye',           href:null,                             color:'#a78bfa' },
  ];

  const socials = [
    {
      label:'LinkedIn', href:'https://linkedin.com/in/murat-sinmez-980185225/', color:'#38bdf8',
      icon:<svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    },
    {
      label:'GitHub', href:'https://github.com/muratsinmez', color:'#94a3b8',
      icon:<svg width="19" height="19" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
    },
  ];

  const inputStyle = {
    width:'100%', boxSizing:'border-box',
    padding:'12px 15px', borderRadius:10,
    background:'rgba(6,13,26,.8)',
    border:'1px solid rgba(255,255,255,.09)',
    color:'#f1f5f9', fontSize:'.93rem',
    fontFamily:"'DM Sans',sans-serif",
    outline:'none', transition:'border-color .25s',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        @keyframes fadeUp    { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes successPop{ 0%{transform:scale(.85);opacity:0} 60%{transform:scale(1.04)} 100%{transform:scale(1);opacity:1} }
        .c-input:focus { border-color:rgba(56,189,248,.5)!important; background:rgba(15,23,42,.95)!important; }
        .info-row:hover { border-color:rgba(56,189,248,.2)!important; }
        .social-a { transition:all .25s ease; }
        .social-a:hover { transform:translateY(-3px); }
        .send-btn { transition:opacity .2s,transform .2s; }
        .send-btn:hover { opacity:.87; transform:translateY(-1px); }

        /* Responsive grid */
        .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:36px; align-items:start; }
        @media(max-width:680px){
          .contact-grid { grid-template-columns:1fr!important; gap:28px!important; }
          .contact-section { padding:80px 16px 60px!important; }
          .social-row { flex-wrap:wrap!important; }
        }
      `}</style>

      <section id="contact" className="contact-section" style={{
        background:'linear-gradient(180deg,#060d1a 0%,#0a1628 100%)',
        color:'#f1f5f9', padding:'110px 24px 80px',
        fontFamily:"'DM Sans',sans-serif",
      }}>
        <div style={{ maxWidth:920, margin:'0 auto' }}>

          <div style={{ textAlign:'center', marginBottom:56 }}>
            <span style={{ display:'inline-block', fontFamily:"'Space Mono',monospace", fontSize:'.73rem', color:'#38bdf8', letterSpacing:'.16em', textTransform:'uppercase', marginBottom:12 }}>
              // contact.me
            </span>
            <h2 style={{ fontFamily:"'Space Mono',monospace", fontSize:'clamp(1.7rem,4vw,2.8rem)', fontWeight:700, background:'linear-gradient(135deg,#f1f5f9,#94a3b8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', marginBottom:16 }}>
              İletişime Geç
            </h2>
            <p style={{ color:'#64748b', fontSize:'.97rem', maxWidth:460, margin:'0 auto' }}>
              Yeni fırsatlar için her zaman açığım. Mesajınızı bırakın, en kısa sürede dönüş yapayım.
            </p>
          </div>

          <div className="contact-grid">

            {/* Left: info */}
            <div style={{ animation:'fadeUp .5s ease' }}>
              <p style={{ color:'#64748b', fontSize:'.78rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', marginBottom:18 }}>İletişim Bilgileri</p>

              <div style={{ display:'flex', flexDirection:'column', gap:11, marginBottom:32 }}>
                {contactInfo.map((item,i) => (
                  <div key={i} className="info-row" style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 16px', borderRadius:14, background:'rgba(15,23,42,.7)', border:'1px solid rgba(255,255,255,.06)', transition:'border-color .25s' }}>
                    <div style={{ width:40, height:40, borderRadius:10, flexShrink:0, background:`${item.color}14`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem' }}>{item.icon}</div>
                    <div>
                      <div style={{ color:'#4a5568', fontSize:'.7rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:3 }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ color:'#e2e8f0', fontSize:'.88rem', textDecoration:'none', transition:'color .2s' }} onMouseEnter={e=>e.target.style.color=item.color} onMouseLeave={e=>e.target.style.color='#e2e8f0'}>{item.value}</a>
                        : <span style={{ color:'#e2e8f0', fontSize:'.88rem' }}>{item.value}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ color:'#64748b', fontSize:'.78rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', marginBottom:14 }}>Sosyal Medya</p>
              <div className="social-row" style={{ display:'flex', gap:10 }}>
                {socials.map((s,i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-a"
                    style={{ display:'flex', alignItems:'center', gap:9, padding:'10px 16px', borderRadius:11, background:'rgba(15,23,42,.7)', border:'1px solid rgba(255,255,255,.08)', color:s.color, textDecoration:'none', fontWeight:600, fontSize:'.84rem' }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderColor=s.color+'55'; e.currentTarget.style.background=s.color+'12'; }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,.08)'; e.currentTarget.style.background='rgba(15,23,42,.7)'; }}
                  >
                    {s.icon}{s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div style={{ animation:'fadeUp .5s .15s ease both' }}>
              <form onSubmit={handleSubmit} style={{ background:'rgba(15,23,42,.7)', border:'1px solid rgba(255,255,255,.07)', borderRadius:20, padding:28 }}>
                {sent && (
                  <div style={{ padding:'11px 16px', borderRadius:10, marginBottom:20, background:'rgba(52,211,153,.1)', border:'1px solid rgba(52,211,153,.3)', color:'#34d399', fontWeight:600, textAlign:'center', animation:'successPop .3s ease' }}>
                    ✓ Mail uygulamanız açıldı!
                  </div>
                )}

                {[
                  { name:'name',  label:'Adınız',  type:'text',  placeholder:'Adınız Soyadınız' },
                  { name:'email', label:'E-posta', type:'email', placeholder:'ornek@mail.com'    },
                ].map(f => (
                  <div key={f.name} style={{ marginBottom:16 }}>
                    <label style={{ display:'block', color:'#4a5568', fontSize:'.75rem', fontWeight:600, marginBottom:7, textTransform:'uppercase', letterSpacing:'.06em' }}>{f.label}</label>
                    <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} required className="c-input" style={inputStyle} />
                  </div>
                ))}

                <div style={{ marginBottom:20 }}>
                  <label style={{ display:'block', color:'#4a5568', fontSize:'.75rem', fontWeight:600, marginBottom:7, textTransform:'uppercase', letterSpacing:'.06em' }}>Mesajınız</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} required className="c-input"
                    placeholder="Merhaba Murat, seninle iletişime geçmek istiyorum..."
                    style={{ ...inputStyle, resize:'vertical' }}
                  />
                </div>

                <button type="submit" className="send-btn" style={{
                  width:'100%', padding:'13px', borderRadius:10, border:'none',
                  background:'linear-gradient(135deg,#0ea5e9,#10b981)',
                  color:'#fff', fontWeight:700, fontSize:'.93rem',
                  cursor:'pointer', fontFamily:"'DM Sans',sans-serif",
                  boxShadow:'0 4px 20px rgba(14,165,233,.22)',
                }}>Mesaj Gönder →</button>
              </form>
            </div>
          </div>

          <div style={{ textAlign:'center', marginTop:64, paddingTop:24, borderTop:'1px solid rgba(255,255,255,.06)' }}>
            <p style={{ color:'#1e293b', fontSize:'.78rem', fontFamily:"'Space Mono',monospace" }}>
              © 2025 Murat SİNMEZ — Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
