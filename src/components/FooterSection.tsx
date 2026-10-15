import React from 'react';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-12 pb-14 overflow-hidden">
      {/* TIRA DE FITA CREPE ATRAVESSANDO A TELA */}
      <div className="relative w-full py-3.5 my-4 overflow-hidden flex items-center justify-center shadow-sm">
        {/* Full-width tape ribbon */}
        <div 
          className="absolute inset-0 masking-tape tape-torn-h opacity-95 transform -rotate-0.5 scale-x-105"
          style={{
            backgroundColor: 'rgba(205, 190, 150, 0.92)',
            boxShadow: '0 2px 6px rgba(58, 54, 50, 0.15)',
          }}
        />

        {/* Content on tape */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-typewriter text-[#3A3632]">
          
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <span className="text-[#E08A2E] text-base">✎</span>
            <span className="font-semibold tracking-wide">
              feito à mão (e com código) © 2026
            </span>
            <span className="hidden sm:inline text-[#3A3632]/50">·</span>
            <span className="hidden sm:inline font-kalam text-xs text-[#3A3632]/80">
              todos os direitos de ilustração reservados
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 font-kalam text-xs sm:text-sm text-[#3A3632] hover:text-[#E08A2E] transition-colors cursor-pointer"
            aria-label="Voltar ao início da parede"
          >
            <span>subir a parede</span>
            <span className="text-base">↑</span>
          </button>

        </div>
      </div>

      {/* Gentle bottom note */}
      <div className="text-center font-kalam text-xs text-[#3A3632]/60 mt-4 px-4">
        Mato Grosso, Brasil · papéis, tesoura & design
      </div>
    </footer>
  );
};
