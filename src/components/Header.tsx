import React from 'react';
import { Timer, ShieldCheck, Flame, Globe } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  minutes: number;
  seconds: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  minutes,
  seconds,
}) => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Scarcity Bar (as seen in image 3 & 8) */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 px-4 py-2 text-white text-center text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 border-b border-blue-600/40">
        <Flame className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
        <span>
          {language === 'en'
            ? '🔥 SPECIAL US FLASH SALE: Limited Stock Reserved For Next'
            : '🔥 Garanta já o seu VapoFil com desconto enquanto durarem os estoques!'}
        </span>
        <div className="inline-flex items-center gap-1 bg-black/40 px-2.5 py-0.5 rounded-full font-mono font-bold text-amber-300 text-xs sm:text-sm border border-amber-400/40">
          <Timer className="w-3.5 h-3.5" />
          <span>{formattedTime}</span>
        </div>
        <span className="hidden md:inline text-blue-200">
          {language === 'en' ? '• Free US Shipping on 3 & 6 Bottles' : '• Frete Grátis para 3 e 6 frascos'}
        </span>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-1.5 h-8 bg-blue-600 rounded-sm shadow-[0_0_10px_#2563eb]" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-slate-950 font-mono leading-none">
                VAPOFIL
              </span>
              <span className="text-[9px] font-extrabold tracking-widest text-blue-600 uppercase leading-tight mt-0.5">
                PREMIUM FORMULA
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-slate-200 text-[11px] text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>FDA Registered Facility • GMP Certified • Made in USA</span>
          </div>
        </div>

        {/* Desktop Quick Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-700">
          <a href="#science" className="hover:text-blue-600 transition-colors">
            {language === 'en' ? 'The Science' : 'A Ciência'}
          </a>
          <a href="#ingredients" className="hover:text-blue-600 transition-colors">
            {language === 'en' ? '7 Botanicals' : '7 Ingredientes'}
          </a>
          <a href="#clinical-proof" className="hover:text-blue-600 transition-colors">
            {language === 'en' ? 'Doctor Review' : 'Avaliação Médica'}
          </a>
          <a href="#pricing-section" className="text-blue-600 font-bold hover:text-blue-700 transition-colors">
            {language === 'en' ? 'Claim Discount' : 'Comprar com Desconto'}
          </a>
          <a href="#faq" className="hover:text-blue-600 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-xs font-semibold text-slate-800 transition-colors cursor-pointer shadow-xs"
            title={language === 'en' ? 'Mudar para Português' : 'Switch to English (US Men)'}
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span className="font-bold">{language === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}</span>
          </button>

          {/* Direct Buy CTA */}
          <button
            type="button"
            onClick={scrollToPricing}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-600/20 border border-blue-400/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{language === 'en' ? 'Get VapoFil' : 'Pedir Agora'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
