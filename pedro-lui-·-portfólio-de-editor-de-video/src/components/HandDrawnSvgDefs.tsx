import React from 'react';

export const HandDrawnSvgDefs: React.FC = () => {
  return (
    <svg className="sr-only" aria-hidden="true" width="0" height="0">
      <defs>
        {/* Subtle hand-drawn jitter / tremble filter */}
        <filter id="hand-drawn-filter" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Rough crayon texture filter */}
        <filter id="crayon-rough" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="turbulence" baseFrequency="0.07" numOctaves="3" result="roughNoise" />
          <feDisplacementMap in="SourceGraphic" in2="roughNoise" scale="3.8" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Paper texture overlay pattern */}
        <pattern id="paper-grain" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="0.8" fill="#3A3632" opacity="0.05" />
          <circle cx="80" cy="40" r="0.6" fill="#3A3632" opacity="0.04" />
          <circle cx="50" cy="80" r="0.7" fill="#3A3632" opacity="0.05" />
        </pattern>
      </defs>
    </svg>
  );
};

// Hand-drawn SVG doodle helpers:
export const HandDrawnArrow: React.FC<{ className?: string; color?: string; flip?: boolean }> = ({
  className = 'w-12 h-12',
  color = '#E08A2E',
  flip = false,
}) => (
  <svg
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className} ${flip ? '-scale-x-100' : ''}`}
    style={{ filter: 'url(#hand-drawn-filter)' }}
    aria-hidden="true"
  >
    <path
      d="M10 25 C 30 18, 60 22, 85 35"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M70 20 C 78 26, 85 35, 85 35 C 80 43, 72 49, 70 49"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HandDrawnUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-3',
  color = '#E08A2E',
}) => (
  <svg
    viewBox="0 0 200 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`block ${className}`}
    preserveAspectRatio="none"
    style={{ filter: 'url(#hand-drawn-filter)' }}
    aria-hidden="true"
  >
    <path
      d="M2 9 C 40 4, 90 12, 140 7 C 165 5, 185 10, 198 8"
      stroke={color}
      strokeWidth="3.2"
      strokeLinecap="round"
    />
  </svg>
);

export const HandDrawnCircle: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-full h-full',
  color = '#E08A2E',
}) => (
  <svg
    viewBox="0 0 120 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{ filter: 'url(#crayon-rough)' }}
    aria-hidden="true"
  >
    <ellipse
      cx="60"
      cy="35"
      rx="54"
      ry="28"
      stroke={color}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeDasharray="4 2"
      className="animate-draw-circle"
    />
  </svg>
);

export const HandDrawnStar: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#E08A2E',
}) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={{ filter: 'url(#hand-drawn-filter)' }}
    aria-hidden="true"
  >
    <path
      d="M25 5 L29 18 L43 20 L32 29 L36 43 L25 35 L14 43 L18 29 L7 20 L21 18 Z"
      stroke={color}
      strokeWidth="2.8"
      fill={`${color}22`}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HandDrawnSpiralSpine: React.FC<{ count?: number; className?: string }> = ({
  count = 14,
  className = '',
}) => {
  return (
    <div className={`flex flex-col justify-between items-center py-4 h-full pointer-events-none select-none z-30 ${className}`}>
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="relative flex items-center justify-center my-1">
          {/* Left punch hole */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3632]/80 shadow-inner -mr-1 z-10" />
          {/* Wire ring */}
          <div
            className="w-9 h-4 -my-1 rounded-full spiral-ring z-20 transform -rotate-6"
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.7)',
            }}
          />
          {/* Right punch hole */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#3A3632]/80 shadow-inner -ml-1 z-10" />
        </div>
      ))}
    </div>
  );
};

export const HandDrawnHeart: React.FC<{ className?: string; color?: string; fill?: boolean }> = ({
  className = 'w-4 h-4',
  color = '#D93A2B',
  fill = false,
}) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    style={{ filter: 'url(#hand-drawn-filter)' }}
    aria-hidden="true"
  >
    {/* Outer sketchy heart contour */}
    <path
      d="M16 27 C 14 24, 4 17, 4 10.5 C 4 6.5, 7.5 4, 11.5 4 C 14 4, 15.5 5.5, 16 7 C 16.5 5.5, 18 4, 20.5 4 C 24.5 4, 28 6.5, 28 10.5 C 28 17, 18 24, 16 27 Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={fill ? `${color}30` : `${color}18`}
    />
    {/* Inner sketch scribble line for hand-drawn charm */}
    <path
      d="M15.5 25.5 C 13.2 21.5, 5.8 15.8, 5.8 10.8 C 5.8 7.8, 8.2 5.8, 11.2 5.8 C 13.6 5.8, 15 7.2, 15.8 8.5"
      stroke={color}
      strokeWidth="1.3"
      strokeLinecap="round"
      opacity="0.75"
    />
    {/* Subtle highlight scribble */}
    <path
      d="M9 10 C 10.2 8.5, 12 9, 12.5 10.5"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);

export const HandDrawnGavel: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-3.5 h-3.5',
  color = '#FFB703',
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 ${className}`}
    style={{ filter: 'url(#hand-drawn-filter)' }}
    aria-hidden="true"
  >
    {/* Sound block (base) */}
    <path
      d="M3 19.5 C 5.5 18.5, 9.5 18.5, 12 19.5 L 11.5 21.5 C 9 22.2, 5.5 22.2, 3 21.5 Z"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={`${color}22`}
    />
    {/* Gavel handle */}
    <path
      d="M13.5 8.5 L 6.5 15.5 C 5.8 16.2, 5.8 17.2, 6.5 17.9 C 7.2 18.6, 8.2 18.6, 8.9 17.9 L 15.5 11"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={`${color}26`}
    />
    {/* Mallet head (angled barrel) */}
    <path
      d="M11.5 4.5 L 16.5 9.5 L 19 7 L 14 2 Z"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={`${color}35`}
    />
    {/* Mallet head caps/ridges */}
    <path
      d="M10.8 5.2 L 13.3 2.7"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M17.2 10.2 L 19.7 7.7"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

