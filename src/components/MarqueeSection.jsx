import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function MarqueeSection() {
  const words = [
    "BEAUTY",
    "BEGINS",
    "THE",
    "MOMENT",
    "YOU",
    "DECIDE",
    "TO",
    "BE",
    "YOURSELF"
  ];

  return (
    <section className="relative bg-[#161514] text-brand-ivory py-12 md:py-16 border-y border-white/10 overflow-hidden select-none">
      
      {/* Editorial Headline Overlay */}
      <div className="w-full max-w-full px-6 mb-6 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Brand Philosophy</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="relative w-full overflow-hidden flex no-scrollbar">
        <div className="flex animate-marquee whitespace-nowrap items-center shrink-0">
          {words.map((word, idx) => (
            <React.Fragment key={`marquee-1-${idx}`}>
              <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase text-brand-ivory hover:text-brand-orange transition-colors duration-300 px-6 sm:px-10">
                {word}
              </span>
              <ArrowRight className="w-6 h-6 sm:w-10 sm:h-10 text-brand-orange shrink-0 mx-2" />
            </React.Fragment>
          ))}
        </div>

        <div className="flex animate-marquee whitespace-nowrap items-center shrink-0" aria-hidden="true">
          {words.map((word, idx) => (
            <React.Fragment key={`marquee-2-${idx}`}>
              <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase text-brand-ivory hover:text-brand-orange transition-colors duration-300 px-6 sm:px-10">
                {word}
              </span>
              <ArrowRight className="w-6 h-6 sm:w-10 sm:h-10 text-brand-orange shrink-0 mx-2" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Sub-quote Attribution */}
      <div className="mt-8 text-center px-6">
        <p className="text-xs sm:text-sm font-light tracking-[0.25em] uppercase text-brand-ivory/70 italic">
          — BLK ORANGE Signature Quote —
        </p>
      </div>

    </section>
  );
}
