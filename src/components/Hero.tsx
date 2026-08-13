import React, { useState } from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { Heart, Users, Leaf, Eye, X, ShieldCheck } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50/80 via-white to-green-50/80 py-12 lg:py-20 border-b border-emerald-100">
      {/* Decorative ambient leaf pattern glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side Content matching Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#156d25] font-['Noto_Sans_Devanagari'] tracking-tight drop-shadow-xs">
                {language === 'hi' ? TRUST_INFO.nameHi : TRUST_INFO.nameEn}
              </h1>

              {/* Tagline Badge with Leaf Ornaments */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-800 text-base sm:text-lg font-bold font-['Noto_Sans_Devanagari']">
                <span className="text-emerald-600 font-bold">🍃 —</span>
                <span className="text-slate-900 font-extrabold">{language === 'hi' ? TRUST_INFO.taglineHi : TRUST_INFO.taglineEn}</span>
                <span className="text-emerald-600 font-bold">— 🍃</span>
              </div>
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed font-['Noto_Sans_Devanagari'] max-w-xl mx-auto lg:mx-0">
              {language === 'hi' ? TRUST_INFO.heroSubtitleHi : TRUST_INFO.heroSubtitleEn}
            </p>

            {/* Buttons matching Mockup: Solid Green & Outline Green */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenDonateModal}
                className="bg-[#156d25] hover:bg-[#11571d] text-white font-extrabold text-base sm:text-lg px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2.5 cursor-pointer transform hover:scale-102"
              >
                <Heart className="w-5 h-5 fill-white text-white" />
                <span>{language === 'hi' ? 'दान करें' : 'Donate Now'}</span>
              </button>

              <button
                onClick={onOpenVolunteer}
                className="border-2 border-[#156d25] text-[#156d25] bg-white hover:bg-emerald-50 font-extrabold text-base sm:text-lg px-7 py-3.5 rounded-xl shadow-xs hover:shadow transition flex items-center gap-2.5 cursor-pointer transform hover:scale-102"
              >
                <Users className="w-5 h-5 text-[#156d25]" />
                <span>{language === 'hi' ? 'हमसे जुड़ें' : 'Join Us'}</span>
              </button>

              <button
                onClick={() => setIsLightboxOpen(true)}
                className="bg-emerald-100/70 hover:bg-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold px-4 py-3.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-2xs border border-emerald-300/60"
              >
                <Eye className="w-4 h-4 text-emerald-700" />
                <span>{language === 'hi' ? 'मूल पोस्टर' : 'Poster'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Side: Collaged Diamond Frames matching Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center py-4"
          >
            {/* Center Background Image: Plant sapling backdrop */}
            <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] flex items-center justify-center">
              
              {/* Background Sapling Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg border-2 border-emerald-200/60">
                <img
                  src="/assets/tree_plantation.jpg"
                  alt="Tree Plantation Sapling"
                  className="w-full h-full object-cover opacity-85 filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
              </div>

              {/* Tilted Collage Frames Cluster (Mockup Right Side) */}
              <div className="relative z-10 w-full h-full flex items-center justify-end pr-2 sm:pr-6">
                <div className="grid grid-cols-2 gap-3 max-w-[340px] sm:max-w-[380px]">
                  
                  {/* Frame 1: Food Distribution */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl transform -rotate-3 hover:rotate-0 transition duration-300 group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                    <img
                      src="/assets/food_distribution.jpg"
                      alt="Food Service"
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  {/* Frame 2: Doctor Healthcare Camp */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl transform rotate-3 hover:rotate-0 transition duration-300 group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                    <img
                      src="/assets/healthcare_camp.jpg"
                      alt="Health Service"
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  {/* Frame 3: Blanket & Clothes Distribution */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl transform rotate-2 hover:rotate-0 transition duration-300 group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                    <img
                      src="/assets/blanket_distribution.jpg"
                      alt="Clothes Service"
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>

                  {/* Frame 4: Trust Founder / Official Banner */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-xl transform -rotate-2 hover:rotate-0 transition duration-300 group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                    <img
                      src="/assets/main_banner.jpg"
                      alt="Trust Banner"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Round Emblem Badge (Exact Mockup: "मानवता हमारी पहचान") */}
              <div className="absolute bottom-2 left-2 sm:left-4 bg-white border-2 border-[#156d25] shadow-2xl rounded-full p-3 flex flex-col items-center justify-center text-center w-28 h-28 sm:w-32 sm:h-32 shrink-0 z-20 animate-pulse">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[#156d25] mb-1">
                  <Heart className="w-5 h-5 fill-[#156d25]" />
                </div>
                <span className="text-[11px] sm:text-xs font-black text-[#156d25] font-['Noto_Sans_Devanagari'] leading-tight">
                  मानवता<br />हमारी पहचान
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


