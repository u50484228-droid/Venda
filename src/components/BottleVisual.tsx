import React from 'react';
import { ZoomIn } from 'lucide-react';

interface BottleVisualProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  count?: 1 | 3 | 6;
  onOpenLabelModal?: () => void;
  className?: string;
  showBadges?: boolean;
}

export const BottleVisual: React.FC<BottleVisualProps> = ({
  size = 'hero',
  count = 1,
  onOpenLabelModal,
  className = '',
  showBadges = true,
}) => {
  // Determine real image source based on count or hero context
  let imageSrc = '/images/1-bottle.webp';
  let altText = 'VapoFil™ Premium Formula 60 Capsules';

  if (size === 'hero') {
    imageSrc = '/images/hero-bottles.webp';
    altText = 'VapoFil™ 7-in-1 Male Optimization Formula';
  } else if (count === 6) {
    imageSrc = '/images/6-bottles.webp';
    altText = 'VapoFil™ 6-Bottle 180-Day Supply';
  } else if (count === 3) {
    imageSrc = '/images/3-bottles.webp';
    altText = 'VapoFil™ 3-Bottle 90-Day Supply';
  } else {
    imageSrc = '/images/1-bottle.webp';
    altText = 'VapoFil™ 1-Bottle 30-Day Supply';
  }

  // Sizing classes
  const sizeClasses = {
    sm: 'h-48 sm:h-56 max-w-[200px]',
    md: 'h-56 sm:h-64 max-w-[240px]',
    lg: 'h-64 sm:h-72 max-w-[280px]',
    hero: 'h-80 sm:h-96 md:h-[420px] max-w-[340px] sm:max-w-[380px]',
  }[size];

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Subtle Blue Glow Backdrop */}
      <div className="absolute inset-0 bg-blue-500/15 blur-2xl rounded-full scale-110 -z-10 pointer-events-none" />

      {/* Real Product Render with hover zoom */}
      <div
        onClick={onOpenLabelModal}
        className={`relative flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105 active:scale-95 ${sizeClasses}`}
        title="Click to view Supplement Facts"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-contain drop-shadow-2xl"
          loading={size === 'hero' ? 'eager' : 'lazy'}
          decoding="async"
        />

        {/* Hover Inspect Overlay Indicator */}
        {onOpenLabelModal && (
          <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center pointer-events-none">
            <span className="px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg border border-blue-400/50">
              <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
              <span>Ver Rótulo</span>
            </span>
          </div>
        )}
      </div>

      {/* Click to inspect label interactive button */}
      {showBadges && onOpenLabelModal && (
        <button
          type="button"
          onClick={onOpenLabelModal}
          className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 text-blue-700 hover:text-blue-800 border border-blue-200 text-xs font-bold shadow-xs transition-all group cursor-pointer"
        >
          <ZoomIn className="w-3.5 h-3.5 text-blue-600 group-hover:scale-110 transition-transform" />
          <span>Ver Tabela Nutricional & Rótulo</span>
        </button>
      )}
    </div>
  );
};

