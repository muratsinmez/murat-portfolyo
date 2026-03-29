import React, { useState, useEffect } from 'react';

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

        .nav-link {
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.25s ease, border-color 0.25s ease;
        }
        .nav-link:hover { color: #e2e8f0 !important; }

        .mobile-link {
          display: block;
          text-decoration: none;
          padding: 13px 16px;
          border-radius: 8px;
          transition: background 0.2s;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
        }
        .mobile-link:hover { background: rgba(56,189,248,0.08); }

        /* Desktop: show links, hide hamburger */
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }

        /* Mobile: hide links, show hamburger */
        @media (max-width: 640px) {
          .nav-desktop   { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        padding: '14px 20px',
        background: scrolled ? 'rgba(6,13,26,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(56,189,248,0.1)' : '1px solid transparent',
        transition: 'all 0.4s ease',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo */}
          <a href="#home" style={{ textDecoration: 'none' }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '1.05rem', fontWeight: 700,
              background: 'linear-gradient(135deg, #38bdf8, #34d399)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>murat.dev</span>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ alignItems: 'center', gap: 36 }}>
            {links.map(link => (
              <a key={link.id} href={link.href} className="nav-link" style={{
                fontSize: '0.92rem',
                fontWeight: active === link.id ? 600 : 400,
                color: active === link.id ? '#38bdf8' : '#94a3b8',
                borderBottom: `2px solid ${active === link.id ? '#38bdf8' : 'transparent'}`,
                paddingBottom: 4,
              }}>{link.label}</a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: 4 }}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div style={{
            marginTop: 10, padding: 8,
            background: 'rgba(6,13,26,0.98)',
            borderRadius: 12,
            border: '1px solid rgba(56,189,248,0.12)',
          }}>
            {links.map(link => (
              <a key={link.id} href={link.href} className="mobile-link"
                onClick={() => setIsOpen(false)}
                style={{ color: active === link.id ? '#38bdf8' : '#94a3b8', fontWeight: active === link.id ? 600 : 400 }}
              >{link.label}</a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
