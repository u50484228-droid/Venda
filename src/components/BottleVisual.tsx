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
  // Determine real image source based on count or hero context (with ?v=2 for instant cache refresh)
  let imageSrc = '/images/1-bottle.webp?v=2';
  let altText = 'VapoFil™ Premium Formula 60 Capsules';

  if (size === 'hero') {
    imageSrc = '/images/6-bottles.webp?v=2';
    altText = 'VapoFil™ 7-in-1 Male Optimization Formula';
  } else if (count === 6) {
    imageSrc = '/images/6-bottles.webp?v=2';
    altText = 'VapoFil™ 6-Bottle 180-Day Supply';
  } else if (count === 3) {
    imageSrc = '/images/3-bottles.webp?v=2';
    altText = 'VapoFil™ 3-Bottle 90-Day Supply';
  } else if (count === 2) {
    imageSrc = '/images/2-bottles.webp?v=2';
    altText = 'VapoFil™ 2-Bottle 60-Day Supply';
  } else {
    imageSrc = '/images/1-bottle.webp?v=2';
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
          src={imageSrc}
          alt={altText}
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

