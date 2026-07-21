import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import GoldDivider from './ui/GoldDivider';

export default function About() {
  const { t } = useLanguage();

  const timelineItems = [
    {
      year: '1995',
      title: t('about.milestone_1995_title'),
      desc: t('about.milestone_1995_desc'),
    },
    {
      year: '2005',
      title: t('about.milestone_2005_title'),
      desc: t('about.milestone_2005_desc'),
    },
    {
      year: '2015',
      title: t('about.milestone_2015_title'),
      desc: t('about.milestone_2015_desc'),
    },
    {
      year: 'Today',
      title: t('about.milestone_today_title'),
      desc: t('about.milestone_today_desc'),
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#FFFDF7]">
      {/* Background decoration */}
      <div className="absolute right-[-100px] top-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold uppercase tracking-widest text-[#6A4A1C]">
            {t('about.badge')}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#6D1A1A] mt-2">
            {t('about.title')}
          </h2>
          <GoldDivider />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Custom Highlight Summary Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <div className="w-full max-w-[340px] border border-[#D4AF37]/30 rounded-3xl p-8 bg-white/90 backdrop-blur-md shadow-[0_15px_40px_rgba(109,26,26,0.03)] flex flex-col gap-6 text-center select-none hover:border-[#D4AF37]/60 hover:shadow-[0_20px_50px_rgba(109,26,26,0.06)] transition-all duration-500 transform hover:-translate-y-1">
              
              {/* Highlight 1 */}
              <div>
                <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#6D1A1A] tracking-wider">
                  {t('about.card_exp_years')}
                </div>
                <div className="font-poppins text-xxs sm:text-xs font-semibold uppercase tracking-widest text-[#6A4A1C] mt-1">
                  {t('about.card_exp_label')}
                </div>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto" />

              {/* Highlight 2 */}
              <div>
                <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#B8860B] tracking-wider">
                  {t('about.card_clients_count')}
                </div>
                <div className="font-poppins text-xxs sm:text-xs font-semibold uppercase tracking-widest text-[#6A4A1C] mt-1">
                  {t('about.card_clients_label')}
                </div>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto" />

              {/* Highlight 3 */}
              <div>
                <div className="font-cinzel text-base sm:text-lg font-bold text-[#6D1A1A] tracking-wide">
                  {t('about.card_personal_title')}
                </div>
                <div className="font-poppins text-xs text-[#4A3A2A]/85 mt-0.5">
                  {t('about.card_personal_label')}
                </div>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto" />

              {/* Highlight 4 */}
              <div>
                <div className="font-cinzel text-base sm:text-lg font-bold text-[#B8860B] tracking-wide">
                  {t('about.card_appointments_title')}
                </div>
                <div className="font-poppins text-xs text-[#4A3A2A]/85 mt-0.5">
                  {t('about.card_appointments_label')}
                </div>
              </div>
            </div>

            {/* Subtle subtext */}
            <div className="mt-8 text-center max-w-xs">
              <p className="font-cinzel italic text-xs text-[#6D1A1A] font-semibold leading-relaxed">
                {t('about.quote')}
              </p>
              <p className="font-poppins text-[10px] uppercase tracking-widest text-[#B8860B] mt-2 font-bold">
                {t('about.quote_author')}
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Timeline */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Description */}
            <p className="font-poppins text-sm sm:text-base text-[#4A3A2A] leading-relaxed text-left">
              {t('about.description')}
            </p>

            {/* Timeline */}
            <div className="relative border-l-2 border-[#6D1A1A]/20 pl-6 sm:pl-8 ml-3 space-y-10 text-left">
              {timelineItems.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline circle node */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#6D1A1A] flex items-center justify-center group-hover:bg-[#6D1A1A] group-hover:scale-110 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] group-hover:bg-white" />
                  </div>

                  {/* Year Bubble */}
                  <div className="inline-block px-3.5 py-1 rounded-full bg-[#6D1A1A]/5 border border-[#D4AF37]/35 text-xs font-cinzel font-bold text-[#6D1A1A] mb-2 shadow-xxs">
                    {item.year}
                  </div>

                  {/* Title & Desc */}
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-black group-hover:text-[#6D1A1A] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="font-poppins text-xs sm:text-sm text-[#4A3A2A]/85 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
