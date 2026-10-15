import React, { useEffect, useState, useRef } from 'react';
import { Project } from '../data/projects.ts';
import { TapeSnippet } from './TapeSnippet.tsx';
import { HandDrawnStar } from './HandDrawnSvgDefs.tsx';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [actualDuration, setActualDuration] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoPlayerRef = useRef<HTMLDivElement>(null);
  const videoMediaRef = useRef<HTMLVideoElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Convert duration string like "00:45" or "02:18" to total seconds
  const parseDuration = (durStr?: string): number => {
    if (!durStr) return 45;
    const parts = durStr.split(':').map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    return 45;
  };

  const totalDurationSec = actualDuration || parseDuration(project?.duration);

  const handleTogglePlay = () => {
    if (project?.videoSrc && videoMediaRef.current) {
      if (videoMediaRef.current.paused || videoMediaRef.current.ended) {
        videoMediaRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      } else {
        videoMediaRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      if (currentTimeSec >= totalDurationSec) setCurrentTimeSec(0);
      setIsPlaying((prev) => !prev);
    }
  };

  // Close on ESC key & Space to play/pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === ' ' && project) {
        e.preventDefault();
        handleTogglePlay();
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
  }, [project, onClose, isPlaying, totalDurationSec]);

  // Reset playback when project changes
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTimeSec(0);
    setActualDuration(null);
    if (videoMediaRef.current) {
      videoMediaRef.current.currentTime = 0;
      videoMediaRef.current.pause();
    }
  }, [project]);

  // Simulated video playback ticker (only when there's no real video file)
  useEffect(() => {
    if (project?.videoSrc) return;
    if (!isPlaying) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    let lastTime = performance.now();
    const tick = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      setCurrentTimeSec((prev) => {
        const next = prev + delta;
        if (next >= totalDurationSec) {
          setIsPlaying(false);
          return totalDurationSec;
        }
        return next;
      });

      animationFrameRef.current = requestAnimationFrame(tick);
    };

    animationFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPlaying, totalDurationSec, project?.videoSrc]);

  if (!project) return null;

  // Helper to extract Instagram embed URL for Reels and Posts
  const getInstagramEmbedUrl = (url?: string) => {
    if (!url) return null;
    const match = url.match(/instagram\.com\/(reel|p)\/([^/?#&]+)/);
    if (match) {
      return `https://www.instagram.com/${match[1]}/${match[2]}/embed`;
    }
    return null;
  };

  const instagramEmbedUrl = !project?.videoSrc ? getInstagramEmbedUrl(project?.videoUrl) : null;

  // Format seconds to MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = totalDurationSec > 0 ? (currentTimeSec / totalDurationSec) * 100 : 0;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const target = ratio * totalDurationSec;
    setCurrentTimeSec(target);
    if (project?.videoSrc && videoMediaRef.current) {
      videoMediaRef.current.currentTime = target;
    }
  };

  const handleToggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      if (videoMediaRef.current) {
        videoMediaRef.current.muted = next;
      }
      return next;
    });
  };

  const toggleFullscreen = () => {
    if (!videoPlayerRef.current) return;
    if (!document.fullscreenElement) {
      videoPlayerRef.current.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Outer Video Suite Container with Craft Paper & Cinema aesthetic */}
      <div className="relative w-full max-w-5xl my-auto bg-[#1C1A18] rounded-xl shadow-2xl p-3 sm:p-5 border-2 border-[#CDBE96]/30 text-white">
        
        {/* Top Header / Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FFB703] animate-pulse" />
            <span className="font-typewriter text-xs sm:text-sm text-white/80 tracking-wider">
              SUÍTE DE VÍDEO // REEL PLAYBACK
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-xs bg-white/10 text-[10px] font-mono text-[#FFB703]">
              {project.category}
            </span>
          </div>

          {/* Close Button styled with tape */}
          <button
            onClick={onClose}
            className="px-3 py-1 bg-[#E6DDB8] hover:bg-white text-xs font-typewriter text-[#3A3632] rounded-xs shadow-md border border-[#CDBE96] transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5"
            aria-label="Fechar vídeo"
          >
            <span className="font-bold text-[#D93A2B]">✕</span>
            <span>fechar (ESC)</span>
          </button>
        </div>

        {/* Main Content: 9:16 Vertical Reel Player + Editorial Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: 9:16 Video Player Reel */}
          <div className="md:col-span-5 flex justify-center">
            {instagramEmbedUrl ? (
              <div className="relative aspect-9/16 w-full max-w-[310px] sm:max-w-[340px] min-h-[480px] sm:min-h-[520px] bg-black rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl flex flex-col justify-center items-center">
                <iframe
                  src={instagramEmbedUrl}
                  title={project.title}
                  className="w-full h-full border-0 rounded-2xl bg-black"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  scrolling="no"
                />
              </div>
            ) : (
              <div
                ref={videoPlayerRef}
                className="relative aspect-9/16 w-full max-w-[300px] sm:max-w-[330px] max-h-[70vh] bg-black rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group select-none flex flex-col justify-between"
              >
                {/* Main Video Artwork / Frame Preview */}
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  {project.videoSrc ? (
                    <video
                      ref={videoMediaRef}
                      src={project.videoSrc}
                      poster={project.mainImage}
                      playsInline
                      muted={isMuted}
                      preload="auto"
                      className="w-full h-full object-cover cursor-pointer"
                      onLoadedMetadata={(e) => {
                        const d = e.currentTarget.duration;
                        if (d && !isNaN(d) && isFinite(d)) {
                          setActualDuration(d);
                        }
                      }}
                      onTimeUpdate={(e) => {
                        setCurrentTimeSec(e.currentTarget.currentTime);
                      }}
                      onEnded={() => {
                        setIsPlaying(false);
                      }}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onClick={handleTogglePlay}
                    />
                  ) : (
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105 brightness-95' : 'scale-100 brightness-75'}`}
                    />
                  )}
                  {/* Cinematic subtle vignette overlay */}
                  <div className="absolute inset-0 bg-radial from-transparent via-black/15 to-black/60 pointer-events-none" />

                  {/* Scanlines / subtle monitor texture (only for non-video or gentle) */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-10"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)'
                    }}
                  />
                </div>

                {/* Center Play/Pause Big Button Overlay */}
                <div className="relative z-10 flex-1 flex items-center justify-center">
                  <button
                    onClick={handleTogglePlay}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFB703]/90 hover:bg-[#FFB703] text-[#1C1A18] flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs border-2 border-white/40 ${isPlaying ? 'opacity-0 hover:opacity-100 group-hover:opacity-80' : 'opacity-100'}`}
                    aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                  >
                    {isPlaying ? (
                      <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Bottom Player Controls Bar */}
                <div className="relative z-10 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 pt-6 flex flex-col gap-2">
                  
                  {/* Scrubber / Timeline Bar */}
                  <div
                    onClick={handleSeek}
                    className="relative h-2 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all overflow-hidden group/scrub"
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={totalDurationSec}
                    aria-valuenow={currentTimeSec}
                    aria-label="Linha do tempo do vídeo"
                  >
                    <div
                      className="h-full bg-[#FFB703] relative transition-all"
                      style={{ width: `${progressPercent}%` }}
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-md scale-0 group-hover/scrub:scale-100 transition-transform" />
                    </div>
                  </div>

                  {/* Controls row */}
                  <div className="flex items-center justify-between text-xs font-typewriter text-white/90">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleTogglePlay}
                        className="hover:text-[#FFB703] transition-colors cursor-pointer text-[11px]"
                      >
                        {isPlaying ? 'Pausar' : 'Play'}
                      </button>
                      <span className="font-mono text-[10px] text-white/70">
                        {formatTime(currentTimeSec)} / {formatTime(totalDurationSec)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleToggleMute}
                        className="hover:text-[#FFB703] transition-colors cursor-pointer text-[11px]"
                        aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                      >
                        {isMuted ? '🔇' : '🔊'}
                      </button>

                      <button
                        onClick={toggleFullscreen}
                        className="hover:text-[#FFB703] transition-colors cursor-pointer text-[11px]"
                      >
                        {isFullscreen ? '⤢' : '⤢'}
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Right Column: Video Details & Editorial Storytelling Panel */}
          <div className="md:col-span-7 p-5 sm:p-6 bg-[#23201D] rounded-xl border border-white/10 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-mono text-[#FFB703] uppercase tracking-wider block">
                  {project.category} · {project.year}
                </span>
                <h3 
                  id="video-project-title"
                  className="font-kalam font-bold text-2xl sm:text-3xl text-white mt-0.5 leading-snug"
                >
                  {project.title}
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm font-typewriter text-white/80 p-3 bg-black/30 rounded-lg border border-white/5">
                <p>
                  <strong className="text-white">Cliente:</strong> {project.client}
                </p>
                <p>
                  <strong className="text-white">Software:</strong> {project.tools && project.tools.length > 0 ? project.tools.join(', ') : 'Premiere Pro'}
                </p>
                <p>
                  <strong className="text-white">Duração:</strong> {project.duration || '00:25'}
                </p>
              </div>

              {/* Função Badges */}
              <div>
                <span className="text-xs font-typewriter text-white/60 block mb-1.5">
                  Função:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(project.roles && project.roles.length > 0
                    ? project.roles
                    : project.role
                    ? project.role.split(/,\s*|\s*&\s*/).map(r => r.trim()).filter(Boolean)
                    : []
                  ).map((roleItem, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/10 text-xs font-typewriter text-white/90 rounded-xs border border-white/10"
                    >
                      {roleItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link para o vídeo completo */}
              <div className="pt-2">
                <a
                  href={project.videoUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group/link text-[#FFB703] hover:text-[#ffd166] transition-all mb-2 py-1.5 px-3 -ml-1 rounded-xs bg-[#FFB703]/10 hover:bg-[#FFB703]/20 border border-[#FFB703]/30 cursor-pointer"
                  title="Abrir perfil em nova aba"
                >
                  <HandDrawnStar className="w-4 h-4 shrink-0 text-[#FFB703]" color="#FFB703" />
                  <span className="font-kalam font-bold text-base sm:text-lg underline decoration-2 underline-offset-4 group-hover/link:translate-x-0.5 transition-transform">
                    Clique aqui para conhecer o perfil
                  </span>
                  <span className="text-sm font-mono opacity-80 group-hover/link:translate-x-1 transition-transform">↗</span>
                </a>

                <div className="font-karla text-sm text-white/85 leading-relaxed">
                  <p>{project.fullDesc}</p>
                </div>
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end">
              <a
                href="#contato"
                onClick={onClose}
                className="px-5 py-2.5 bg-[#FFB703] hover:bg-[#e6a500] text-[#1C1A18] font-kalam text-sm sm:text-base font-bold rounded-xs shadow-md transition-transform hover:scale-105"
              >
                Quero um vídeo assim →
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
