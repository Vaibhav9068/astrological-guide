import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Phone, Calendar, Star } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import astroImage from '../../images/astroimage.png';

export default function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const { t } = useLanguage();

  // GSAP Animations
  useGSAP(() => {
    // 1. Hero Image Container: Fade + Scale
    gsap.fromTo('.hero-image-wrapper', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' }
    );

    // 2. Halo and Mandala: Slow rotate/pulse
    gsap.fromTo('.hero-halo-glow', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
    );

    // 3. Heading: Fade Up
    gsap.fromTo('.hero-heading', 
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.1 }
    );

    // 4. Badges, Subheadings, Paragraph: Fade Up Stagger
    gsap.fromTo('.hero-text-item', 
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
    );

    // 5. Cards: Stagger animation
    gsap.fromTo('.hero-card', 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.12, ease: 'power2.out', delay: 0.7 }
    );

    // 6. Buttons: Fade Up Stagger
    gsap.fromTo('.hero-btn', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 1.1 }
    );
  }, { scope: heroRef });

  // Floating Golden Particles Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -(Math.random() * 0.25 + 0.08), // Slow floating
        opacity: Math.random() * 0.55 + 0.15,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`; // Gold particles
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
          p.opacity = Math.random() * 0.55 + 0.15;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-44 pb-12 lg:pb-0 overflow-hidden bg-[#FFF8E8]"
    >
      {/* Background Layer 1: Soft Golden Radial Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-br from-[#D4AF37]/15 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[45%] aspect-square rounded-full bg-gradient-to-tr from-[#6D1A1A]/8 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square rounded-full bg-radial from-[#FFFDF9] via-transparent to-transparent opacity-80 pointer-events-none z-0" />

      {/* Background Layer 2: Subtle luxury texture (gold dust/dots grid) */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.4px,transparent_0.4px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none z-0" />

      {/* Background Layer 3: Rotating Zodiac Watermark */}
      <div className="absolute w-[800px] h-[800px] -right-48 -bottom-48 opacity-[0.025] text-[#B8860B] animate-spin-slow pointer-events-none select-none z-0" style={{ animationDuration: '180s' }}>
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="41" />
          <circle cx="50" cy="50" r="34" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="2"
              x2="50"
              y2="50"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
          <path d="M 50 9 L 55 18 L 62 12 M 18 50 L 26 42 L 32 48 M 80 50 L 72 58 M 50 90 L 45 78 L 52 82" />
        </svg>
      </div>

      {/* Background Layer 4: Subtle Temple Silhouette Watermark */}
      <div className="absolute bottom-0 right-1/4 w-[240px] h-[180px] opacity-[0.035] text-[#B8860B] pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 120 100" fill="currentColor">
          <path d="M 60 10 L 63 20 L 57 20 Z M 60 20 L 60 38 M 54 38 L 66 38 L 64 50 L 56 50 Z M 48 50 L 72 50 L 76 80 L 44 80 Z M 38 80 L 82 80 L 85 100 L 35 100 Z" />
        </svg>
      </div>

      {/* Background Layer 5: Slow Floating Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Layout Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center lg:items-start">
          
          {/* LEFT (45%): Image & Graphics - Appears First on Mobile */}
          <div className="lg:col-span-5 order-1 lg:order-1 flex justify-center relative select-none z-20">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] aspect-[4/5] flex items-end justify-center hero-image-wrapper">
              
              {/* Radial Glow behind Image */}
              <div className="absolute w-[90%] aspect-square rounded-full bg-[#D4AF37]/15 blur-[40px] sm:blur-[60px] top-[10%] left-1/2 -translate-x-1/2 pointer-events-none z-0 hero-halo-glow" />

              {/* Soft Golden Circular Halo */}
              <div className="absolute w-[80%] aspect-square rounded-full border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent top-[15%] left-1/2 -translate-x-1/2 z-0 animate-pulse-slow hero-halo-glow" />

              {/* Elegant Mandala Pattern */}
              <div className="absolute w-[95%] aspect-square top-[7%] left-1/2 -translate-x-1/2 opacity-[0.11] animate-spin-slow z-0 text-[#B8860B] pointer-events-none hero-halo-glow" style={{ animationDuration: '90s' }}>
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.4">
                  <circle cx="50" cy="50" r="48" />
                  <circle cx="50" cy="50" r="44" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="38" />
                  <circle cx="50" cy="50" r="32" />
                  {[...Array(24)].map((_, i) => (
                    <path
                      key={i}
                      d="M 50 50 L 50 3 C 52 8, 48 8, 50 3"
                      transform={`rotate(${i * 15} 50 50)`}
                      strokeWidth="0.25"
                    />
                  ))}
                  {[...Array(12)].map((_, i) => (
                    <circle
                      key={i}
                      cx="50"
                      cy="15"
                      r="1.8"
                      transform={`rotate(${i * 30} 50 50)`}
                      fill="currentColor"
                    />
                  ))}
                </svg>
              </div>

              {/* Temple Silhouette Watermark behind Image */}
              <div className="absolute bottom-[20%] left-[12%] w-[100px] h-[80px] opacity-[0.06] text-[#B8860B] pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 50 5 L 52 12 L 48 12 Z M 50 12 L 50 30 L 55 50 L 45 50 Z M 40 50 L 60 50 L 63 80 L 37 80 Z" />
                </svg>
              </div>

              {/* Astrologer Portrait - Dimmed down to 80% opacity and slightly lower contrast to blend perfectly with backdrops */}
              <img
                src={astroImage}
                alt="Pandit Sanjay Uniyal"
                className="w-[95%] h-auto object-contain relative z-20 opacity-80 contrast-[0.92] saturate-[0.88] drop-shadow-[0_20px_50px_rgba(109,26,26,0.22)] transform translate-y-6 lg:translate-y-12"
              />

              {/* Little Floating Golden Particles around image */}
              <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] blur-[1px] opacity-70 top-1/4 left-1/4 animate-bounce" style={{ animationDuration: '6s' }} />
                <div className="absolute w-3 h-3 rounded-full bg-[#B8860B] blur-[2px] opacity-50 bottom-1/3 right-1/4 animate-bounce" style={{ animationDuration: '9s' }} />
                <div className="absolute w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-80 top-1/2 right-[10%] animate-pulse" style={{ animationDuration: '4s' }} />
              </div>

            </div>
          </div>

          {/* RIGHT (55%): Content & CTAs - Starts at the exact same horizontal position as the image's top boundary */}
          <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col items-center text-center relative z-20 w-full lg:pt-12">
            
            {/* Small Premium Badge */}
            <div className="hero-text-item inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6D1A1A]/5 border border-[#D4AF37]/35 w-fit mx-auto mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
              <span className="text-[10px] sm:text-xs font-poppins font-bold uppercase tracking-widest text-[#6D1A1A]">
                {t('hero.badge')}
              </span>
            </div>

            {/* Large Heading */}
            <h1 className="hero-heading font-cinzel text-5xl sm:text-6xl lg:text-7.5xl font-extrabold text-[#6D1A1A] leading-tight mb-4 tracking-wide text-center">
              {t('hero.pandit')} <br />
              {t('hero.name')}
            </h1>

            {/* Sub Heading */}
            <h2 className="hero-text-item font-cinzel text-base sm:text-xl md:text-2xl text-[#6A4A1C] font-semibold tracking-widest mb-5 text-center">
              {t('hero.subtitle')}
            </h2>

            {/* Sanskrit Quote Highlight Panel - Maa Baglamukhi Maha Mantra */}
            <div className="hero-text-item my-6 p-4.5 rounded-2xl bg-[#6D1A1A]/5 border border-[#D4AF37]/30 shadow-[0_5px_15px_rgba(109,26,26,0.02)] max-w-2xl w-full">
              <p className="font-devanagari text-sm sm:text-base md:text-md lg:text-lg font-bold text-[#6D1A1A] leading-relaxed tracking-wider text-center">
                ॥ ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥
              </p>
              <span className="block text-center font-cinzel text-[10px] text-[#6A4A1C] uppercase tracking-widest mt-2 font-bold">
                {t('hero.mantra_subtitle')}
              </span>
            </div>

            {/* Description */}
            <p className="hero-text-item font-poppins text-xs sm:text-sm md:text-base text-[#4A3A2A] max-w-2xl mx-auto leading-relaxed mb-8 text-center">
              {t('hero.desc')}
            </p>

            {/* 4 Premium Glass Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full mb-10 mx-auto">
              
              <div className="hero-card bg-white/90 border border-[#D4AF37]/30 hover:border-[#D4AF37]/75 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(109,26,26,0.03)] hover:shadow-[0_15px_30px_rgb(109,26,26,0.08)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-[#6D1A1A]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Star className="w-4 h-4 fill-current text-[#D4AF37]" />
                </div>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#2B1A0A] text-center">
                  {t('hero.card_experience')}
                </span>
              </div>

              <div className="hero-card bg-white/90 border border-[#D4AF37]/30 hover:border-[#D4AF37]/75 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(109,26,26,0.03)] hover:shadow-[0_15px_30px_rgb(109,26,26,0.08)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-[#6D1A1A]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Star className="w-4 h-4 fill-current text-[#D4AF37]" />
                </div>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#2B1A0A] text-center">
                  {t('hero.card_clients')}
                </span>
              </div>

              <div className="hero-card bg-white/90 border border-[#D4AF37]/30 hover:border-[#D4AF37]/75 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(109,26,26,0.03)] hover:shadow-[0_15px_30px_rgb(109,26,26,0.08)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-[#6D1A1A]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Star className="w-4 h-4 fill-current text-[#D4AF37]" />
                </div>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#2B1A0A] text-center">
                  {t('hero.card_confidential')}
                </span>
              </div>

              <div className="hero-card bg-white/90 border border-[#D4AF37]/30 hover:border-[#D4AF37]/75 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-[0_8px_30px_rgb(109,26,26,0.03)] hover:shadow-[0_15px_30px_rgb(109,26,26,0.08)] transition-all duration-300 hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-[#6D1A1A]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Star className="w-4 h-4 fill-current text-[#D4AF37]" />
                </div>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#2B1A0A] text-center">
                  {t('hero.card_personalized')}
                </span>
              </div>

            </div>

            {/* 3 Large Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
              {/* Primary */}
              <a
                href="#contact"
                className="hero-btn w-full sm:w-auto text-center px-8 py-4 text-xs sm:text-sm rounded-full font-bold font-cinzel tracking-widest bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-white border border-[#D4AF37]/50 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group inline-flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                <Calendar className="w-4 h-4" /> {t('hero.btn_book')}
              </a>

              {/* Secondary (WhatsApp) */}
              <a
                href="https://wa.me/918383941616"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn w-full sm:w-auto text-center px-8 py-4 text-xs sm:text-sm rounded-full font-bold font-cinzel tracking-widest bg-[#6D1A1A] hover:bg-[#521313] text-[#FFF8E8] border border-[#D4AF37]/30 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4.5 h-4.5 text-green-400" /> {t('hero.btn_whatsapp')}
              </a>

              {/* Outline (Call Now) */}
              <a
                href="tel:+918383941616"
                className="hero-btn w-full sm:w-auto text-center px-8 py-4 text-xs sm:text-sm rounded-full font-bold font-cinzel tracking-widest border-2 border-[#D4AF37] hover:border-[#6D1A1A] text-[#6D1A1A] hover:bg-[#D4AF37]/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4.5 h-4.5" /> {t('hero.btn_call')}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
