import React from 'react';
import { AlertTriangle, Unlock, Activity, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface ProblemAgitationProps {
  language: Language;
}

export const ProblemAgitation: React.FC<ProblemAgitationProps> = ({ language }) => {
  return (
    <section id="science" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            <span>
              {language === 'en'
                ? 'The Biological Reality Facing American Men'
                : 'A Realidade Biológica que os Homens Enfrentam'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'en' ? (
              <>
                Why 60% of Your Natural Testosterone Is{' '}
                <span className="text-red-600 underline decoration-red-400">Locked Away</span> After 40
              </>
            ) : (
              <>
                Por que mais de 60% da sua testosterona fica{' '}
                <span className="text-red-600">aprisionada</span> após os 40 anos?
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {language === 'en' ? (
              <>
                Most men are told that low stamina, afternoon fatigue, and fading bedroom vigor are just "normal aging." 
                <strong className="text-slate-900 font-bold"> That is simply not true.</strong> Modern clinical research reveals 
                a critical hidden mechanism that mainstream medicine rarely talks about.
              </>
            ) : (
              <>
                Dizem aos homens que perder o vigor e a disposição faz parte do envelhecimento natural. 
                <strong className="text-slate-900 font-bold"> Isso não é verdade.</strong> Pesquisas clínicas modernas 
                revelam uma armadilha biológica oculta.
              </>
            )}
          </p>
        </div>

        {/* 3 Root Causes Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Trap 1: SHBG Binding */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all space-y-4 relative group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <Unlock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              {language === 'en' ? '1. The "SHBG Hormone Trap"' : '1. A Armadilha da SHBG'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'en' ? (
                <>
                  Your body still produces testosterone, but a sticky transport protein called <strong className="text-slate-900">SHBG (Sex Hormone-Binding Globulin)</strong> increases with age, binding tightly to your testosterone molecules. Once bound, testosterone becomes biologically useless—leaving you drained and frustrated.
                </>
              ) : (
                <>
                  Seu corpo ainda produz testosterona, mas uma proteína chamada <strong className="text-slate-900">SHBG</strong> se liga às moléculas hormonais, tornando-as biologicamente inativas e aprisionadas.
                </>
              )}
            </p>
            <div className="pt-2 text-xs font-bold text-blue-700 flex items-center gap-1">
              <span>{language === 'en' ? 'VapoFil Fix: Nettle Leaf & Boron Chelate' : 'Solução VapoFil: Urtiga & Boro Quelatado'}</span>
            </div>
          </div>

          {/* Trap 2: Microvascular Endothelial Decline */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-sky-400 hover:shadow-lg transition-all space-y-4 relative group">
            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              {language === 'en' ? '2. Depleted Nitric Oxide Flow' : '2. Redução do Óxido Nítrico'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'en' ? (
                <>
                  By age 50, healthy nitric oxide production in smooth muscle walls drops by over 50%. This restricts micro-capillary pelvic circulation, making spontaneous firm responses sluggish, weak, and difficult to sustain under pressure.
                </>
              ) : (
                <>
                  Aos 50 anos, os níveis de óxido nítrico nas artérias caem pela metade. Sem essa vasodilatação adequada, o fluxo sanguíneo pélvico diminui drasticamente.
                </>
              )}
            </p>
            <div className="pt-2 text-xs font-bold text-sky-700 flex items-center gap-1">
              <span>{language === 'en' ? 'VapoFil Fix: 10:1 Epimedium (Icariin)' : 'Solução VapoFil: Epimedium 10:1 (Icariina)'}</span>
            </div>
          </div>

          {/* Trap 3: DHT Conversion & Prostate Stress */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-purple-400 hover:shadow-lg transition-all space-y-4 relative group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950">
              {language === 'en' ? '3. Toxic DHT Prostate Cascade' : '3. Conversão Tóxica em DHT'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'en' ? (
                <>
                  Excess 5-alpha reductase enzyme converts what little testosterone remains into aggressive DHT. This stresses your prostate, triggers frequent midnight urination trips, disrupts deep sleep, and accelerates hair follicle miniaturization.
                </>
              ) : (
                <>
                  A enzima 5-alfa redutase converte testosterona saudável em DHT agressivo, sobrecarregando a próstata e causando acordares noturnos contínuos.
                </>
              )}
            </p>
            <div className="pt-2 text-xs font-bold text-purple-700 flex items-center gap-1">
              <span>{language === 'en' ? 'VapoFil Fix: Standardized Saw Palmetto' : 'Solução VapoFil: Saw Palmetto Padronizado'}</span>
            </div>
          </div>

        </div>

        {/* Comparison Box: Dangerous Synthetics vs VapoFil */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-md">
          <h3 className="text-lg sm:text-2xl font-black text-slate-950 text-center mb-6">
            {language === 'en'
              ? 'Why American Men Are Ditching Dangerous Prescription Chemicals For VapoFil™'
              : 'Por Que Homens Estão Abandonando Remédios Químicos Pelo VapoFil™'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Dangerous Old Way */}
            <div className="p-5 rounded-xl bg-red-50/60 border border-red-200 space-y-3">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm uppercase">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>{language === 'en' ? 'Chemical "Blue" Pills & Synthetic Drugs' : 'Pílulas Azuis Sintéticas & Farmacêuticas'}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">✗</span> Sudden spikes in blood pressure, flushing, and headaches
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">✗</span> Requires awkward doctor visits and expensive monthly refills
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">✗</span> Only creates artificial temporary tension without addressing root causes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">✗</span> Builds psychological dependency and performance anxiety
                </li>
              </ul>
            </div>

            {/* The VapoFil Botanical Protocol */}
            <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'en' ? 'The VapoFil™ 100% Natural Protocol' : 'O Protocolo Natural VapoFil™'}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> 100% Drug-Free, non-GMO, doctor-formulated natural botanicals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Unlocks your own body's natural unbound free testosterone
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Supports prostate defense, smooth muscle dilation & cardiovascular vigor
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Zero prescription needed, delivered 100% discreetly to your door
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
