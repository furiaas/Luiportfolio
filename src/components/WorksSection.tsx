import React, { useState } from 'react';
import { Project, ProjectCategory, PROJECTS, CRAYON_COLORS } from '../data/projects.ts';
import { TapeSnippet } from './TapeSnippet.tsx';
import { HandDrawnUnderline } from './HandDrawnSvgDefs.tsx';
import { VideoModal } from './VideoModal.tsx';

type CategoryFilter = 'Todos' | 'Dinâmica' | 'Motion' | 'Consciente';

const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  'Dinâmica': CRAYON_COLORS.orange,
  'Motion': '#9F57B2',
  'Consciente': '#2626AB',
};

const CATEGORIES: { label: CategoryFilter; color: string }[] = [
  { label: 'Todos', color: '#3A3632' },
  { label: 'Dinâmica', color: CATEGORY_COLORS['Dinâmica'] },
  { label: 'Motion', color: CATEGORY_COLORS['Motion'] },
  { label: 'Consciente', color: CATEGORY_COLORS['Consciente'] },
];

export const WorksSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Todos');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="trabalhos" className="scroll-mt-16 sm:scroll-mt-20 py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header Paper Sheet */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block relative px-8 py-3 bg-[#FAF8F5] rounded-xs shadow-md border border-[#CDBE96]/60 transform -rotate-1">
            <TapeSnippet position="top-center" width="w-20" height="h-5" rotation={1} />
            <h2 
              className="font-reenie font-bold text-4xl sm:text-5xl md:text-6xl text-[#3A3632] tracking-wider"
              style={{ filter: 'url(#hand-drawn-filter)' }}
            >
              TRABALHOS SELECIONADOS
            </h2>
            <HandDrawnUnderline className="w-64 h-3 mx-auto mt-1" color={CRAYON_COLORS.orange} />
            <p className="font-kalam text-sm sm:text-base text-[#3A3632]/80 mt-1">
              estilos de edição que tenho conhecimento
            </p>
          </div>

          {/* Category Filter Slips (Colored crayon paper tags) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3" role="tablist" aria-label="Filtrar por categoria">
            {CATEGORIES.map((cat, idx) => {
              const isSelected = selectedCategory === cat.label;
              const rotation = (idx % 2 === 0 ? -1.5 : 1.5) + (idx * 0.4);
              return (
                <button
                  key={cat.label}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`relative px-3.5 py-1.5 rounded-xs font-typewriter text-xs sm:text-sm border transition-all duration-200 cursor-pointer shadow-xs ${
                    isSelected
                      ? 'bg-white text-[#3A3632] font-bold shadow-md scale-105 border-[#3A3632]/40 ring-1 ring-[#3A3632]/20'
                      : 'bg-[#FAF8F5] hover:bg-white text-[#3A3632]/85 border-[#CDBE96]/60 hover:-translate-y-0.5'
                  }`}
                  style={{ transform: `rotate(${isSelected ? 0 : rotation}deg)` }}
                >
                  {/* Subtle top tape for selected */}
                  {isSelected && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 masking-tape rounded-xs opacity-90" />
                  )}
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: cat.color }}
                    />
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Irregular Grid of Paper Sheets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-4">
          {filteredProjects.map((project) => {
            const isHovered = hoveredProjectId === project.id;
            const categoryColor = CATEGORY_COLORS[project.category] || '#FFB703';
            const bgClass = project.paperColor === 'yellow' ? 'bg-[#F9F6EE]' : 'bg-[#FAF8F5]';

            return (
              <article
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                onClick={() => setActiveProject(project)}
                className={`group relative p-4 sm:p-5 rounded-xs cursor-pointer paper-shadow paper-shadow-hover ${bgClass} border border-[#CDBE96]/60 transition-all duration-300`}
                style={{
                  transform: isHovered
                    ? 'translateY(-6px) rotate(0deg) scale(1.02)'
                    : `rotate(${project.rotationDeg}deg)`,
                }}
              >
                {/* Masking Tape Pieces based on project config */}
                {project.tapePosition === 'top-corners' && (
                  <>
                    <TapeSnippet position="top-left" width="w-14" height="h-4" rotation={-20} />
                    <TapeSnippet position="top-right" width="w-14" height="h-4" rotation={22} />
                  </>
                )}
                {project.tapePosition === 'top' && (
                  <TapeSnippet position="top-center" width="w-20" height="h-4.5" rotation={project.rotationDeg * -1} />
                )}
                {project.tapePosition === 'corners' && (
                  <>
                    <TapeSnippet position="top-left" width="w-12" height="h-4" rotation={-25} />
                    <TapeSnippet position="bottom-right" width="w-12" height="h-4" rotation={-20} />
                  </>
                )}
                {project.tapePosition === 'top-single' && (
                  <TapeSnippet position="top-center" width="w-16" height="h-4" rotation={2} />
                )}

                {/* Inner Video Preview Frame */}
                <div className="bg-white p-2 sm:p-2.5 pb-3 rounded-xs shadow-xs border border-[#CDBE96]/30 overflow-hidden">
                  <div className="relative aspect-4/3 overflow-hidden rounded-xs bg-[#1C1A18] group-hover:shadow-md transition-all">
                    {project.videoSrc ? (
                      <video
                        src={`${project.videoSrc}#t=0.001`}
                        poster={project.mainImage}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onMouseEnter={(e) => {
                          e.currentTarget.play().catch(() => {});
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    ) : (
                      <img
                        src={project.mainImage}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-[#3A3632]/10 pointer-events-none mix-blend-multiply" />

                    {/* Video Duration Badge */}
                    {project.duration && (
                      <span className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur-xs text-white font-mono text-[11px] rounded-xs font-semibold shadow-xs">
                        {project.duration}
                      </span>
                    )}

                    {/* Centered Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div 
                        className="w-10 h-10 rounded-full text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-115"
                        style={{ backgroundColor: isHovered ? categoryColor : 'rgba(0,0,0,0.6)' }}
                      >
                        <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Typography & Metadata */}
                <div className="mt-3.5 px-1">
                  
                  {/* Category & Year (clean unboxed text with separators per guidelines) */}
                  <div className="flex items-center gap-1.5 text-xs font-typewriter text-[#3A3632]/75 mb-1.5">
                    <span className="font-semibold" style={{ color: categoryColor }}>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">{project.client}</span>
                  </div>

                  {/* Title */}
                  <div className="relative inline-block my-1">
                    <h3 
                      className="font-kalam font-bold text-lg sm:text-xl transition-colors duration-200 leading-snug"
                      style={{ color: isHovered ? categoryColor : '#3A3632' }}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Brief summary text */}
                  <p className="font-karla text-xs sm:text-sm text-[#3A3632]/85 line-clamp-2 leading-relaxed mt-1">
                    {project.shortDesc}
                  </p>

                  {/* Watch Video Link */}
                  <div className="mt-3 pt-2.5 border-t border-dashed border-[#3A3632]/20 flex items-center justify-end">
                    <span 
                      className="font-typewriter text-xs font-bold group-hover:translate-x-0.5 transition-all inline-block"
                      style={{ color: isHovered ? categoryColor : '#3A3632' }}
                    >
                      assistir ↗
                    </span>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Video Modal */}
      <VideoModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
