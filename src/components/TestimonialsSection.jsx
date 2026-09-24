import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Sophia Martinez",
      role: "Fashion Director",
      quote: "BLK ORANGE is hands down the best salon experience I’ve ever had. The hair coloring precision and attention to detail are unmatched!",
      rating: 5
    },
    {
      name: "Aarav Sharma",
      role: "Architect",
      quote: "Finding a salon that understands modern menswear styling with luxury hygiene standards is rare. BLK ORANGE delivers every single time.",
      rating: 5
    },
    {
      name: "Elena Rostova",
      role: "Bridal Client",
      quote: "My bridal makeup and hair were absolute perfection. The team made me feel relaxed, stunning, and radiant on my wedding day!",
      rating: 5
    }
  ];

  return (
    <section className="bg-[#F3EDE6] text-[#161514] py-20 lg:py-28 px-6 sm:px-12 md:px-16 lg:px-20 border-b border-[#161514]/10">
      <div className="w-full max-w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange block mb-2">
            Client Love & Reviews
          </span>
          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-[#161514]">
            TESTIMONIALS
          </h2>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2] p-8 rounded-lg border border-[#161514]/10 flex flex-col justify-between hover:border-brand-orange transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-brand-orange">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-orange/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#161514]/80 leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#161514]/10">
                <h4 className="font-display text-xl uppercase tracking-wider text-[#161514]">
                  — {rev.name} —
                </h4>
                <p className="text-[10px] text-brand-orange font-bold uppercase tracking-widest mt-0.5">
                  {rev.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
