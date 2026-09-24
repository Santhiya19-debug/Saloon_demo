import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Inline scissors emblem
   Must be inline (not <img src=".svg">) so the page's Google
   Fonts are available to the wordmark text beside it.
───────────────────────────────────────────────────────────── */
const ScissorsEmblem = () => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: '100%' }}
    aria-hidden="true"
  >
    <circle cx="30" cy="30" r="27.5" stroke="#161514" strokeWidth="1.5" />
    {/* Left blade */}
    <line x1="39.5" y1="11" x2="18.5" y2="52"
      stroke="#161514" strokeWidth="2.4" strokeLinecap="round" />
    {/* Right blade */}
    <line x1="20.5" y1="11" x2="41.5" y2="52"
      stroke="#161514" strokeWidth="2.4" strokeLinecap="round" />
    {/* Handle rings */}
    <circle cx="16.5" cy="53" r="5.2" stroke="#161514" strokeWidth="1.8" />
    <circle cx="43.5" cy="53" r="5.2" stroke="#161514" strokeWidth="1.8" />
    {/* Pivot */}
    <circle cx="30" cy="31.5" r="3"   fill="#161514" />
    <circle cx="30" cy="31.5" r="1.4" fill="#FAF7F2" />
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   Nav links
───────────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { name: 'HOME',     href: '#home'     },
  { name: 'SERVICES', href: '#services' },
  { name: 'GALLERY',  href: '#gallery'  },
  { name: 'ABOUT',    href: '#about'    },
  { name: 'CONTACT',  href: '#contact'  },
];

/* ─────────────────────────────────────────────────────────────
   Navbar
───────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FAF7F2] border-b border-black/5 relative z-50">
      <div className="w-full flex items-center justify-between px-6 sm:px-10 md:px-12 lg:px-14" style={{ height: '80px' }}>

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          {/* Scissors emblem — inline so fonts work */}
          <div style={{ width: '52px', height: '52px', flexShrink: 0 }}>
            <ScissorsEmblem />
          </div>

          {/* Wordmark — plain HTML so Google Fonts load correctly */}
          <div className="flex flex-col justify-center" style={{ gap: '3px' }}>
            <div className="flex items-baseline leading-none">
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '20px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  color: '#161514',
                  lineHeight: 1,
                }}
              >
                BLK&nbsp;
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '20px',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  color: '#D9531E',
                  lineHeight: 1,
                }}
              >
                ORANGE
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '7.5px',
                fontWeight: 500,
                letterSpacing: '0.32em',
                color: '#7a736d',
              }}
            >
              SALON &amp; BEAUTY STUDIO
            </span>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center" style={{ gap: '36px' }}>
          <nav className="flex items-center" style={{ gap: '32px' }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '11.5px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  color: link.name === 'HOME' ? '#D9531E' : '#161514',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { if (link.name !== 'HOME') e.currentTarget.style.color = '#D9531E'; }}
                onMouseLeave={e => { if (link.name !== 'HOME') e.currentTarget.style.color = '#161514'; }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA — sharp rectangle, no border-radius */}
          <a
            href="#book"
            style={{
              display: 'inline-block',
              backgroundColor: '#D9531E',
              color: '#FFFFFF',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              padding: '13px 24px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s',
              /* No border-radius — matches reference */
              borderRadius: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#B84214'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#D9531E'}
          >
            BOOK APPOINTMENT
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMobileMenuOpen(v => !v)}
          className="md:hidden p-2 text-[#161514] hover:bg-black/5 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-white/10"
          style={{ backgroundColor: '#161514', padding: '16px 24px 24px' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                color: link.name === 'HOME' ? '#D9531E' : '#FAF7F2',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'block',
              marginTop: '20px',
              backgroundColor: '#D9531E',
              color: '#FFFFFF',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              padding: '16px 24px',
              textDecoration: 'none',
              textAlign: 'center',
              borderRadius: 0,
            }}
          >
            BOOK APPOINTMENT
          </a>
        </div>
      )}
    </header>
  );
}