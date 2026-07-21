import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Card from './ui/Card';
import GoldDivider from './ui/GoldDivider';

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { t } = useLanguage();

  // Load translated items directly from active language catalog
  const servicesList = t('services.items') || [];

  // Calculated circular coordinates for the 8 nodes (R = 36, center = 50,50)
  const nodes = [
    { x: 86, y: 50, angle: 0 },    // 1. Kundli
    { x: 75.5, y: 75.5, angle: 45 }, // 2. Career
    { x: 50, y: 86, angle: 90 },    // 3. Marriage
    { x: 24.5, y: 75.5, angle: 135 }, // 4. Business
    { x: 14, y: 50, angle: 180 },   // 5. Graha Dosha
    { x: 24.5, y: 24.5, angle: 225 }, // 6. Gemstone
    { x: 50, y: 14, angle: 270 },    // 7. Vastu
    { x: 75.5, y: 24.5, angle: 315 }, // 8. Spiritual
  ];

  if (servicesList.length === 0) return null;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-bg-cream/40">
      {/* Background soft glowing blur */}
      <div className="absolute left-[-150px] top-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold uppercase tracking-widest text-[#6A4A1C]">
            {t('services.badge')}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#6D1A1A] mt-2">
            {t('services.title')}
          </h2>
          <GoldDivider />
        </div>

        {/* Desktop diagrammatic visual structure */}
        <div className="hidden lg:grid grid-cols-12 gap-16 items-center min-h-[500px]">
          
          {/* LEFT: Cosmic Wheel SVG Diagram (50% area) */}
          <div className="col-span-6 flex justify-center relative select-none">
            <div className="w-full max-w-[440px] aspect-square relative flex items-center justify-center">
              
              {/* Spinning background circles */}
              <div className="absolute inset-0 rounded-full border border-[#D4AF37]/10 animate-spin-slow pointer-events-none" style={{ animationDuration: '100s' }} />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-[#D4AF37]/15 animate-spin-slow pointer-events-none" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />

              {/* SVG drawing connection lines and beams */}
              <svg className="absolute inset-0 w-full h-full text-[#D4AF37]/20 pointer-events-none" viewBox="0 0 100 100">
                {/* Connecting lines from center to nodes */}
                {nodes.map((node, idx) => (
                  <line
                    key={idx}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke="currentColor"
                    strokeWidth={activeIdx === idx ? '0.8' : '0.35'}
                    className={`transition-all duration-300 ${activeIdx === idx ? 'text-[#D4AF37]' : 'text-[#D4AF37]/20'}`}
                  />
                ))}

                {/* Animated beam to active node */}
                <line
                  x1="50"
                  y1="50"
                  x2={nodes[activeIdx].x}
                  y2={nodes[activeIdx].y}
                  stroke="#D4AF37"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  className="animate-pulse"
                />

                {/* Main outer ring */}
                <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.4" />
                <circle cx="50" cy="50" r="26" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 1" />
              </svg>

              {/* Center Sun/Mandala Node */}
              <div className="absolute w-20 h-20 rounded-full bg-[#6D1A1A] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.35)] flex items-center justify-center text-primary z-10">
                <svg className="w-8 h-8 text-[#FFF8E8] animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" />
                  <circle cx="12" cy="12" r="3.5" fill="#D4AF37" />
                </svg>
              </div>

              {/* 8 Outer Service Nodes */}
              {nodes.map((node, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveIdx(idx)}
                    onClick={() => setActiveIdx(idx)}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute w-12 h-12 rounded-full flex items-center justify-center font-cinzel text-xs font-bold transition-all duration-500 z-20 shadow-md ${
                      isActive
                        ? 'bg-[#6D1A1A] text-white border-2 border-[#D4AF37] scale-110 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                        : 'bg-white text-[#2B1A0A] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:scale-105'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                );
              })}

            </div>
          </div>

          {/* RIGHT: Detail Glass Card (50% area) */}
          <div className="col-span-6">
            <Card
              glass={true}
              hoverEffect={false}
              className="border border-[#D4AF37]/35 p-10 min-h-[340px] flex flex-col justify-center relative bg-white/95 overflow-hidden shadow-[0_15px_40px_rgba(109,26,26,0.03)]"
            >
              {/* Corner abstract decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none" />

              {/* Service Sanskrit Heading - Kept in Devanagari script for both languages */}
              <span className="font-devanagari text-sm font-bold text-[#B8860B] tracking-wide mb-2 block">
                {servicesList[activeIdx].sanskrit}
              </span>

              {/* Number Index */}
              <div className="font-cinzel text-[10px] font-bold text-[#6D1A1A] uppercase tracking-widest mb-3">
                Service 0{activeIdx + 1}
              </div>

              {/* Heading */}
              <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#6D1A1A] mb-5 tracking-wide">
                {servicesList[activeIdx].title}
              </h3>

              {/* Description */}
              <p className="font-poppins text-sm sm:text-base text-[#4A3A2A]/90 leading-relaxed">
                {servicesList[activeIdx].desc}
              </p>
            </Card>
          </div>

        </div>

        {/* Mobile/Tablet Fallback sequential diagrammatic cards */}
        <div className="lg:hidden space-y-6 relative pl-8 ml-2 border-l border-[#D4AF37]/30 text-left">
          {servicesList.map((service, idx) => (
            <div key={idx} className="relative group">
              {/* Left connector dot */}
              <div className="absolute -left-[41px] top-4 w-6 h-6 rounded-full bg-white border border-[#D4AF37] flex items-center justify-center group-hover:bg-[#6D1A1A] transition-all duration-300">
                <span className="text-[10px] font-cinzel font-bold text-[#6D1A1A] group-hover:text-white">
                  {idx + 1}
                </span>
              </div>

              {/* Card content */}
              <Card
                className="bg-white border border-[#D4AF37]/20 p-6 shadow-sm hover:border-[#D4AF37]/50"
                hoverEffect={true}
              >
                <span className="font-devanagari text-xxs font-bold text-[#B8860B] tracking-wide mb-1 block">
                  {service.sanskrit}
                </span>
                <h3 className="font-cinzel text-lg font-bold text-[#6D1A1A] mb-2.5">
                  {idx + 1}. {service.title}
                </h3>
                <p className="font-poppins text-xs sm:text-sm text-[#4A3A2A]/90 leading-relaxed">
                  {service.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
