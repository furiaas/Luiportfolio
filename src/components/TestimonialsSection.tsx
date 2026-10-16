import React from 'react';
import { TapeSnippet } from './TapeSnippet.tsx';
import { TESTIMONIALS, CRAYON_COLORS } from '../data/projects.ts';
import { HandDrawnUnderline, HandDrawnStar, HandDrawnGavel } from './HandDrawnSvgDefs.tsx';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative px-8 py-3 bg-[#FAF8F5] rounded-xs shadow-md border border-[#CDBE96]/60 transform -rotate-1">
            <TapeSnippet position="top-center" width="w-20" height="h-5" rotation={1} />
            <h2 
              className="font-reenie font-bold text-4xl sm:text-5xl md:text-6xl text-[#3A3632]"
              style={{ filter: 'url(#hand-drawn-filter)' }}
            >
              BILHETES DE QUEM CONFIA
            </h2>
            <HandDrawnUnderline className="w-56 h-3 mx-auto mt-1" color={CRAYON_COLORS.magenta} />
            <p className="font-kalam text-sm sm:text-base text-[#3A3632]/80 mt-1">
              reviews sobre o meu trabalho
            </p>
          </div>
        </div>

        {/* 3 Colored Post-its Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 pt-4">
          {TESTIMONIALS.map((t, idx) => {
            if ('isTorn' in t && t.isTorn) {
              return (
                <div
                  key={t.id}
                  className="relative transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 group select-none min-h-[310px] flex flex-col justify-between"
                  style={{
                    transform: `rotate(${t.rotation}deg)`,
                  }}
                >
                  {/* Background Opaque Shadow Rectangle in the shape of a post-it with :( in the center */}
                  <div
                    className="absolute inset-0 rounded-xs bg-[#241F18]/12 border-2 border-dashed border-[#3A3632]/25 shadow-inner flex flex-col items-center justify-center pointer-events-none z-0 overflow-hidden"
                    aria-hidden="true"
                  >
                    <span
                      className="font-kalam font-bold text-4xl sm:text-5xl text-[#3A3632]/60 select-none tracking-tight transform -rotate-3 leading-none"
                      style={{ filter: 'url(#hand-drawn-filter)' }}
                    >
                      :(
                    </span>
                    <span
                      className="font-kalam text-[10px] sm:text-[11px] text-[#3A3632]/50 select-none mt-1.5 transform -rotate-1 text-center px-4"
                      style={{ filter: 'url(#hand-drawn-filter)' }}
                    >
                      *alguém lê essa parte?
                    </span>
                  </div>

                  {/* Main Masking Tape on top of the note */}
                  <TapeSnippet
                    position="top-center"
                    width="w-16 sm:w-20"
                    height="h-5"
                    rotation={-2}
                  />

                  {/* 1. Upper Severely Shredded Scrap (Compact on mobile) */}
                  <div
                    className="relative z-10 p-3.5 pb-7 sm:p-6 sm:pb-16 rounded-t-xs shadow-md border-t border-l border-[#3A3632]/10 overflow-hidden"
                    style={{
                      backgroundColor: t.postItColor,
                      clipPath:
                        'polygon(0% 0%, 100% 0%, 100% 28%, 94% 22%, 97% 38%, 88% 26%, 92% 48%, 82% 35%, 85% 58%, 76% 42%, 79% 68%, 68% 46%, 72% 75%, 60% 52%, 64% 84%, 52% 58%, 56% 92%, 44% 65%, 48% 97%, 36% 72%, 40% 100%, 28% 68%, 32% 95%, 20% 64%, 24% 90%, 12% 62%, 16% 86%, 0% 70%)',
                    }}
                  >
                    {/* Decorative crayon quote mark, torn and faded */}
                    <div
                      className="font-reenie text-3xl sm:text-5xl leading-none -mt-1 sm:-mt-2 -mb-2 sm:-mb-3 select-none opacity-40"
                      style={{ color: t.crayonAccent }}
                    >
                      “
                    </div>

                    {/* Torn paper lines without words */}
                    <div className="my-1 sm:my-2 min-h-[20px] sm:min-h-[64px] flex flex-col justify-center gap-1.5 sm:gap-2 select-none pr-10 sm:pr-14 opacity-30">
                      <div className="w-16 sm:w-28 h-0.5 sm:h-1 bg-[#2A9D8F]/50 rounded-full" />
                      <div className="w-12 sm:w-20 h-0.5 sm:h-1 bg-[#3A3632]/40 rounded-full" />
                      <div className="w-8 sm:w-14 h-0.5 sm:h-1 bg-[#2A9D8F]/40 rounded-full" />
                    </div>

                    {/* Crayon scribble scratches across the torn edge */}
                    <div className="hidden sm:block absolute right-4 top-8 w-16 h-12 border-b-2 border-r-2 border-dashed border-[#2A9D8F]/30 transform rotate-12 pointer-events-none" />

                    {/* Exposed white pulp fiber along the deep tear */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-white/40" />
                  </div>

                  {/* A tiny loose paper shred floating in the tear gap (tucked safely to the left) */}
                  <div 
                    className="absolute left-2.5 sm:left-6 top-[40%] sm:top-[48%] w-5 h-2.5 sm:w-8 sm:h-4 shadow-sm border border-[#3A3632]/10 pointer-events-none transform -rotate-12 z-10"
                    style={{
                      backgroundColor: t.postItColor,
                      clipPath: 'polygon(0% 40%, 30% 0%, 100% 30%, 75% 100%, 15% 90%)',
                    }}
                  />

                  {/* 2. Lower-Right Mutilated Torn Scrap (Compact and shifted down on mobile) */}
                  <div
                    className="relative z-10 mt-auto sm:-mt-10 ml-auto w-[65%] sm:w-[76%] p-3 pt-6 pb-3 sm:p-5 sm:pt-10 sm:pb-5 rounded-b-xs shadow-lg border-b border-r border-[#3A3632]/10 transform rotate-4 hover:rotate-1 translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-3 transition-transform duration-300 overflow-hidden"
                    style={{
                      backgroundColor: t.postItColor,
                      clipPath:
                        'polygon(35% 0%, 42% 12%, 36% 8%, 50% 18%, 44% 12%, 58% 24%, 52% 16%, 66% 28%, 60% 20%, 74% 34%, 68% 24%, 82% 40%, 76% 28%, 90% 46%, 84% 34%, 97% 52%, 91% 38%, 100% 54%, 100% 100%, 0% 100%, 0% 24%, 12% 18%, 6% 12%, 22% 8%, 15% 4%, 28% 2%)',
                    }}
                  >
                    {/* Crooked emergency washi tape piece pinning the loose shred */}
                    <TapeSnippet
                      position="top-right"
                      width="w-9 sm:w-14"
                      height="h-3 sm:h-4"
                      rotation={18}
                    />

                    {/* Abstract scribble lines without words */}
                    <div className="min-h-[16px] sm:min-h-[36px] flex flex-col justify-center gap-1 sm:gap-1.5 select-none pt-1 sm:pt-2 pl-3 sm:pl-4 pr-1 opacity-25">
                      <div className="w-14 sm:w-24 h-0.5 sm:h-1 bg-[#3A3632]/40 rounded-full" />
                      <div className="w-10 sm:w-16 h-0.5 sm:h-1 bg-[#2A9D8F]/40 rounded-full" />
                    </div>

                    {/* Author & Role: Completely Obliterated & Shredded without words */}
                    <div className="mt-1.5 sm:mt-3 pt-1.5 sm:pt-2 border-t border-dashed border-[#3A3632]/25 pl-3 sm:pl-4">
                      <div className="flex items-center gap-1 sm:gap-1.5 opacity-30 select-none">
                        <HandDrawnStar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#2A9D8F]" color={t.crayonAccent} />
                        <span className="font-typewriter text-[10px] sm:text-xs tracking-widest text-[#3A3632]">
                          ················
                        </span>
                      </div>
                      <p className="font-typewriter text-[8px] sm:text-[10px] text-[#3A3632]/25 mt-0.5 tracking-widest select-none">
                        ························
                      </p>
                    </div>

                    {/* Bottom peel effect corner */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-black/5 pointer-events-none rounded-tl-sm" />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={t.id}
                className="relative p-6 sm:p-7 rounded-xs shadow-md border border-[#3A3632]/10 transition-all duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-xl group"
                style={{
                  backgroundColor: t.postItColor,
                  transform: `rotate(${t.rotation}deg)`,
                }}
              >
                {/* Masking tape on top of the sticky note */}
                <TapeSnippet
                  position="top-center"
                  width="w-16 sm:w-20"
                  height="h-5"
                  rotation={idx === 1 ? 4 : -3}
                />

                {/* Decorative crayon quote mark */}
                <div
                  className="font-reenie text-5xl leading-none -mt-2 -mb-4 select-none opacity-60"
                  style={{ color: t.crayonAccent }}
                >
                  “
                </div>

                {/* Handwritten Quote in Kalam font */}
                <blockquote className="font-kalam text-sm sm:text-base text-[#3A3632] leading-relaxed my-3 whitespace-pre-line">
                  {t.text}
                </blockquote>

                {/* Author and Role in Special Elite typewriter */}
                <div className="mt-4 pt-3 border-t border-[#3A3632]/20">
                  <p className="font-typewriter text-xs sm:text-sm font-bold text-[#3A3632] flex items-center gap-1.5">
                    {'icon' in t && t.icon === 'gavel' ? (
                      <HandDrawnGavel className="w-3.5 h-3.5" color={t.crayonAccent} />
                    ) : (
                      <HandDrawnStar className="w-3.5 h-3.5" color={t.crayonAccent} />
                    )}
                    <span>{t.author}</span>
                  </p>
                  <p className="font-typewriter text-xs text-[#3A3632]/70 mt-0.5">
                    {t.role}
                  </p>
                </div>

                {/* Bottom peel effect corner */}
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-black/5 pointer-events-none rounded-tl-sm" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
