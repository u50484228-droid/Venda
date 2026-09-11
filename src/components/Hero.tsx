import React from 'react';
import { ShieldCheck, CheckCircle, ArrowRight, Award, HeartPulse, Sparkles } from 'lucide-react';
import { BottleVisual } from './BottleVisual';
import { AFFILIATE_BUY_LINK, triggerConversionAndRedirect } from '../data/productData';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onOpenLabelModal: () => void;
  headlineVariant?: string;
  minutes?: number;
  seconds?: number;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onOpenLabelModal,
}) => {
  const scrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/25 text-slate-900 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Hero Grid (Product first on mobile, side-by-side on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Direct Response Copy & CTA (7 cols on desktop, 2nd on mobile) */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left space-y-6">

            {/* High-Converting Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
              {language === 'en' ? (
                <>
                  The #1 Natural Formula To Unleash Male{' '}
                  <span className="text-blue-600">
                    Virility, Stamina
                  </span>{' '}
                  & Morning Vitality.
                </>
              ) : (
                <>
                  A fórmula natural número um do mundo para promover a{' '}
                  <span className="text-blue-600">
                    virilidade, a energia
                  </span>{' '}
                  e a vitalidade masculina.
                </>
              )}
            </h1>

            {/* Sub-headline directly from product brief */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {language === 'en' ? (
                <>
                  Experience <strong className="text-slate-950 font-bold">VapoFil™</strong>: a meticulously engineered 
                  complex of 7 pure botanical extracts that target the root biological triggers of male performance—unlocking 
                  captive free testosterone, revitalizing microvascular blood flow, and fortifying prostate wellness.
                </>
              ) : (
                <>
                  Experimente <strong className="text-slate-950 font-bold">VapoFil</strong>: um suplemento com ingredientes e 
                  nutrientes selecionados que promovem a saúde masculina em sua máxima eficácia.
                </>
              )}
            </p>

            {/* Core Value Benefit Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 block">
                    {language === 'en' ? 'Unlocks Captive Free-T' : 'Libera Testosterona Livre'}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {language === 'en' ? 'Breaks SHBG hormone binding trap' : 'Neutraliza o aprisionamento SHBG'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 block">
                    {language === 'en' ? 'Surges Nitric Oxide Flow' : 'Amplia Óxido Nítrico'}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {language === 'en' ? 'Icariin-powered pelvic circulation' : 'Circulação pélvica otimizada'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 block">
                    {language === 'en' ? 'Prostate & DHT Shield' : 'Proteção da Próstata'}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {language === 'en' ? 'Saw Palmetto blocks excess DHT' : 'Saw Palmetto reduz conversão em DHT'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-bold text-slate-900 block">
                    {language === 'en' ? '100% Non-Prescription' : '100% Sem Receita'}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {language === 'en' ? 'Pure botanicals, zero drug side-effects' : 'Fórmula botânica natural e pura'}
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action Button Area */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-affiliate-cta-btn"
                href={AFFILIATE_BUY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => triggerConversionAndRedirect(e, AFFILIATE_BUY_LINK, 'Hero CTA - Claim Your Discount $780 Off')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-b from-[#fecb00] via-[#f7b700] to-[#e7a300] hover:from-[#fed42a] hover:to-[#efa800] text-slate-950 font-black text-base sm:text-lg uppercase tracking-wider shadow-xl shadow-amber-500/20 border-2 border-amber-300 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>{language === 'en' ? 'Claim Your Discount Up To $780 Off' : 'Garantir Meu Desconto Exclusivo'}</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* 60-Day Guarantee Micro Seal */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-slate-600 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>
                {language === 'en'
                  ? 'Backed by our 60-Day 100% Money-Back Empty Bottle Guarantee'
                  : 'Garantia de 60 Dias ou 100% do seu dinheiro de volta'}
              </span>
            </div>

            {/* Quality Badges from official vapofil.com */}
            <div className="pt-4 border-t border-slate-200">
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3 text-center lg:text-left">
                {language === 'en' ? 'Manufactured to the Highest Standards' : 'Produzido com os Mais Altos Padrões'}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-1.5">
                  <img src="./images/badge-gmp.png" alt="GMP Certified" className="w-10 h-10 object-contain" />
                  <span className="text-[11px] font-bold text-slate-800">GMP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src="./images/badge-fda.png" alt="FDA Facility" className="w-10 h-10 object-contain" />
                  <span className="text-[11px] font-bold text-slate-800">FDA Facility</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src="./images/badge-natural.png" alt="100% Natural" className="w-10 h-10 object-contain" />
                  <span className="text-[11px] font-bold text-slate-800">100% Natural</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src="./images/badge-usa.png" alt="Made in USA" className="w-10 h-10 object-contain" />
                  <span className="text-[11px] font-bold text-slate-800">Made in USA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <img src="./images/badge-gmo.png" alt="Non-GMO" className="w-10 h-10 object-contain" />
                  <span className="text-[11px] font-bold text-slate-800">Non-GMO</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Bottle Display (1st on mobile, 5 cols on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center">
            <div
              title="VapoFil™ 6-Bottle Presentation"
              className="relative w-full max-w-md p-4 sm:p-6 rounded-3xl bg-gradient-to-b from-blue-50/60 via-slate-50 to-white border border-blue-100 shadow-xl select-none"
            >
              {/* Product Badge Tag */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <div className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{language === 'en' ? '100% Natural' : '100% Natural'}</span>
                </div>
              </div>

              {/* Vector Bottle Presentation */}
              <BottleVisual
                size="hero"
                count={6}
                onOpenLabelModal={onOpenLabelModal}
              />

              {/* Quick Spec Ribbon below bottle */}
              <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500 uppercase font-bold">Count</p>
                  <p className="text-sm font-extrabold text-slate-950">60 Capsules</p>
                </div>
                <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500 uppercase font-bold">Dose</p>
                  <p className="text-sm font-extrabold text-slate-950">2 Daily</p>
                </div>
                <div className="p-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
                  <p className="text-xs text-slate-500 uppercase font-bold">Origin</p>
                  <p className="text-sm font-extrabold text-blue-600">USA Facility</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
