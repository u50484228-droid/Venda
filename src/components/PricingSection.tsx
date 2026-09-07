import React from 'react';
import { ShoppingCart, Check, ShieldCheck, Lock, Truck } from 'lucide-react';
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
  const getCheckoutUrl = (tierId: string) => {
    if (tierId === '2-bottles') return funnelSettings.checkoutUrl1Bottle; // or 2 bottle link
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

  const tier2 = PRICING_TIERS[0]; // 2 bottles
  const tier6 = PRICING_TIERS[1]; // 6 bottles
  const tier3 = PRICING_TIERS[2]; // 3 bottles

  return (
    <section
      id="pricing-section"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 border-b border-slate-200 relative overflow-hidden selection:bg-amber-400 selection:text-slate-950"
    >
      {/* Radiant sapphire glow in the background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Tabs matching screenshot */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-lg bg-slate-100 border border-slate-200">
            <span className="px-5 py-1.5 rounded-md bg-white text-[#0a2f64] font-extrabold text-xs sm:text-sm shadow-xs border border-slate-200/60">
              {language === 'en' ? 'Step 1' : 'Etapa 1'}
            </span>
            <span className="px-5 py-1.5 text-slate-500 font-semibold text-xs sm:text-sm">
              {language === 'en' ? 'Step 2' : 'Etapa 2'}
            </span>
            <span className="px-5 py-1.5 text-slate-500 font-semibold text-xs sm:text-sm">
              {language === 'en' ? 'Step 3' : 'Etapa 3'}
            </span>
          </div>
        </div>

        {/* STEP 1 Heading matching screenshot */}
        <div className="text-center max-w-4xl mx-auto space-y-2 mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-center uppercase">
            <span className="text-amber-600">
              {language === 'en' ? 'STEP 1:' : 'ETAPA 1:'}
            </span>{' '}
            <span className="text-slate-950">
              {language === 'en' ? 'SELECT YOUR DISCOUNT PACKAGE' : 'ESCOLHA SEU PACOTE COM DESCONTO'}
            </span>
          </h2>

          {/* Dotted underline */}
          <div className="flex items-center justify-center gap-1 text-slate-400 text-xs tracking-widest pt-1">
            <span>••••••••••</span>
          </div>
        </div>

        {/* 3-Card Grid matching uploaded image 1:1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* ============================================================ */}
          {/* CARD 1: 2 BOTTLES (Basic Offer) */}
          {/* ============================================================ */}
          <div className="rounded-[22px] bg-white text-slate-900 border-[2.5px] border-[#1660b8] shadow-2xl flex flex-col justify-between overflow-hidden relative group hover:border-blue-500 transition-all duration-300">
            {/* Top Blue Header */}
            <div className="bg-[#0b519c] text-white text-center py-2 px-4">
              <span className="font-extrabold text-sm tracking-wide">
                {language === 'en' ? 'Basic Offer' : 'Oferta Básica'}
              </span>
            </div>

            {/* Package Title */}
            <div className="text-center pt-5 pb-1 px-4">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight uppercase">
                {language === 'en' ? '2 BOTTLES' : '2 FRASCOS'}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5">
                {language === 'en' ? '60 Day Supply' : 'Suprimento para 60 Dias'}
              </p>
            </div>

            {/* Bottle Image */}
            <div className="px-4 py-2 flex flex-col items-center justify-center min-h-[190px]">
              <BottleVisual size="md" count={2} onOpenLabelModal={onOpenLabelModal} showBadges={false} />
            </div>

            {/* Pricing Details */}
            <div className="px-6 pb-6 pt-1 text-center flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* Price tag */}
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-slate-900 mr-0.5 self-start pt-1">$</span>
                  <span className="text-6xl font-black text-slate-950 tracking-tight leading-none">79</span>
                  <span className="text-xs font-bold text-slate-700 ml-1.5 text-left leading-tight">
                    {language === 'en' ? <>Per<br/>Bottle</> : <>Por<br/>Frasco</>}
                  </span>
                </div>

                {/* You Save Badge */}
                <div className="mt-3 inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full border border-amber-500/80 bg-amber-50/70 text-xs font-black text-amber-800">
                  <span className="text-amber-600 text-sm">✓</span>
                  <span>{language === 'en' ? 'YOU SAVE $200' : 'VOCÊ ECONOMIZA $200'}</span>
                </div>

                {/* 60 Days Guarantee Line */}
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                  <span>{language === 'en' ? '60 DAYS GUARANTEE' : 'GARANTIA DE 60 DIAS'}</span>
                </div>
              </div>

              {/* Action Area */}
              <div className="space-y-3 pt-2">
                {/* Metallic Silver Button matching screenshot */}
                <button
                  type="button"
                  onClick={() => handleBuyClick(tier2)}
                  className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-b from-[#e3e7ed] via-[#d0d7e2] to-[#b4becc] hover:from-[#eef2f8] hover:to-[#c2ccda] text-slate-950 font-black text-base uppercase tracking-wide shadow-md border border-slate-300 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5 fill-slate-950 text-slate-950" />
                  <span>{language === 'en' ? 'BUY NOW' : 'COMPRE AGORA'}</span>
                </button>

                {/* Payment Cards */}
                <div className="flex items-center justify-center pt-1">
                  <img
                    src="./images/payment-cards.webp"
                    alt="Credit Cards Accepted"
                    className="h-5 sm:h-6 object-contain"
                  />
                </div>

                {/* Total & Shipping */}
                <div className="text-center pt-1 space-y-0.5">
                  <p className="text-xs font-bold text-slate-700">
                    TOTAL: <span className="line-through text-slate-400 font-normal">$358</span>{' '}
                    <span className="font-extrabold text-slate-950 text-sm">$158</span>
                  </p>
                  <p className="text-xs font-extrabold text-slate-950 uppercase tracking-wide">
                    {language === 'en' ? '+ 9.99 SHIPPING' : '+ FRETE $9.99'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 2: 6 BOTTLES (BEST OFFER! - Highlighted Center) */}
          {/* ============================================================ */}
          <div className="rounded-[22px] bg-gradient-to-b from-[#0d59ab] via-[#094182] to-[#052655] text-white border-[3px] border-blue-400 shadow-2xl shadow-blue-500/30 flex flex-col justify-between overflow-hidden relative group transform lg:-translate-y-2 lg:scale-[1.03] ring-4 ring-blue-500/20 z-10 transition-all duration-300">
            {/* Top White Header Ribbon matching screenshot */}
            <div className="bg-white text-[#0b54a2] text-center py-2 px-4 border-b border-blue-200">
              <span className="font-black text-sm tracking-wider uppercase">
                {language === 'en' ? 'BEST OFFER!' : 'MELHOR OFERTA!'}
              </span>
            </div>

            {/* Package Title */}
            <div className="text-center pt-5 pb-1 px-4">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                {language === 'en' ? '6 BOTTLES' : '6 FRASCOS'}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-blue-100 mt-0.5">
                {language === 'en' ? '180 Day Supply' : 'Suprimento para 180 Dias'}
              </p>
            </div>

            {/* Bottle Image (Pack of 6) */}
            <div className="px-4 py-2 flex flex-col items-center justify-center min-h-[190px]">
              <BottleVisual size="md" count={6} onOpenLabelModal={onOpenLabelModal} showBadges={false} />
            </div>

            {/* Pricing Details */}
            <div className="px-6 pb-6 pt-1 text-center flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* Price tag */}
                <div className="flex items-baseline justify-center text-white">
                  <span className="text-2xl font-bold text-white mr-0.5 self-start pt-1">$</span>
                  <span className="text-6xl font-black text-white tracking-tight leading-none">49</span>
                  <span className="text-xs font-bold text-blue-100 ml-1.5 text-left leading-tight">
                    {language === 'en' ? <>Per<br/>Bottle</> : <>Por<br/>Frasco</>}
                  </span>
                </div>

                {/* You Save Badge */}
                <div className="mt-3 inline-flex items-center justify-center gap-1.5 px-4 py-1 rounded-full border border-amber-400 bg-amber-400/15 text-xs font-black text-amber-300">
                  <span className="text-amber-400 text-sm">✓</span>
                  <span>{language === 'en' ? 'YOU SAVE $780' : 'VOCÊ ECONOMIZA $780'}</span>
                </div>

                {/* Features list with divider */}
                <div className="mt-3 text-xs font-bold text-white space-y-1.5">
                  <div className="flex items-center justify-center gap-1.5">
                    <Check className="w-4 h-4 text-blue-300 stroke-[3]" />
                    <span>{language === 'en' ? 'BIGGEST DISCOUNT' : 'MAIOR DESCONTO'}</span>
                  </div>
                  <div className="border-t border-dashed border-blue-400/30 my-1 mx-8" />
                  <div className="flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-300" />
                    <span>{language === 'en' ? '60 DAYS GUARANTEE' : 'GARANTIA DE 60 DIAS'}</span>
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="space-y-3 pt-2">
                {/* Vibrant Golden Yellow Button matching screenshot */}
                <button
                  type="button"
                  onClick={() => handleBuyClick(tier6)}
                  className="w-full py-4 px-4 rounded-lg bg-gradient-to-b from-[#fecb00] via-[#f7b700] to-[#e7a300] hover:from-[#fed42a] hover:to-[#efa800] text-slate-950 font-black text-base uppercase tracking-wider shadow-xl border border-amber-300 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5 fill-slate-950 text-slate-950" />
                  <span>{language === 'en' ? 'ADD TO CART!' : 'ADICIONAR AO CARRINHO!'}</span>
                </button>

                {/* Payment Cards */}
                <div className="flex items-center justify-center pt-1">
                  <div className="bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    <img
                      src="./images/payment-cards.webp"
                      alt="Credit Cards Accepted"
                      className="h-5 sm:h-6 object-contain"
                    />
                  </div>
                </div>

                {/* Total & Shipping */}
                <div className="text-center pt-1 space-y-0.5">
                  <p className="text-xs font-bold text-blue-100">
                    TOTAL: <span className="line-through text-blue-300/80 font-normal">$1074</span>{' '}
                    <span className="font-black text-white text-base">$294</span>
                  </p>
                  <p className="text-xs font-black text-[#ffdb4d] uppercase tracking-wider">
                    {language === 'en' ? '+ FREE SHIPPING' : '+ FRETE GRÁTIS'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================ */}
          {/* CARD 3: 3 BOTTLES (Most Popular) */}
          {/* ============================================================ */}
          <div className="rounded-[22px] bg-white text-slate-900 border-[2.5px] border-[#1660b8] shadow-2xl flex flex-col justify-between overflow-hidden relative group hover:border-blue-500 transition-all duration-300">
            {/* Top Blue Header */}
            <div className="bg-[#0b519c] text-white text-center py-2 px-4">
              <span className="font-extrabold text-sm tracking-wide">
                {language === 'en' ? 'Most Popular' : 'Mais Popular'}
              </span>
            </div>

            {/* Package Title */}
            <div className="text-center pt-5 pb-1 px-4">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight uppercase">
                {language === 'en' ? '3 BOTTLES' : '3 FRASCOS'}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5">
                {language === 'en' ? '90 Day Supply' : 'Suprimento para 90 Dias'}
              </p>
            </div>

            {/* Bottle Image */}
            <div className="px-4 py-2 flex flex-col items-center justify-center min-h-[190px]">
              <BottleVisual size="md" count={3} onOpenLabelModal={onOpenLabelModal} showBadges={false} />
            </div>

            {/* Pricing Details */}
            <div className="px-6 pb-6 pt-1 text-center flex-1 flex flex-col justify-between space-y-4">
              <div>
                {/* Price tag */}
                <div className="flex items-baseline justify-center">
                  <span className="text-2xl font-bold text-slate-900 mr-0.5 self-start pt-1">$</span>
                  <span className="text-6xl font-black text-slate-950 tracking-tight leading-none">69</span>
                  <span className="text-xs font-bold text-slate-700 ml-1.5 text-left leading-tight">
                    {language === 'en' ? <>Per<br/>Bottle</> : <>Por<br/>Frasco</>}
                  </span>
                </div>

                {/* You Save Badge */}
                <div className="mt-3 inline-flex items-center justify-center gap-1.5 px-3.5 py-1 rounded-full border border-amber-500/80 bg-amber-50/70 text-xs font-black text-amber-800">
                  <span className="text-amber-600 text-sm">✓</span>
                  <span>{language === 'en' ? 'YOU SAVE $330' : 'VOCÊ ECONOMIZA $330'}</span>
                </div>

                {/* 60 Days Guarantee Line */}
                <div className="mt-3 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-slate-700" />
                  <span>{language === 'en' ? '60 DAYS GUARANTEE' : 'GARANTIA DE 60 DIAS'}</span>
                </div>
              </div>

              {/* Action Area */}
              <div className="space-y-3 pt-2">
                {/* Metallic Silver Button matching screenshot */}
                <button
                  type="button"
                  onClick={() => handleBuyClick(tier3)}
                  className="w-full py-3.5 px-4 rounded-lg bg-gradient-to-b from-[#e3e7ed] via-[#d0d7e2] to-[#b4becc] hover:from-[#eef2f8] hover:to-[#c2ccda] text-slate-950 font-black text-base uppercase tracking-wide shadow-md border border-slate-300 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5 fill-slate-950 text-slate-950" />
                  <span>{language === 'en' ? 'ADD TO CART!' : 'ADICIONAR AO CARRINHO!'}</span>
                </button>

                {/* Payment Cards */}
                <div className="flex items-center justify-center pt-1">
                  <img
                    src="./images/payment-cards.webp"
                    alt="Credit Cards Accepted"
                    className="h-5 sm:h-6 object-contain"
                  />
                </div>

                {/* Total & Shipping */}
                <div className="text-center pt-1 space-y-0.5">
                  <p className="text-xs font-bold text-slate-700">
                    TOTAL: <span className="line-through text-slate-400 font-normal">$537</span>{' '}
                    <span className="font-extrabold text-slate-950 text-sm">$207</span>
                  </p>
                  <p className="text-xs font-extrabold text-slate-950 uppercase tracking-wide">
                    {language === 'en' ? '+ FREE SHIPPING' : '+ FRETE GRÁTIS'}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Security / Trust Badges underneath table */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-3xl mx-auto flex flex-wrap items-center justify-around gap-4 text-center text-xs text-slate-700 font-medium">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-600" />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>60-Day 100% Satisfaction Guarantee</span>
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
