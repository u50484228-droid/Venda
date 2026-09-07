import React, { useState } from 'react';
import {
  X,
  BarChart3,
  Target,
  Sparkles,
  Link as LinkIcon,
  Copy,
  Check,
  TrendingUp,
  FileText,
  DollarSign,
  AlertCircle,
  Lightbulb,
  Layers,
  ShoppingBag,
} from 'lucide-react';
import { FunnelSettings, Language, AdSwipe } from '../types';
import { AD_SWIPES, SALES_ANALYST_DOSSIER } from '../data/productData';

interface SalesAnalystModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  funnelSettings: FunnelSettings;
  onUpdateSettings: (newSettings: FunnelSettings) => void;
}

export const SalesAnalystModal: React.FC<SalesAnalystModalProps> = ({
  isOpen,
  onClose,
  language,
  funnelSettings,
  onUpdateSettings,
}) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'audience' | 'checkout-links' | 'ad-swipes' | 'calculator'>('strategy');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Local state for checkout links editor
  const [url1, setUrl1] = useState(funnelSettings.checkoutUrl1Bottle);
  const [url3, setUrl3] = useState(funnelSettings.checkoutUrl3Bottles);
  const [url6, setUrl6] = useState(funnelSettings.checkoutUrl6Bottles);
  const [saveMessage, setSaveMessage] = useState(false);

  // Calculator State
  const [monthlyTraffic, setMonthlyTraffic] = useState(10000);
  const [conversionRate, setConversionRate] = useState(2.4);

  if (!isOpen) return null;

  const handleSaveLinks = () => {
    onUpdateSettings({
      ...funnelSettings,
      checkoutUrl1Bottle: url1,
      checkoutUrl3Bottles: url3,
      checkoutUrl6Bottles: url6,
    });
    setSaveMessage(true);
    setTimeout(() => setSaveMessage(false), 2500);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Funnel economics
  const totalOrders = Math.round(monthlyTraffic * (conversionRate / 100));
  const orders6Bottles = Math.round(totalOrders * 0.65);
  const orders3Bottles = Math.round(totalOrders * 0.25);
  const orders1Bottle = Math.round(totalOrders * 0.10);
  const projectedRevenue = (orders6Bottles * 294) + (orders3Bottles * 177) + (orders1Bottle * 89);
  const averageOrderValue = totalOrders > 0 ? (projectedRevenue / totalOrders).toFixed(2) : '0.00';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-black shadow-md">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black text-slate-950 tracking-wide">
                  {language === 'en'
                    ? 'Senior Sales & CRO Analyst Workstation'
                    : 'Painel Estratégico do Analista de Vendas & CRO'}
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 uppercase">
                  US Men Market
                </span>
              </div>
              <p className="text-xs text-slate-500">
                {language === 'en'
                  ? 'High-conversion funnel architecture, buyer psychology, checkout setup & ad swipes'
                  : 'Estratégia de copy, psicologia masculina nos EUA, links de checkout e maximização de AOV'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2.5 bg-slate-50 border-b border-slate-200 flex flex-wrap gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('strategy')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'strategy'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Funnel Architecture & Copy' : 'Arquitetura do Funil & Copy'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('audience')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'audience'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'US Men Buyer Psychology' : 'Psicologia do Público (EUA)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('checkout-links')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'checkout-links'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'CartPanda / Checkout URLs' : 'Configurar Links CartPanda'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ad-swipes')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'ad-swipes'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Ad Swipes & Creative Copy' : 'Copies Prontas de Anúncios'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('calculator')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'AOV & Revenue Model' : 'Simulador de Faturamento'}</span>
          </button>
        </div>

        {/* Tab Content Container (scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm">
          
          {/* TAB 1: FUNNEL ARCHITECTURE & COPY */}
          {activeTab === 'strategy' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm space-y-1">
                  <p className="font-bold text-white">
                    {language === 'en'
                      ? 'The Direct Response Secret for US Men (Ages 42-68):'
                      : 'O Segredo de Conversão para Homens Americanos (42-68 Anos):'}
                  </p>
                  <p className="text-slate-300">
                    {language === 'en'
                      ? 'American male buyers in the health/nutra space don’t buy ingredients; they buy their pride, virility, and bedroom confidence back. The funnel must lead with the "SHBG Hormone Trap" mechanism rather than general health claims.'
                      : 'Homens americanos não compram apenas vitaminas; eles compram de volta o orgulho, a virilidade e a segurança no quarto. O funil foca no mecanismo biológico do "Aprisionamento SHBG" e óxido nítrico para justificar o diferencial.'}
                  </p>
                </div>
              </div>

              {/* 7-Step Conversion Funnel Journey */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>The 7-Step High-Converting Journey</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-400 uppercase">Step 1: The Urgent Hook</span>
                    <h4 className="text-sm font-bold text-white">Pattern Interrupt & Immediate Relief</h4>
                    <p className="text-xs text-slate-400">
                      Disrupts assumptions about "normal aging." Positions low stamina not as personal failure, but as a biological lock (SHBG & microvascular constriction).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-400 uppercase">Step 2: The Villain (Big Pharma / Blue Pills)</span>
                    <h4 className="text-sm font-bold text-white">Contrast & Safety Reassurance</h4>
                    <p className="text-xs text-slate-400">
                      Highlights negative side effects of chemical prescriptions (blood pressure spikes, dependency, awkward doctor visits) vs 100% pure botanicals.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-400 uppercase">Step 3: The 7-Botanical Mechanism</span>
                    <h4 className="text-sm font-bold text-white">Clinical Dosages & Ratios</h4>
                    <p className="text-xs text-slate-400">
                      Shows exact scientific proofs (100:1 Tongkat Ali, Icariin, Saw Palmetto, Boron chelate) to build undeniable logical justification.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-400 uppercase">Step 4: Authority & Social Proof</span>
                    <h4 className="text-sm font-bold text-white">Medical Endorsement + Peer Reviews</h4>
                    <p className="text-xs text-slate-400">
                      Clinical doctor endorsement combined with real American male testimonials citing specific days of use and marriage revival.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-400 uppercase">Step 5: Decoy Pricing Architecture</span>
                    <h4 className="text-sm font-bold text-white">Pushing 6-Bottle Maximum AOV</h4>
                    <p className="text-xs text-slate-400">
                      1 bottle at $89 + shipping makes the 6-bottle pack at $49 ($294 total, Free US Shipping, $780 discount) the undeniable choice for 96% of buyers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <span className="text-xs font-bold text-blue-400 uppercase">Step 6: Risk Reversal (Empty Bottle)</span>
                    <h4 className="text-sm font-bold text-white">60-Day Ironclad Guarantee</h4>
                    <p className="text-xs text-slate-400">
                      "Even if you return empty bottles" completely eliminates perceived purchase friction and buyer remorse.
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Bump & Upsell Recommendations */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShoppingBag className="w-4 h-4" />
                  <span>CRO Goldmine: Recommended Order Bump & Upsells (Increases AOV by +42%)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="font-bold text-amber-300">Checkout Bump ($19.95):</span>
                    <p className="text-white font-semibold">VapoFil Fast-Acting Nitric Drops (15-Min Surge)</p>
                    <p className="text-slate-400">"Add our sublingual blood-flow booster drops for rapid absorption before intimate moments at 60% OFF." (Typically achieves 35-45% take rate at checkout!)</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="font-bold text-emerald-300">Post-Purchase 1-Click Upsell ($99):</span>
                    <p className="text-white font-semibold">ProstaShield Nightly Bladder Rest Formula (3-Pack)</p>
                    <p className="text-slate-400">"Stop getting up 3x a night to pee. Pair your daytime testosterone with deep unbroken restorative REM sleep."</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BUYER PSYCHOLOGY */}
          {activeTab === 'audience' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Core Pains */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-red-900/40 space-y-3">
                  <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider">
                    Core Frustrations & Fears (US Men 40-70)
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Loss of Spontaneity:</strong> Hating the need to plan intimacy an hour ahead with risky pills.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Partner Insecurity:</strong> Fear of failing their wives/partners and feeling "old" before their time.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>The 3 PM Brain Fog & Fatigue:</strong> Chronic exhaustion and loss of physical strength.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span><strong>Embarrassment at Pharmacy:</strong> Avoidance of speaking to doctors about intimate issues.</span>
                    </li>
                  </ul>
                </div>

                {/* Emotional Desires */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-900/40 space-y-3">
                  <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                    Deep Emotional Desires (What Actually Sells)
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span><strong>Morning Confidence:</strong> Waking up with rock-solid morning vigor as in their 20s.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span><strong>Bedroom Dominance:</strong> Surprising their partner with unlimited endurance and stamina.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span><strong>Natural Safety:</strong> Peace of mind knowing the formula is 100% natural with zero heart risk.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span><strong>Total Privacy:</strong> Plain packaging delivered straight to their doorstep with zero awkwardness.</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Conversion Vocabulary Cheat-Sheet */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
                  Direct Response Vocabulary Guide for US Copy
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-center">
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Use This</span>
                    <strong className="text-emerald-400">Unbound Free-T</strong>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Instead Of</span>
                    <span className="text-red-400 line-through">Testosterone boost</span>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Use This</span>
                    <strong className="text-emerald-400">Microvascular Flow</strong>
                  </div>
                  <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Instead Of</span>
                    <span className="text-red-400 line-through">Better blood</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CHECKOUT URLS CONFIGURATOR */}
          {activeTab === 'checkout-links' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-600/40 text-xs sm:text-sm space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <LinkIcon className="w-4 h-4 text-blue-400" />
                  <span>Connect Your Live CartPanda / Stripe Checkout Links:</span>
                </p>
                <p className="text-slate-300 text-xs">
                  Paste your active checkout payment links for each tier below. When a customer clicks "ADD TO CART" anywhere on the landing page, they will immediately be directed to your live checkout page.
                </p>
              </div>

              <div className="space-y-4 max-w-2xl mx-auto">
                {/* 1 Bottle Link */}
                <div className="space-y-1 text-xs">
                  <label className="font-bold text-white flex items-center justify-between">
                    <span>1 Bottle Starter Pack Checkout URL ($89)</span>
                    <span className="text-slate-400 font-normal text-[11px]">Default CartPanda / Stripe Link</span>
                  </label>
                  <input
                    type="url"
                    value={url1}
                    onChange={(e) => setUrl1(e.target.value)}
                    placeholder="https://cart.cartpanda.com/vapofil-1"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs focus:border-blue-500 focus:outline-none"
                  />
                </div>

                {/* 6 Bottles Link (Best Value) */}
                <div className="space-y-1 text-xs">
                  <label className="font-bold text-amber-400 flex items-center justify-between">
                    <span>6 Bottles Best Value Pack Checkout URL ($294) ★ MOST POPULAR</span>
                    <span className="text-amber-300 font-normal text-[11px]">Free Shipping + 2 Bonuses</span>
                  </label>
                  <input
                    type="url"
                    value={url6}
                    onChange={(e) => setUrl6(e.target.value)}
                    placeholder="https://cart.cartpanda.com/vapofil-6"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-amber-500 text-white font-mono text-xs focus:border-amber-400 focus:outline-none ring-1 ring-amber-500/50"
                  />
                </div>

                {/* 3 Bottles Link */}
                <div className="space-y-1 text-xs">
                  <label className="font-bold text-white flex items-center justify-between">
                    <span>3 Bottles Value Pack Checkout URL ($177)</span>
                    <span className="text-slate-400 font-normal text-[11px]">Free US Shipping</span>
                  </label>
                  <input
                    type="url"
                    value={url3}
                    onChange={(e) => setUrl3(e.target.value)}
                    placeholder="https://cart.cartpanda.com/vapofil-3"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleSaveLinks}
                    className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    Save Checkout URLs
                  </button>

                  {saveMessage && (
                    <span className="text-emerald-400 text-xs font-bold flex items-center gap-1 animate-in fade-in">
                      <Check className="w-4 h-4" /> Links updated & live across buttons!
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: AD SWIPES */}
          {activeTab === 'ad-swipes' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Proven Direct-Response Ad Swipes</h3>
                  <p className="text-xs text-slate-400">Ready to copy and deploy into Meta Ads Manager, Taboola, or Klaviyo</p>
                </div>
              </div>

              <div className="space-y-4">
                {AD_SWIPES.map((swipe) => (
                  <div key={swipe.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-900/60 text-blue-300 text-xs font-bold">
                          {swipe.platform}
                        </span>
                        <span className="text-xs text-slate-400">Angle: {swipe.targetAngle}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(`${swipe.headline}\n\n${swipe.body}\n\nCTA: ${swipe.cta}`, swipe.id)}
                        className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {copiedId === swipe.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === swipe.id ? 'Copied!' : 'Copy Swipe'}</span>
                      </button>
                    </div>

                    <div className="space-y-2 bg-slate-900/70 p-4 rounded-xl border border-slate-800 text-xs">
                      <p className="font-bold text-white text-sm">Headline: {swipe.headline}</p>
                      <p className="text-slate-300 whitespace-pre-line leading-relaxed">{swipe.body}</p>
                      <p className="text-amber-400 font-semibold pt-1">Button CTA: {swipe.cta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: AOV & REVENUE CALCULATOR */}
          {activeTab === 'calculator' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Interactive Funnel Revenue & AOV Projector</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Traffic Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Monthly Page Visitors:</span>
                      <strong className="text-white font-mono">{monthlyTraffic.toLocaleString()} clicks</strong>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={100000}
                      step={1000}
                      value={monthlyTraffic}
                      onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  {/* CVR Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Conversion Rate (CVR):</span>
                      <strong className="text-emerald-400 font-mono">{conversionRate}%</strong>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={6.0}
                      step={0.1}
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Projected Metrics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-center">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">Total Orders</span>
                    <p className="text-2xl font-black text-white mt-1">{totalOrders.toLocaleString()}</p>
                    <span className="text-[10px] text-slate-500">Per Month</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">6-Bottle Orders</span>
                    <p className="text-2xl font-black text-amber-400 mt-1">{orders6Bottles.toLocaleString()}</p>
                    <span className="text-[10px] text-amber-300/80">65% Bundle Dominance</span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[11px] text-slate-400 uppercase font-semibold">Average Order Value</span>
                    <p className="text-2xl font-black text-sky-400 mt-1">${averageOrderValue}</p>
                    <span className="text-[10px] text-slate-500">Industry leading AOV</span>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50">
                    <span className="text-[11px] text-emerald-300 uppercase font-semibold">Projected Gross Rev</span>
                    <p className="text-2xl font-black text-emerald-400 mt-1">
                      ${projectedRevenue.toLocaleString()}
                    </p>
                    <span className="text-[10px] text-emerald-200">Per Month</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center shrink-0">
          <p className="text-xs text-slate-400">
            {language === 'en'
              ? 'Strategy calibrated specifically for CartPanda US men’s supplement offers.'
              : 'Estratégia calibrada para ofertas masculinas nos EUA com CartPanda.'}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Close & Return to Page' : 'Fechar e Ver Página'}
          </button>
        </div>

      </div>
    </div>
  );
};
