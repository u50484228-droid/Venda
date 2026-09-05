import React from 'react';
import { ShieldCheck, Lock, Mail, Phone, MapPin } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onOpenLabelModal: () => void;
  onOpenAnalyst?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenLabelModal, onOpenAnalyst }) => {
  return (
    <footer className="bg-slate-50 text-slate-600 text-xs border-t border-slate-200 pt-12 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-200 text-left">
          
          {/* Col 1: Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-6 bg-blue-600 rounded-xs" />
              <span className="text-xl font-black text-slate-950 font-mono tracking-tight">VAPOFIL</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              {language === 'en'
                ? 'Premium natural botanical formula designed to support male endocrine health, vitality, and endothelial blood flow.'
                : 'Fórmula botânica natural desenvolvida para apoiar a saúde endócrina, a vitalidade e o fluxo sanguíneo masculino.'}
            </p>
            <div className="text-[11px]">
              <button
                type="button"
                onClick={onOpenLabelModal}
                className="text-blue-700 hover:text-blue-800 underline font-semibold cursor-pointer"
              >
                {language === 'en' ? 'View Supplement Facts Label' : 'Ver Rótulo e Informação Nutricional'}
              </button>
            </div>
          </div>

          {/* Col 2: Customer Care */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              {language === 'en' ? 'Customer Care' : 'Suporte ao Cliente'}
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>{PRODUCT_INFO.supportEmail}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{PRODUCT_INFO.supportPhone}</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{PRODUCT_INFO.facilityAddress}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality & Compliance */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              {language === 'en' ? 'Quality Standards' : 'Padrões de Qualidade'}
            </h4>
            <ul className="space-y-1 text-[11px] text-slate-600">
              <li>• cGMP Certified Facility</li>
              <li>• Manufactured in FDA Registered Facility</li>
              <li>• 100% All-Natural Ingredients</li>
              <li>• Non-GMO & Naturally Gluten-Free</li>
              <li>• Discrete Plain Packaging</li>
            </ul>
          </div>

          {/* Col 4: CartPanda & Security */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              {language === 'en' ? 'Payment Security' : 'Pagamento Seguro'}
            </h4>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1 shadow-2xs">
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                <span>CartPanda Pedido Seguro</span>
              </div>
              <p className="text-slate-500 text-[10px]">
                256-Bit SSL military-grade encryption safeguards your billing details.
              </p>
            </div>
          </div>

        </div>

        {/* Mandatory FDA Disclaimer Box */}
        <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-[10px] text-slate-600 leading-relaxed text-center space-y-2">
          <p className="font-semibold text-slate-800">
            *FDA DISCLAIMER / AVISO REGULATÓRIO:
          </p>
          <p>
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary depending on individual physiology and consistent usage. The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional.
          </p>
          <p className="text-slate-500 text-[9px] pt-1 border-t border-slate-200">
            2026 © Cartpanda Inc. (Estados Unidos) e/ou seus licenciadores. A publicidade, as alegações sobre o produto e os materiais promocionais relacionados a este pedido são criados pelo fornecedor do produto, não pela Cartpanda.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 pt-2">
          <p>© {new Date().getFullYear()} VapoFil™ by {PRODUCT_INFO.manufacturer}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer">Refund Policy</span>
            <span>•</span>
            <span className="hover:text-slate-800 cursor-pointer">Contact Us</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
