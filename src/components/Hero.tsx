import React, { useState } from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { Heart, Users, Eye, X } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-emerald-950 text-white min-h-[540px] sm:min-h-[600px] flex items-center border-b-4 border-[#1a702b]">
      {/* 1. CINEMATIC VIVID BACKGROUND POSTER IMAGE (High Visibility & Crispness) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/main_banner.jpg"
          alt="Karuna Seva Trust Official Background Banner"
          className="w-full h-full object-cover object-center scale-102 filter contrast-[1.1] brightness-[0.95] saturate-[1.15] transition-transform duration-700"
        />
        {/* Soft Dark Emerald Gradient Overlay for Text Legibility while keeping poster image 100% visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-emerald-950/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Decorative Border Strip */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-green-500 z-20" />

      {/* 2. FOREGROUND CONTENT & ACTION BUTTONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-16 w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] font-['Noto_Sans_Devanagari'] drop-shadow-2xl text-white">
                {language === 'hi' ? TRUST_INFO.nameHi : TRUST_INFO.nameEn}
              </h1>

              {/* Tagline Line */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-200 text-base sm:text-lg font-bold py-1 font-['Noto_Sans_Devanagari']">
                <span className="text-amber-400 font-bold">🍃 —</span>
                <span className="text-emerald-100 font-extrabold tracking-wide drop-shadow-md">
                  {language === 'hi' ? TRUST_INFO.taglineHi : TRUST_INFO.taglineEn}
                </span>
                <span className="text-amber-400 font-bold">— 🍃</span>
              </div>
            </div>

            {/* Subtitle Glass Box */}
            <div className="bg-black/40 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-2xl max-w-2xl mx-auto lg:mx-0 shadow-2xl">
              <p className="text-white text-base sm:text-lg font-semibold leading-relaxed font-['Noto_Sans_Devanagari'] drop-shadow-sm">
                "{language === 'hi' ? TRUST_INFO.heroSubtitleHi : TRUST_INFO.heroSubtitleEn}"
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDonateModal}
                className="bg-[#1a702b] hover:bg-[#145b22] text-white font-extrabold text-lg px-8 py-3.5 rounded-xl shadow-2xl transition flex items-center gap-2.5 cursor-pointer transform hover:scale-105 active:scale-95 border-2 border-emerald-400"
              >
                <Heart className="w-5 h-5 fill-white text-white" />
                <span>{language === 'hi' ? 'दान करें' : 'Donate Now'}</span>
              </button>

              <button
                onClick={onOpenVolunteer}
                className="bg-white hover:bg-emerald-50 text-[#1a702b] font-extrabold text-lg px-7 py-3.5 rounded-xl shadow-xl transition flex items-center gap-2.5 cursor-pointer transform hover:scale-105 active:scale-95 border-2 border-emerald-300"
              >
                <Users className="w-5 h-5 text-[#1a702b]" />
                <span>{language === 'hi' ? 'हमसे जुड़ें' : 'Join Us'}</span>
              </button>

              <button
                onClick={() => setIsLightboxOpen(true)}
                className="bg-black/50 hover:bg-black/70 text-amber-300 border border-amber-400/50 text-sm font-bold px-5 py-3.5 rounded-xl backdrop-blur-md transition flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>{language === 'hi' ? 'मूल पोस्टर देखें' : 'View Poster'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Poster Card Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="relative overflow-hidden rounded-3xl border-4 border-emerald-400/80 shadow-2xl group cursor-pointer aspect-[16/11] w-full max-w-[480px] bg-slate-950 transform hover:scale-102 transition duration-300"
            >
              <img
                src="/assets/main_banner.jpg"
                alt="Karuna Seva Trust Official Poster Banner"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white font-black flex items-center gap-2 bg-[#1a702b] px-4 py-1.5 rounded-full shadow-lg border border-emerald-300">
                  <Eye className="w-4 h-4 text-amber-300" />
                  <span>पोस्टर को ज़ूम करके देखें (Full HD HD Poster)</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox Modal for Poster Banner */}
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
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition z-10 cursor-pointer border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              src="/assets/main_banner.jpg"
              alt="Karuna Seva Trust Official Poster Banner"
              className="max-w-full max-h-[92vh] object-contain rounded-2xl shadow-2xl border-2 border-emerald-400"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


