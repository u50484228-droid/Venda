import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Flame, Zap, Unlock, Activity, Shield, ZoomIn, Check } from 'lucide-react';
import { INGREDIENTS_DATA } from '../data/productData';
import { Language, Ingredient } from '../types';

interface IngredientsSectionProps {
  language: Language;
  onOpenLabelModal: () => void;
}

export const IngredientsSection: React.FC<IngredientsSectionProps> = ({
  language,
  onOpenLabelModal,
}) => {
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient>(INGREDIENTS_DATA[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-sky-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Unlock': return <Unlock className="w-5 h-5 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-orange-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-teal-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="ingredients" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>
              {language === 'en' ? 'Inside Every Capsule of VapoFil™' : 'Dentro de Cada Cápsula de VapoFil™'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'en' ? (
              <>
                The 7 Synergistic Botanicals That Restore{' '}
                <span className="text-blue-600">
                  Peak Male Vigor
                </span>
              </>
            ) : (
              <>
                Os 7 Ingredientes Premium Que Devolvem o{' '}
                <span className="text-blue-600">Vigor e a Potência</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {language === 'en' ? (
              <>
                Standardized natural nutrients meticulously dosed to complement each other in an exceptional male vitality supplement. Zero fillers, zero synthetic toxins.
              </>
            ) : (
              <>
                Ingredientes premium cuidadosamente selecionados em dosagem ideal, combinados para se complementarem em um suplemento excepcional.
              </>
            )}
          </p>

          <button
            type="button"
            onClick={onOpenLabelModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-blue-300 text-blue-700 text-xs font-bold shadow-xs transition-all cursor-pointer"
          >
            <ZoomIn className="w-4 h-4 text-blue-600" />
            <span>{language === 'en' ? 'Verify Official Supplement Facts Box' : 'Ver Tabela Nutricional Completa'}</span>
          </button>
        </div>

        {/* 7 Ingredients Grid (as shown in images 6 & 7) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {INGREDIENTS_DATA.map((ingredient) => (
            <div
              key={ingredient.id}
              onClick={() => setSelectedIngredient(ingredient)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between group ${
                selectedIngredient.id === ingredient.id
                  ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500'
                  : 'bg-white hover:bg-slate-50/80 border-slate-200 hover:border-blue-300 shadow-xs'
              }`}
            >
              {/* Botanical image header */}
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
                <img
                  src={ingredient.imageUrl}
                  alt={ingredient.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                
                {/* Dosage Pill */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-white/95 border border-slate-200 text-blue-900 text-[11px] font-extrabold shadow-sm">
                  {ingredient.dosage}
                </div>

                {/* Role badge */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 text-xs font-semibold text-white">
                  {getIcon(ingredient.iconName)}
                  <span className="truncate">
                    {language === 'en' ? ingredient.role : ingredient.rolePt}
                  </span>
                </div>
              </div>

              {/* Text description */}
              <div className="space-y-2 flex-1">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {language === 'en' ? ingredient.name : ingredient.namePt}
                </h3>
                
                {ingredient.extractRatio && (
                  <p className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                    {ingredient.extractRatio}
                  </p>
                )}

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {language === 'en' ? ingredient.description : ingredient.descriptionPt}
                </p>
              </div>

              {/* Mechanism footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="line-clamp-2">
                  {language === 'en' ? ingredient.clinicalMechanism : ingredient.clinicalMechanismPt}
                </span>
              </div>
            </div>
          ))}

          {/* 8th Card: The Synergistic Catalyst Message */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-900 to-indigo-950 text-white border border-blue-600 flex flex-col justify-between text-center relative overflow-hidden shadow-lg">
            <div className="space-y-3 my-auto">
              <div className="w-12 h-12 rounded-full bg-blue-500/30 border border-blue-400 flex items-center justify-center mx-auto text-blue-200">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">
                {language === 'en' ? 'The "Entourage" Bio-Multiplication' : 'Efeito Sinergia de Alta Absorção'}
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                {language === 'en' ? (
                  <>
                    When extracted at pharmaceutical-grade purity, these 7 botanicals enhance one another's cellular bio-availability by up to 300% compared to taking raw ingredients individually.
                  </>
                ) : (
                  <>
                    Quando combinados em pureza padronizada, estes 7 botânicos potencializam a biodisponibilidade celular em até 300% em comparação a ingredientes isolados.
                  </>
                )}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenLabelModal}
              className="w-full mt-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
            >
              {language === 'en' ? 'Inspect Clinical Doses' : 'Ver Dosagens Oficiais'}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
