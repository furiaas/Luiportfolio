import React from 'react';

interface TapeSnippetProps {
  position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'custom';
  width?: string;
  height?: string;
  rotation?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const TapeSnippet: React.FC<TapeSnippetProps> = ({
  position = 'top-center',
  width = 'w-24',
  height = 'h-6',
  rotation,
  className = '',
  style = {},
}) => {
  // Preset styles based on position
  let defaultRotation = 0;
  let positionClasses = '';

  switch (position) {
    case 'top-left':
      defaultRotation = -24;
      positionClasses = 'absolute -top-3.5 -left-4 z-20';
      break;
    case 'top-right':
      defaultRotation = 26;
      positionClasses = 'absolute -top-3.5 -right-4 z-20';
      break;
    case 'top-center':
      defaultRotation = -1.5;
      positionClasses = 'absolute -top-3 left-1/2 -translate-x-1/2 z-20';
      break;
    case 'bottom-left':
      defaultRotation = 18;
      positionClasses = 'absolute -bottom-3 -left-3 z-20';
      break;
    case 'bottom-right':
      defaultRotation = -20;
      positionClasses = 'absolute -bottom-3 -right-3 z-20';
      break;
    case 'custom':
      positionClasses = 'relative';
      break;
  }

  const rot = rotation !== undefined ? rotation : defaultRotation;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none masking-tape tape-torn-h ${width} ${height} ${positionClasses} ${className}`}
      style={{
        transform: position === 'top-center' ? `translateX(-50%) rotate(${rot}deg)` : `rotate(${rot}deg)`,
        backgroundColor: 'rgba(205, 190, 150, 0.88)',
        boxShadow: '0 2px 5px rgba(58, 54, 50, 0.16), inset 0 1px 1px rgba(255, 255, 255, 0.45)',
        ...style,
      }}
    >
      {/* Subtle fiber line texture */}
      <div className="w-full h-full opacity-35 bg-[repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(255,255,255,0.4)_3px,rgba(255,255,255,0.4)_4px)]" />
    </div>
  );
};
