import React, { useEffect, useState } from 'react';
import { Project } from '../data/projects.ts';
import { TapeSnippet } from './TapeSnippet.tsx';
import { HandDrawnSpiralSpine, HandDrawnUnderline, HandDrawnStar } from './HandDrawnSvgDefs.tsx';

interface SketchbookModalProps {
  project: Project | null;
  onClose: () => void;
}

export const SketchbookModal: React.FC<SketchbookModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  // Reset active image on project change
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  if (!project) return null;

  const currentImg = project.gallery[activeImageIndex] || project.mainImage;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sketchbook-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/60 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Outer book container */}
      <div className="relative w-full max-w-5xl my-auto bg-[#EFEBDD] rounded-lg shadow-2xl p-2 sm:p-4 border-4 border-[#3A3632]/20">
        
        {/* Close Button as a taped paper scrap */}
        <button
          onClick={onClose}
          className="absolute -top-3 right-4 z-40 px-3.5 py-1.5 bg-[#E6DDB8] hover:bg-white text-xs sm:text-sm font-typewriter text-[#3A3632] rounded-xs shadow-md border border-[#CDBE96] transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 group"
          aria-label="Fechar caderno"
        >
          <div className="w-8 h-3 -top-2 left-1/2 -translate-x-1/2 absolute masking-tape" />
          <span className="text-base font-bold text-[#D93A2B] group-hover:rotate-90 transition-transform">✕</span>
          <span>fechar caderno (ESC)</span>
        </button>

        {/* OPEN SKETCHBOOK SPREAD: Two pages with central spiral */}
        <div className="relative flex flex-col md:flex-row bg-[#E6E7E1] rounded-sm overflow-hidden shadow-inner border border-[#CDBE96]/40 min-h-[540px]">
          
          {/* CENTRAL SPIRAL WIRE (Desktop) */}
          <div className="hidden md:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 z-30 pointer-events-none items-center justify-center">
            {/* Center shadow fold between pages */}
            <div className="absolute inset-y-0 w-8 bg-gradient-to-r from-black/15 via-black/35 to-black/15" />
            <HandDrawnSpiralSpine count={16} className="h-full" />
          </div>

          {/* LEFT PAGE: Visual Artwork & Gallery */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-[#E6DDB8] relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#CDBE96]/50">
            {/* Corner tape on left page */}
            <TapeSnippet position="top-left" width="w-20" height="h-5" rotation={-15} />

            <div>
              {/* Header note */}
              <div className="flex items-center justify-between mb-3 text-xs font-typewriter text-[#3A3632]/75">
                <span>pág. esquerda // prancha visual</span>
                <span className="font-kalam text-sm text-[#E08A2E]">estudo original</span>
              </div>

              {/* Main Artwork Taped to Page */}
              <div className="relative bg-white p-2.5 sm:p-3 pb-8 rounded-xs shadow-md border border-[#CDBE96]/40 transform -rotate-0.5 transition-transform">
                <TapeSnippet position="top-right" width="w-16" height="h-4" rotation={14} />
                
                <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-[#EFEBDD]">
                  <img
                    src={currentImg}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback container per zero-broken-image policy
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle paper grain texture */}
                  <div className="absolute inset-0 bg-[#3A3632]/5 pointer-events-none mix-blend-multiply" />
                </div>

                {/* Polaroid-style caption */}
                <p className="font-kalam text-xs sm:text-sm text-[#3A3632] mt-2 text-center">
                  "{project.shortDesc}"
                </p>
              </div>

              {/* Gallery Thumbnails if more than 1 image */}
              {project.gallery.length > 1 && (
                <div className="mt-4 flex items-center gap-2">
                  <span className="font-typewriter text-xs text-[#3A3632]/70 mr-1">outras pranchas:</span>
                  {project.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-11 rounded-xs overflow-hidden border-2 transition-transform cursor-pointer ${
                        activeImageIndex === idx
                          ? 'border-[#E08A2E] scale-105 shadow-sm'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom hand-drawn annotation */}
            <div className="mt-4 pt-3 border-t border-dashed border-[#3A3632]/20 flex items-center justify-between text-xs font-kalam text-[#3A3632]/80">
              <span className="flex items-center gap-1">
                <HandDrawnStar className="w-3.5 h-3.5" color={project.crayonColor} />
                <span>acervo físico do ateliê</span>
              </span>
              <span className="font-typewriter text-[11px] text-[#3A3632]/60">ref. {project.id}</span>
            </div>
          </div>

          {/* RIGHT PAGE: Editorial Story & Project Details */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 bg-[#E6E7E1] relative flex flex-col justify-between paper-ruled">
            <TapeSnippet position="top-right" width="w-20" height="h-5" rotation={18} />

            <div>
              {/* Category & Year (clean unboxed metadata) */}
              <div className="flex items-center gap-2 text-xs font-typewriter text-[#3A3632]/75 mb-2">
                <span className="font-bold" style={{ color: project.crayonColor }}>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>Ano {project.year}</span>
                <span aria-hidden="true">·</span>
                <span>{project.client}</span>
              </div>

              {/* Title in Reenie Beanie font */}
              <h3 
                id="sketchbook-project-title"
                className="font-reenie font-bold text-3xl sm:text-4xl md:text-5xl text-[#3A3632] leading-tight mb-1"
                style={{ color: project.crayonColor, filter: 'url(#hand-drawn-filter)' }}
              >
                {project.title}
              </h3>
              <HandDrawnUnderline className="w-48 h-2.5 mb-4" color={project.crayonColor} />

              {/* Role & Client info */}
              <div className="mb-4 p-2.5 bg-white/60 rounded-xs border border-[#CDBE96]/30 text-xs sm:text-sm">
                <p className="font-typewriter text-[#3A3632]">
                  <strong className="text-[#3A3632]">Função:</strong> {project.role}
                </p>
                <p className="font-typewriter text-[#3A3632] mt-1">
                  <strong className="text-[#3A3632]">Cliente:</strong> {project.client}
                </p>
              </div>

              {/* Full Description / Story */}
              <div className="prose prose-sm font-karla text-[#3A3632] leading-relaxed mb-5">
                <p>{project.fullDesc}</p>
              </div>

              {/* Materials & Tools (Materiais do Caderno) */}
              <div className="mt-4">
                <h4 className="font-kalam font-bold text-sm text-[#3A3632] mb-2 flex items-center gap-1.5">
                  <span className="text-base" style={{ color: project.crayonColor }}>✎</span>
                  <span>Materiais & Ferramentas Usadas:</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-white/70 text-xs font-typewriter text-[#3A3632] rounded-xs border border-[#CDBE96]/40 shadow-2xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom action note */}
            <div className="mt-6 pt-4 border-t border-[#CDBE96]/40 flex items-center justify-between">
              <span className="font-kalam text-xs text-[#3A3632]/70">
                deseja um projeto assim?
              </span>
              <a
                href="#contato"
                onClick={onClose}
                className="px-3.5 py-1.5 bg-[#E08A2E] hover:bg-[#c97822] text-white font-kalam text-sm font-bold rounded-xs shadow-xs transition-transform hover:scale-105"
              >
                Pedir proposta similar →
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
