import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-ivory flex flex-col font-sans selection:bg-brand-orange selection:text-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Quote / Tagline Moving Marquee */}
        <MarqueeSection />

        {/* 4. Our Services Section */}
        <ServicesSection />

        {/* 5. About Us Section */}
        <AboutSection />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 7. Gallery / Our Work Showcase */}
        <GallerySection />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Ready for a New Look CTA Banner */}
        <CtaBanner />
      </main>

      {/* 10. Comprehensive Footer */}
      <Footer />
    </div>
  );
}
