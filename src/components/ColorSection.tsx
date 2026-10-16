import React, { useState } from 'react';
import { TapeSnippet } from './TapeSnippet.tsx';
import { HandDrawnUnderline, HandDrawnStar } from './HandDrawnSvgDefs.tsx';
import { CRAYON_COLORS } from '../data/projects.ts';
import pastordinoildoAntes from '../assets/images/Pastordinoildo1.webp';
import pastordinoildoDepois from '../assets/images/Pastordinoildo2.webp';

export const ColorSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [viewMode, setViewMode] = useState<'slider' | 'split'>('slider');

  return (
    <section id="color" className="py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title Sheet */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block relative px-8 py-3 bg-[#FAF8F5] rounded-xs shadow-md border border-[#CDBE96]/60 transform -rotate-1">
            <TapeSnippet position="top-center" width="w-20" height="h-5" rotation={1} />
            <h2 
              className="font-reenie font-bold text-4xl sm:text-5xl md:text-6xl text-[#3A3632]"
              style={{ filter: 'url(#hand-drawn-filter)' }}
            >
              CORREÇÃO DE COR
            </h2>
            <HandDrawnUnderline className="w-56 h-3 mx-auto mt-1" color={CRAYON_COLORS.teal} />
            <p className="font-kalam text-sm sm:text-base text-[#3A3632]/80 mt-1">
              antes & depois · tratamento e gradação tonal
            </p>
          </div>
        </div>

        {/* Mode Toggle Controls */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#FAF8F5] rounded-xs border border-[#CDBE96]/60 shadow-xs">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1 font-typewriter text-xs font-bold rounded-2xs transition-all cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-[#2A9D8F] text-white shadow-xs'
                  : 'text-[#3A3632]/70 hover:text-[#3A3632] hover:bg-white/60'
              }`}
            >
              Comparador Deslizante
            </button>
            <button
              onClick={() => setViewMode('split')}
              className={`px-3 py-1 font-typewriter text-xs font-bold rounded-2xs transition-all cursor-pointer ${
                viewMode === 'split'
                  ? 'bg-[#2A9D8F] text-white shadow-xs'
                  : 'text-[#3A3632]/70 hover:text-[#3A3632] hover:bg-white/60'
              }`}
            >
              Lado a Lado
            </button>
          </div>
        </div>

        {/* Main Paper Sheet Container */}
        <div className="relative bg-[#FAF8F5] rounded-xs p-4 sm:p-8 md:p-10 shadow-2xl border border-[#CDBE96]/60">
          <TapeSnippet position="top-left" width="w-24" height="h-5" rotation={-14} />
          <TapeSnippet position="top-right" width="w-24" height="h-5" rotation={16} />

          {viewMode === 'slider' ? (
            /* Mode: Comparador Deslizante (Slider Interativo) */
            <div className="max-w-md mx-auto">
              <div className="relative bg-white p-3 sm:p-4 pb-6 rounded-xs shadow-xl border border-[#CDBE96]/60">
                <TapeSnippet position="top-center" width="w-20" height="h-5" rotation={-1} />
                
                <div 
                  className="relative aspect-9/16 max-h-[520px] mx-auto rounded-2xs overflow-hidden shadow-inner select-none cursor-ew-resize bg-[#1A1817] mt-1"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                    setSliderPos((x / rect.width) * 100);
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                    setSliderPos((x / rect.width) * 100);
                  }}
                  onTouchMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const touch = e.touches[0];
                    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                    setSliderPos((x / rect.width) * 100);
                  }}
                >
                  {/* Base Image (Depois) */}
                  <img
                    src={pastordinoildoDepois}
                    alt="Depois do color grading"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  {/* Clipped Image & Badge (Antes) */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  >
                    <img
                      src={pastordinoildoAntes}
                      alt="Antes do color grading"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/60 text-white font-typewriter text-[10px] rounded-2xs">
                      ANTES
                    </div>
                  </div>

                  {/* Clipped Badge (Depois) - corta conforme a linha avança para a direita */}
                  <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                  >
                    <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#2A9D8F]/90 text-white font-typewriter text-[10px] font-bold rounded-2xs shadow-xs">
                    DEPOIS
                    </div>
                  </div>

                  {/* Slider Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)] pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF8F5] border-2 border-[#2A9D8F] shadow-lg flex items-center justify-center text-[#2A9D8F] text-xs font-bold">
                      ↔
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 text-center">
                  <p className="font-kalam text-xs text-[#8A8075]">
                    Passe o mouse ou toque na foto para deslizar entre o perfil flat e o color grading
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Mode: Lado a Lado - Separados em Antes e Depois */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-start">
              
              {/* Card 1: ANTES (Pastordinoildo1.webp) */}
              <div className="relative bg-white p-3 sm:p-4 pb-6 rounded-xs shadow-xl border border-[#CDBE96]/60 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <TapeSnippet position="top-center" width="w-20" height="h-5" rotation={-2} />
                
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="font-typewriter text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-[#EFEBDD] text-[#5A544E] rounded-2xs border border-[#CDBE96]/60">
                    ANTES · Log
                  </span>
                  <span className="font-kalam text-xs text-[#8A8075]">
                    bruto da câmera
                  </span>
                </div>

                {/* 9:16 Photo Frame */}
                <div className="relative aspect-9/16 max-h-[520px] mx-auto rounded-2xs overflow-hidden shadow-inner bg-[#1A1817]">
                  <img
                    src={pastordinoildoAntes}
                    alt="Antes da correção de cor - Perfil de gravação Flat"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  
                </div>

                {/* Caption Description */}
                <div className="mt-3.5 text-center">
                  <p className="font-kalam font-bold text-base text-[#5A544E]">
                    Antes da Correção de Cor
                  </p>
                  <p className="font-typewriter text-xs text-[#8A8075] mt-0.5">
                    Imagem sem curvas tonais, saturação neutra e baixo contraste
                  </p>
                </div>
              </div>

              {/* Card 2: DEPOIS (Pastordinoildo2.webp) */}
              <div className="relative bg-white p-3 sm:p-4 pb-6 rounded-xs shadow-xl border border-[#CDBE96]/60 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <TapeSnippet position="top-center" width="w-20" height="h-5" rotation={2} />
                
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-2.5 px-1">
                  <span className="flex items-center gap-1.5 font-typewriter text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-[#2A9D8F] text-white rounded-2xs shadow-xs">
                    <HandDrawnStar className="w-3.5 h-3.5 text-white" />
                    DEPOIS · Color Grading
                  </span>
                  <span className="font-kalam text-xs text-[#2A9D8F] font-bold">
                    finalizado
                  </span>
                </div>

                {/* 9:16 Photo Frame */}
                <div className="relative aspect-9/16 max-h-[520px] mx-auto rounded-2xs overflow-hidden shadow-inner bg-[#1A1817]">
                  <img
                    src={pastordinoildoDepois}
                    alt="Depois da correção de cor - Color Grading finalizado"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  
                </div>

                {/* Caption Description */}
                <div className="mt-3.5 text-center">
                  <p className="font-kalam font-bold text-base text-[#2A9D8F]">
                    Depois da Correção de Cor
                  </p>
                  <p className="font-typewriter text-xs text-[#5A544E] mt-0.5">
                    Tons de pele quentes, profundidade no preto e folhagens naturais
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
