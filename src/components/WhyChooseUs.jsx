import React from 'react';
import { Gem, Leaf, ShieldCheck, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: "Professional Stylists",
      desc: "Internationally trained master hair & makeup artists with years of couture experience.",
      icon: Gem
    },
    {
      title: "Premium Products",
      desc: "We exclusively use authentic, sulfate-free, dermatologically approved luxury products.",
      icon: Leaf
    },
    {
      title: "Hygienic & Safe",
      desc: "Medical-grade sterilization for all tools and single-use disposable kits for ultimate safety.",
      icon: ShieldCheck
    },
    {
      title: "Unisex Salon",
      desc: "Thoughtfully curated luxury studio designed to provide equal comfort for men and women.",
      icon: Users
    }
  ];

  return (
    <section className="bg-[#FAF7F2] text-[#161514] py-20 lg:py-24 px-6 sm:px-12 md:px-16 lg:px-20 border-b border-[#161514]/10">
      <div className="w-full max-w-full text-center mb-16">
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange block mb-2">
          The BLK ORANGE Difference
        </span>
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#161514]">
          WHY CHOOSE US?
        </h2>
      </div>

      <div className="w-full max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#F3EDE6] p-8 rounded-lg border border-[#161514]/10 text-center flex flex-col items-center hover:border-brand-orange transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#161514] mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-[#161514]/75 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
