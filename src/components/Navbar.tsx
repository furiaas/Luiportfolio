import React, { useState } from 'react';
import { TapeSnippet } from './TapeSnippet.tsx';

interface NavItem {
  label: string;
  href: string;
  color: string;
  rotation: number;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Trabalhos', href: '#trabalhos', color: '#FFB703', rotation: -1.5 },
  { label: 'Sobre', href: '#sobre', color: '#9BC53D', rotation: 1.8 },
  { label: 'Jingle', href: '#jingle-campanha', color: '#2A9D8F', rotation: -1.2 },
  { label: 'Color', href: '#color', color: '#00E0FF', rotation: 1.5 },
  { label: 'Depoimentos', href: '#depoimentos', color: '#B0306A', rotation: 2 },
  { label: 'Contato', href: '#contato', color: '#D93A2B', rotation: -1 },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 px-4 sm:px-8 bg-[#C5B592]/92 backdrop-blur-md border-b border-[#AFA080]/40">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="relative inline-block px-3 py-1 bg-[#dba672] rounded-xs shadow-md border border-[#be8855]/60 transform -rotate-1 hover:rotate-0 transition-transform group"
          style={{
            backgroundImage: 'radial-gradient(circle at 60% 40%, rgba(255, 245, 225, 0.28) 0%, rgba(219, 166, 114, 0.2) 40%, rgba(160, 95, 45, 0.32) 75%, rgba(130, 75, 30, 0.2) 100%)',
          }}
          aria-label="Lui - Início"
        >
          <TapeSnippet position="top-center" width="w-12" height="h-3.5" rotation={-2} />
          <span 
            className="font-reenie font-bold text-2xl sm:text-3xl text-[#1A1817] tracking-wider select-none"
            style={{ filter: 'url(#hand-drawn-filter)' }}
          >
            LUI
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop: Paper tags taped) */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-4 md:absolute md:left-1/2 md:-translate-x-1/2" aria-label="Navegação Principal">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="relative px-3 py-1.5 bg-[#FAF8F5] hover:bg-white text-xs sm:text-sm font-typewriter text-[#3A3632] rounded-xs shadow-xs border border-[#CDBE96]/50 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer whitespace-nowrap shrink-0 group"
              style={{ transform: `rotate(${item.rotation}deg)` }}
            >
              {/* Little tape snippet at the top edge */}
              <div 
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-3 masking-tape rounded-xs opacity-75 group-hover:opacity-100 transition-opacity"
                style={{ transform: `translateX(-50%) rotate(${item.rotation * -2}deg)` }}
              />
              <span className="relative z-10 flex items-center gap-1.5">
                <span 
                  className="w-2 h-2 rounded-full inline-block shrink-0" 
                  style={{ backgroundColor: item.color }} 
                />
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        {/* Zone 3: Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile Bloquinho Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2 px-3 bg-[#FAF8F5] border border-[#CDBE96] rounded-xs shadow-xs flex items-center gap-1 font-typewriter text-xs text-[#3A3632] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            <TapeSnippet position="top-center" width="w-8" height="h-3" rotation={2} />
            <span className="font-bold text-sm">menu</span>
            <span className="text-base leading-none">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Bloco de Notas / Caderninho) */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden mt-2 p-4 bg-[#FAF8F5] rounded-xs shadow-xl border-2 border-[#CDBE96] relative transform rotate-0.5 animate-fadeIn"
          style={{ backgroundImage: 'repeating-linear-gradient(#FAF8F5, #FAF8F5 24px, #e8e3d6 25px)' }}
        >
          <div className="w-16 h-4 mx-auto -mt-6 mb-3 masking-tape rounded-xs" />
          <p className="font-kalam text-xs text-[#3A3632]/70 text-center mb-2">
            índice do caderno:
          </p>
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-3 py-2 bg-white/70 hover:bg-white text-sm font-typewriter text-[#3A3632] rounded-xs border border-[#CDBE96]/30 flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.label}
                </span>
                <span className="text-xs text-[#3A3632]/60 font-kalam">folha →</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
