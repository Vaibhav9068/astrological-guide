import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from './ui/Button';
import logoImg from '../../images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Set scrolled state for background glassmorphism
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Determine active section based on current scroll position
      const scrollPosition = window.scrollY;
      let currentSection = 'home';

      for (const link of navLinks) {
        const sectionId = link.href.slice(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 140; // Offset for sticky navbar + safety margin
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set active section on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-white/90 backdrop-blur-md border-b border-darkgold/15 shadow-[0_2px_15px_rgba(109,26,26,0.03)]'
          : 'py-5 bg-white/70 backdrop-blur-md border-b border-darkgold/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img src={logoImg} alt="Sanjay Uniyal Logo" className="w-10 h-10 rounded-full object-cover border border-darkgold/30 group-hover:border-primary transition-all duration-300" />
            <div className="flex flex-col text-left">
              <span className="font-cinzel font-bold text-base sm:text-lg tracking-wider text-maroon group-hover:text-black transition-colors duration-300">
                Sanjay Uniyal
              </span>
              <span className="text-[9px] uppercase tracking-widest text-darkgold font-poppins font-bold">
                Astrological Guide
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-poppins text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 relative group ${
                      isActive ? 'text-maroon font-extrabold' : 'text-black/75 hover:text-maroon'
                    }`}
                  >
                    {t(`navbar.${sectionId}`)}
                    <span className={`absolute bottom-[-4px] left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </a>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 border-l border-darkgold/20 pl-4">
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2.5 py-1 text-[10px] font-poppins font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'hi'
                    ? 'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-[#6D1A1A] border border-[#D4AF37] shadow-xs'
                    : 'bg-transparent text-[#B8860B] border border-[#D4AF37]/35 hover:border-[#D4AF37] hover:text-[#6D1A1A]'
                }`}
              >
                हिन्दी
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-[10px] font-poppins font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-[#6D1A1A] border border-[#D4AF37] shadow-xs'
                    : 'bg-transparent text-[#B8860B] border border-[#D4AF37]/35 hover:border-[#D4AF37] hover:text-[#6D1A1A]'
                }`}
              >
                EN
              </button>
            </div>

            <Button href="#contact" variant="primary">
              {t('navbar.book_appointment')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-maroon p-2 rounded-lg hover:bg-bg-cream/50 transition-colors duration-300 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] bg-white/95 backdrop-blur-md border-b border-darkgold/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col items-center">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`w-full text-center py-2.5 font-cinzel text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#6D1A1A] text-[#FFF8E8] border border-[#D4AF37]/45 shadow-sm' 
                    : 'text-black/85 hover:text-maroon hover:bg-bg-cream/40'
                }`}
              >
                {t(`navbar.${sectionId}`)}
              </a>
            );
          })}

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-2.5 py-3 border-t border-darkgold/10 w-full justify-center">
            <button
              onClick={() => {
                setLanguage('hi');
                setIsOpen(false);
              }}
              className={`px-4 py-1.5 text-xs font-poppins font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                language === 'hi'
                  ? 'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-[#6D1A1A] border border-[#D4AF37] shadow-xs'
                  : 'bg-transparent text-[#B8860B] border border-[#D4AF37]/35'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => {
                setLanguage('en');
                setIsOpen(false);
              }}
              className={`px-4 py-1.5 text-xs font-poppins font-bold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                language === 'en'
                  ? 'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-[#6D1A1A] border border-[#D4AF37] shadow-xs'
                  : 'bg-transparent text-[#B8860B] border border-[#D4AF37]/35'
              }`}
            >
              EN
            </button>
          </div>

          <div className="pt-2 w-full flex justify-center">
            <Button href="#contact" variant="primary" onClick={() => setIsOpen(false)} className="w-full max-w-xs">
              {t('navbar.book_appointment')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
