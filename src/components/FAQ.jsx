import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Accordion from './ui/Accordion';
import GoldDivider from './ui/GoldDivider';

export default function FAQ() {
  const { t } = useLanguage();
  
  // Load localized FAQ list
  const faqItems = t('faq.list') || [];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FFFDF7]">
      {/* Background glowing sphere */}
      <div className="absolute left-[5%] top-[10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold uppercase tracking-widest text-darkgold">
            {t('faq.badge')}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-2">
            {t('faq.title')}
          </h2>
          <GoldDivider />
          <p className="font-poppins text-sm sm:text-base text-black/70">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion container */}
        <div className="w-full">
          <Accordion items={faqItems.map(item => ({ question: item.q, answer: item.a }))} />
        </div>

      </div>
    </section>
  );
}
