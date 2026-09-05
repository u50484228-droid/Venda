import React from 'react';
import { ShoppingCart, Check, ShieldCheck, Truck, Sparkles, Star, Lock, Flame } from 'lucide-react';
import { BottleVisual } from './BottleVisual';
import { PRICING_TIERS } from '../data/productData';
import { Language, PricingTier, FunnelSettings } from '../types';

interface PricingSectionProps {
  language: Language;
  onOpenLabelModal: () => void;
  minutes: number;
  seconds: number;
  funnelSettings: FunnelSettings;
  onSelectTier: (tier: PricingTier) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  language,
  onOpenLabelModal,
  minutes,
  seconds,
  funnelSettings,
  onSelectTier,
}) => {
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const getCheckoutUrl = (tierId: string) => {
    if (tierId === '1-bottle') return funnelSettings.checkoutUrl1Bottle;
    if (tierId === '3-bottles') return funnelSettings.checkoutUrl3Bottles;
    return funnelSettings.checkoutUrl6Bottles;
  };

  const handleBuyClick = (tier: PricingTier) => {
    const targetUrl = getCheckoutUrl(tier.id);
    if (targetUrl && targetUrl.startsWith('http')) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } else {
      onSelectTier(tier);
    }
  };

  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 text-slate-900 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Shipping Callout Badge matching uploaded Image 8 */}
        <div className="max-w-xl mx-auto mb-6 p-3 rounded-2xl bg-blue-600 text-white shadow-lg flex items-center justify-center gap-3 border border-blue-400/40 text-center">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-white" />
          </div>
          <div className="text-xs sm:text-sm font-semibold">
            <p className="font-extrabold text-amber-300 uppercase tracking-wide">
              {language === 'en'
                ? 'All Orders of 3 or 6 Bottles Receive FREE USA Shipping!'
                : 'Todos os pedidos de 6 ou 3 garrafas têm frete grátis!'}
            </p>
            <p className="text-blue-100 text-[11px] font-normal">
              {language === 'en'
                ? '*96% of men choose the 6-bottle supply (our doctor-recommended protocol)'
                : '*96% dos clientes encomendam 6 garrafas (a nossa opção recomendada)'}
            </p>
          </div>
        </div>

        {/* Main Urgent Pricing Heading matching uploaded Image 3 */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {language === 'en' ? (
              <>
                Claim Your VapoFil™ With Discount{' '}
                <span className="text-amber-600">While Supplies Last!</span>
              </>
            ) : (
              <>
                Garanta já o seu VapoFil com desconto{' '}
                <span className="text-amber-600">enquanto durarem os estoques!</span>
              </>
            )}
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-400 text-amber-700 font-mono font-bold text-lg shadow-sm">
            <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>{formattedTime}</span>
            <span className="text-xs text-slate-600 font-sans font-medium">
              {language === 'en' ? 'Discount Pricing Reserved' : 'Desconto Reservado'}
            </span>
          </div>
        </div>

        {/* 3-Tier Grid matching exact structure from uploaded images 3 & 8 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          
          {/* TIER 1: 1 BOTTLE (30-DAY SUPPLY) */}
          <div className="rounded-3xl bg-white text-slate-900 border-2 border-slate-200 shadow-xl flex flex-col justify-between overflow-hidden relative group hover:border-slate-400 transition-all">
            
            {/* Top Header Box */}
            <div className="bg-slate-950 text-white text-center py-4 px-4">
              <h3 className="text-xl font-black uppercase tracking-wide">
                {language === 'en' ? 'Try One' : 'Experimente um'}
              </h3>
              <p className="text-sm font-bold text-slate-300 mt-0.5">
                {language === 'en' ? '1 BOTTLE - 30-Day Supply' : '1 FRASCO - Suprimento para 30 dias'}
              </p>
            </div>

            {/* Bottle Render */}
            <div className="p-6 flex flex-col items-center justify-center bg-slate-50 min-h-[220px]">
              <BottleVisual size="md" count={1} onOpenLabelModal={onOpenLabelModal} showBadges={false} />
            </div>

            {/* Price Details */}
            <div className="p-6 pt-2 text-center space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-slate-950 tracking-tight">$89</span>
                  <span className="text-xs font-semibold text-slate-600 uppercase">
                    {language === 'en' ? 'Per Bottle' : 'Por garrafa'}
                  </span>
                </div>

                <div className="mt-2 inline-block px-3 py-1 rounded bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800">
                  <Check className="w-3.5 h-3.5 inline mr-1 text-emerald-600" />
                  {language === 'en' ? 'YOU SAVE $90 DOLLARS' : 'VOCÊ ECONOMIZA 90 DÓLARES'}
                </div>

                <div className="mt-3 text-xs text-slate-600 font-medium">
                  <span className="line-through text-slate-400 text-sm">$179</span>{' '}
                  <strong className="text-base text-slate-950 font-black">TOTAL: $89</strong>
                </div>

                <div className="mt-2 text-xs font-bold text-red-600 bg-red-50 py-1 rounded">
                  {language === 'en' ? '+ $9.95 Standard Shipping' : '+ ENVIO'}
                </div>
              </div>

              {/* Guarantees & CTA */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-700 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'en' ? '60-DAY MONEY-BACK GUARANTEE' : 'GARANTIA DE 60 DIAS'}</span>
                </div>

                {/* Buy Button (Golden yellow as in image 4) */}
                <button
                  type="button"
                  onClick={() => handleBuyClick(PRICING_TIERS[0])}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base uppercase tracking-wider shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 border border-amber-300 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{language === 'en' ? 'ADD TO CART!' : 'ADICIONAR AO CARRINHO!'}</span>
                </button>

                {/* Credit card badges */}
                <div className="flex items-center justify-center pt-1">
                  <img src="/images/payment-cards.webp" alt="Cards Accepted" className="h-5 object-contain opacity-90" />
                </div>
              </div>

            </div>
          </div>

          {/* TIER 2: 6 BOTTLES (CENTER HERO - BEST VALUE) - Matches Orange Hero from Image 3 */}
          <div className="rounded-3xl bg-white text-slate-900 border-4 border-amber-500 shadow-2xl shadow-amber-500/20 flex flex-col justify-between overflow-hidden relative -translate-y-2 lg:-translate-y-4 z-10 group">
            
            {/* Top Hero Banner */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white text-center py-4 px-4">
              <span className="inline-block px-3 py-0.5 rounded-full bg-black/30 text-white text-[11px] font-black tracking-widest uppercase mb-1">
                ⭐ {language === 'en' ? 'DOCTOR RECOMMENDED • 96% OF MEN CHOOSE THIS' : 'OPÇÃO RECOMENDADA POR 96% DOS CLIENTES'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                {language === 'en' ? 'BEST VALUE!' : 'MELHOR CUSTO-BENEFÍCIO!'}
              </h3>
              <p className="text-sm font-extrabold text-amber-100 mt-0.5">
                {language === 'en' ? '6 BOTTLES - 180-Day Full Restoration' : '6 FRASCOS - Suprimento para 180 dias'}
              </p>
            </div>

            {/* 6 Bottles Visual on Podium */}
            <div className="p-6 flex flex-col items-center justify-center bg-gradient-to-b from-amber-50/50 to-white min-h-[220px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-black tracking-wider uppercase">
                  MOST POPULAR ★★★★★
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-900 text-[10px] font-black tracking-wider uppercase flex items-center gap-1">
                  <Truck className="w-3 h-3" /> FREE SHIPPING
                </span>
              </div>

              <BottleVisual size="md" count={6} onOpenLabelModal={onOpenLabelModal} showBadges={false} />
            </div>

            {/* Price Details */}
            <div className="p-6 pt-2 text-center space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-6xl font-black text-amber-600 tracking-tight">$49</span>
                  <span className="text-xs font-bold text-slate-700 uppercase">
                    {language === 'en' ? 'Per Bottle' : 'Por garrafa'}
                  </span>
                </div>

                <div className="mt-2 inline-block px-3 py-1.5 rounded-lg bg-amber-100 border border-amber-300 text-xs font-black text-amber-950 uppercase">
                  <Check className="w-4 h-4 inline mr-1 text-emerald-600 stroke-[3]" />
                  {language === 'en' ? 'YOU SAVE $780 DOLLARS' : 'VOCÊ ECONOMIZA $780'}
                </div>

                <div className="mt-1">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[11px] font-bold">
                    {language === 'en' ? '★ BIGGEST DISCOUNT GUARANTEED ★' : '★ MAIOR DESCONTO ★'}
                  </span>
                </div>

                <div className="mt-3 text-xs text-slate-600 font-medium">
                  <span className="line-through text-slate-400 text-sm">$1,074</span>{' '}
                  <strong className="text-lg text-slate-950 font-black">TOTAL: $294</strong>
                </div>

                <div className="mt-2 text-xs font-black text-emerald-700 bg-emerald-50 py-1.5 rounded-md border border-emerald-200 flex items-center justify-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? '+ FREE FAST USA SHIPPING' : '+ FRETE GRÁTIS PARA OS EUA'}</span>
                </div>

                {/* 2 Free Bonuses Included */}
                <div className="mt-2 text-[11px] font-bold text-blue-900 bg-blue-50 py-1 rounded border border-blue-200">
                  🎁 {language === 'en' ? 'INCLUDES 2 FREE DIGITAL BONUSES ($116 VALUE)' : 'INCLUI 2 BÔNUS DIGITAIS EXCLUSIVOS'}
                </div>
              </div>

              {/* Guarantees & CTA */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-800 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'en' ? '60-DAY 100% EMPTY BOTTLE GUARANTEE' : 'GARANTIA DE 60 DIAS'}</span>
                </div>

                {/* Vibrant High-Converting Orange Cart Button (as in image 4) */}
                <button
                  type="button"
                  onClick={() => handleBuyClick(PRICING_TIERS[1])}
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-black text-lg uppercase tracking-wider shadow-2xl shadow-orange-500/50 flex items-center justify-center gap-2 border-2 border-amber-300 transition-all hover:scale-[1.03] active:scale-95 cursor-pointer"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>{language === 'en' ? 'ADD TO CART!' : 'ADICIONAR AO CARRINHO!'}</span>
                </button>

                {/* Credit card badges */}
                <div className="flex items-center justify-center pt-1">
                  <img src="/images/payment-cards.webp" alt="Cards Accepted" className="h-6 object-contain opacity-95" />
                </div>
              </div>

            </div>
          </div>

          {/* TIER 3: 3 BOTTLES (90-DAY SUPPLY) */}
          <div className="rounded-3xl bg-white text-slate-900 border-2 border-slate-200 shadow-xl flex flex-col justify-between overflow-hidden relative group hover:border-slate-400 transition-all">
            
            {/* Top Header Box */}
            <div className="bg-slate-950 text-white text-center py-4 px-4">
              <h3 className="text-xl font-black uppercase tracking-wide">
                {language === 'en' ? 'Great Value!' : 'Excelente custo-benefício!'}
              </h3>
              <p className="text-sm font-bold text-slate-300 mt-0.5">
                {language === 'en' ? '3 BOTTLES - 90-Day Supply' : '3 FRASCOS - Suprimento para 90 dias'}
              </p>
            </div>

            {/* 3 Bottles Visual on Podium */}
            <div className="p-6 flex flex-col items-center justify-center bg-slate-50 min-h-[220px]">
              <div className="mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-900 text-[10px] font-black tracking-wider uppercase flex items-center gap-1">
                  <Truck className="w-3 h-3" /> FREE SHIPPING
                </span>
              </div>
              <BottleVisual size="md" count={3} onOpenLabelModal={onOpenLabelModal} showBadges={false} />
            </div>

            {/* Price Details */}
            <div className="p-6 pt-2 text-center space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-slate-950 tracking-tight">$59</span>
                  <span className="text-xs font-semibold text-slate-600 uppercase">
                    {language === 'en' ? 'Per Bottle' : 'Por garrafa'}
                  </span>
                </div>

                <div className="mt-2 inline-block px-3 py-1 rounded bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800">
                  <Check className="w-3.5 h-3.5 inline mr-1 text-emerald-600" />
                  {language === 'en' ? 'YOU SAVE $360 DOLLARS' : 'VOCÊ ECONOMIZA $360'}
                </div>

                <div className="mt-3 text-xs text-slate-600 font-medium">
                  <span className="line-through text-slate-400 text-sm">$537</span>{' '}
                  <strong className="text-base text-slate-950 font-black">TOTAL: $177</strong>
                </div>

                <div className="mt-2 text-xs font-bold text-emerald-700 bg-emerald-50 py-1 rounded border border-emerald-200 flex items-center justify-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? '+ FREE USA SHIPPING' : '+ FRETE GRÁTIS PARA OS EUA'}</span>
                </div>
              </div>

              {/* Guarantees & CTA */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-700 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{language === 'en' ? '60-DAY MONEY-BACK GUARANTEE' : 'GARANTIA DE 60 DIAS'}</span>
                </div>

                {/* Buy Button */}
                <button
                  type="button"
                  onClick={() => handleBuyClick(PRICING_TIERS[2])}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base uppercase tracking-wider shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2 border border-amber-300 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{language === 'en' ? 'ADD TO CART!' : 'ADICIONAR AO CARRINHO!'}</span>
                </button>

                {/* Credit card badges */}
                <div className="flex items-center justify-center pt-1">
                  <img src="/images/payment-cards.webp" alt="Cards Accepted" className="h-5 object-contain opacity-90" />
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Security & CartPanda Trust Badges underneath table */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-3xl mx-auto flex flex-wrap items-center justify-around gap-4 text-center text-xs text-slate-700 font-medium">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>100% Satisfaction or Full Refund</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-amber-600" />
            <span>USPS Discreet Plain Packaging</span>
          </div>
        </div>

      </div>
    </section>
  );
};
