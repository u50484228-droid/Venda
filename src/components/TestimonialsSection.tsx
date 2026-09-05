import React from 'react';
import { Star, CheckCircle2, ThumbsUp, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/productData';
import { Language } from '../types';

interface TestimonialsSectionProps {
  language: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'en' ? 'Real American Men. Real Verified Results.' : 'Homens Reais. Resultados Comprovados.'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'en' ? (
              <>
                Over 14,200 Men Have Regained Their{' '}
                <span className="text-amber-600">Primal Masculine Drive</span>
              </>
            ) : (
              <>
                Mais de 14.200 Homens Recuperaram Sua{' '}
                <span className="text-amber-600">Virilidade e Confiança</span>
              </>
            )}
          </h2>

          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">4.92 / 5.0 Global Rating</span>
            <span className="text-xs text-slate-500">• 100% Authentic Customer Feedback</span>
          </div>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-3">
                {/* Star rating & verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{language === 'en' ? 'Verified Buyer' : 'Comprador Verificado'}</span>
                  </span>
                </div>

                {/* Headline quote */}
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {language === 'en' ? test.headline : test.headlinePt}
                </h3>

                {/* Body review */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'en' ? test.review : test.reviewPt}
                </p>
              </div>

              {/* Customer Footer Metadata */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900">{test.name}, {test.age}</p>
                  <p className="text-slate-500 text-[11px]">{test.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-blue-700 font-semibold block">
                    {test.bottlesOrdered} {language === 'en' ? 'Bottles Ordered' : 'Frascos Adquiridos'}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {test.daysUsed} {language === 'en' ? 'Days Used' : 'Dias de Uso'}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
