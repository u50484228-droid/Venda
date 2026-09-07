import React from 'react';
import { ZoomIn } from 'lucide-react';

interface BottleVisualProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  count?: 1 | 2 | 3 | 6;
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
  // Determine filename based on count or size
  let fileName = '1-bottle';
  let altText = 'VapoFil™ Premium Formula 60 Capsules';

  if (size === 'hero' || count === 6) {
    fileName = '6-bottles';
    altText = size === 'hero' ? 'VapoFil™ 7-in-1 Male Optimization Formula' : 'VapoFil™ 6-Bottle 180-Day Supply';
  } else if (count === 3) {
    fileName = '3-bottles';
    altText = 'VapoFil™ 3-Bottle 90-Day Supply';
  } else if (count === 2) {
    fileName = '2-bottles';
    altText = 'VapoFil™ 2-Bottle 60-Day Supply';
  } else {
    fileName = '1-bottle';
    altText = 'VapoFil™ 1-Bottle 30-Day Supply';
  }

  // Base-aware relative path suitable for GitHub Pages, root domains, and local preview
  const metaEnv = (import.meta as unknown as { env?: { BASE_URL?: string } })?.env;
  const basePath = metaEnv?.BASE_URL || './';
  const prefix = basePath.endsWith('/') ? basePath : `${basePath}/`;
  const primarySrc = `${prefix}images/${fileName}.webp`;

  // Sizing classes
  const sizeClasses = {
    sm: 'h-48 sm:h-56 max-w-[200px]',
    md: 'h-56 sm:h-64 max-w-[240px]',
    lg: 'h-64 sm:h-72 max-w-[280px]',
    hero: 'h-80 sm:h-96 md:h-[420px] max-w-[340px] sm:max-w-[380px]',
  }[size];

  // Robust fallback sequence if host environment has path quirks
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    const currentSrc = target.getAttribute('src') || '';
    
    if (!currentSrc.includes('.png')) {
      // Fallback 1: try transparent PNG
      target.src = `${prefix}images/${fileName}.png`;
    } else if (currentSrc.startsWith('http') || currentSrc.startsWith('/')) {
      // Fallback 2: try pure relative ./
      target.src = `./images/${fileName}.png`;
    } else if (!currentSrc.includes('.jpg')) {
      // Fallback 3: try jpg
      target.src = `./images/${fileName}.jpg`;
    }
  };

  return (
    <div
      id={`bottle-visual-${count}-${size}`}
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
    >
      {/* Subtle Blue Glow Backdrop */}
      <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-full scale-110 -z-10 pointer-events-none" />

      {/* Real Product Render with hover zoom and energetic jumping animation */}
      <div
        className={`relative flex items-center justify-center group transition-transform duration-300 hover:scale-105 animate-product-jump ${sizeClasses}`}
      >
        <img
          id={`bottle-img-${count}-${size}`}
          src={primarySrc}
          alt={altText}
          onError={handleImageError}
          className="w-full h-full object-contain drop-shadow-xl"
          loading={size === 'hero' ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>

      {/* Dynamic Floor Shadow beneath jumping bottle */}
      <div className="w-36 sm:w-48 h-3 -mt-2 bg-slate-900/15 blur-md rounded-full animate-product-shadow pointer-events-none" />
    </div>
  );
};

