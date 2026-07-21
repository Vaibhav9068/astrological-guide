import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Counter() {
  const containerRef = useRef(null);
  const { t } = useLanguage();

  const stats = [
    { value: 30, suffix: '+', labelKey: 'counter.exp_years' },
    { value: 1000, suffix: '+', labelKey: 'counter.happy_clients' },
    { value: 95, suffix: '%', labelKey: 'counter.returning_clients' },
    { value: 100, suffix: '+', labelKey: 'counter.monthly_consultations' },
  ];

  useEffect(() => {
    const targets = containerRef.current.querySelectorAll('.counter-value');
    
    targets.forEach((target) => {
      const targetVal = parseInt(target.getAttribute('data-target'), 10);
      const countObj = { val: 0 };
      
      gsap.to(countObj, {
        val: targetVal,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: target,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          target.innerText = Math.floor(countObj.val);
        },
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-maroon text-white relative overflow-hidden">
      {/* Decorative background stars */}
      <div className="absolute inset-0 bg-[radial-gradient(#F6C90E_0.6px,transparent_0.6px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-baseline justify-center font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
                <span className="counter-value" data-target={stat.value}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <div className="font-poppins text-xxs sm:text-xs uppercase tracking-widest text-white/70 font-semibold max-w-[180px] leading-relaxed">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
