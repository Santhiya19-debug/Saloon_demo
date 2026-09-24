import React from 'react';
import { ArrowRight, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#161514] text-brand-ivory py-20 lg:py-28 px-6 sm:px-12 md:px-16 lg:px-20 border-b border-white/10">
      <div className="w-full max-w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image Asset Showcase */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-lg overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="/assets/images/aboutmodel.png"
              alt="BLK ORANGE Salon Craftsmanship"
              className="w-full h-auto max-h-[520px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-6 -right-6 bg-brand-orange text-white p-6 rounded-lg shadow-2xl border border-white/20 hidden sm:block">
            <p className="font-display text-4xl leading-none">10+</p>
            <p className="text-xs uppercase tracking-widest font-semibold mt-1">Years of Excellence</p>
          </div>
        </div>

        {/* Right Column: About Content & Brand Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About BLK ORANGE</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-brand-ivory leading-[0.9]">
            REDEFINING UNISEX BEAUTY & STYLING
          </h2>

          <p className="text-sm md:text-base text-brand-ivory/80 leading-relaxed max-w-2xl">
            At **BLK ORANGE Unisex Salon**, we blend contemporary haute-couture styling with master-level beauty care. Founded on the principle that true elegance is timeless and personal, our studio provides bespoke hair, skincare, and bridal rituals crafted for discerning individuals.
          </p>

          <p className="text-sm md:text-base text-brand-ivory/70 leading-relaxed max-w-2xl">
            Our team of senior master stylists and celebrity makeup artists utilize only globally certified, premium products to ensure your hair and skin receive unmatched care in an immaculate luxury environment.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-brand-orange shrink-0" />
              <div>
                <h4 className="font-display text-lg uppercase tracking-wider text-white">Master Stylists</h4>
                <p className="text-xs text-brand-ivory/60">Certified International Hair Artists</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-orange shrink-0" />
              <div>
                <h4 className="font-display text-lg uppercase tracking-wider text-white">Clinical Hygiene</h4>
                <p className="text-xs text-brand-ivory/60">100% Sanitized & Safe Standards</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-md font-display text-lg tracking-[0.2em] uppercase transition-all duration-300 hover:bg-brand-orange-dark glow-btn"
            >
              <span>Read More</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
