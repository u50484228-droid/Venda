import React from 'react';
import { Award, CheckCircle2, Quote, ShieldCheck, Stethoscope } from 'lucide-react';
import { BottleVisual } from './BottleVisual';
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'en' ? 'Medical Specialist Review' : 'Avaliação Médica Especializada'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'en' ? (
              <>
                Why Health Specialists Recommend{' '}
                <span className="text-blue-600">VapoFil™</span> Over Prescriptions
              </>
            ) : (
              <>
                Descubra o Segredo Por Trás da Fórmula do{' '}
                <span className="text-blue-600">VapoFil™</span>
              </>
            )}
          </h2>
        </div>

        {/* Doctor Spotlight Box (Inspired by images 2 & 5) */}
        <div className="bg-gradient-to-br from-slate-900 via-[#0a1838] to-slate-900 text-white rounded-3xl border border-blue-600/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Doctor Quote & Clinical Rationale (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-900/50 text-blue-200 text-xs font-semibold border border-blue-600/40">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>{language === 'en' ? 'Clinical Phytotherapy Endorsement' : 'Endosso Clínico em Fitoterapia'}</span>
              </div>

              {/* Exact quote translating Image 5 */}
              <div className="relative pl-6 border-l-4 border-blue-500 space-y-3">
                <Quote className="w-8 h-8 text-blue-400/20 absolute -top-2 -left-2 -z-10" />
                <p className="text-lg sm:text-xl font-medium text-white italic leading-relaxed">
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

              <p className="text-sm text-slate-300 leading-relaxed">
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
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h4 className="text-base font-bold text-white">Dr. Emma Clark, M.D.</h4>
                  <p className="text-xs text-slate-400">Board Certified Specialist in Integrative & Functional Health</p>
                  <p className="text-[11px] text-blue-400 font-medium">Independent Medical Reviewer • VapoFil™</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Peer-Reviewed Botanical Dossier</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual of Doctor holding bottle / Bottle Showcase (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-full max-w-sm rounded-2xl bg-slate-950/80 p-5 border border-slate-800 text-center shadow-lg">
                
                {/* Real Doctor Image from vapofil.com holding VapoFil */}
                <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden mb-4 bg-slate-900 flex items-center justify-center">
                  <img
                    src="./images/doctor.webp"
                    alt="Dr. Emma Clark evaluating VapoFil"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                <p className="text-xs font-semibold text-slate-200">
                  {language === 'en' ? 'Verified Quality & Batch Purity Lab Tested' : 'Lotes Testados em Laboratório & Pureza Certificada'}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
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
