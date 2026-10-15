import React, { useState } from 'react';
import { TapeSnippet } from './TapeSnippet.tsx';
import { HandDrawnUnderline } from './HandDrawnSvgDefs.tsx';

interface LetterItem {
  char: string;
  color: string;
  rotation: number;
  tapeRotation: number;
}

// Lettering: "LUI" with black color as requested
const LETTERS: LetterItem[] = [
  { char: 'L', color: '#1A1817', rotation: -2.8, tapeRotation: -3 },
  { char: 'U', color: '#1A1817', rotation: 2.2, tapeRotation: 4 },
  { char: 'I', color: '#1A1817', rotation: -1.8, tapeRotation: -2 },
];

export const HeroBanner: React.FC = () => {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);

  const scrollToWorks = () => {
    const el = document.getElementById('trabalhos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      aria-label="Apresentação Lui" 
      className="relative min-h-screen min-h-[100dvh] pt-28 pb-20 sm:pt-36 sm:pb-24 px-4 overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center text-center my-auto">
        
        {/* Subtle decorative pinned notes flanking the letters */}
        <div className="w-full relative flex items-center justify-center mb-6 md:mb-8">
          
          {/* Left Flanking Doodle Sheet */}
          <div 
            className="hidden sm:block absolute -left-2 sm:left-4 lg:-left-4 -top-8 w-36 sm:w-40 p-2.5 bg-[#FAF8F5] rounded-xs shadow-md transform -rotate-6 transition-transform hover:rotate-0 duration-300 pointer-events-auto border border-[#CDBE96]/50"
            style={{ filter: 'drop-shadow(0 4px 6px rgba(58, 54, 50, 0.16))' }}
          >
            <TapeSnippet position="top-center" width="w-16" height="h-4.5" rotation={-3} />
            <div className="border border-dashed border-[#3A3632]/20 p-2.5 text-center bg-white/60">
              <p className="font-kalam text-sm sm:text-base font-bold text-[#3A3632] leading-snug">
                Cant stop me now
              </p>
            </div>
          </div>

          {/* MAIN HERO LETTERS: "L U I" in black lettering */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 z-10 px-4 py-2">
            {LETTERS.map((item, idx) => {
              const isHovered = hoveredLetter === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredLetter(idx)}
                  onMouseLeave={() => setHoveredLetter(null)}
                  className="relative group transition-all duration-300"
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    transform: isHovered ? 'translateY(-6px) scale(1.08) rotate(0deg)' : `rotate(${item.rotation}deg)`,
                  }}
                >
                  {/* Tape scrap holding each letter */}
                  <TapeSnippet
                    position="top-center"
                    width="w-12 sm:w-16 md:w-20"
                    height="h-5 sm:h-6"
                    rotation={item.tapeRotation}
                    className="group-hover:opacity-95 transition-opacity"
                  />

                  {/* Paper scrap card */}
                  <div
                    className="w-16 h-24 sm:w-24 sm:h-36 md:w-32 md:h-44 bg-[#e6e0d3] rounded-xs flex items-center justify-center shadow-lg border border-[#cfc8b8] select-none cursor-default transition-shadow duration-200 group-hover:shadow-2xl overflow-hidden relative"
                    style={{
                      backgroundImage:
                        idx === 0
                          ? 'radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.45) 0%, rgba(230, 224, 211, 0.2) 50%, rgba(205, 198, 185, 0.3) 100%)'
                          : idx === 1
                          ? 'radial-gradient(circle at 65% 65%, rgba(255, 255, 255, 0.45) 0%, rgba(230, 224, 211, 0.2) 50%, rgba(205, 198, 185, 0.3) 100%)'
                          : 'radial-gradient(circle at 50% 25%, rgba(255, 255, 255, 0.45) 0%, rgba(230, 224, 211, 0.2) 50%, rgba(205, 198, 185, 0.3) 100%)',
                      boxShadow: '0 8px 18px rgba(45, 41, 37, 0.18)',
                    }}
                  >
                    {/* Letter rendered in Reenie Beanie font - BLACK COLOR */}
                    <span
                      className="font-reenie font-bold text-6xl sm:text-8xl md:text-9xl leading-none select-none drop-shadow-xs transition-transform duration-200"
                      style={{
                        color: item.color, // Pure black #1A1817
                        filter: 'url(#hand-drawn-filter)',
                      }}
                    >
                      {item.char}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Subtitle Paper Strip: "Video Editor" */}
        <div className="inline-block relative my-2 px-8 py-2 bg-[#FAF8F5] rounded-xs shadow-md transform -rotate-1 border border-[#CDBE96]/50">
          <TapeSnippet position="top-left" width="w-12 sm:w-16" height="h-4" rotation={-16} />
          <TapeSnippet position="top-right" width="w-12 sm:w-16" height="h-4" rotation={16} />
          
          <h1 className="font-kalam text-2xl sm:text-3xl md:text-4xl text-[#3A3632] tracking-wide font-bold">
            Video Editor
          </h1>
        </div>

        {/* Tilted Cardboard Rectangle: "Conhecer Trabalhos" */}
        <div className="w-full max-w-xl mt-16 sm:mt-20 md:mt-24 px-4 flex justify-center">
          <a
            href="#trabalhos"
            onClick={(e) => {
              e.preventDefault();
              scrollToWorks();
            }}
            className="relative inline-block cursor-pointer group select-none transition-all duration-300 transform -rotate-2 hover:rotate-0 hover:scale-105 active:scale-98"
            aria-label="Conhecer Trabalhos"
          >
            {/* Masking tape pieces pinning the cardboard */}
            <TapeSnippet position="top-left" width="w-16 sm:w-20" height="h-4.5 sm:h-5" rotation={-14} />
            <TapeSnippet position="top-right" width="w-16 sm:w-20" height="h-4.5 sm:h-5" rotation={15} />

            {/* Cardboard Plate */}
            <div
              className="relative px-8 sm:px-14 py-6 sm:py-8 rounded-sm border-2 border-[#8C6D46]/60 shadow-2xl overflow-hidden transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(45,41,37,0.28)]"
              style={{
                backgroundColor: '#C4A476', // Tom de papelão Kraft
                backgroundImage: `
                  repeating-linear-gradient(
                    90deg,
                    rgba(140, 109, 70, 0.18) 0px,
                    rgba(140, 109, 70, 0.18) 3px,
                    transparent 3px,
                    transparent 7px
                  ),
                  radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25) 0%, rgba(130, 95, 52, 0.25) 100%)
                `,
                boxShadow: '0 12px 28px rgba(45, 41, 37, 0.24), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.3)',
              }}
            >
              {/* Subtle inner craft paper stitched border */}
              <div className="absolute inset-2 sm:inset-2.5 border border-dashed border-[#5A452B]/40 rounded-2xs pointer-events-none" />

              {/* Cardboard Content */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span
                  className="font-reenie font-bold text-4xl sm:text-5xl md:text-6xl text-[#1E1B18] tracking-wide leading-none transition-transform group-hover:scale-102"
                  style={{
                    filter: 'url(#hand-drawn-filter)',
                    textShadow: '0 1px 2px rgba(255,255,255,0.35)',
                  }}
                >
                  Conhecer Trabalhos
                </span>

                <HandDrawnUnderline
                  className="w-48 sm:w-64 h-3 sm:h-4 mt-2 transition-transform group-hover:scale-105"
                  color="#1E1B18"
                />
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
