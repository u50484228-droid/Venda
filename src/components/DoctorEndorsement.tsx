import React from 'react';
import { Award, CheckCircle2, Quote, ShieldCheck, Stethoscope, ArrowRight } from 'lucide-react';
import { BottleVisual } from './BottleVisual';
import { AFFILIATE_BUY_LINK } from '../data/productData';
import { Language } from '../types';

interface DoctorEndorsementProps {
  language: Language;
  onOpenLabelModal: () => void;
}

export const DoctorEndorsement: React.FC<DoctorEndorsementProps> = ({ language, onOpenLabelModal }) => {
  return (
    <section id="clinical-proof" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'en' ? 'Medical Specialist Review' : 'Avaliação Médica Especializada'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'en' ? (
              <>
                Why Health Specialists Recommend{' '}
                <span className="text-blue-600">
                  VapoFil™
                </span>{' '}
                Over Prescriptions
              </>
            ) : (
              <>
                Descubra o Segredo Por Trás da Fórmula do{' '}
                <span className="text-blue-600">
                  VapoFil™
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Doctor Spotlight Box (Inspired by images 2 & 5) */}
        <div className="bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Doctor Quote & Clinical Rationale (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100/70 text-blue-800 text-xs font-semibold border border-blue-300">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>{language === 'en' ? 'Clinical Phytotherapy Endorsement' : 'Endosso Clínico em Fitoterapia'}</span>
              </div>

              {/* Exact quote translating Image 5 */}
              <div className="relative pl-6 border-l-4 border-blue-600 space-y-3">
                <Quote className="w-8 h-8 text-blue-300/40 absolute -top-2 -left-2 -z-10" />
                <p className="text-lg sm:text-xl font-medium text-slate-900 italic leading-relaxed">
                  {language === 'en' ? (
                    <>
                      "I thoroughly scrutinized dozens of male vitality supplements, and VapoFil is truly in a league of its own. If you’ve noticed your energy dipping, or feel like your physical performance and bedroom connection with your wife aren’t what they used to be, I strongly recommend VapoFil."
                    </>
                  ) : (
                    <>
                      "Analisei minuciosamente diversos suplementos para a saúde masculina e descobri que o VapoFil é verdadeiramente único. Se você não estiver se sentindo bem, se perceber que seu desempenho com sua esposa não é mais o mesmo, recomendo fortemente o VapoFil."
                    </>
                  )}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {language === 'en' ? (
                  <>
                    VapoFil provides the exact high-potency standardized ratios of Tongkat Ali (100:1) and Horny Goat Weed (10:1) needed to stimulate endogenous androgens naturally without inducing cardiovascular strain or rebound fatigue.
                  </>
                ) : (
                  <>
                    VapoFil é uma fórmula natural meticulosamente desenvolvida que combina uma seleção de nutrientes vitais encontrados na natureza para apoiar a virilidade, a energia e a vitalidade masculina em sua máxima eficácia.
                  </>
                )}
              </p>

              {/* Specialist Credentials */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-base font-bold text-slate-950">Dr. Emma Clark, M.D.</h4>
                  <p className="text-xs text-slate-600">Board Certified Specialist in Integrative & Functional Health</p>
                  <p className="text-[11px] text-blue-700 font-semibold">Independent Medical Reviewer • VapoFil™</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 flex items-center gap-1.5 shadow-xs">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Peer-Reviewed Botanical Dossier</span>
                  </div>
                </div>
              </div>

              {/* Doctor Endorsement CTA Button */}
              <div className="pt-4">
                <a
                  id="doctor-affiliate-cta-btn"
                  href={AFFILIATE_BUY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-b from-[#fecb00] via-[#f7b700] to-[#e7a300] hover:from-[#fed42a] hover:to-[#efa800] text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-amber-500/20 border-2 border-amber-300 transition-all hover:scale-105 active:scale-95 group"
                >
                  <span>
                    {language === 'en'
                      ? 'Claim Doctor-Reviewed Discount Up To $780 Off'
                      : 'Garantir Desconto Especial Avaliado Por Médicos'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right Column: Visual of Doctor holding bottle / Bottle Showcase (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-sm rounded-2xl bg-white p-5 border border-slate-200 text-center shadow-md">
                
                {/* Real Doctor Image from vapofil.com holding VapoFil */}
                <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden mb-4 bg-slate-100 flex items-center justify-center">
                  <img
                    src="./images/doctor.webp"
                    alt="Dr. Emma Clark evaluating VapoFil"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <p className="text-xs font-semibold text-slate-900">
                  {language === 'en' ? 'Verified Quality & Batch Purity Lab Tested' : 'Lotes Testados em Laboratório & Pureza Certificada'}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Made in Lakeland, FL • cGMP Compliant
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
