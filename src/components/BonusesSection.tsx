import React from 'react';
import { Gift, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { FREE_BONUSES } from '../data/productData';
import { Language } from '../types';

interface BonusesSectionProps {
  language: Language;
}

export const BonusesSection: React.FC<BonusesSectionProps> = ({ language }) => {
  return (
    <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-amber-600" />
            <span>{language === 'en' ? 'Exclusive Free Digital Bonuses' : 'Bônus Digitais Exclusivos'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            {language === 'en' ? (
              <>
                Order 6 Bottles Today & Get{' '}
                <span className="text-amber-600">$116 Worth of Alpha Protocols 100% FREE</span>
              </>
            ) : (
              <>
                Peça 6 Frascos Hoje e Receba{' '}
                <span className="text-amber-600">R$ 580 em Protocolos de Vigor 100% GRÁTIS</span>
              </>
            )}
          </h2>

          <p className="text-sm text-slate-600">
            {language === 'en'
              ? 'Instant digital download access immediately sent to your inbox upon order confirmation.'
              : 'Acesso digital imediato enviado para seu e-mail após a confirmação do pedido.'}
          </p>
        </div>

        {/* 2 Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FREE_BONUSES.map((bonus, idx) => (
            <div
              key={bonus.id}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 border-2 border-amber-300 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-amber-400 hover:shadow-xl transition-all"
            >
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black tracking-wider uppercase shadow-xs">
                  {language === 'en' ? bonus.badge : bonus.badgePt}
                </span>
              </div>

              <div className="space-y-4">
                {/* 3D Book Cover from vapofil.com */}
                <div className="flex justify-center mb-2">
                  <div className="relative w-44 sm:w-52 h-48 sm:h-56 flex items-center justify-center">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">
                      {language === 'en' ? `Bonus #${idx + 1}` : `Bônus Especial #${idx + 1}`}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ${bonus.value}.00 Retail
                    </span>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">FREE</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {language === 'en' ? bonus.title : bonus.titlePt}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {language === 'en' ? bonus.description : bonus.descriptionPt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-amber-200 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {language === 'en' ? 'Instant Secure PDF & Audio Guide Delivery' : 'Acesso Imediato em PDF e Guia Prático'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
