import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Card from './ui/Card';
import GoldDivider from './ui/GoldDivider';

export default function Testimonials() {
  const { t } = useLanguage();
  
  // Load testimonials list dynamically
  const reviews = t('testimonials.list') || [];

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (reviews.length === 0) return;
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        ),
      6000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, reviews.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  if (reviews.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#FFFDF7]">
      {/* Background glowing lights */}
      <div className="absolute left-[-150px] top-1/3 w-[400px] h-[400px] rounded-full bg-maroon/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-150px] bottom-1/3 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold uppercase tracking-widest text-darkgold">
            {t('testimonials.badge')}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-2">
            {t('testimonials.title')}
          </h2>
          <GoldDivider />
          <p className="font-poppins text-sm sm:text-base text-black/70">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8">
          
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 animate-fade">
                  <Card 
                    glass={true}
                    hoverEffect={false}
                    className="relative border border-darkgold/20 p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[300px]"
                  >
                    {/* Quote Icon */}
                    <div className="w-14 h-14 rounded-full bg-maroon/5 flex items-center justify-center text-maroon/20 mb-6">
                      <Quote className="w-8 h-8 fill-current" />
                    </div>

                    {/* 5 Star Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-poppins text-sm sm:text-base md:text-lg text-black/85 leading-relaxed italic mb-8 max-w-2xl">
                      "{review.text}"
                    </p>

                    {/* Client details */}
                    <div>
                      <div className="font-cinzel font-bold text-sm sm:text-base text-black tracking-wide">
                        {review.name}
                      </div>
                      <div className="text-[11px] text-black/50 font-poppins tracking-wider uppercase mt-1">
                        {review.role}
                      </div>
                      <div className="text-[10px] text-maroon font-bold font-poppins tracking-widest uppercase bg-maroon/5 border border-maroon/10 rounded-full px-4 py-1 mt-3 w-fit mx-auto">
                        {review.service}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-10px] sm:left-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-darkgold/25 text-maroon hover:bg-maroon hover:text-white transition-all duration-300 flex items-center justify-center shadow-md focus:outline-none z-20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-[-10px] sm:right-[-30px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-darkgold/25 text-maroon hover:bg-maroon hover:text-white transition-all duration-300 flex items-center justify-center shadow-md focus:outline-none z-20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2.5 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  activeIndex === idx ? 'bg-maroon w-6' : 'bg-darkgold/40'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
