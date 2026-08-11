import React, { useState } from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { Heart, Users, Sparkles, Leaf, ShieldCheck, HeartHandshake, X, ZoomIn, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onOpenDonateModal: () => void;
  onOpenVolunteer: () => void;
  language: 'hi' | 'en';
}

export const Hero: React.FC<HeroProps> = ({
  onOpenDonateModal,
  onOpenVolunteer,
  language
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f7f2] via-[#f8faf7] to-white py-6 lg:py-10 border-b border-emerald-100">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* TOP FRONT MAIN BANNER POSTER IMAGE - Primary Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border-2 sm:border-4 border-emerald-700/20 bg-emerald-950/10 group-hover:border-emerald-600/40 transition duration-300">
            {/* Banner Image */}
            <img
              src="/assets/main_banner.jpg"
              alt="Karuna Seva Trust Official Banner"
              className="w-full h-auto object-cover object-center transform group-hover:scale-[1.008] transition duration-500"
              loading="eager"
              fetchPriority="high"
            />

            {/* Click to expand overlay button badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-900/85 hover:bg-emerald-900 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg border border-white/20 transition">
              <ZoomIn className="w-4 h-4 text-emerald-300" />
              <span>{language === 'hi' ? 'बड़ा करके देखें (Full Banner)' : 'View Full Banner'}</span>
            </div>

            {/* Subtle bottom gradient shadow overlay */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-emerald-950/30 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Content Section Below Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Left Column: Heading, Tagline & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/90 border border-emerald-200 text-emerald-900 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>पंजीकृत जनसेवा न्यास (Registered Public Trust)</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-950 tracking-tight leading-[1.15] font-['Noto_Sans_Devanagari'] drop-shadow-xs">
                {language === 'hi' ? TRUST_INFO.nameHi : TRUST_INFO.nameEn}
              </h1>

              {/* Tagline Line Decoration */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-amber-600 text-sm sm:text-base font-bold py-1">
                <span className="h-0.5 w-8 bg-amber-500 rounded-full"></span>
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-800 font-bold tracking-wide">
                  {language === 'hi' ? TRUST_INFO.taglineHi : TRUST_INFO.taglineEn}
                </span>
                <Leaf className="w-4 h-4 text-emerald-600" />
                <span className="h-0.5 w-8 bg-amber-500 rounded-full"></span>
              </div>
            </div>

            {/* Main Subtitle Description */}
            <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {language === 'hi' ? TRUST_INFO.heroSubtitleHi : TRUST_INFO.heroSubtitleEn}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Donate Button */}
              <button
                onClick={onOpenDonateModal}
                aria-haspopup="dialog"
                className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-[#D4AF37] hover:from-emerald-800 hover:to-[#C5A028] text-white font-extrabold text-lg px-8 py-3.5 rounded-full shadow-lg shadow-emerald-800/25 hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer group transform active:scale-95 min-h-[44px]"
              >
                <Heart className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>{language === 'hi' ? 'दान करें' : 'Donate Now'}</span>
              </button>

              {/* Volunteer Button */}
              <button
                onClick={onOpenVolunteer}
                className="bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-600/40 font-extrabold text-lg px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2.5 cursor-pointer group min-h-[44px]"
              >
                <Users className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>{language === 'hi' ? 'स्वयंसेवक बनें' : 'Join Us'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Quick Trust Badges & Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Info Box */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-emerald-100 shadow-xl space-y-4">
              <div className="flex items-center gap-3 border-b border-emerald-50 pb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-sm sm:text-base font-['Noto_Sans_Devanagari']">
                    {language === 'hi' ? 'सेवा ही संकल्प, करुणा ही हमारा धर्म' : 'Service is Resolution, Compassion is Duty'}
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold">पर्यावरण • भोजन सेवा • शिक्षा • विधि सहायता • मानव सेवा</p>
                </div>
              </div>

              {/* Contact Info Pill List */}
              <div className="space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-mono font-bold">+91 79053 57033</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-mono">Indo@karunasevatrust.com</span>
                </div>
                <div className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Gorakhpur, Uttar Pradesh, India</span>
                </div>
              </div>

              {/* Tax Exemption Tag */}
              <div className="bg-gradient-to-r from-emerald-900 to-green-900 text-white p-3.5 rounded-2xl flex items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="font-bold text-xs">80G TAX EXEMPTION</div>
                    <div className="text-[10px] text-emerald-200">100% पारदर्शी एवं आयकर छूट मान्य</div>
                  </div>
                </div>
                <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-1 rounded-md">80G Certified</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              src="/assets/main_banner.jpg"
              alt="Karuna Seva Trust Banner Full View"
              className="max-w-full max-h-[92vh] object-contain rounded-2xl shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

