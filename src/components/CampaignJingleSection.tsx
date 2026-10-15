import React, { useRef, useState } from 'react';
import { TapeSnippet } from './TapeSnippet.tsx';
import { HandDrawnUnderline, HandDrawnStar, HandDrawnHeart } from './HandDrawnSvgDefs.tsx';
import { CRAYON_COLORS } from '../data/projects.ts';

// Photographic assets
import juarezCostaPhoto from '../assets/images/JuarezCostapfp.jpg';
import juarezJingleCapa from '../assets/images/JuarezJingleCapa.jpg';
import eventoJingleFoto0 from '../assets/images/JuarezCostaJingleEvento-0.jpg';
import eventoJingleFoto1 from '../assets/images/JuarezCostaJingleEvento-1.jpg';
import eventoJingleFoto2 from '../assets/images/JuarezCostaJingleEvento-2.jpg';

interface EventPhoto {
  id: string;
  src: string;
  alt: string;
  badge?: string;
  title: string;
  subtitle: string;
  rotation: string;
  staggerClass: string;
  tapePosition: 'top-left' | 'top-right' | 'top-center';
  tapeRotation: number;
  hasHeartIcon?: boolean;
}

export const CampaignJingleSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<EventPhoto | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const juarezPhoto: EventPhoto = {
    id: 'juarez-pfp',
    src: juarezCostaPhoto,
    alt: 'Deputado Federal',
    badge: 'Eleito',
    title: 'Juarez Costa',
    subtitle: 'Deputado Federal',
    rotation: '-rotate-1',
    staggerClass: '',
    tapePosition: 'top-center',
    tapeRotation: -2,
  };

  const otherEventPhotos: EventPhoto[] = [
    {
      id: 'evento-jingle-0',
      src: eventoJingleFoto0,
      alt: '21/08/2026, Sinop - MT',
      title: 'Telão Central',
      subtitle: 'Exibição na arena',
      rotation: 'rotate-2',
      staggerClass: '',
      tapePosition: 'top-left',
      tapeRotation: -8,
      hasHeartIcon: true,
    },
    {
      id: 'evento-jingle-1',
      src: eventoJingleFoto1,
      alt: '21/08/2026, Sinop - MT',
      title: 'Multidão em Festa',
      subtitle: 'Vozes no ritmo',
      rotation: '-rotate-2',
      staggerClass: '',
      tapePosition: 'top-right',
      tapeRotation: 10,
      hasHeartIcon: true,
    },
    {
      id: 'evento-jingle-2',
      src: eventoJingleFoto2,
      alt: '21/08/2026, Sinop - MT',
      title: 'Palco Principal',
      subtitle: 'Lançamento presencial',
      rotation: 'rotate-1.5',
      staggerClass: '',
      tapePosition: 'top-center',
      tapeRotation: 3,
      hasHeartIcon: true,
    },
  ];

  return (
    <section id="jingle-campanha" className="pt-5 sm:pt-7 md:pt-8 pb-2 sm:pb-3 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title Sheet */}
        <div className="text-center mb-3 sm:mb-5">
          <div className="inline-block relative px-5 sm:px-7 py-1.5 sm:py-2 bg-[#FAF8F5] rounded-xs shadow-md border border-[#CDBE96]/60 transform rotate-1">
            <TapeSnippet position="top-center" width="w-20" height="h-5" rotation={-2} />
            <h2 
              className="font-reenie font-bold text-4xl sm:text-5xl md:text-6xl text-[#3A3632]"
              style={{ filter: 'url(#hand-drawn-filter)' }}
            >
              Jingle de Campanha
            </h2>
            <HandDrawnUnderline className="w-52 h-2.5 mx-auto mt-0.5" color={CRAYON_COLORS.orange} />
          </div>
        </div>

        {/* Main Section Card: Side-by-Side Hero Layout - Compact Vertical Height */}
        <div className="relative bg-[#FAF8F5] rounded-xs p-3.5 sm:p-5 md:p-6 pb-2 sm:pb-3 shadow-2xl border border-[#CDBE96]/60">
          {/* Masking tapes in the sheet corners */}
          <TapeSnippet position="top-left" width="w-24" height="h-5" rotation={-14} />
          <TapeSnippet position="top-right" width="w-24" height="h-5" rotation={16} />

          {/* Grid: 16:9 Video on Left (Hero) | Story Block & 4-Photo Collage on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
            
            {/* Left Column: 16:9 Video Player (Hero Principal) */}
            <div className="lg:col-span-7 space-y-2.5">
              
              {/* Main 16:9 Video Frame */}
              <div className="relative bg-white p-2.5 sm:p-3 pb-2.5 rounded-xs shadow-xl border border-[#CDBE96]/60 transform -rotate-0.5">
                <TapeSnippet position="top-center" width="w-24" height="h-5" rotation={1} />
                
                {/* 16:9 Aspect Ratio Video Screen */}
                <div className="relative aspect-16/9 w-full rounded-xs overflow-hidden bg-[#1C1A18] shadow-inner group">
                  <video
                    ref={videoRef}
                    src="/videos/JuarezCostaJingle.mp4"
                    poster={juarezJingleCapa}
                    playsInline
                    loop
                    preload="metadata"
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={togglePlay}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Gradient overlay - visível apenas com o vídeo pausado */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none transition-opacity duration-300 ${
                      isPlaying ? 'opacity-0' : 'opacity-100'
                    }`}
                  />

                  {/* Top Badge: JINGLE OFICIAL */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 bg-[#FFB703] text-[#1C1A18] font-typewriter text-xs font-bold rounded-xs shadow-md">
                    <HandDrawnStar className="w-3.5 h-3.5" color="#1C1A18" />
                    <span>JINGLE OFICIAL</span>
                  </div>

                  {/* Center Play Button Overlay (when paused) */}
                  {!isPlaying && (
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFB703] hover:bg-[#FFA000] text-[#1C1A18] flex items-center justify-center shadow-2xl transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                      aria-label="Reproduzir vídeo do jingle"
                    >
                      <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  )}

                  {/* Bottom Video Controls Bar */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs font-typewriter">
                    <button
                      onClick={togglePlay}
                      className="px-2.5 py-1 bg-black/60 hover:bg-black/80 rounded-xs flex items-center gap-1.5 cursor-pointer backdrop-blur-xs transition-colors"
                    >
                      {isPlaying ? (
                        <>
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                          </svg>
                          <span>Pausar</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          <span>Assistir</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="px-2.5 py-1 bg-black/60 hover:bg-black/80 rounded-xs flex items-center gap-1.5 cursor-pointer backdrop-blur-xs transition-colors"
                    >
                      {isMuted ? (
                        <>
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                          </svg>
                          <span>Sem som</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                          <span>Com som</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* 3 Fotos de Registro do Evento na Esquerda */}
              <div className="pt-0.5">
                <div className="flex items-center justify-between gap-2 mb-1.5 px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs select-none" aria-hidden="true">📌</span>
                    <span className="font-reenie font-bold text-lg sm:text-xl text-[#3A3632]/90">
                      registros do evento ao vivo
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-[#CDBE96]/40 border-dashed mx-2" />
                  <span className="font-typewriter text-[9px] text-[#3A3632]/70 bg-white/70 px-1.5 py-0.5 rounded-xs border border-[#CDBE96]/50 shadow-2xs">
                    3 registros · 4:5
                  </span>
                </div>

                {/* Grid das 3 fotos em 4:5 estilo polaroid coladas */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {otherEventPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      onClick={() => setSelectedPhoto(photo)}
                      className={`relative bg-white p-1.5 sm:p-2 pb-1.5 sm:pb-2 rounded-xs shadow-md hover:shadow-xl border border-[#CDBE96]/70 transition-all duration-300 transform ${photo.rotation} hover:rotate-0 hover:scale-105 hover:z-30 cursor-pointer group`}
                      title="Clique para ampliar"
                    >
                      <TapeSnippet
                        position={photo.tapePosition}
                        width="w-10 sm:w-12"
                        height="h-3 sm:h-3.5"
                        rotation={photo.tapeRotation}
                      />

                      {/* 4:5 Aspect Ratio Image Frame */}
                      <div className="aspect-[4/5] w-full rounded-xs overflow-hidden bg-[#1C1A18] border border-[#CDBE96]/40 mb-1 relative shadow-inner">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                        {photo.badge && (
                          <span className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5 font-typewriter text-[8px] sm:text-[9px] text-[#FFB703] bg-[#1C1A18]/90 px-1 sm:px-1.5 py-0.5 rounded-xs font-bold uppercase tracking-wider shadow-xs border border-[#FFB703]/30">
                            {photo.badge}
                          </span>
                        )}
                      </div>

                      {/* Polaroid Caption */}
                      <div className="px-0.5 text-center">
                        <h4 className="font-reenie font-bold text-sm sm:text-base text-[#1C1A18] leading-tight truncate">
                          {photo.title}
                        </h4>
                        <p className="font-kalam text-[9px] sm:text-[10px] text-[#3A3632]/80 leading-tight truncate">
                          {photo.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Narrative Block (Texto Ajustado) + Foto do Juarez Costa Subida Levemente */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              
              {/* Story Narrative Sheet / Card - Proporção Equilibrada */}
              <div className="space-y-2.5 bg-white/85 p-3.5 sm:p-4 md:p-5 rounded-xs border border-[#CDBE96]/60 shadow-md">
                {/* Category Pin */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-typewriter text-[11px] sm:text-xs font-bold px-2 py-0.5 bg-[#FFB703]/25 text-[#1C1A18] border border-[#FFB703]/50 rounded-xs shadow-2xs">
                    DESTAQUE ESPECIAL
                  </span>
                  <span className="font-typewriter text-[11px] sm:text-xs text-[#3A3632]/80">
                    Campanha Política · Evento Presencial
                  </span>
                </div>

                {/* Section Headings */}
                <div>
                  <h3 className="font-reenie font-bold text-2xl sm:text-3xl md:text-[32px] text-[#3A3632] leading-tight">
                    Jingle do Deputado Federal Juarez Costa
                  </h3>
                  <p className="font-kalam text-xs sm:text-sm text-[#D93A2B] font-bold mt-0.5">
                    Lançamento de Campanha Política
                  </p>
                </div>

                {/* Narrative Paragraphs with Balanced Text Size */}
                <div className="space-y-2 font-karla text-xs sm:text-[13px] md:text-sm text-[#3A3632]/95 leading-relaxed bg-[#FAF8F5]/90 p-3 sm:p-3.5 rounded-xs border border-[#CDBE96]/40 shadow-xs">
                  <p>
                    Este projeto representou um dos pontos mais marcantes e memoráveis da minha trajetória como editor. Ser encarregado de criar o visual de um jingle político exigiu muito de mim como editor sênior. Além de o trabalho reunir diversos estilos de edição, combinando música com movimento, o <strong className="font-bold text-[#1C1A18] underline decoration-[#FFB703] decoration-2 underline-offset-2">prazo curto</strong> de 10 horas me fez colocar meu conhecimento à prova.
                  </p>
                  <p className="border-l-3 border-[#FFB703] pl-2.5 py-0.5 font-medium text-[#1C1A18]">
                    O vídeo final foi exibido nos telões centrais do evento oficial de lançamento da campanha política do <strong className="font-bold text-[#1C1A18]">deputado federal Juarez Costa</strong>, transmitido ao vivo para mais de 8 mil pessoas.
                  </p>
                </div>
              </div>

              {/* Foto do Juarez Costa: Subida levemente em relação à posição anterior, mantendo a projeção externa colada com fita */}
              <div className="flex flex-col items-center justify-center pt-2 sm:pt-3 relative lg:-mb-14 lg:translate-y-5 z-30">
                <div
                  onClick={() => setSelectedPhoto(juarezPhoto)}
                  className="relative w-full max-w-[270px] sm:max-w-[300px] bg-white p-3 sm:p-3.5 pb-3.5 sm:pb-4 rounded-xs shadow-[0_20px_35px_-8px_rgba(0,0,0,0.38),0_8px_16px_-4px_rgba(0,0,0,0.22)] border-2 border-[#CDBE96] transition-all duration-300 transform -rotate-3 hover:-rotate-1 hover:scale-105 hover:z-40 cursor-pointer group ring-1 ring-black/10"
                  title="Clique para ampliar a foto do Juarez Costa"
                  style={{
                    filter: 'drop-shadow(0 14px 20px rgba(58,54,50,0.28))',
                  }}
                >
                  {/* Fita adesiva colando a foto por cima e transpassando o limite do bloco */}
                  <TapeSnippet
                    position="top-center"
                    width="w-28 sm:w-32"
                    height="h-5.5 sm:h-6"
                    rotation={-5}
                    className="-top-4 shadow-md"
                  />
                  
                  {/* Fita de canto reforçando o efeito de scrapbook colado por fora */}
                  <TapeSnippet
                    position="bottom-right"
                    width="w-16 sm:w-20"
                    height="h-5"
                    rotation={-18}
                    className="-bottom-3 -right-3 opacity-90 shadow-sm"
                  />

                  {/* 4:5 Aspect Ratio Image Frame - Aumentada e com acabamento de destaque */}
                  <div className="aspect-[4/5] w-full rounded-xs overflow-hidden bg-[#1C1A18] border border-[#CDBE96]/70 mb-2 relative shadow-inner">
                    <img
                      src={juarezPhoto.src}
                      alt={juarezPhoto.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Badge Eleito com destaque dourado */}
                    <span className="absolute top-2 left-2 font-typewriter text-xs text-[#1C1A18] bg-[#FFB703] px-2.5 py-0.5 rounded-xs font-bold uppercase tracking-wider shadow-lg border border-[#1C1A18]/20 flex items-center gap-1.5">
                      <HandDrawnStar className="w-3.5 h-3.5" color="#1C1A18" />
                      <span>{juarezPhoto.badge}</span>
                    </span>
                  </div>

                  {/* Polaroid Caption Centralizada */}
                  <div className="px-1 text-center space-y-0.5">
                    <h4 className="font-reenie font-bold text-2xl sm:text-3xl text-[#1C1A18] leading-tight">
                      {juarezPhoto.title}
                    </h4>
                    <p className="font-kalam text-xs sm:text-sm text-[#D93A2B] font-bold leading-tight">
                      {juarezPhoto.subtitle}
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Lightbox when clicking any photo */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative max-w-lg w-full bg-[#FAF8F5] p-4 sm:p-5 rounded-xs shadow-2xl border border-[#CDBE96] transform rotate-0.5 animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <TapeSnippet position="top-center" width="w-24" height="h-5" rotation={-1} />
              
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#1C1A18] text-white hover:bg-[#D93A2B] flex items-center justify-center transition-colors cursor-pointer z-10"
                aria-label="Fechar visualização"
              >
                ✕
              </button>

              <div className="aspect-[4/5] w-full rounded-xs overflow-hidden bg-[#1C1A18] border border-[#CDBE96]/40 shadow-inner mb-3">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center space-y-1">
                {selectedPhoto.badge && (
                  <span className="inline-block font-typewriter text-xs text-[#FFB703] bg-[#1C1A18] px-2.5 py-0.5 rounded-xs font-bold uppercase tracking-wider">
                    {selectedPhoto.badge}
                  </span>
                )}
                <h4 className="font-reenie font-bold text-3xl text-[#1C1A18]">
                  {selectedPhoto.title}
                </h4>
                <div
                  className={`font-kalam text-sm sm:text-base flex items-center justify-center gap-1.5 ${
                    selectedPhoto.id === 'juarez-pfp'
                      ? 'text-[#D93A2B] font-bold'
                      : 'text-[#3A3632]/85'
                  }`}
                >
                  <span>{selectedPhoto.alt}</span>
                  {selectedPhoto.hasHeartIcon && (
                    <HandDrawnHeart className="w-4 h-4 text-[#D93A2B] -translate-y-0.5 inline-block" color="#D93A2B" fill />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
