import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenLabelModal: () => void;
  onOpenAnalyst?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer id="footer-section" className="bg-slate-100 text-slate-600 text-xs border-t border-slate-200 py-10 pb-24 sm:pb-12">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-1.5">
          <div className="w-1.5 h-5 bg-gradient-to-b from-blue-600 to-blue-800 rounded-xs" />
          <span className="text-lg font-black text-slate-950 tracking-tight">VAPOFIL</span>
        </div>

        {/* FDA Disclaimer Box */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 leading-relaxed max-w-3xl mx-auto shadow-xs space-y-2">
          <p className="font-bold text-slate-900">
            {language === 'en' ? 'MANDATORY FDA DIETARY SUPPLEMENT DISCLAIMER:' : 'AVISO REGULATÓRIO OBRIGATÓRIO (FDA):'}
          </p>
          <p className="font-medium text-slate-700">
            {language === 'en'
              ? 'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.'
              : 'Estas declarações não foram avaliadas pela Food and Drug Administration (FDA). Este produto não se destina a diagnosticar, tratar, curar ou prevenir nenhuma doença.'}
          </p>
          <p className="text-slate-500 text-[10px]">
            {language === 'en'
              ? 'The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional. You should not use the information on this site for diagnosis or treatment of any health problem or for prescription of any medication or other treatment. Always consult with a qualified healthcare professional before starting any diet, exercise, or supplementation program.'
              : 'As informações contidas neste site destinam-se exclusivamente a fins informativos e não substituem a orientação médica qualificada. Consulte sempre seu médico ou profissional de saúde antes de iniciar qualquer regime de suplementação nutricional.'}
          </p>
          <p className="text-slate-400 text-[10px] pt-1 border-t border-slate-100">
            {language === 'en'
              ? 'Advertising & Affiliate Disclosure: This page contains affiliate links. If you purchase through these links, we may earn an affiliate commission at no additional cost to you. Product representations reflect the manufacturer’s specifications.'
              : 'Divulgação de Afiliado e Publicidade: Esta página contém links de afiliado. Caso você compre através deles, poderemos receber uma comissão sem qualquer custo adicional para você.'}
          </p>
        </div>

        {/* Essential Legal Links & Copyright */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] text-slate-600">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">Refund Policy</span>
          </div>

          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} VapoFil™. {language === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}
          </p>
        </div>

      </div>
    </footer>
  );
};
