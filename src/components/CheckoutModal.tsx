import React, { useState } from 'react';
import {
  X,
  Lock,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Sparkles,
  CreditCard,
  Tag,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { PricingTier, Language } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: PricingTier | null;
  language: Language;
  onOpenAnalyst: () => void;
  couponApplied?: boolean;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  selectedTier,
  language,
  onOpenAnalyst,
  couponApplied = false,
}) => {
  const [includeBump, setIncludeBump] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen || !selectedTier) return null;

  const basePrice = selectedTier.salePriceTotal;
  const discountMultiplier = couponApplied ? 0.9 : 1.0;
  const discountedPrice = basePrice * discountMultiplier;
  const bumpPrice = includeBump ? 19.95 : 0;
  const finalTotal = (discountedPrice + bumpPrice).toFixed(2);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-50 text-slate-900 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <div>
              <h3 className="text-base font-black tracking-wide font-mono text-slate-950">
                VAPOFIL™ SECURE CHECKOUT
              </h3>
              <p className="text-[10px] text-slate-500">CartPanda 256-Bit SSL Encrypted Order</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {orderComplete ? (
          /* Order Confirmation Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-1">
              <h4 className="text-2xl font-black text-slate-950">
                {language === 'en' ? 'Order Successfully Placed!' : 'Pedido Confirmado com Sucesso!'}
              </h4>
              <p className="text-sm text-slate-600">
                {language === 'en'
                  ? 'Your VapoFil™ order has been securely registered in our Florida fulfillment facility.'
                  : 'Seu pedido de VapoFil™ foi processado com sucesso em nosso centro de distribuição.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between font-bold text-slate-950">
                <span>{selectedTier.bottles} Bottles Pack ({selectedTier.supplyDays} Days)</span>
                <span>${finalTotal}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="text-emerald-700 font-bold">FREE US PRIORITY</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Delivery</span>
                <span>2-4 Business Days (Discreet Package)</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setOrderComplete(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-b from-[#fecb00] to-[#e7a300] text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-colors cursor-pointer"
            >
              {language === 'en' ? 'Back to Product Page' : 'Voltar à Página'}
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmitOrder} className="p-6 space-y-5">
            
            {/* Package Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">
                  {language === 'en' ? 'Selected Package' : 'Pacote Selecionado'}
                </span>
                <h4 className="text-base font-black text-slate-950">
                  {selectedTier.bottles} {selectedTier.bottles === 1 ? 'Bottle' : 'Bottles'} ({selectedTier.supplyDays}-Day Supply)
                </h4>
                <p className="text-xs text-slate-600">
                  ${selectedTier.pricePerBottle} / bottle • {selectedTier.shipping}
                </p>
              </div>

              <div className="text-right">
                {couponApplied && (
                  <span className="text-xs font-bold text-red-600 block line-through">
                    ${basePrice}
                  </span>
                )}
                <span className="text-2xl font-black text-emerald-700">
                  ${finalTotal}
                </span>
                {couponApplied && (
                  <span className="text-[10px] font-bold text-emerald-700 block">
                    10% Coupon Applied!
                  </span>
                )}
              </div>
            </div>

            {/* HIGH CONVERTING ORDER BUMP (Adds $19.95 immediately) */}
            <div className="p-4 rounded-2xl bg-amber-50/60 border-2 border-dashed border-amber-400 flex items-start gap-3 cursor-pointer" onClick={() => setIncludeBump(!includeBump)}>
              <input
                type="checkbox"
                checked={includeBump}
                onChange={(e) => setIncludeBump(e.target.checked)}
                className="w-5 h-5 mt-0.5 accent-amber-500 rounded cursor-pointer shrink-0"
              />
              <div className="text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-black text-amber-900 text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
                  <span>ONE-TIME OFFER: Add VapoFil 15-Minute Nitric Booster Drops (+ $19.95)</span>
                </div>
                <p className="text-slate-700 leading-snug">
                  Accelerate pelvic absorption before intimate moments with our sublingual liquid drops. 60% OFF regular $49.95 retail price.
                </p>
              </div>
            </div>

            {/* Quick Simulated Customer Fields */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>US Shipping Address (Discreet Plain Box)</span>
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <input
                  type="text"
                  required
                  defaultValue="John Miller"
                  placeholder="Full Name"
                  className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="email"
                  required
                  defaultValue="john.miller@example.com"
                  placeholder="Email Address"
                  className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  required
                  defaultValue="742 Evergreen Terrace"
                  placeholder="Street Address"
                  className="sm:col-span-2 px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  required
                  defaultValue="Springfield"
                  placeholder="City"
                  className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    defaultValue="FL"
                    placeholder="State"
                    className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    defaultValue="33804"
                    placeholder="ZIP Code"
                    className="px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-emerald-600" />
                <span>Payment Information</span>
              </h5>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <input
                  type="text"
                  defaultValue="•••• •••• •••• 4242"
                  disabled
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-800 font-mono"
                />
                <div className="flex justify-between text-[11px] text-slate-600 font-medium">
                  <span>CartPanda Sandbox Payment Processor</span>
                  <span className="text-emerald-700 font-bold">Encrypted 256-bit</span>
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-b from-[#fecb00] via-[#f7b700] to-[#e7a300] hover:from-[#fed42a] hover:to-[#efa800] text-slate-950 font-black text-base uppercase tracking-wider shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Complete My Order (${finalTotal})</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  60-Day Money-Back Guarantee
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  256-Bit SSL Encrypted
                </span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
