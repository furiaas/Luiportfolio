import React, { useState, useEffect } from 'react';
import { HandDrawnSvgDefs } from './components/HandDrawnSvgDefs.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroBanner } from './components/HeroBanner.tsx';
import { WorksSection } from './components/WorksSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { CampaignJingleSection } from './components/CampaignJingleSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { FooterSection } from './components/FooterSection.tsx';

export default function App() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Subtle mouse parallax on desktop
  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || window.innerWidth < 768) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    setMouseOffset({ x, y });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="wall-texture min-h-screen text-[#3A3632] relative overflow-x-hidden selection:bg-[#FFB703]/30 selection:text-[#3A3632]"
    >
      {/* SVG Global Filters and Doodles definition */}
      <HandDrawnSvgDefs />

      {/* Subtle floating background scraps (scattered on the cream wall) */}
      <div 
        className="pointer-events-none fixed inset-0 overflow-hidden z-0 opacity-40 select-none transition-transform duration-700 ease-out"
        style={{
          transform: reducedMotion ? 'none' : `translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px)`,
        }}
        aria-hidden="true"
      >
        {/* Scrap 1: Off-white paper triangle top right */}
        <div className="absolute top-28 right-8 w-14 h-14 bg-[#FAF8F5] rounded-xs shadow-md transform rotate-12 border border-[#CDBE96]/50 opacity-70" />
        {/* Scrap 2: Tiny doodle circle mid left */}
        <div className="absolute top-[42%] left-6 w-10 h-10 border-2 border-dashed border-[#FFB703]/40 rounded-full transform -rotate-12" />
        {/* Scrap 3: Off-white scrap lower right */}
        <div className="absolute top-[75%] right-10 w-16 h-10 bg-[#FAF8F5] rounded-xs shadow-md transform rotate-6 border border-[#CDBE96]/50 opacity-60" />
        {/* Scrap 4: Tiny green crayon scribble mid right */}
        <div className="absolute top-[28%] right-24 w-8 h-8 rounded-full border border-[#9BC53D]/40 transform rotate-45" />
      </div>

      {/* Main App Content Layout */}
      <div className="relative z-10">
        {/* 2. Top Navigation */}
        <Navbar />

        <main id="main-content">
          {/* 1. Hero Section: LUI banner & Showreel */}
          <HeroBanner />

          {/* 3. Selected Works Masonry */}
          <WorksSection />

          {/* 4. About Section: Lined notebook page */}
          <AboutSection />

          {/* 5. Jingle de Campanha: Telão 16:9 & Storytelling dos 8 mil espectadores */}
          <CampaignJingleSection />

          {/* 6. Testimonials Section: 3 colored post-its */}
          <TestimonialsSection />

          {/* 7. Contact Section: Acabou */}
          <ContactSection />
        </main>

        {/* 8. Footer: Masking tape across the screen */}
        <FooterSection />
      </div>
    </div>
  );
}
