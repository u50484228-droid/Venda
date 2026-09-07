import React, { useState, useEffect } from 'react';
import { ShoppingCart, Timer, Flame } from 'lucide-react';
import { AFFILIATE_BUY_LINK } from '../data/productData';
import { Language } from '../types';

interface StickyCtaBarProps {
  language: Language;
  minutes: number;
  seconds: number;
}

export const StickyCtaBar: React.FC<StickyCtaBarProps> = ({ language, minutes, seconds }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 600px
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const scrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 sm:py-3.5 shadow-2xl animate-in slide-in-from-bottom duration-300 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Left info */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 items-center justify-center text-amber-600">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-black text-slate-950 uppercase tracking-wide">
                {language === 'en' ? 'VapoFil™ Flash Sale' : 'VapoFil™ Oferta Relâmpago'}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-gradient-to-b from-[#fecb00] to-[#e7a300] text-slate-950 shadow-xs">
                {language === 'en' ? 'SAVE UP TO $780' : 'ATÉ $780 OFF'}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block">
              {language === 'en'
                ? '60-Day Money-Back Guarantee • Free US Fast Shipping on 3 & 6 Packs'
                : 'Garantia de 60 Dias • Frete Grátis para os EUA em 3 e 6 Frascos'}
            </p>
          </div>
        </div>

        {/* Right CTA + Timer */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 font-mono font-bold text-xs sm:text-sm">
            <Timer className="w-3.5 h-3.5 text-amber-600" />
            <span>{formattedTime}</span>
          </div>

          <a
            id="sticky-bar-affiliate-cta-btn"
            href={AFFILIATE_BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-2.5 rounded-xl bg-gradient-to-b from-[#fecb00] via-[#f7b700] to-[#e7a300] hover:from-[#fed42a] hover:to-[#efa800] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{language === 'en' ? 'Claim Deal' : 'Pedir Agora'}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
