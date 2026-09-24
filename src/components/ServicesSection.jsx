import React from 'react';
import { Scissors, Sparkles, Heart, Crown, Layers, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'hair',
      title: 'Hair Services',
      description: 'Precision haircuts, bespoke hair coloring, balayage, keratin treatments, and hair spa rituals.',
      icon: Scissors,
      tag: 'Styling & Care'
    },
    {
      id: 'makeup',
      title: 'Makeup Artistry',
      description: 'High-definition editorial makeup, party glam, airbrush perfection, and special occasion styling.',
      icon: Sparkles,
      tag: 'Glamour'
    },
    {
      id: 'skin',
      title: 'Skin & Beauty Care',
      description: 'Rejuvenating hydra-facials, organic skin glow treatments, anti-aging therapies, and deep cleanups.',
      icon: Layers,
      tag: 'Skincare'
    },
    {
      id: 'nails',
      title: 'Nail Care',
      description: 'Luxury gel nail extensions, spa manicures, relaxing pedicures, and customized nail art.',
      icon: Heart,
      tag: 'Nails'
    },
    {
      id: 'bridal',
      title: 'Bridal Packages',
      description: 'Couture bridal makeup, saree draping, pre-bridal grooming rituals, and groom styling packages.',
      icon: Crown,
      tag: 'Special'
    }
  ];

  return (
    <section id="services" className="bg-[#F3EDE6] text-[#161514] py-20 lg:py-28 px-6 sm:px-12 md:px-16 lg:px-20 border-b border-[#161514]/10">
      <div className="w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange block mb-2">
              Bespoke Salon Experiences
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#161514]">
              OUR SERVICES
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#161514]/75 max-w-md leading-relaxed">
            Discover our comprehensive range of high-end salon treatments designed to elevate your personal style and radiance.
          </p>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-[#FAF7F2] p-8 rounded-lg border border-[#161514]/10 hover:border-brand-orange transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="w-14 h-14 rounded-md bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-orange/80 block mb-1">
                    {service.tag}
                  </span>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-[#161514] mb-3 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#161514]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#161514]/5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#161514] text-brand-ivory rounded-md font-display text-lg tracking-[0.2em] uppercase transition-all duration-300 hover:bg-brand-orange hover:text-white shadow-md"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
