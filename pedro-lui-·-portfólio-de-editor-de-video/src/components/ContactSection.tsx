import React from 'react';
import { TapeSnippet } from './TapeSnippet.tsx';
import { HandDrawnUnderline } from './HandDrawnSvgDefs.tsx';
import { CRAYON_COLORS } from '../data/projects.ts';

interface ContactSectionProps {
  onOpenMoreWorks?: () => void;
  showMoreWorks?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section id="contato" className="py-16 md:py-24 px-4 sm:px-6 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title Sheet */}
        <div className="text-center mb-10">
          <div className="inline-block relative px-8 py-3 bg-[#FAF8F5] rounded-xs shadow-md border border-[#CDBE96]/60 transform -rotate-1">
            <TapeSnippet position="top-center" width="w-20" height="h-5" rotation={-1} />
            <h2 
              className="font-reenie font-bold text-4xl sm:text-5xl md:text-6xl text-[#3A3632] tracking-wider uppercase"
              style={{ filter: 'url(#hand-drawn-filter)' }}
            >
              acabou
            </h2>
            <HandDrawnUnderline className="w-48 h-3 mx-auto mt-1" color={CRAYON_COLORS.red} />
            <p className="font-kalam text-base sm:text-lg text-[#3A3632]/85 mt-1 font-medium">
              mas não acaba por aqui
            </p>
          </div>
        </div>

        {/* Notebook Lined Page Container with 2 Large Buttons */}
        <div className="relative bg-[#FAF8F5] rounded-sm p-6 sm:p-10 md:p-12 shadow-2xl border border-[#CDBE96]/60 transform rotate-0.5 paper-ruled">
          <TapeSnippet position="top-left" width="w-24" height="h-5" rotation={-20} />
          <TapeSnippet position="top-right" width="w-24" height="h-5" rotation={18} />

          {/* Notebook top holes */}
          <div className="absolute -top-3 left-10 right-10 h-3 flex justify-between pointer-events-none opacity-50">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#C5B592] shadow-inner" />
            ))}
          </div>

          {/* 3 Large Action Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto gap-6 sm:gap-6 lg:gap-8 pt-4 pb-2">
            
            {/* 1. Large Instagram Button */}
            <a
              href="https://www.instagram.com/lui.editando?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 sm:p-8 rounded-xs bg-[#FAF8F5] hover:bg-white border-2 border-[#CDBE96]/80 hover:border-[#E1306C] shadow-md hover:shadow-xl transition-all duration-300 transform -rotate-1 hover:rotate-0 hover:-translate-y-2 group cursor-pointer flex flex-col items-center justify-between text-center min-h-[260px]"
              aria-label="Abrir perfil no Instagram @lui.editando"
            >
              <TapeSnippet position="top-center" width="w-16" height="h-4" rotation={2} />

              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] p-1 shadow-md group-hover:scale-110 transition-transform mb-3 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-12 h-12 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>

              <div>
                <span className="block font-reenie font-bold text-3xl sm:text-4xl text-[#3A3632] group-hover:text-[#C13584] transition-colors leading-none">
                  Instagram
                </span>
                <span className="block font-typewriter text-xs sm:text-sm text-[#3A3632]/70 mt-1">
                  @lui.editando
                </span>
              </div>

              <span className="mt-4 px-4 py-1.5 bg-[#FAF3E0] group-hover:bg-[#C13584] text-[#3A3632] group-hover:text-white font-kalam text-xs sm:text-sm font-semibold rounded-xs border border-[#CDBE96]/50 transition-colors shadow-xs">
                Acessar perfil ↗
              </span>
            </a>

            {/* 2. Large WhatsApp Button */}
            <a
              href="https://w.app/vgmyc5"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 sm:p-8 rounded-xs bg-[#FAF8F5] hover:bg-white border-2 border-[#CDBE96]/80 hover:border-[#25D366] shadow-md hover:shadow-xl transition-all duration-300 transform rotate-1.5 hover:rotate-0 hover:-translate-y-2 group cursor-pointer flex flex-col items-center justify-between text-center min-h-[260px]"
              aria-label="Abrir conversa no WhatsApp"
            >
              <TapeSnippet position="top-center" width="w-16" height="h-4" rotation={-2} />

              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#128C7E] to-[#25D366] p-1 shadow-md group-hover:scale-110 transition-transform mb-3 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-12 h-12 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  <path d="M9.5 9a1 1 0 0 1 1 1v.2a2 2 0 0 0 1 1.7l1.2.7a2 2 0 0 0 1.9 0l.4-.2a1 1 0 0 1 1.4.3l.8 1.4a1 1 0 0 1-.3 1.4l-.8.5c-.7.5-1.7.5-2.5 0a11.2 11.2 0 0 1-4.8-4.8c-.5-.8-.5-1.8 0-2.5l.5-.8a1 1 0 0 1 1.4-.3l1.4.8z" fill="white" stroke="none" />
                </svg>
              </div>

              <div>
                <span className="block font-reenie font-bold text-3xl sm:text-4xl text-[#3A3632] group-hover:text-[#128C7E] transition-colors leading-none">
                  WhatsApp
                </span>
                <span className="block font-typewriter text-xs sm:text-sm text-[#3A3632]/70 mt-1">
                  Conversar direto
                </span>
              </div>

              <span className="mt-4 px-4 py-1.5 bg-[#E8F5E9] group-hover:bg-[#25D366] text-[#1B5E20] group-hover:text-white font-kalam text-xs sm:text-sm font-semibold rounded-xs border border-[#A5D6A7]/50 transition-colors shadow-xs">
                Mandar mensagem ↗
              </span>
            </a>

            {/* 3. Large Behance Button */}
            <a
              href="https://www.behance.net/pedroluigi3"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 sm:p-8 rounded-xs bg-[#FAF8F5] hover:bg-white border-2 border-[#CDBE96]/80 hover:border-[#0057FF] shadow-md hover:shadow-xl transition-all duration-300 transform -rotate-1 hover:rotate-0 hover:-translate-y-2 group cursor-pointer flex flex-col items-center justify-between text-center min-h-[260px]"
              aria-label="Abrir portfólio no Behance @pedroluigi3"
            >
              <TapeSnippet position="top-center" width="w-16" height="h-4" rotation={1.5} />

              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#0038A8] via-[#0057FF] to-[#00A3FF] p-1 shadow-md group-hover:scale-110 transition-transform mb-3 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-12 h-12 text-white fill-current" 
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.171 3-4.375 0-5.555-3.08-5.555-5.547 0-3.328 2.247-5.453 5.309-5.453 3.784 0 4.984 2.66 4.984 5.385 0 .426-.062.883-.062.883h-7.794c.065 1.635 1.303 2.802 3.125 2.802 1.393 0 2.46-.776 2.868-1.542l2.296.472zm-7.689-3.797h5.188c-.083-1.385-.947-2.328-2.521-2.328-1.748 0-2.535 1.073-2.667 2.328zm-8.814-1.203h-2.223v-4h2.223c1.171 0 1.954.512 1.954 1.986 0 1.516-.783 2.014-1.954 2.014zm-2.223 2h2.378c1.334 0 2.223.633 2.223 2.28 0 1.696-.99 2.297-2.297 2.297h-2.304v-4.577zm-3-8h5.727c2.613 0 4.496 1.326 4.496 3.715 0 1.422-.729 2.508-1.932 3.033 1.586.471 2.486 1.777 2.486 3.447 0 2.67-2.129 4.382-4.836 4.382h-5.941v-14.577z" />
                </svg>
              </div>

              <div>
                <span className="block font-reenie font-bold text-3xl sm:text-4xl text-[#3A3632] group-hover:text-[#0057FF] transition-colors leading-none">
                  Behance
                </span>
                <span className="block font-typewriter text-xs sm:text-sm text-[#3A3632]/70 mt-1">
                  mais trabalhos
                </span>
              </div>

              <span className="mt-4 px-4 py-1.5 bg-[#EBF3FF] group-hover:bg-[#0057FF] text-[#0038A8] group-hover:text-white font-kalam text-xs sm:text-sm font-semibold rounded-xs border border-[#90B8F8]/50 transition-colors shadow-xs">
                Ver portfólio ↗
              </span>
            </a>

          </div>

          {/* Bottom gentle note */}
          <div className="mt-8 pt-4 border-t border-dashed border-[#3A3632]/20 text-center font-kalam text-xs sm:text-sm text-[#3A3632]/70">
            * toque em um dos botões para conversar comigo ou ver mais trabalhos!
          </div>

        </div>

      </div>
    </section>
  );
};
