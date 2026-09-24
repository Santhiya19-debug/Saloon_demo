import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';

export default function GallerySection() {
  const galleryItems = [
    { title: "Couture Hair Styling", category: "Hair Craft", img: "/assets/images/cortourmodel.png" },
    { title: "HD Bridal Transformation", category: "Makeup Artistry", img: "/assets/images/actmodels.png" },
    { title: "Precision Balayage & Toning", category: "Color Studio", img: "/assets/images/model2.2.png" },
    { title: "Luxury Skin Hydration", category: "Beauty Care", img: "/assets/images/model3.png" }
  ];

  return (
    <section id="gallery" className="bg-[#161514] text-brand-ivory py-20 lg:py-28 px-6 sm:px-12 md:px-16 lg:px-20 border-b border-white/10">
      <div className="w-full max-w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange block mb-2">
              Portfolio & Transformations
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-brand-ivory">
              GALLERY / OUR WORK
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-orange hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Us on Instagram</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-lg overflow-hidden bg-[#242220] border border-white/10 h-80 sm:h-96 shadow-lg"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-orange block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.25em] uppercase text-brand-ivory/80 hover:text-brand-orange transition-colors"
          >
            <span>View Complete Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
