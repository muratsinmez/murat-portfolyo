import React, { useState, useEffect } from 'react';

/* ── THEME ──────────────────────────────────────
   NAVY  : #0d1b35   AMBER : #f59e0b   ORANGE: #fb923c
──────────────────────────────────────────────── */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) { setActive(id); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#home',     label: 'Ana Sayfa', id: 'home'     },
    { href: '#about',    label: 'Hakkımda',  id: 'about'    },
    { href: '#projects', label: 'Projeler',  id: 'projects' },
    { href: '#contact',  label: 'İletişim',  id: 'contact'  },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .nav-link { text-decoration:none; white-space:nowrap; transition:color .25s, border-color .25s; }
        .nav-link:hover { color:#f59e0b !important; }
        .mobile-link { display:block; text-decoration:none; padding:13px 16px; border-radius:6px; transition:background .2s; font-family:'DM Sans',sans-serif; font-size:1rem; }
        .mobile-link:hover { background:rgba(245,158,11,0.1); }
        .nav-desktop { display:flex; }
        .nav-hamburger { display:none; }
        @media(max-width:640px){
          .nav-desktop   { display:none !important; }
          .nav-hamburger { display:block !important; }
        }
      `}</style>

      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:50,
        padding:'14px 24px',
        background: scrolled ? 'rgba(13,27,53,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '2px solid #f59e0b' : '2px solid transparent',
        transition:'all .4s ease',
        fontFamily:"'DM Sans',sans-serif",
      }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>

          {/* Logo */}
          <a href="#home" style={{ textDecoration:'none' }}>
            <span style={{ fontFamily:"'Space Mono',monospace", fontSize:'1.1rem', fontWeight:700, color:'#f59e0b' }}>
              murat<span style={{ color:'#f1f5f9' }}>.dev</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ alignItems:'center', gap:40 }}>
            {links.map(link => (
              <a key={link.id} href={link.href} className="nav-link" style={{
                fontSize:'0.92rem',
                fontWeight: active === link.id ? 700 : 400,
                color: active === link.id ? '#f59e0b' : '#94a3b8',
                borderBottom: `2px solid ${active === link.id ? '#f59e0b' : 'transparent'}`,
                paddingBottom:4,
              }}>{link.label}</a>
            ))}
          </div>

          {/* Hamburger */}
          <button className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}
            style={{ background:'none', border:'none', cursor:'pointer', color:'#f59e0b', padding:4 }}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div style={{ marginTop:10, padding:8, background:'rgba(13,27,53,0.99)', borderRadius:10, border:'1px solid rgba(245,158,11,0.3)' }}>
            {links.map(link => (
              <a key={link.id} href={link.href} className="mobile-link"
                onClick={() => setIsOpen(false)}
                style={{ color: active === link.id ? '#f59e0b' : '#94a3b8', fontWeight: active === link.id ? 700 : 400 }}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
