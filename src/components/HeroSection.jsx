/**
 * BLK ORANGE — Home / Landing Page
 *
 * ASSET SETUP (do this before using the component):
 *  1. Copy /src/assets/images/model.jpg  → your project's public or src/assets/images/
 *  2. Copy /src/assets/logo/blk-orange-emblem.svg → your project's src/assets/logo/
 *  3. If you use Vite/CRA with src imports, update the import paths below.
 *     If you put assets in /public, use "/assets/images/model.jpg" etc. as plain strings.
 *
 * TIP — White-background removal:
 *  The model photo has a white background. For a seamless composite against the orange
 *  hero, either:
 *    a) Remove the background with remove.bg / Photoshop and re-export as PNG, OR
 *    b) Uncomment the `mixBlendMode: 'multiply'` line on the <img> tag below.
 *       multiply mode makes white pixels transparent on any coloured background.
 *
 * FONTS (add to index.html <head> if not already present):
 *  <link rel="preconnect" href="https://fonts.googleapis.com" />
 *  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
 *  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
 */

import React, { useState } from 'react';

const modelImg = '/assets/images/modelbg.png';
const emblemSrc = '/assets/images/blk-orange-emblem.svg';

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

/** Inline scissors emblem – used as fallback when SVG import is unavailable */
const ScissorsEmblem = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <circle cx="30" cy="30" r="27.5" stroke="#161514" strokeWidth="1.5" />
    <line x1="39.5" y1="11" x2="18.5" y2="52" stroke="#161514" strokeWidth="2.4" strokeLinecap="round" />
    <line x1="20.5" y1="11" x2="41.5" y2="52" stroke="#161514" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="16.5" cy="53" r="5.2"  stroke="#161514" strokeWidth="1.8" />
    <circle cx="43.5" cy="53" r="5.2"  stroke="#161514" strokeWidth="1.8" />
    <circle cx="30"   cy="31.5" r="3"  fill="#161514" />
    <circle cx="30"   cy="31.5" r="1.4" fill="#FAF7F2" />
  </svg>
);

/** Tiny scissors icon used inside the hero badge */
const ScissorsIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6"  cy="6"  r="3" />
    <circle cx="6"  cy="18" r="3" />
    <line x1="20" y1="4"  x2="8.12" y2="15.88" />
    <line x1="14.47" y1="14.48" x2="20" y2="20" />
    <line x1="8.12"  y1="8.12"  x2="12"  y2="12" />
  </svg>
);

/* ============================================================
   DATA
   ============================================================ */

const NAV_LINKS = ['HOME', 'SERVICES', 'GALLERY', 'ABOUT', 'CONTACT'];

const LEFT_TAGS = [
  { label: 'HAIR',          bold: false },
  { label: 'SKIN',          bold: false },
  { label: 'MAKEUP',        bold: false },
  { label: 'NAIL CARE',     bold: true  },
  { label: 'SELF CARE',     bold: true  },
  { label: 'A BETTER YOU.', bold: true  },
];

const SERVICE_LIST = [
  { label: 'HAIR STYLING',      bold: false },
  { label: 'SKIN HYDRA-CARE',   bold: true  },
  { label: 'EDITORIAL MAKEUP',  bold: true  },
  { label: 'GEL NAIL ART',      bold: true  },
  { label: 'COUTURE BRIDAL',    bold: true  },
  { label: 'SELF CARE RITUALS', bold: true  },
];

/* ── barcode decorative bars (height in px) ── */
const BARS = [32, 48, 20, 44, 28, 52, 22, 38, 18, 46, 32, 40, 20, 44, 28, 18, 52];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", backgroundColor: '#161514' }}>

      {/* ══════════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════════ */}

      {/* ─── Mobile nav drawer ─── */}
      {mobileOpen && (
        <div style={styles.mobileDrawer} className="blko-mobile-drawer">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={link === 'HOME' ? '/' : `/${link.toLowerCase()}`}
              style={{
                ...styles.mobileNavLink,
                color: link === 'HOME' ? '#D9531E' : '#161514',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="/book"
            style={styles.mobileCTA}
            onClick={() => setMobileOpen(false)}
          >
            BOOK APPOINTMENT
          </a>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section style={styles.hero} className="blko-hero">

        {/* ─── Model image — centered, full hero height ─── */}
        <div style={styles.modelWrap}>
         <img
          src="/assets/images/modelbg.png"
          alt="BLK ORANGE Editorial Salon Model"
          style={{
          width: '1000px',
          height: '900px',
          objectFit: 'contain',
          display: 'block',
          position: 'relative',
          top: '20px',
          zIndex: 100,
        }}
        />
        </div>

       {/* ══════════════════════════════
    LEFT PANEL
    ══════════════════════════════ */}
        <div style={styles.leftPanel} className="blko-left-panel">

          <div style={styles.leftEditorial}>
            <div style={styles.leftEditorialLine} />

            <div style={styles.leftEditorialText}>
              <span>WHERE</span>
              <span>BEAUTY</span>
              <span>MEETS</span>
              <span>YOU.</span>
            </div>
          </div>

          {/* Bottom tagline */}
          <div style={styles.leftTagline}>
            <div style={styles.taglineRule} />
            <p style={styles.taglineText}>
              LOOK GOOD.<br />
              FEEL GOOD.
            </p>
          </div>

        </div>

        {/* ══════════════════════════════
            RIGHT PANEL
        ══════════════════════════════ */}
        <div style={styles.rightPanel} className="blko-right-panel">

          {/* — Main heading — */}
          <h1 style={styles.rightHeading}>
            Your<br />
            Beauty<br />
            Story Starts<br />
            Here.
          </h1>

          {/* — Subtext — */}
          <p style={styles.rightSubtext}>
            EXPERT CARE.<br />
            PERSONALISED FOR YOU.
          </p>

          {/* — CTA — */}
          <a href="/book" style={styles.heroCTA} className="blko-hero-cta">
            <span>BOOK APPOINTMENT</span>
            <span style={styles.ctaArrow}>→</span>
          </a>
        </div>

        {/* ══════════════════════════════
            HERO HEADLINE
            (bottom, behind the model)
        ══════════════════════════════ */}
        <div style={styles.heroHeadlineWrap} className="blko-hero-headline">
          <div style={styles.heroHeadline}>
            <div>YOUR STYLE</div>
            <div>OUR EXPERTISE</div>
          </div>
        </div>

        {/* ══════════════════════════════
            BOTTOM-RIGHT DECORATIVE
        ══════════════════════════════ */}
        <div style={styles.decoWrap} className="blko-deco">
          {/* Barcode bars */}
          <div style={styles.barcodeWrap}>
            {BARS.map((h, i) => (
              <div key={i} style={{
                ...styles.barcodeBar,
                height: `${h}px`,
                width: i % 4 === 0 ? '3px' : '1.5px',
              }} />
            ))}
          </div>

          {/* Stacked micro-labels */}
          <div style={styles.decoLabels}>
            {['HAIR', 'SKIN', 'MAKEUP', 'MORE'].map(t => (
              <span key={t} style={styles.decoLabel}>{t}</span>
            ))}
          </div>
        </div>

      </section>

      {/* ══════════════════════════════════════════════
          MOBILE CONTENT BAND
          Hidden on desktop/tablet — visible only on
          mobile where the right panel is collapsed.
          Mirrors the right-panel content.
      ══════════════════════════════════════════════ */}
      <div className="blko-mobile-content">
        <h2 className="blko-mobile-content__heading">
          Your Beauty<br />Story Starts<br />Here.
        </h2>
        <p className="blko-mobile-content__sub">
          EXPERT CARE.<br />PERSONALISED FOR YOU.
        </p>
        <a href="/book" className="blko-mobile-content__cta">
          <span>BOOK APPOINTMENT</span>
          <span style={{ marginLeft: '10px', fontSize: '14px' }}>→</span>
        </a>
      </div>

    </div>
  );
};

export default Home;

/* ============================================================
   STYLE OBJECTS
   All px values are calibrated to the reference image at 1440px.
   Responsive overrides are in index.css via .blko-* classes.
   ============================================================ */

const ORANGE   = '#D9531E';
const IVORY    = '#FAF7F2';
const BLACK    = '#161514';
const WHITE    = '#FFFFFF';
const SANS     = "'Plus Jakarta Sans', sans-serif";
const BEBAS    = "'Bebas Neue', 'Oswald', sans-serif";
const HERO_BG  = `${ORANGE} repeating-linear-gradient(
  to right,
  transparent 0px,
  transparent 79px,
  rgba(0,0,0,0.032) 80px
)`;

const styles = {

  /* ── Header ── */
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80px',
    padding: '0 48px',
    backgroundColor: IVORY,
    position: 'relative',
    zIndex: 200,
    flexShrink: 0,
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    textDecoration: 'none',
    flexShrink: 0,
  },
  emblemWrap: {
    position: 'relative',
    width: '54px',
    height: '54px',
    flexShrink: 0,
  },
  wordmarkWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '3px',
  },
  wordmarkRow: {
    display: 'flex',
    alignItems: 'baseline',
    lineHeight: 1,
  },
  wordBLK: {
    fontFamily: SANS,
    fontSize: '21px',
    fontWeight: 800,
    letterSpacing: '0.06em',
    color: BLACK,
  },
  wordORANGE: {
    fontFamily: SANS,
    fontSize: '21px',
    fontWeight: 800,
    letterSpacing: '0.06em',
    color: ORANGE,
  },
  tagline: {
    fontFamily: SANS,
    fontSize: '8px',
    fontWeight: 500,
    letterSpacing: '0.32em',
    color: '#7a736d',
    marginTop: '1px',
  },
  desktopNav: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  navLink: {
    fontFamily: SANS,
    fontSize: '11.5px',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  headerCTA: {
    display: 'inline-block',
    backgroundColor: ORANGE,
    color: WHITE,
    fontFamily: SANS,
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.12em',
    padding: '13px 24px',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
    marginLeft: '8px',
    whiteSpace: 'nowrap',
  },
  hamburger: {
    display: 'none',         /* shown via CSS at mobile breakpoint */
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
  },
  hamburgerBar: {
    display: 'block',
    width: '24px',
    height: '2px',
    backgroundColor: BLACK,
    borderRadius: '2px',
    transition: 'all 0.25s ease',
  },
  mobileDrawer: {
    display: 'none',        /* shown via CSS at mobile breakpoint */
    position: 'fixed',
    top: '80px',
    left: 0,
    right: 0,
    backgroundColor: IVORY,
    zIndex: 199,
    flexDirection: 'column',
    borderTop: `1px solid rgba(22,21,20,0.08)`,
  },
  mobileNavLink: {
    display: 'block',
    fontFamily: SANS,
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '0.14em',
    padding: '18px 32px',
    textDecoration: 'none',
    borderBottom: `1px solid rgba(22,21,20,0.08)`,
  },
  mobileCTA: {
    display: 'block',
    margin: '20px 32px 28px',
    padding: '16px 24px',
    backgroundColor: ORANGE,
    color: WHITE,
    fontFamily: SANS,
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textDecoration: 'none',
    textAlign: 'center',
  },

  /* ── Hero ── */
  hero: {
    position: 'relative',
    width: '100%',
    minHeight: 'calc(100vh - 80px)',
    overflow: 'hidden',
    background: HERO_BG,
  },

  /* ── Model ── */
  modelWrap: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 10,
    pointerEvents: 'none',
  },
  modelImg: {
    height: '100%',
    width: 'auto',
    maxWidth: '78%',
    objectFit: 'contain',
    objectPosition: 'top center',
    display: 'block',
    userSelect: 'none',
    mixBlendMode: 'multiply',
    filter: 'contrast(1.06) saturate(1.08)',
  },

  /* ── Left panel ── */
leftPanel: {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  width: '22%',
  zIndex: 20,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  padding: '44px 36px 40px 46px',
},
  categoryTags: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  categoryTag: {
    color: WHITE,
    fontFamily: SANS,
    fontSize: '10.5px',
    letterSpacing: '0.13em',
    lineHeight: 1.55,
  },
  middleBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    border: `1px solid rgba(255,255,255,0.75)`,
    color: WHITE,
    padding: '9px 13px',
    fontFamily: SANS,
    fontSize: '9.5px',
    letterSpacing: '0.15em',
    fontWeight: 600,
    alignSelf: 'flex-start',
    whiteSpace: 'nowrap',
  },
  serviceList: {
    borderLeft: '1.5px solid rgba(255,255,255,0.38)',
    paddingLeft: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  serviceItem: {
    color: WHITE,
    fontFamily: SANS,
    fontSize: '10px',
    letterSpacing: '0.1em',
    lineHeight: 1.7,
  },
  leftTagline: {
    paddingBottom: '6px',
  },
  taglineRule: {
    width: '24px',
    height: '1.5px',
    backgroundColor: 'rgba(255,255,255,0.55)',
    marginBottom: '10px',
  },
  taglineText: {
    color: WHITE,
    fontFamily: SANS,
    fontSize: '11.5px',
    letterSpacing: '0.09em',
    lineHeight: 1.7,
    fontWeight: 400,
    margin: 0,
  },
leftEditorial: {
  position: 'absolute',
  left: '46px',
  top: '50%',
  transform: 'translateY(-50%)',

  display: 'flex',
  alignItems: 'center',
  gap: '24px',
},

leftEditorialLine: {
  width: '1.5px',
  height: '390px',
  backgroundColor: 'rgba(255,255,255,0.6)',
  flexShrink: 0,
},

leftEditorialText: {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  color: WHITE,
  fontFamily: SANS,
  fontSize: '35px',
  fontWeight: 600,
  letterSpacing: '0.22em',
  lineHeight: 1.75,

  whiteSpace: 'nowrap',
},


  /* ── Right panel ── */
  rightPanel: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '22%',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '44px 44px 44px 20px',
  },
  rightHeading: {
    fontFamily: SANS,
    fontSize: 'clamp(32px, 3.4vw, 56px)',
    fontWeight: 800,
    color: WHITE,
    lineHeight: 1.05,
    letterSpacing: '-0.01em',
    margin: '0 0 16px 0',
  },
  rightSubtext: {
    fontFamily: SANS,
    color: WHITE,
    fontSize: '9.5px',
    letterSpacing: '0.2em',
    fontWeight: 600,
    lineHeight: 2.1,
    margin: '0 0 28px 0',
    opacity: 0.95,
  },
  heroCTA: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: IVORY,
    color: BLACK,
    fontFamily: SANS,
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '0.14em',
    padding: '14px 18px',
    textDecoration: 'none',
    maxWidth: '215px',
    width: '100%',
    transition: 'background-color 0.2s',
  },
  ctaArrow: {
    fontSize: '14px',
    marginLeft: '10px',
    transition: 'transform 0.2s',
  },

  /* ── Hero headline ── */
  heroHeadlineWrap: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 30,          /* sits IN FRONT of the model */
    paddingLeft: '22%',
    paddingRight: '22%',
  },
  heroHeadline: {
    fontFamily: BEBAS,
    fontSize: 'clamp(68px, 10.5vw, 152px)',
    fontWeight: 400,
    color: WHITE,
    lineHeight: 0.84,
    letterSpacing: '0.025em',
    margin: 0,
    userSelect: 'none',
  },

  /* ── Barcode deco ── */
  decoWrap: {
    position: 'absolute',
    bottom: '56px',
    right: '28px',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '10px',
  },
  barcodeWrap: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '2px',
  },
  barcodeBar: {
    backgroundColor: 'rgba(255,255,255,0.58)',
    flexShrink: 0,
  },
  decoLabels: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0px',
  },
  decoLabel: {
    fontFamily: SANS,
    color: 'rgba(255,255,255,0.7)',
    fontSize: '8px',
    letterSpacing: '0.2em',
    lineHeight: 2.1,
    fontWeight: 500,
  },
};