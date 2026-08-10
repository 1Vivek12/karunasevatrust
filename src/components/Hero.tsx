import React, { useState } from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { Heart, Users, Sparkles, Leaf, ShieldCheck, HeartHandshake, X, ZoomIn } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-[#f8faf7] to-white py-10 lg:py-16 border-b border-emerald-50">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side Content Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200/60 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>पंजीकृत जनसेवा न्यास (Registered Public Trust)</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-emerald-900 tracking-tight leading-[1.15] font-['Noto_Sans_Devanagari'] drop-shadow-xs">
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
            <p className="text-slate-700 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {language === 'hi' ? TRUST_INFO.heroSubtitleHi : TRUST_INFO.heroSubtitleEn}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Volunteer Button (Join) - Comes first */}
              <button
                onClick={onOpenVolunteer}
                className="bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-600/30 font-extrabold text-lg px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2.5 cursor-pointer group min-h-[44px]"
              >
                <Users className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>{language === 'hi' ? 'स्वयंसेवक बनें' : 'Join Us'}</span>
              </button>

              {/* Donate Button - Comes second */}
              <button
                onClick={onOpenDonateModal}
                aria-haspopup="dialog"
                className="bg-gradient-to-r from-emerald-700 via-emerald-800 to-[#D4AF37] hover:from-emerald-800 hover:to-[#C5A028] text-white font-extrabold text-lg px-8 py-3.5 rounded-full shadow-lg shadow-emerald-800/25 hover:shadow-xl transition-all flex items-center gap-2.5 cursor-pointer group transform active:scale-95 min-h-[44px]"
              >
                <Heart className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span>{language === 'hi' ? 'दान करें' : 'Donate Now'}</span>
              </button>
            </div>

            {/* Trust highlights bullet tags */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>80G आयकर छूट</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>100% पारदर्शी कार्य</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center lg:justify-start col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>सत्यापित गैर-सरकारी संगठन</span>
              </div>
            </div>

          </motion.div>

          {/* Right Side: Bento-Style Spotlight Image Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-12 gap-4"
          >
            {/* Main Founder Card - Clickable */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="col-span-12 md:col-span-8 relative overflow-hidden rounded-3xl bg-emerald-950/80 backdrop-blur-md border border-white/10 p-4 shadow-xl flex flex-col group cursor-pointer"
            >
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[16/10] border-2 border-[#D4AF37]/30 bg-emerald-950/20">
                {/* Fallback Background Pulse Skeleton */}
                <div className="absolute inset-0 bg-emerald-950/20 animate-pulse -z-10" />
                <img 
                  src="/assets/founder.jpg" 
                  alt="Founder of Karuna Seva Trust" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                {/* Zoom hint on hover */}
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-3 text-white space-y-1">
                <h3 className="font-extrabold text-lg font-['Noto_Sans_Devanagari'] tracking-wide">
                  {language === 'hi' ? 'करुणा सेवा न्यास प्रमुख' : 'Trust Chairperson'}
                </h3>
                <p className="text-xs text-emerald-300">
                  {language === 'hi' ? 'मानवता की सेवा ही हमारा प्रथम कर्तव्य है।' : 'Serving humanity is our primary duty.'}
                </p>
              </div>
            </div>

            {/* Side Column (Double Stacked Small Bento Cards) */}
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
              
              {/* Badge 1: Humanity Quote */}
              <div className="flex-1 bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-emerald-500/10 shadow-lg flex flex-col justify-center items-center text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-black text-slate-800 text-sm font-['Noto_Sans_Devanagari'] leading-tight">
                    {language === 'hi' ? TRUST_INFO.badgeTextHi : TRUST_INFO.badgeTextEn}
                  </h4>
                  <p className="text-[10px] text-emerald-700 font-semibold mt-1">
                    करुणा • सेवा • समर्पण
                  </p>
                </div>
              </div>

              {/* Badge 2: Tax Benefit Info */}
              <div className="flex-1 bg-gradient-to-br from-emerald-800 to-green-905 p-4 rounded-3xl text-white flex flex-col justify-center items-center text-center space-y-2 shadow-lg border border-white/5">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-emerald-200">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs">
                    80G TAX FREE
                  </h4>
                  <p className="text-[10px] text-emerald-200 mt-1 leading-tight font-['Noto_Sans_Devanagari']">
                    {language === 'hi' ? 'दान पर आयकर छूट का लाभ' : 'Tax exemption benefits available'}
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Founder Image Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              src="/assets/founder.jpg"
              alt="Founder of Karuna Seva Trust"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
