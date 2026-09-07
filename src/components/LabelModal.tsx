import React from 'react';
import { X, CheckCircle2, ShieldAlert, Sparkles, Building2, Phone, Mail } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface LabelModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'pt';
}

export const LabelModal: React.FC<LabelModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-blue-500/40 rounded-2xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <h2 className="text-lg font-bold text-white tracking-wide">
              {language === 'en' ? 'Official VapoFil™ Product Label & Supplement Facts' : 'Rótulo Oficial do Produto e Tabela Nutricional VapoFil™'}
            </h2>
            <span className="px-2 py-0.5 rounded text-[11px] bg-blue-900/60 text-blue-300 font-mono border border-blue-700/50">
              REV 10/24
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Replica of Official Label in Image 9 */}
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* Label Horizontal Layout Container */}
          <div className="bg-black rounded-xl p-4 sm:p-6 border border-slate-700 shadow-inner grid grid-cols-1 md:grid-cols-12 gap-6 relative overflow-hidden font-sans">
            
            {/* Hexagonal Mesh Texture */}
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
                backgroundSize: '10px 10px'
              }}
            />

            {/* Left Column: Instructions, Cautions, Manufacturer (4 cols) */}
            <div className="md:col-span-4 space-y-3.5 text-xs text-slate-300 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-4">
              <div>
                <p className="font-bold text-white tracking-wider text-[11px] uppercase">SUGGESTED USE:</p>
                <p className="text-slate-300 mt-0.5">
                  As a dietary supplement, take two (2) capsules daily with an 8 oz. glass of water.
                </p>
              </div>

              <div>
                <p className="font-bold text-white tracking-wider text-[11px] uppercase">STORAGE:</p>
                <p className="text-slate-300 mt-0.5">
                  Keep away from heat, light, and humidity to preserve freshness.
                </p>
              </div>

              <div className="bg-slate-900/90 p-2.5 rounded border border-slate-800 text-[10px] text-slate-400 leading-relaxed">
                <p className="font-bold text-amber-400 uppercase flex items-center gap-1 mb-1">
                  <ShieldAlert className="w-3 h-3" /> CAUTION:
                </p>
                Do not exceed recommended dose. Pregnant or nursing mothers, children under the age of 18 and individuals with a known medical condition should consult a physician before using this or any dietary supplement.
              </div>

              <p className="text-[10px] font-semibold text-slate-400">
                KEEP OUT OF THE REACH OF CHILDREN. DO NOT USE IF SAFETY SEAL IS DAMAGED OR MISSING. STORE IN A COOL, DRY PLACE.
              </p>

              <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 space-y-0.5">
                <p className="text-white font-semibold">DISTRIBUTED FOR: {PRODUCT_INFO.manufacturer}</p>
                <p>{PRODUCT_INFO.facilityAddress}</p>
                <div className="pt-1.5 flex items-center gap-1 text-[9px] text-slate-300">
                  <span className="text-xs">🇺🇸</span>
                  <span>Made in the USA with globally sourced ingredients</span>
                </div>
              </div>
            </div>

            {/* Center Column: Big Brand Logo Banner (3 cols) */}
            <div className="md:col-span-3 flex flex-col items-center justify-center text-center py-4 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:px-2">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-10 bg-blue-500 rounded shadow-[0_0_10px_#3b82f6]" />
                <h3 className="text-3xl font-black text-white tracking-tight font-mono">
                  VAPOFIL
                </h3>
              </div>
              
              <div className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 rounded text-[10px] font-extrabold tracking-widest text-white uppercase border border-blue-400/60 shadow-lg">
                PREMIUM FORMULA
              </div>

              <div className="mt-6 flex flex-col items-center">
                <span className="text-3xl font-extrabold text-white leading-none">60</span>
                <span className="text-xs text-slate-300 uppercase font-semibold tracking-wider mt-1">
                  Dietary Supplement
                </span>
                <span className="text-[11px] text-blue-400 mt-1">30-Day Supply</span>
              </div>
            </div>

            {/* Right Column: Supplement Facts Panel (5 cols) */}
            <div className="md:col-span-5 bg-white text-slate-900 p-3 rounded-lg shadow-sm border border-slate-200">
              <div className="border-b-4 border-black pb-1">
                <h4 className="text-xl font-black tracking-tight leading-none">Supplement Facts</h4>
                <p className="text-[11px] text-slate-700 mt-1">Serving Size: 2 capsules</p>
                <p className="text-[11px] text-slate-700">Servings Per Container: 30</p>
              </div>

              {/* Table header */}
              <div className="flex justify-between text-[10px] font-bold border-b border-black py-1">
                <span>Amount Per Serving</span>
                <span>%Daily Value</span>
              </div>

              {/* Rows */}
              <div className="text-[11px] divide-y divide-slate-200">
                <div className="flex justify-between py-1">
                  <span className="font-semibold">Saw Palmetto Berry Extract</span>
                  <div className="flex gap-4"><span>20 mg</span><span>†</span></div>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold">Wild Yam Root Extract</span>
                  <div className="flex gap-4"><span>20 mg</span><span>†</span></div>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold">Sarsaparilla Root Extract</span>
                  <div className="flex gap-4"><span>20 mg</span><span>†</span></div>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold">Nettle Leaf Extract</span>
                  <div className="flex gap-4"><span>20 mg</span><span>†</span></div>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold">Boron Amino Acid Chelate 5%</span>
                  <div className="flex gap-4"><span>20 mg</span><span>†</span></div>
                </div>
                <div className="py-1">
                  <div className="flex justify-between">
                    <span className="font-semibold">Tongkat Ali (Eurycoma Longifolia) ***</span>
                    <div className="flex gap-4"><span>10 mg</span><span>†</span></div>
                  </div>
                  <p className="text-[9px] text-slate-500 italic pl-2">
                    (From 100:1 extract, equivalent to approx 1000mg of dry Tongkat Ali powder)
                  </p>
                </div>
                <div className="py-1">
                  <div className="flex justify-between">
                    <span className="font-semibold">Horny Goat Weed (Epimedium sagittatum) ***</span>
                    <div className="flex gap-4"><span>8 mg</span><span>†</span></div>
                  </div>
                  <p className="text-[9px] text-slate-500 italic pl-2">
                    (From 10:1 extract, equivalent to approx 80mg of dry Horny Goat Weed powder)
                  </p>
                </div>
              </div>

              {/* Footer footnotes */}
              <div className="border-t-2 border-black pt-1 mt-1 text-[8.5px] text-slate-600 leading-tight space-y-0.5">
                <p>** Percent Daily Values are based on a 2,000 calorie diet.</p>
                <p>† Daily Value Not Established.</p>
              </div>

              {/* Other ingredients */}
              <div className="border-t border-slate-300 pt-1 mt-1 text-[9px] text-slate-700">
                <span className="font-bold">Other Ingredients:</span> Microcrystalline cellulose (MCC), Gelatin, Magnesium Stearate.
              </div>

              {/* FDA mandatory disclaimer box */}
              <div className="mt-2 p-1.5 border border-black text-[8px] text-slate-800 leading-tight text-center font-medium bg-slate-50">
                *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
              </div>
              <p className="text-[8px] text-slate-500 mt-0.5 text-right">This product has been manufactured in an FDA registered facility.</p>
            </div>
          </div>

          {/* Quality Seals confirmation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">100% Pure Guaranteed</p>
              <p className="text-[10px] text-slate-400">Zero synthetic fillers</p>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-center">
              <CheckCircle2 className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">Doctor Formulated</p>
              <p className="text-[10px] text-slate-400">Clinical botanical ratios</p>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">GMP Certified</p>
              <p className="text-[10px] text-slate-400">Good Manufacturing Practice</p>
            </div>
            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-center">
              <CheckCircle2 className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">Made in USA</p>
              <p className="text-[10px] text-slate-400">FDA registered facility</p>
            </div>
          </div>
        </div>

        {/* Footer Close button */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Close Supplement Facts' : 'Fechar Informações Nutricionais'}
          </button>
        </div>
      </div>
    </div>
  );
};
