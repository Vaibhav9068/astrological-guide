import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from './context/LanguageContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Counter from './components/Counter';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);
  const [currentView, setCurrentView] = useState('home');
  const { language } = useLanguage();
  const [isFading, setIsFading] = useState(false);

  // Hash-based client-side routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setCurrentView('privacy');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#terms') {
        setCurrentView('terms');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('load', handleHashChange);
    handleHashChange(); // Run initial routing check

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('load', handleHashChange);
    };
  }, []);

  // Set up smooth fade transition on language toggle
  useEffect(() => {
    setIsFading(true);
    const timer = setTimeout(() => {
      setIsFading(false);
      // Recalculate GSAP offsets once text has swapped and layout settled
      ScrollTrigger.refresh();
    }, 250);
    return () => clearTimeout(timer);
  }, [language]);

  // GSAP Entrance Animations triggered on scroll
  useGSAP(
    () => {
      if (currentView !== 'home') {
        // Kill existing triggers to avoid ghost elements when on subpages
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        return;
      }

      // Fade Up animations for Section Headers (both subtitles and main h2 headings) - excluding Hero
      const sectionHeaders = gsap.utils.toArray('span.text-darkgold, h2.font-cinzel').filter(el => !el.closest('#home'));
      sectionHeaders.forEach((header) => {
        gsap.from(header, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Fade-up timelines items
      const timelineNodes = gsap.utils.toArray('.relative.group');
      timelineNodes.forEach((node) => {
        gsap.from(node, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Refresh ScrollTrigger to ensure coordinates match the fully populated DOM height
      const refresh1 = setTimeout(() => ScrollTrigger.refresh(), 200);
      const refresh2 = setTimeout(() => ScrollTrigger.refresh(), 1000);

      return () => {
        clearTimeout(refresh1);
        clearTimeout(refresh2);
      };
    },
    { dependencies: [currentView], scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FFF9EE] text-black overflow-x-hidden selection:bg-maroon selection:text-primary">
      <Navbar />

      {/* Persistent Page body container with smooth bilingual fade transition */}
      <main className={`transition-opacity duration-250 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        
        {currentView === 'home' && (
          <>
            <Hero />
            <About />
            <Counter />
            <Services />
            
            {/* Premium Full-Width Section Divider */}
            <div className="relative w-full overflow-hidden py-6 bg-bg-cream flex items-center justify-center select-none">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
              <div className="relative w-9 h-9 rounded-full bg-[#6D1A1A] border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.35)] animate-pulse-slow">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2v20M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
            </div>

            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        )}

        {currentView === 'privacy' && <PrivacyPolicy />}
        {currentView === 'terms' && <TermsConditions />}

        <Footer />
      </main>
    </div>
  );
}
