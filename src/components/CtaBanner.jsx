import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="bg-brand-orange text-brand-ivory py-20 lg:py-24 px-6 sm:px-12 md:px-16 lg:px-20 text-center relative overflow-hidden">
      <div className="w-full max-w-4xl mx-auto space-y-6 relative z-10">
        
        <span className="inline-block bg-white/10 px-4 py-1.5 rounded-md text-xs font-semibold tracking-[0.3em] uppercase text-white">
          Begin Your Transformation
        </span>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
          READY FOR A NEW LOOK?
        </h2>

        <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
          Book your personalized appointment with our master stylists today and experience haute-couture hair and beauty care.
        </p>

        <div className="pt-6 flex justify-center">
          <a
            href="#contact"
            className="px-10 py-4 bg-brand-ivory text-brand-black rounded-md font-display text-xl tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-3 glow-btn hover:bg-white"
          >
            <Calendar className="w-5 h-5 text-brand-orange" />
            <span>Book Now</span>
            <ArrowRight className="w-5 h-5 text-brand-orange" />
          </a>
        </div>

      </div>
    </section>
  );
}
