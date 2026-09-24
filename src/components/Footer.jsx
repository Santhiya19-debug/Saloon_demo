import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock } from 'lucide-react';

/* ─────────────────────────────────────────────────────────────
   Scissors Emblem
   Same logo design as Navbar, adapted for dark footer
───────────────────────────────────────────────────────────── */
const ScissorsEmblem = () => (
  <svg
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '100%', height: '100%' }}
    aria-hidden="true"
  >
    {/* Outer circle */}
    <circle
      cx="30"
      cy="30"
      r="27.5"
      stroke="#FAF7F2"
      strokeWidth="1.5"
    />

    {/* Left blade */}
    <line
      x1="39.5"
      y1="11"
      x2="18.5"
      y2="52"
      stroke="#FAF7F2"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    {/* Right blade */}
    <line
      x1="20.5"
      y1="11"
      x2="41.5"
      y2="52"
      stroke="#FAF7F2"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    {/* Handle rings */}
    <circle
      cx="16.5"
      cy="53"
      r="5.2"
      stroke="#FAF7F2"
      strokeWidth="1.8"
    />

    <circle
      cx="43.5"
      cy="53"
      r="5.2"
      stroke="#FAF7F2"
      strokeWidth="1.8"
    />

    {/* Pivot */}
    <circle
      cx="30"
      cy="31.5"
      r="3"
      fill="#FAF7F2"
    />

    <circle
      cx="30"
      cy="31.5"
      r="1.4"
      fill="#161514"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#161514] text-brand-ivory pt-20 pb-10 border-t border-white/10"
    >
      <div className="w-full max-w-full px-6 sm:px-12 md:px-16 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">

        {/* ══════════════════════════════════════════════════════
            COL 1: LOGO & BRAND INFO
        ══════════════════════════════════════════════════════ */}
        <div className="lg:col-span-4 space-y-6">

          {/* ── BLK ORANGE LOGO ── */}
          <div className="flex items-center gap-3">

            {/* Scissors emblem */}
            <div
              style={{
                width: '52px',
                height: '52px',
                flexShrink: 0,
              }}
            >
              <ScissorsEmblem />
            </div>

            {/* Wordmark */}
            <div
              className="flex flex-col justify-center"
              style={{ gap: '3px' }}
            >

              {/* BLK ORANGE */}
              <div className="flex items-baseline leading-none">

                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '20px',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    color: '#FAF7F2',
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

              {/* Subtitle */}
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: '7.5px',
                  fontWeight: 500,
                  letterSpacing: '0.32em',
                  color: '#A9A39D',
                }}
              >
                SALON &amp; BEAUTY STUDIO
              </span>

            </div>
          </div>

          {/* Brand description */}
          <p className="text-xs text-brand-ivory/70 leading-relaxed max-w-sm">
            BLK ORANGE is a premier modern unisex salon offering couture hair
            styling, advanced skincare, and editorial makeup experiences.
          </p>

          {/* Social icons */}
          <div className="flex items-center space-x-4 pt-2">

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-ivory hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-ivory hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-ivory hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              aria-label="WhatsApp"
            >
              <span className="font-bold text-xs">WA</span>
            </a>

          </div>
        </div>


        {/* ══════════════════════════════════════════════════════
            COL 2: QUICK LINKS
        ══════════════════════════════════════════════════════ */}
        <div className="lg:col-span-2 space-y-4">

          <h4 className="font-display text-lg uppercase tracking-wider text-white">
            Quick Links
          </h4>

          <ul className="space-y-2.5 text-xs text-brand-ivory/75">

            <li>
              <a
                href="#home"
                className="hover:text-brand-orange transition-colors"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-brand-orange transition-colors"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-brand-orange transition-colors"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#gallery"
                className="hover:text-brand-orange transition-colors"
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-brand-orange transition-colors"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>


        {/* ══════════════════════════════════════════════════════
            COL 3: OUR SERVICES
        ══════════════════════════════════════════════════════ */}
        <div className="lg:col-span-3 space-y-4">

          <h4 className="font-display text-lg uppercase tracking-wider text-white">
            Our Services
          </h4>

          <ul className="space-y-2.5 text-xs text-brand-ivory/75">

            <li>
              <a
                href="#services"
                className="hover:text-brand-orange transition-colors"
              >
                Hair Services &amp; Coloring
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-brand-orange transition-colors"
              >
                Makeup Artistry &amp; Glam
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-brand-orange transition-colors"
              >
                Skin &amp; Hydra Care
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-brand-orange transition-colors"
              >
                Nail Care &amp; Gel Extensions
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-brand-orange transition-colors"
              >
                Bridal Packages
              </a>
            </li>

            <li>
              <a
                href="#services"
                className="hover:text-brand-orange transition-colors"
              >
                Special Offers
              </a>
            </li>

          </ul>
        </div>


        {/* ══════════════════════════════════════════════════════
            COL 4: CONTACT US
        ══════════════════════════════════════════════════════ */}
        <div className="lg:col-span-3 space-y-4">

          <h4 className="font-display text-lg uppercase tracking-wider text-white">
            Contact Us
          </h4>

          <ul className="space-y-3 text-xs text-brand-ivory/80">

            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-orange shrink-0" />
              <span>+91 98765 43210</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-orange shrink-0" />
              <span>info@blkorange.com</span>
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <span>Address Line, City Name, PIN Code</span>
            </li>

            <li className="flex items-center gap-3 pt-1">
              <Clock className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Mon - Sun: 10:00 AM - 9:00 PM</span>
            </li>

          </ul>
        </div>

      </div>


      {/* ══════════════════════════════════════════════════════
          COPYRIGHT BAR
      ══════════════════════════════════════════════════════ */}
      <div className="w-full max-w-full px-6 sm:px-12 md:px-16 lg:px-20 pt-8 text-center text-xs text-brand-ivory/50 uppercase tracking-widest">
        <p>
          © 2025 BLK ORANGE Unisex Salon. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}