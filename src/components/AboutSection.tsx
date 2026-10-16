import React from 'react';
import { TapeSnippet } from './TapeSnippet.tsx';
import { HandDrawnUnderline, HandDrawnStar } from './HandDrawnSvgDefs.tsx';
import { SKILLS_DATA, CRAYON_COLORS } from '../data/projects.ts';
import luiFoto from '../assets/images/LuiTirandoFotoBemBoa.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* TORN NOTEBOOK SHEET CONTAINER - Página de Caderno Completa */}
        <div
          className="relative bg-[#FAF8F5] rounded-sm p-6 sm:p-10 md:p-12 shadow-2xl border border-[#CDBE96]/60 transform -rotate-0.5 overflow-hidden notebook-sheet-about"
        >
          
          {/* Taped to the wall at corners */}
          <TapeSnippet position="top-left" width="w-24" height="h-6" rotation={-22} />
          <TapeSnippet position="top-right" width="w-24" height="h-6" rotation={20} />
          <TapeSnippet position="bottom-left" width="w-20" height="h-5" rotation={15} />

          {/* Notebook Torn Perforation at Top */}
          <div className="absolute -top-3 left-8 right-8 h-4 flex justify-between pointer-events-none opacity-50">
            {Array.from({ length: 22 }).map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#C5B592] shadow-inner" />
            ))}
          </div>

          {/* Section Heading on Notebook Sheet */}
          <div className="mb-8 pl-8 md:pl-12">
            <h2 
              className="font-reenie font-bold text-4xl sm:text-5xl md:text-6xl text-[#3A3632] leading-none"
              style={{ filter: 'url(#hand-drawn-filter)' }}
            >
              QUEM É O LUI?
            </h2>
            <HandDrawnUnderline className="w-56 h-3 mt-1" color={CRAYON_COLORS.orange} />
          </div>

          {/* Two-column layout: Left is Polaroid, Right is Bio & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pl-4 md:pl-8">
            
            {/* Left Column: Crooked Polaroid with tape */}
            <div className="md:col-span-5 flex flex-col items-center">
              
              {/* Polaroid Frame */}
              <div className="relative bg-white p-3 pb-8 rounded-xs shadow-lg border border-[#CDBE96]/40 transform -rotate-3 transition-transform hover:rotate-0 duration-300 w-full max-w-xs">
                <TapeSnippet position="top-center" width="w-20" height="h-5" rotation={-2} />
                
                <div className="relative aspect-square overflow-hidden bg-[#EFEBDD] rounded-2xs">
                  <img
                    src={luiFoto}
                    alt="Foto polaroid de Lui - marina - sp, oct 23"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#3A3632]/5 pointer-events-none mix-blend-multiply" />
                </div>

                <p className="font-kalam text-center text-xs sm:text-sm text-[#3A3632] mt-3">
                  MB Consultoria Política
                </p>
              </div>

            </div>

            {/* Right Column: Narrative Bio & Crayon-filled Skills */}
            <div className="md:col-span-7 flex flex-col justify-between">
              
              {/* Bio Text Area - Aligned to Notebook Page Lines */}
              <div className="relative font-kalam text-[15px] sm:text-base md:text-[17px] text-[#2C2825] leading-[32px] select-text">
                <p className="mb-8">
                  Meu nome é Pedro e sou um editor obcecado por organizar vídeos em storytelling. Não me limito a cortar clipes: trabalho com engenharia psicológica, gatilhos e ritmo na criação de conteúdos que fazem o público parar de rolar a tela.
                </p>
                <p className="mb-8">
                  Em um mundo cercado de conteúdos poluídos, meu trabalho mantém o espectador confortável ao longo de todo o vídeo, combinando fundamentos da criação com o algoritmo do público-alvo.
                </p>
                <p className="font-bold text-[#E08A2E]">
                  Quando não estou na timeline: jogo minecraft, coleciono referências nas redes e visito lugares para fotografar.
                </p>
              </div>

              {/* 2x2 GRID OF 4 SQUARE BLOCKS */}
              <div className="mt-8 pt-6 border-t border-dashed border-[#3A3632]/25">
                {/* 2x2 grid with increased horizontal distance for blocks 2 and 4 */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-8 sm:gap-x-12 md:gap-x-16 max-w-sm sm:max-w-md">
                  {[
                    {
                      id: 'exp',
                      val: '3',
                      color: '#00E0FF',
                      rot: -1.8,
                      bg: 'bg-[#f3e9dd]',
                      renderLabel: () => (
                        <>
                          <span className="sm:hidden leading-tight block text-xs">
                            anos/<br />experiência
                          </span>
                          <span className="hidden sm:inline sm:text-base">
                            anos/experiência
                          </span>
                        </>
                      ),
                    },
                    {
                      id: 'views',
                      val: '7M',
                      color: '#FF9100',
                      rot: 1.5,
                      bg: 'bg-[#f4f0ed]',
                      renderLabel: () => (
                        <span className="text-[11.5px] sm:text-base leading-tight block">
                          Visualizações
                        </span>
                      ),
                    },
                    {
                      id: 'projects',
                      val: '50',
                      color: '#FF9100',
                      rot: -1.2,
                      bg: 'bg-[#f4f0ed]',
                      renderLabel: () => (
                        <span className="text-sm sm:text-base leading-tight block">
                          Projetos
                        </span>
                      ),
                    },
                    {
                      id: 'clients',
                      val: '15',
                      color: '#00E0FF',
                      rot: 1.8,
                      bg: 'bg-[#f3e9dd]',
                      renderLabel: () => (
                        <>
                          <div className="sm:hidden flex flex-col items-center leading-tight">
                            <span className="text-[10px]">Clientes</span>
                            <span className="text-[12px]">impulsionados</span>
                          </div>
                          <span className="hidden sm:inline sm:text-base">
                            Clientes impulsionados
                          </span>
                        </>
                      ),
                    },
                  ].map((item) => (
                    <div
                      key={item.id}
                      className={`relative aspect-square ${item.bg} rounded-xs p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-md border border-[#3A3632]/20 transition-all duration-300 ease-out hover:rotate-0 hover:-translate-y-2 hover:scale-[1.06] hover:shadow-[0_20px_25px_-5px_rgba(40,30,20,0.35),0_10px_10px_-5px_rgba(40,30,20,0.2)]`}
                      style={{ transform: `rotate(${item.rot}deg)` }}
                    >
                      <TapeSnippet position="top-center" width="w-10 sm:w-12" height="h-3.5" rotation={item.rot * -2} />
                      <div
                        className="leading-none select-none drop-shadow-sm tracking-tight flex items-start justify-center"
                        style={{ color: item.color }}
                      >
                        <span
                          className={`font-kalam font-bold leading-none flex items-baseline tracking-tight ${
                            item.val.length > 1
                              ? 'text-5xl sm:text-6xl md:text-7xl'
                              : 'text-6xl sm:text-7xl md:text-8xl'
                          }`}
                          style={{ filter: 'url(#hand-drawn-filter)' }}
                        >
                          {item.val}
                        </span>
                        <span
                          className="font-kalam font-bold leading-none inline-block -translate-y-1 sm:-translate-y-2 ml-2 sm:ml-2.5 text-[38px] sm:text-[50px] md:text-[68px]"
                          style={{
                            filter: 'url(#hand-drawn-filter)',
                          }}
                        >
                          +
                        </span>
                      </div>
                      <div className="font-typewriter text-[#3A3632] mt-1.5 font-bold leading-tight text-center px-1">
                        {item.renderLabel()}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
