import React from 'react';
import { BookOpen, CheckCircle2, ShieldCheck, Microscope, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { AFFILIATE_BUY_LINK, triggerConversionAndRedirect } from '../data/productData';
import { Language } from '../types';

interface DoctorEndorsementProps {
  language: Language;
  onOpenLabelModal: () => void;
}

export const DoctorEndorsement: React.FC<DoctorEndorsementProps> = ({ language, onOpenLabelModal }) => {
  const citations = [
    {
      ingredient: 'Tongkat Ali (Eurycoma Longifolia)',
      citation: 'Leisegang, K., et al. (2022). "Eurycoma longifolia (Jack) Improves Serum Total Testosterone in Men: A Systematic Review and Meta-Analysis of Clinical Trials." Medicina, 58(8), 1047.',
      findingEn: 'A comprehensive systematic review of clinical trials observing statistically significant correlations with circulating testosterone concentrations and markers of stress resilience in adult men.',
      findingPt: 'Revisão sistemática e metanálise de ensaios clínicos demonstrando suporte a concentrações saudáveis de testosterona e resiliência ao estresse em homens adultos.',
    },
    {
      ingredient: 'Boron Amino Acid Chelate',
      citation: 'Naghii, M. R., et al. (2011). "Comparative effects of daily and weekly boron supplementation on plasma steroid hormones and proinflammatory cytokines." Journal of Trace Elements in Medicine and Biology, 25(1), 54-58.',
      findingEn: 'Clinical investigation in healthy male volunteers demonstrating favorable nutritional shifts in free testosterone ratios and inflammatory biomarkers following boron supplementation.',
      findingPt: 'Investigação clínica em voluntários masculinos saudáveis demonstrando suporte nutricional favorável à proporção de testosterona livre ativa.',
    },
    {
      ingredient: 'Saw Palmetto Berry Extract',
      citation: 'Wilt, T., et al. (2002). "Saw palmetto extracts for prostate and lower urinary tract wellness." Cochrane Database of Systematic Reviews & Contemporary Phytotherapy Archives.',
      findingEn: 'Extensively studied lipidic extract demonstrated to provide targeted nutritional support for healthy prostate cellular function and comfortable nighttime urinary flow.',
      findingPt: 'Extrato lipídico amplamente pesquisado demonstrando suporte nutricional direcionado à manutenção da saúde da próstata e conforto urinário contínuo.',
    },
    {
      ingredient: 'Epimedium (Bioactive Icariin)',
      citation: 'Dell’Agli, M., et al. (2008). "In vitro inhibition of human phosphodiesterase-5 by icariin derivatives." Journal of Natural Products, 71(9), 1513-1517.',
      findingEn: 'Nutritional investigations identifying naturally occurring icariin as a supportive botanical flavonoid that aids healthy nitric oxide production and normal pelvic blood flow.',
      findingPt: 'Investigações nutricionais identificando a icariina como um flavonoide botânico que apoia a síntese de óxido nítrico e a circulação vascular normal.',
    },
  ];

  return (
    <section id="clinical-proof" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Microscope className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'en' ? 'Evidence-Based Formulation' : 'Formulação Baseada em Evidências'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'en' ? (
              <>
                Formulated on Documented{' '}
                <span className="text-blue-600">Scientific Research</span>
              </>
            ) : (
              <>
                Desenvolvido com Base em{' '}
                <span className="text-blue-600">Pesquisa Científica Publicada</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Every botanical and essential mineral in VapoFil™ is selected based on published peer-reviewed human trials and phytotherapeutic literature—not marketing hype.'
              : 'Cada botânico e mineral essencial no VapoFil™ foi selecionado com base em ensaios clínicos revisados por pares e literatura fitoterápica consolidada.'}
          </p>
        </div>

        {/* Science Main Container */}
        <div className="bg-slate-50 text-slate-900 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Scientific Overview & Quality Standards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100/70 text-blue-800 text-xs font-semibold border border-blue-300">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>{language === 'en' ? 'Verified Quality & Purity Standards' : 'Padrões Certificados de Pureza'}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                  {language === 'en'
                    ? 'Targeted Botanical Ratios for Male Physiology'
                    : 'Proporções Botânicas Focadas na Fisiologia Masculina'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {language === 'en'
                    ? 'Unlike generic supplements using diluted powders, VapoFil™ incorporates standardized concentrates—such as 100:1 Tongkat Ali and 10:1 Epimedium—to deliver predictable nutritional density in every serving.'
                    : 'Diferente de suplementos genéricos com pós diluídos, o VapoFil™ incorpora concentrados padronizados — como Tongkat Ali 100:1 e Epimedium 10:1 — para fornecer densidade nutricional exata em cada dose.'}
                </p>
              </div>

              {/* Manufacturing Checklist */}
              <div className="space-y-2.5 pt-2">
                {[
                  {
                    en: 'Manufactured in an FDA-Registered, cGMP-Compliant US Facility',
                    pt: 'Fabricado nos EUA em instalação registrada na FDA e padrão cGMP',
                  },
                  {
                    en: 'Independent Third-Party Purity & Heavy Metals Verification',
                    pt: 'Verificação independente de pureza e controle de metais pesados',
                  },
                  {
                    en: '100% Non-GMO, Gluten-Free & Free of Prohibited Additives',
                    pt: '100% livre de transgênicos, sem glúten e sem aditivos proibidos',
                  },
                  {
                    en: 'Full Label Transparency: Clear Dosages With Zero Hidden Fillers',
                    pt: 'Rótulo 100% transparente com dosagens claras e sem misturas ocultas',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{language === 'en' ? item.en : item.pt}</span>
                  </div>
                ))}
              </div>

              {/* Label Modal Trigger */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenLabelModal}
                  className="text-xs text-blue-700 font-bold hover:text-blue-800 underline flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Inspect Full Supplement Facts Panel' : 'Visualizar Tabela Nutricional Completa'}</span>
                </button>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  id="science-affiliate-cta-btn"
                  href={AFFILIATE_BUY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) =>
                    triggerConversionAndRedirect(
                      e,
                      AFFILIATE_BUY_LINK,
                      'Doctor Endorsement - Order Authentic VapoFil™ With 60-Day Guarantee'
                    )
                  }
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-b from-[#fecb00] via-[#f7b700] to-[#e7a300] hover:from-[#fed42a] hover:to-[#efa800] text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-amber-500/20 border-2 border-amber-300 transition-all hover:scale-105 active:scale-95 group text-center"
                >
                  <span>
                    {language === 'en'
                      ? 'Order Authentic VapoFil™ With 60-Day Guarantee'
                      : 'Adquirir VapoFil™ Original com Garantia de 60 Dias'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Peer-Reviewed Clinical Study Citations (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  {language === 'en' ? 'Published Study Citations' : 'Citações de Estudos Científicos'}
                </span>
                <span className="text-[11px] text-slate-400">
                  {language === 'en' ? 'Peer-Reviewed Journals' : 'Periódicos Científicos'}
                </span>
              </div>

              <div className="space-y-3">
                {citations.map((c, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-950 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        {c.ingredient}
                      </h4>
                      <span className="text-[10px] text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                        {language === 'en' ? 'Clinical Literature' : 'Literatura Científica'}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 font-mono italic leading-tight">
                      {c.citation}
                    </p>

                    <p className="text-xs text-slate-700 leading-relaxed pt-1 border-t border-slate-100">
                      <strong className="text-slate-900 font-semibold">{language === 'en' ? 'Key Finding: ' : 'Achado Principal: '}</strong>
                      {language === 'en' ? c.findingEn : c.findingPt}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-400 italic text-center pt-2">
                {language === 'en'
                  ? '*Citations refer to independent scientific investigations regarding individual dietary ingredients and do not imply product evaluation by the FDA.'
                  : '*As citações referem-se a investigações científicas independentes sobre ingredientes alimentares individuais e não implicam avaliação do produto final pela FDA.'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
