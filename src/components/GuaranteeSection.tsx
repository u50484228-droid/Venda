import React from 'react';
import { ShieldCheck, CheckCircle2, RotateCcw, Award } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';
import { Language } from '../types';

interface GuaranteeSectionProps {
  language: Language;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ language }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navy Highlighted Guarantee Container */}
        <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-12 shadow-xl border-2 border-blue-600/30 relative overflow-hidden text-center space-y-6">
          
          {/* Top 60-Day Official Guarantee Seal from vapofil.com */}
          <div className="flex justify-center">
            <div className="w-24 sm:w-28 h-24 sm:h-28 relative flex items-center justify-center">
              <img
                src="./images/guarantee.webp"
                alt="60-Day Money Back Guarantee"
                className="w-full h-full object-contain drop-shadow-md"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-blue-700 font-extrabold text-sm uppercase tracking-widest">
              {language === 'en' ? 'Full Support & 100% Dedicated Guidance' : 'Acompanhamento e suporte completos.'}
            </p>
            
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              {language === 'en' ? (
                <>60-Day Satisfaction Guarantee – We Believe in Our Product</>
              ) : (
                <>Garantia de Satisfação de 60 Dias – Acreditamos no Nosso Produto</>
              )}
            </h2>
          </div>

          {/* Guarantee copy translated from Image 4 & 5 */}
          <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            <p>
              {language === 'en' ? (
                <>
                  Our dietary supplements are backed by an ironclad <strong className="text-slate-900 font-bold">60-day 100% money-back guarantee</strong> from your purchase date. If you aren't completely thrilled with your physical energy, morning vigor, and overall bedroom vitality, simply return the bottles for a prompt, full 100% refund.
                </>
              ) : (
                <>
                  Nossos suplementos têm garantia incondicional de reembolso de 60 dias a partir da data da compra. Se você não estiver completamente satisfeito com os resultados, basta solicitar o reembolso integral de 100% do seu investimento.
                </>
              )}
            </p>

            <p className="text-xs sm:text-sm text-slate-500 italic">
              {language === 'en' ? (
                <>
                  "Even if you return empty bottles, we will issue a full, prompt refund. That is our unwavering confidence in VapoFil’s formulation. Order your kit today completely risk-free!"
                </>
              ) : (
                <>
                  "Essa é a nossa confiança na qualidade e eficácia dos nossos produtos. Peça seu kit hoje mesmo, sem nenhum risco. Estaremos ao seu lado em cada etapa da sua jornada de bem-estar!"
                </>
              )}
            </p>
          </div>

          {/* 5 Official Round Badges from vapofil.com */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-5 gap-4 items-center justify-center">
            
            {/* 1. GMP Practice */}
            <div className="flex flex-col items-center">
              <img src="./images/badge-gmp.png" alt="GMP Certified" className="w-16 h-16 object-contain drop-shadow-xs" loading="lazy" />
              <span className="text-[11px] font-bold text-slate-700 mt-1.5">GMP Certified</span>
            </div>

            {/* 2. FDA Registered Facility */}
            <div className="flex flex-col items-center">
              <img src="./images/badge-fda.png" alt="FDA Inspected Facility" className="w-16 h-16 object-contain drop-shadow-xs" loading="lazy" />
              <span className="text-[11px] font-bold text-slate-700 mt-1.5">FDA Inspected</span>
            </div>

            {/* 3. 100% Natural Ingredients */}
            <div className="flex flex-col items-center">
              <img src="./images/badge-natural.png" alt="100% Natural" className="w-16 h-16 object-contain drop-shadow-xs" loading="lazy" />
              <span className="text-[11px] font-bold text-slate-700 mt-1.5">100% Natural</span>
            </div>

            {/* 4. Made in USA */}
            <div className="flex flex-col items-center">
              <img src="./images/badge-usa.png" alt="Made in USA" className="w-16 h-16 object-contain drop-shadow-xs" loading="lazy" />
              <span className="text-[11px] font-bold text-slate-700 mt-1.5">Made in USA</span>
            </div>

            {/* 5. Non-GMO Free */}
            <div className="flex flex-col items-center col-span-2 sm:col-span-1">
              <img src="./images/badge-gmo.png" alt="Non-GMO Verified" className="w-16 h-16 object-contain drop-shadow-xs" loading="lazy" />
              <span className="text-[11px] font-bold text-slate-700 mt-1.5">Non-GMO Verified</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
