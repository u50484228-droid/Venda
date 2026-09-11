import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Truck, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { BottleVisual } from './BottleVisual';
import { AFFILIATE_BUY_LINK, triggerConversionAndRedirect } from '../data/productData';
import { Language, PricingTier, FunnelSettings } from '../types';

interface PricingSectionProps {
  language: Language;
  onOpenLabelModal: () => void;
  minutes: number;
  seconds: number;
  funnelSettings?: FunnelSettings;
  onSelectTier?: (tier: PricingTier) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  language,
  onOpenLabelModal,
  minutes,
  seconds,
  funnelSettings,
}) => {
  const affiliateUrl = funnelSettings?.checkoutUrl6Bottles || AFFILIATE_BUY_LINK;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return (
    <section
      id="pricing-section"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 border-b border-slate-200 relative overflow-hidden selection:bg-amber-400 selection:text-slate-950"
    >
      {/* Radiant sapphire glow in the background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[450px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Production Batch Pricing Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs sm:text-sm font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>
              {language === 'en'
                ? 'Current Production Run • Direct Manufacturer Pricing Active'
                : 'Lote de Produção Atual • Desconto Direto de Fábrica Ativo'}
            </span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase">
            {language === 'en' ? (
              <>
                CLAIM YOUR DIRECT DISCOUNT UP TO{' '}
                <span className="text-blue-700">$780 OFF</span> TODAY
              </>
            ) : (
              <>
                GARANTA SEU DESCONTO DIRETO DE ATÉ{' '}
                <span className="text-blue-700">$780 OFF</span> HOJE
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            {language === 'en'
              ? 'Select your preferred package (2, 3, or 6 bottles) below to order directly through the official secure checkout and experience comprehensive vitality support with a full 60-day guarantee.'
              : 'Selecione seu pacote ideal (2, 3 ou 6 frascos) abaixo para fazer seu pedido pela página oficial segura e receber suporte nutricional à sua vitalidade com garantia completa de 60 dias.'}
          </p>
        </div>

        {/* Main Conversion Showcase Card */}
        <div className="rounded-3xl bg-white border-2 border-blue-600/30 shadow-2xl overflow-hidden relative">
          
          {/* Top Blue Bar */}
          <div className="bg-gradient-to-r from-[#0a2f64] via-[#10488f] to-[#0a2f64] text-white py-3 px-6 text-center">
            <span className="font-black text-sm sm:text-base tracking-wider uppercase">
              {language === 'en'
                ? '★ OFFICIAL VAPOFIL™ LIMITED-TIME DIRECT DISCOUNT ★'
                : '★ DESCONTO DIRETO OFICIAL VAPOFIL™ POR TEMPO LIMITADO ★'}
            </span>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Product Visual (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="relative">
                  <BottleVisual
                    size="hero"
                    count={6}
                    onOpenLabelModal={onOpenLabelModal}
                    showBadges={false}
                  />
                  <div className="absolute -top-3 -right-2 px-3 py-1 rounded-full bg-[#fecb00] text-slate-950 font-black text-xs uppercase tracking-wider shadow-md border border-amber-300">
                    SAVE UP TO $780
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-semibold mt-4 text-center">
                  {language === 'en'
                    ? '2, 3 & 6 Bottle Packages Available on Official Checkout'
                    : 'Kits de 2, 3 e 6 Frascos Disponíveis na Página Oficial'}
                </p>
              </div>

              {/* Right Column: Key Benefits & Massive Affiliate Button (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                    {language === 'en'
                      ? 'What You Get With Every Official Order:'
                      : 'O Que Você Recebe em Seu Pedido Oficial:'}
                  </h3>

                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-950">
                          {language === 'en' ? 'Exclusive Savings:' : 'Desconto Máximo:'}
                        </strong>{' '}
                        {language === 'en'
                          ? 'Save up to $780 OFF regular retail prices.'
                          : 'Economize até $780 OFF em relação ao preço de tabela.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-950">
                          {language === 'en' ? '60-Day Empty-Bottle Guarantee:' : 'Garantia de 60 Dias Frasco Vazio:'}
                        </strong>{' '}
                        {language === 'en'
                          ? '100% Money-Back if not completely satisfied.'
                          : '100% de reembolso se não estiver totalmente satisfeito.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-950">
                          {language === 'en' ? 'Free Fast Shipping:' : 'Frete Rápido & Grátis:'}
                        </strong>{' '}
                        {language === 'en'
                          ? 'Delivered directly to your door in plain, discreet boxes.'
                          : 'Entrega rápida e discreta diretamente na sua porta.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-950">
                          {language === 'en' ? '2 Free Intimacy E-Books:' : '2 Livros Bônus Gratuitos:'}
                        </strong>{' '}
                        {language === 'en'
                          ? 'Instant digital access included with multi-bottle supplies.'
                          : 'Acesso digital imediato incluído nos kits promocionais.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-slate-950">
                          {language === 'en' ? '100% Pure Botanical Formula:' : 'Fórmula 100% Botânica Pura:'}
                        </strong>{' '}
                        {language === 'en'
                          ? 'Manufactured in FDA-registered, cGMP-certified US facility.'
                          : 'Fabricado nos EUA em instalação certificada por cGMP e registrada pela FDA.'}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Primary Direct Affiliate Buy Button */}
                <div className="pt-2 space-y-3">
                  <a
                    id="pricing-affiliate-cta-btn"
                    href={affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) =>
                      triggerConversionAndRedirect(
                        e,
                        affiliateUrl,
                        'Pricing Section - Claim Your Discount & Order Now (Save Up To $780)'
                      )
                    }
                    className="w-full py-5 px-6 rounded-2xl bg-gradient-to-b from-[#fecb00] via-[#f7b700] to-[#e7a300] hover:from-[#fed42a] hover:to-[#efa800] text-slate-950 font-black text-lg sm:text-xl uppercase tracking-wider shadow-xl shadow-amber-500/25 border-2 border-amber-300 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 text-center cursor-pointer group"
                  >
                    <span>
                      {language === 'en'
                        ? 'Claim Your Discount & Order Now'
                        : 'Garantir Desconto & Pedir Agora'}
                    </span>
                    <ArrowRight className="w-6 h-6 text-slate-950 group-hover:translate-x-1.5 transition-transform shrink-0" />
                  </a>

                  {/* Payment Methods & One-Time Payment Reassurance */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-center sm:text-left">
                    <img
                      src="./images/payment-cards.webp"
                      alt="Accepted Credit Cards: Visa, MasterCard, Discover, Amex"
                      className="h-7 w-auto object-contain opacity-90"
                      loading="lazy"
                    />
                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      <span>
                        {language === 'en'
                          ? 'One-Time Payment • No Auto-Ship Subscriptions'
                          : 'Pagamento Único • Sem Assinaturas Recorrentes'}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Bottom Trust Row */}
          <div className="bg-slate-50 border-t border-slate-200 py-3.5 px-6 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>256-Bit SSL Encrypted Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>60-Day 100% Empty Bottle Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-600" />
              <span>Fast Discreet USPS Packaging</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-600" />
              <span>Made In The USA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
