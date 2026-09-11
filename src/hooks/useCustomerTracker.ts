import { useEffect, useRef } from 'react';
import { initializeVisitorSession, recordCustomerActivity } from '../services/firebase';

export function useCustomerTracker() {
  const initializedRef = useRef(false);
  const recordedMilestonesRef = useRef<Set<number>>(new Set());
  const observedSectionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    // 1. Initialize visitor session
    initializeVisitorSession();

    // 2. Track scroll milestones (25%, 50%, 75%, 90%, 100%)
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = Math.min(100, Math.round((scrollTop / docHeight) * 100));

      const milestones = [25, 50, 75, 90, 100];
      for (const milestone of milestones) {
        if (scrollPercent >= milestone && !recordedMilestonesRef.current.has(milestone)) {
          recordedMilestonesRef.current.add(milestone);
          recordCustomerActivity({
            eventType: 'scroll',
            scrollDepth: milestone,
            targetLabel: `Rolou ${milestone}% da página`,
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 3. Track section views via IntersectionObserver
    const sectionConfig = [
      { id: 'hero-section', name: 'Dobra Inicial (Hero)' },
      { id: 'science', name: 'Agitação Científica (SHBG)' },
      { id: 'ingredients', name: 'Fórmula 7 Ingredientes' },
      { id: 'clinical-proof', name: 'Endosso Médico Dr. Henderson' },
      { id: 'pricing-section', name: 'Ofertas & Preços (Pricing)' },
      { id: 'guarantee-section', name: 'Garantia Blindada 60 Dias' },
      { id: 'testimonials-section', name: 'Depoimentos Reais' },
      { id: 'faq', name: 'Dúvidas Frequentes (FAQ)' },
      { id: 'footer-section', name: 'Rodapé & Termos Legais' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId && !observedSectionsRef.current.has(sectionId)) {
              observedSectionsRef.current.add(sectionId);
              const matched = sectionConfig.find((s) => s.id === sectionId);
              const label = matched ? matched.name : sectionId;

              recordCustomerActivity({
                eventType: 'section_view',
                sectionName: label,
                targetLabel: `Visualizou: ${label}`,
              });
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionConfig.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    // 4. Global click tracker for clicks on buttons, links and FAQ questions
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Ignore administrative panel triggers so secret clicks do not pollute client metrics
      if (target.closest('[data-secret-trigger="true"]')) {
        return;
      }

      // Check for button, link or summary
      const clickable = target.closest('a, button, [role="button"], summary');
      if (clickable) {
        const text = (clickable.textContent || '').trim().substring(0, 70);
        const tag = clickable.tagName.toLowerCase();
        const href = clickable.getAttribute('href') || undefined;

        recordCustomerActivity({
          eventType: 'click',
          targetElement: `${tag}#${clickable.id || 'unnamed'}`,
          targetLabel: text || href || 'Elemento Clicável',
          url: href,
        });
      }
    };

    document.addEventListener('click', handleClick, true);

    // 5. Heartbeat dwell time markers
    const heartbeatDelays = [15, 30, 60, 120, 300];
    const timers: NodeJS.Timeout[] = [];

    heartbeatDelays.forEach((seconds) => {
      const timer = setTimeout(() => {
        recordCustomerActivity({
          eventType: 'heartbeat',
          targetLabel: `Permaneceu no site por ${seconds}s`,
        });
      }, seconds * 1000);
      timers.push(timer);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick, true);
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);
}
