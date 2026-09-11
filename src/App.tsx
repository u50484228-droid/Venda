import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ProblemAgitation } from './components/ProblemAgitation';
import { IngredientsSection } from './components/IngredientsSection';
import { DoctorEndorsement } from './components/DoctorEndorsement';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LabelModal } from './components/LabelModal';
import { StickyCtaBar } from './components/StickyCtaBar';
import { SalesAnalystModal } from './components/SalesAnalystModal';
import { useCustomerTracker } from './hooks/useCustomerTracker';
import { Language, FunnelSettings } from './types';
import { DEFAULT_FUNNEL_SETTINGS } from './data/productData';

export default function App() {
  // Automated background behavioral telemetry into Firebase
  useCustomerTracker();

  // Funnel & UX State
  const [language, setLanguage] = useState<Language>('en');
  const [isLabelModalOpen, setIsLabelModalOpen] = useState(false);
  const [isAnalystModalOpen, setIsAnalystModalOpen] = useState(false);

  // Funnel Settings (Loaded from localStorage if previously configured)
  const [funnelSettings, setFunnelSettings] = useState<FunnelSettings>(() => {
    const saved = localStorage.getItem('vapofil_funnel_settings');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing funnel settings', e);
      }
    }
    return DEFAULT_FUNNEL_SETTINGS;
  });

  const handleUpdateSettings = (newSettings: FunnelSettings) => {
    setFunnelSettings(newSettings);
    localStorage.setItem('vapofil_funnel_settings', JSON.stringify(newSettings));
  };

  // Countdown timer state (Initializes at 27:42 matching uploaded screenshot)
  const [timeLeft, setTimeLeft] = useState(27 * 60 + 42);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 27 * 60 + 42; // Reset loop for urgency
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 antialiased">
      <main>
        {/* 2. Direct-Response Hero Above The Fold */}
        <Hero
          language={language}
          onOpenLabelModal={() => setIsLabelModalOpen(true)}
          minutes={minutes}
          seconds={seconds}
        />

        {/* 3. Scientific Agitation (SHBG Trap & Nitric Oxide) */}
        <ProblemAgitation language={language} />

        {/* 4. Inside Every Capsule: 7 Synergistic Botanicals (Matching Images 6 & 7) */}
        <IngredientsSection
          language={language}
          onOpenLabelModal={() => setIsLabelModalOpen(true)}
        />

        {/* 5. Medical Doctor Review & Endorsement (Matching Images 2 & 5) */}
        <DoctorEndorsement
          language={language}
          onOpenLabelModal={() => setIsLabelModalOpen(true)}
        />

        {/* 6. Pricing & Order CTA (Direct Affiliate Link) */}
        <PricingSection
          language={language}
          onOpenLabelModal={() => setIsLabelModalOpen(true)}
          minutes={minutes}
          seconds={seconds}
          funnelSettings={funnelSettings}
        />

        {/* 7. 60-Day Ironclad Guarantee & Official Badges (Matching Images 4 & 5) */}
        <GuaranteeSection language={language} />

        {/* 9. Verified Customer Social Proof & Testimonials */}
        <TestimonialsSection language={language} />

        {/* 10. Objection-Crushing FAQ Section */}
        <FaqSection language={language} />
      </main>

      {/* 11. Compliant FTC/FDA Footer with CartPanda Notice */}
      <Footer
        language={language}
        onOpenLabelModal={() => setIsLabelModalOpen(true)}
        onOpenAnalyst={() => setIsAnalystModalOpen(true)}
      />

      {/* Sticky Bottom Bar on Scroll */}
      <StickyCtaBar
        language={language}
        minutes={minutes}
        seconds={seconds}
      />

      {/* Interactive Modals */}
      <LabelModal
        isOpen={isLabelModalOpen}
        onClose={() => setIsLabelModalOpen(false)}
        language={language}
      />

      <SalesAnalystModal
        isOpen={isAnalystModalOpen}
        onClose={() => setIsAnalystModalOpen(false)}
        language={language}
        funnelSettings={funnelSettings}
        onUpdateSettings={handleUpdateSettings}
      />
    </div>
  );
}
