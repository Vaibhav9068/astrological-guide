import React from 'react';
import { Star, Shield, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import GoldDivider from './ui/GoldDivider';
import Card from './ui/Card';

export default function PrivacyPolicy() {
  const { language, t } = useLanguage();
  
  // Dynamic updated date text
  const lastUpdatedText = language === 'hi' ? '२२ जुलाई २०२६' : 'July 22, 2026';

  const sec1List = t('privacy_page.sec1_list') || [];
  const sec2List = t('privacy_page.sec2_list') || [];

  const sections = [
    {
      id: '1',
      title: t('privacy_page.sec1_title'),
      content: (
        <div className="space-y-3">
          <p className="font-poppins text-sm text-[#4A3A2A]/90 leading-relaxed">
            {t('privacy_page.sec1_desc')}
          </p>
          <ul className="space-y-2.5 font-poppins text-sm text-[#2B1A0A]/95 pl-4">
            {sec1List.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-current shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: '2',
      title: t('privacy_page.sec2_title'),
      content: (
        <div className="space-y-3">
          <p className="font-poppins text-sm text-[#4A3A2A]/90 leading-relaxed">
            {t('privacy_page.sec2_desc')}
          </p>
          <ul className="space-y-2.5 font-poppins text-sm text-[#2B1A0A]/95 pl-4">
            {sec2List.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-current shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: '3',
      title: t('privacy_page.sec3_title'),
      content: (
        <p className="font-poppins text-sm text-[#4A3A2A]/90 leading-relaxed">
          {t('privacy_page.sec3_desc')}
        </p>
      ),
    },
    {
      id: '4',
      title: t('privacy_page.sec4_title'),
      content: (
        <p className="font-poppins text-sm text-[#4A3A2A]/90 leading-relaxed">
          {t('privacy_page.sec4_desc')}
        </p>
      ),
    },
    {
      id: '5',
      title: t('privacy_page.sec5_title'),
      content: (
        <p className="font-poppins text-sm text-[#4A3A2A]/90 leading-relaxed">
          {t('privacy_page.sec5_desc')}
        </p>
      ),
    },
    {
      id: '6',
      title: t('privacy_page.sec6_title'),
      content: (
        <div className="space-y-4 font-poppins text-sm text-[#4A3A2A]/90">
          <p className="font-semibold text-[#6D1A1A]">{t('contact.office_name')}</p>
          <div className="space-y-1.5">
            <p><strong>{language === 'hi' ? 'फ़ोन:' : 'Phone:'}</strong> <a href="tel:+918383941616" className="text-[#6D1A1A] hover:underline">+91 83839 41616</a></p>
            <p><strong>{language === 'hi' ? 'ईमेल:' : 'Email:'}</strong> <a href="mailto:astrosanjayuniyal@gmail.com" className="text-[#6D1A1A] hover:underline">astrosanjayuniyal@gmail.com</a></p>
            <p className="leading-relaxed">
              <strong>{language === 'hi' ? 'कार्यालय का पता:' : 'Location:'}</strong><br />
              {t('contact.office_street')},<br />
              {t('contact.office_colony')},<br />
              {t('contact.office_area')}, {t('contact.office_city')},<br />
              {t('contact.office_country')}
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9EE] pt-28 pb-16 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] aspect-square rounded-full bg-gradient-to-tr from-[#6D1A1A]/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Sticky Breadcrumb */}
      <div className="sticky top-[68px] lg:top-[80px] z-30 bg-[#FFF9EE]/90 backdrop-blur-md border-b border-[#D4AF37]/15 py-3 mb-12 shadow-xxs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 font-poppins text-xs text-[#6A4A1C]">
            <a href="#home" className="hover:text-[#6D1A1A] transition-colors">{t('navbar.home')}</a>
            <span className="text-[#D4AF37]/60">/</span>
            <span className="text-[#6D1A1A] font-bold">{t('privacy_page.title')}</span>
          </div>
          <a
            href="#home"
            className="font-cinzel text-[10px] font-bold text-[#6D1A1A] hover:text-[#B8860B] transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {t('privacy_page.back_to_home')}
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Page Hero */}
        <div className="text-center mb-12">
          <div className="w-12 h-12 rounded-full bg-[#6D1A1A]/5 border border-[#D4AF37]/35 flex items-center justify-center text-[#D4AF37] mx-auto mb-4 animate-pulse-slow">
            <Shield className="w-5 h-5" />
          </div>
          <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6D1A1A] leading-tight">
            {t('privacy_page.title')}
          </h1>
          <GoldDivider />
          <p className="font-poppins text-xs sm:text-sm text-[#6A4A1C] uppercase tracking-widest font-bold">
            {t('privacy_page.last_updated')}: {lastUpdatedText}
          </p>
          <p className="font-poppins text-sm sm:text-base text-[#4A3A2A]/90 mt-4 max-w-2xl mx-auto leading-relaxed">
            {t('privacy_page.subtitle')}
          </p>
        </div>

        {/* Content Card Container */}
        <Card
          glass={true}
          hoverEffect={false}
          className="border border-[#D4AF37]/35 p-6 sm:p-10 rounded-[24px] bg-white/90 shadow-[0_12px_40px_rgba(109,26,26,0.03)] space-y-8 text-left"
        >
          {sections.map((section) => (
            <div key={section.id} className="space-y-3">
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#6D1A1A] border-b border-[#D4AF37]/20 pb-2">
                {section.title}
              </h3>
              {section.content}
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
