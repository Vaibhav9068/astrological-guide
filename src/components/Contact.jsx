import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import Card from './ui/Card';
import GoldDivider from './ui/GoldDivider';

export default function Contact() {
  const { t } = useLanguage();
  
  const phoneNumber = '+918383941616';
  const displayPhone = '+91 83839 41616';
  
  // URL Pre-filled WhatsApp Message from active translation
  const whatsappMessage = t('contact.btn_whatsapp_msg') || 'Hello Pandit Ji,\nI would like to book an astrology consultation appointment.';
  const encodedMsg = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/918383941616?text=${encodedMsg}`;
  
  // Google Maps Links
  const mapEmbedUrl = 'https://maps.google.com/maps?q=Lane%20No.%2005%2C%20Near%20THDC%20Colony%2C%20Nehru%20Gram%2C%20Rishikesh%2C%20Uttarakhand%20%E2%80%93%20249201&t=&z=15&ie=UTF8&iwloc=&output=embed';
  const mapNavUrl = 'https://www.google.com/maps/search/?api=1&query=Pandit+Sanjay+Uniyal+Lane+No+05+Near+THDC+Colony+Nehru+Gram+Rishikesh+Uttarakhand+249201';

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#FFF8E8]/40">
      {/* Background ambient blurs */}
      <div className="absolute right-[-150px] top-1/4 w-[350px] h-[350px] rounded-full bg-[#6D1A1A]/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-[-150px] bottom-1/4 w-[350px] h-[350px] rounded-full bg-[#D4AF37]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="font-poppins text-xs font-bold uppercase tracking-widest text-[#6A4A1C]">
            {t('contact.badge')}
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#6D1A1A] mt-2">
            {t('contact.title')}
          </h2>
          <GoldDivider />
          <p className="font-poppins text-sm sm:text-base text-[#4A3A2A]/90 max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Premium Appointment booking Card */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <Card 
              glass={true} 
              hoverEffect={false} 
              className="flex flex-col justify-between p-8 sm:p-10 rounded-[24px] bg-white/80 backdrop-blur-md border border-[#D4AF37]/30 shadow-[0_10px_35px_rgba(109,26,26,0.03)] h-full text-left"
            >
              <div>
                {/* Top Badge */}
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#6D1A1A]/5 border border-[#D4AF37]/35 w-fit mb-6">
                  <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-[#6D1A1A]">
                    {t('contact.appt_badge')}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#6D1A1A] mb-4">
                  {t('contact.card_title')}
                </h3>

                {/* Description */}
                <p className="font-poppins text-xs sm:text-sm text-[#4A3A2A]/85 leading-relaxed mb-8">
                  {t('contact.card_desc')}
                </p>

                {/* Three Premium Info Cards */}
                <div className="space-y-4 mb-8">
                  
                  {/* Card 1: Call info */}
                  <div className="p-4 rounded-2xl border border-[#D4AF37]/20 bg-white/40 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#6D1A1A]/10 flex items-center justify-center text-[#6D1A1A] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] text-[#6A4A1C] font-poppins uppercase tracking-widest font-bold">
                        {t('contact.label_call')}
                      </div>
                      <a href={`tel:${phoneNumber}`} className="font-cinzel font-extrabold text-sm sm:text-base text-[#2B1A0A] hover:text-[#6D1A1A] transition-colors duration-300">
                        {displayPhone}
                      </a>
                    </div>
                  </div>

                  {/* Card 2: WhatsApp Info */}
                  <div className="p-4 rounded-2xl border border-[#D4AF37]/20 bg-white/40 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[9px] text-[#6A4A1C] font-poppins uppercase tracking-widest font-bold">
                        {t('contact.label_whatsapp')}
                      </div>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-cinzel font-extrabold text-sm sm:text-base text-[#2B1A0A] hover:text-green-600 transition-colors duration-300">
                        {displayPhone}
                      </a>
                      <p className="text-[10px] text-green-700/80 font-poppins font-medium mt-0.5">
                        {t('contact.whatsapp_working_hours')}
                      </p>
                    </div>
                  </div>

                  {/* Card 3: Consultation Hours */}
                  <div className="p-4 rounded-2xl border border-[#D4AF37]/20 bg-white/40 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#6D1A1A]/10 flex items-center justify-center text-[#6D1A1A] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] text-[#6A4A1C] font-poppins uppercase tracking-widest font-bold">
                        {t('contact.label_hours')}
                      </div>
                      <div className="font-poppins text-xs sm:text-sm text-[#2B1A0A] font-bold">
                        {t('contact.hours_value')}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Two Large CTA Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto pt-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="w-full text-center px-6 py-4 text-xs sm:text-sm rounded-full font-bold font-cinzel tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 border-2 border-[#D4AF37] hover:border-[#6D1A1A] text-[#6D1A1A] hover:bg-[#D4AF37]/10 shadow-xs hover:shadow-md cursor-pointer"
                >
                  <Phone className="w-4 h-4" /> {t('contact.btn_call')}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-6 py-4 text-xs sm:text-sm rounded-full font-bold font-cinzel tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 bg-[#6D1A1A] hover:bg-[#521313] text-[#FFF8E8] border border-[#D4AF37]/30 shadow-md hover:shadow-xl cursor-pointer"
                >
                  <FaWhatsapp className="w-4.5 h-4.5 text-green-400" /> {t('contact.btn_whatsapp')}
                </a>
              </div>
            </Card>
          </div>

          {/* RIGHT SIDE: Map and Address card */}
          <div className="lg:col-span-6 flex flex-col h-full gap-6">
            
            {/* Map Frame Card */}
            <div className="border border-[#D4AF37]/35 rounded-[24px] overflow-hidden shadow-[0_10px_35px_rgba(109,26,26,0.02)] h-72 lg:h-[340px] relative select-none">
              <iframe
                title="Pandit Sanjay Uniyal Location Map"
                src={mapEmbedUrl}
                className="w-full h-full border-0 bg-[#FFF8E8]/10"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Location Details Card */}
            <Card 
              glass={true} 
              hoverEffect={false} 
              className="flex flex-col justify-between p-6 sm:p-8 rounded-[24px] bg-white/80 backdrop-blur-md border border-[#D4AF37]/30 shadow-[0_10px_35px_rgba(109,26,26,0.03)] flex-1 text-left"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#6D1A1A]/10 flex items-center justify-center text-[#6D1A1A] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#6A4A1C] mb-2">
                    {t('contact.office_label')}
                  </h4>
                  <div className="font-poppins text-sm sm:text-base font-bold text-[#6D1A1A] mb-1">
                    {t('contact.office_name')}
                  </div>
                  <address className="not-italic font-poppins text-xs sm:text-sm text-[#4A3A2A]/90 leading-relaxed space-y-0.5">
                    <p>{t('contact.office_street')}</p>
                    <p>{t('contact.office_colony')}</p>
                    <p>{t('contact.office_area')}</p>
                    <p>{t('contact.office_city')}</p>
                    <p className="font-bold text-[#6A4A1C]">{t('contact.office_country')}</p>
                  </address>
                </div>
              </div>

              {/* View on Google Maps Button */}
              <div className="mt-auto">
                <a
                  href={mapNavUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-8 py-3.5 text-xs sm:text-sm rounded-full font-bold font-cinzel tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-white border border-[#D4AF37]/50 shadow-md hover:brightness-110 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" /> {t('contact.btn_maps')}
                </a>
              </div>
            </Card>

          </div>

        </div>

      </div>
    </section>
  );
}
