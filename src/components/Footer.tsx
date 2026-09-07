import React from 'react';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenLabelModal: () => void;
  onOpenAnalyst?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-slate-100 text-slate-600 text-xs border-t border-slate-200 py-10 pb-24 sm:pb-12">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-1.5">
          <div className="w-1.5 h-5 bg-gradient-to-b from-blue-600 to-blue-800 rounded-xs" />
          <span className="text-lg font-black text-slate-950 tracking-tight">VAPOFIL</span>
        </div>

        {/* FDA Disclaimer Box */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 leading-relaxed max-w-3xl mx-auto shadow-xs">
          <p className="font-semibold text-slate-800 mb-1">
            *FDA DISCLAIMER / AVISO REGULATÓRIO:
          </p>
          <p>
            {language === 'en'
              ? 'These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary depending on individual physiology and consistent usage. The information provided is for educational and informational purposes only.'
              : 'Estas declarações não foram avaliadas pela Food and Drug Administration. Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar de acordo com o organismo e o uso contínuo.'}
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
