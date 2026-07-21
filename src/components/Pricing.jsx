import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';
import Card from './ui/Card';
import GoldDivider from './ui/GoldDivider';

// Register ScrollTrigger plugin locally
gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const pricingRef = useRef(null);
  const { t } = useLanguage();

  // Load plans list from selected language catalog
  const plans = t('pricing.plans') || [];

  // Local scoped scroll trigger for pricing cards
  useGSAP(() => {
    if (plans.length === 0) return;
    gsap.fromTo('.pricing-card', 
      {
        y: 45,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pricing-card-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { dependencies: [plans], scope: pricingRef });

  if (plans.length === 0) return null;

  return (
    <section 
      ref={pricingRef}
      id="pricing" 
      className="py-24 relative overflow-hidden bg-[#FFF8E8]/40"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D4AF37]/8 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold uppercase tracking-widest text-[#6A4A1C]">
            {t('pricing.badge')}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#6D1A1A] mt-2">
            {t('pricing.title')}
          </h2>
          <GoldDivider />
          <p className="font-poppins text-sm sm:text-base text-[#4A3A2A]/90 max-w-3xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="pricing-card-grid grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-4">
          {plans.map((plan, idx) => {
            const isMiddleHighlight = idx === 1; // Double Check highlighted state (Detailed analysis is at index 1)
            const encodedMsg = encodeURIComponent(plan.msg);
            const bookingUrl = `https://wa.me/918383941616?text=${encodedMsg}`;

            return (
              <Card
                key={idx}
                glass={true}
                hoverEffect={!isMiddleHighlight}
                className={`pricing-card flex flex-col relative justify-between p-6 sm:p-8 rounded-[24px] bg-white/80 backdrop-blur-md transition-all duration-500 text-left ${
                  isMiddleHighlight 
                    ? 'border-2 border-[#D4AF37] scale-102 lg:scale-105 lg:-translate-y-2 shadow-[0_0_35px_rgba(212,175,55,0.22)] shadow-[#6D1A1A]/8 z-10' 
                    : 'border border-[#D4AF37]/30 shadow-[0_10px_35px_rgba(109,26,26,0.03)] hover:-translate-y-1.5'
                }`}
              >
                {/* Highlight Badge */}
                {isMiddleHighlight && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-5 py-1.5 rounded-full bg-[#6D1A1A] text-[#FFF8E8] border border-[#D4AF37] text-[10px] font-cinzel font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-md whitespace-nowrap">
                    {t('pricing.most_recommended')}
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="text-center mb-5">
                    <span className="font-devanagari text-xs font-bold text-[#B8860B] tracking-wide mb-1 block">
                      {plan.hindi}
                    </span>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#6D1A1A] tracking-wide mb-3">
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#6D1A1A] tracking-wider">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  <p className="font-poppins text-xs sm:text-sm text-[#4A3A2A]/85 text-center leading-relaxed mb-5">
                    {plan.desc}
                  </p>

                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent mb-5" />

                  {/* Features List */}
                  <ul className="space-y-2.5 mb-6 text-left">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="shrink-0 mt-0.5 text-[#D4AF37]">
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                        <span className="font-poppins text-xs sm:text-sm text-[#2B1A0A]/95 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <div className="mt-auto pt-2">
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center px-8 py-3.5 text-xs sm:text-sm rounded-full font-bold font-cinzel tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 border cursor-pointer ${
                      isMiddleHighlight 
                        ? 'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-white border-[#D4AF37]/50 shadow-md hover:brightness-110' 
                        : 'border-[#D4AF37]/40 text-[#6D1A1A] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
