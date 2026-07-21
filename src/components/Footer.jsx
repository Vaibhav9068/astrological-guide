import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import logoImg from '../../images/logo.png';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerServices = t('footer.services_list') || [];

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-8 relative overflow-hidden border-t border-darkgold/20">
      {/* Decorative stars background */}
      <div className="absolute inset-0 bg-[radial-gradient(#C89B00_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Sanjay Uniyal Logo" className="w-10 h-10 rounded-full object-cover border border-darkgold/30" />
              <div className="flex flex-col">
                <span className="font-cinzel font-bold text-lg tracking-wider text-primary">
                  Sanjay Uniyal
                </span>
                <span className="text-[9px] uppercase tracking-widest text-darkgold font-poppins font-bold">
                  Astrological Guide
                </span>
              </div>
            </div>
            <p className="font-poppins text-xs sm:text-sm text-white/60 leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61588729704302"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@AstroDaily01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/astrosanjayuniyal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center cursor-pointer"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-primary border-l-2 border-primary pl-3">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-2.5 font-poppins text-xs sm:text-sm text-white/60">
              <li>
                <a href="#home" className="hover:text-primary transition-colors duration-300">{t('navbar.home')}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors duration-300">{t('navbar.about')}</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors duration-300">{t('navbar.services')}</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors duration-300">{t('navbar.pricing')}</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors duration-300">{t('navbar.testimonials')}</a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-primary border-l-2 border-primary pl-3">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2.5 font-poppins text-xs sm:text-sm text-white/60">
              {footerServices.map((service, sIdx) => (
                <li key={sIdx}>
                  <a href="#services" className="hover:text-primary transition-colors duration-300">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-sm font-bold uppercase tracking-wider text-primary border-l-2 border-primary pl-3">
              {t('contact.badge')}
            </h4>
            <ul className="space-y-3 font-poppins text-xs sm:text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+918383941616" className="hover:text-primary transition-colors">
                  +91 83839 41616
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-4 h-4 text-green-500 shrink-0" />
                <a href="https://wa.me/918383941616" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  +91 83839 41616
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:astrosanjayuniyal@gmail.com" className="hover:text-primary transition-colors">
                  astrosanjayuniyal@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {t('contact.office_street')}, {t('contact.office_colony')}, {t('contact.office_area')}, {t('contact.office_city')}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-poppins text-white/40">
          <div>
            © {currentYear} {t('footer.copyright')}
          </div>
          
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-primary transition-colors duration-300">{t('footer.privacy')}</a>
            <a href="#terms" className="hover:text-primary transition-colors duration-300">{t('footer.terms')}</a>
          </div>

          {/* Scroll to Top button */}
          <button
            onClick={handleScrollTop}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary hover:text-black border border-white/10 hover:border-primary transition-all duration-300 flex items-center justify-center focus:outline-none cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
