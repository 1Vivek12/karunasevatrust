import React, { useState } from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { Heart, Users, Sparkles, Leaf, ShieldCheck, HeartHandshake, X, ZoomIn, Phone, Mail, MapPin, Scale, BookOpen, Utensils, Trees, Eye } from 'lucide-react';
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

  const causesList = [
    { labelHi: 'पर्यावरण', labelEn: 'Environment', icon: Trees, color: 'from-emerald-500 to-green-600' },
    { labelHi: 'भोजन सेवा', labelEn: 'Food Drive', icon: Utensils, color: 'from-amber-500 to-orange-600' },
    { labelHi: 'शिक्षा', labelEn: 'Education', icon: BookOpen, color: 'from-blue-500 to-indigo-600' },
    { labelHi: 'विधि सहायता', labelEn: 'Legal Aid', icon: Scale, color: 'from-purple-500 to-indigo-600' },
    { labelHi: 'मानव सेवा', labelEn: 'Humanity', icon: HeartHandshake, color: 'from-rose-500 to-pink-600' },
  ];

  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white min-h-[580px] lg:min-h-[640px] flex items-center border-b-4 border-[#D4AF37]">
      {/* 1. CINEMATIC BACKGROUND IMAGE BACKDROP (The requested photo as background) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/main_banner.jpg"
          alt="Karuna Seva Trust Background Banner"
          className="w-full h-full object-cover object-center scale-105 filter contrast-[1.05] brightness-90 transition-transform duration-1000"
        />
        {/* Layer 1: Dark Emerald Gradient Overlay for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/85 to-emerald-900/90" />
        {/* Layer 2: Top and Bottom Decorative Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-emerald-950/95" />
        {/* Layer 3: Decorative Radial Golden Light Spotlight */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Decorative Traditional Border Top & Bottom Accent Strip */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500 z-20" />

      {/* 2. FOREGROUND CONTENT & DECORATIVE HERO CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-16 w-full space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Slogan, Causes Bar & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Registration Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-900/90 to-emerald-800/90 backdrop-blur-md border border-[#D4AF37]/50 text-amber-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>पंजीकृत सार्वजनिक जनसेवा न्यास • 80G Certified</span>
            </div>

            {/* Main Decorative Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] font-['Noto_Sans_Devanagari'] drop-shadow-lg text-white">
                {language === 'hi' ? TRUST_INFO.nameHi : TRUST_INFO.nameEn}
              </h1>

              {/* Tagline Line Decoration */}
              <div className="flex items-center justify-center lg:justify-start gap-3 text-amber-400 text-sm sm:text-base md:text-lg font-bold py-1">
                <span className="h-0.5 w-10 bg-gradient-to-r from-transparent to-amber-400 rounded-full"></span>
                <Leaf className="w-5 h-5 text-emerald-400" />
                <span className="text-amber-300 font-extrabold tracking-wide drop-shadow-sm font-['Noto_Sans_Devanagari']">
                  {language === 'hi' ? TRUST_INFO.taglineHi : TRUST_INFO.taglineEn}
                </span>
                <Leaf className="w-5 h-5 text-emerald-400" />
                <span className="h-0.5 w-10 bg-gradient-to-l from-transparent to-amber-400 rounded-full"></span>
              </div>
            </div>

            {/* Quote Box Callout */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl max-w-2xl mx-auto lg:mx-0 shadow-xl">
              <p className="text-emerald-100 text-base sm:text-lg font-medium leading-relaxed font-['Noto_Sans_Devanagari']">
                "आओ मिलकर बनाएं एक बेहतर, करुणामय समाज — मानवता की सेवा ही हमारा सर्वोपरि कर्तव्य एवं संकल्प है।"
              </p>
            </div>

            {/* 5 Cause Pills Decorative Grid */}
            <div className="pt-1">
              <p className="text-xs text-amber-300 font-bold uppercase tracking-wider mb-2 font-['Noto_Sans_Devanagari'] text-center lg:text-left">
                न्यास के मुख्य सेवा क्षेत्र (Core Service Pillars)
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                {causesList.map((c, idx) => {
                  const IconComp = c.icon;
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-400/30 backdrop-blur-md text-white text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-bold shadow-md transition-all hover:border-amber-400"
                    >
                      <IconComp className="w-4 h-4 text-amber-400" />
                      <span>{language === 'hi' ? c.labelHi : c.labelEn}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              {/* Donate Button - Golden Accent */}
              <button
                onClick={onOpenDonateModal}
                aria-haspopup="dialog"
                className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-lg px-8 py-3.5 rounded-full shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 transition-all flex items-center gap-2.5 cursor-pointer group transform hover:scale-105 active:scale-95 min-h-[44px] border-2 border-amber-300"
              >
                <Heart className="w-5 h-5 fill-slate-950 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>{language === 'hi' ? 'ऑनलाइन दान करें' : 'Donate Now'}</span>
              </button>

              {/* Volunteer Button - Glass Accent */}
              <button
                onClick={onOpenVolunteer}
                className="bg-emerald-900/80 hover:bg-emerald-800 text-white border-2 border-emerald-400/50 font-extrabold text-lg px-7 py-3.5 rounded-full shadow-lg backdrop-blur-md hover:border-emerald-300 transition-all flex items-center gap-2.5 cursor-pointer group min-h-[44px]"
              >
                <Users className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
                <span>{language === 'hi' ? 'स्वयंसेवक बनें' : 'Join Us'}</span>
              </button>

              {/* View Full Original Poster Lightbox Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-emerald-200 hover:text-white border border-white/20 text-xs sm:text-sm font-bold px-4 py-3.5 rounded-full backdrop-blur-md transition flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Eye className="w-4 h-4 text-amber-300" />
                <span>{language === 'hi' ? 'मूल पोस्टर देखें' : 'View Full Poster'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Decorative Glassmorphism Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Glass Card Container */}
            <div className="bg-emerald-950/70 backdrop-blur-xl p-6 rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl space-y-5 relative overflow-hidden group">
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-amber-500 text-slate-950 font-black text-[10px] uppercase px-3 py-1 rounded-bl-xl shadow-md">
                100% Certified Public Trust
              </div>

              {/* Header Box */}
              <div className="flex items-center gap-3 border-b border-white/15 pb-4 pt-1">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base font-['Noto_Sans_Devanagari']">
                    करुणा सेवा न्यास संदेश
                  </h3>
                  <p className="text-xs text-amber-300/90 font-medium">सेवा ही संकल्प, करुणा ही हमारा धर्म</p>
                </div>
              </div>

              {/* Image Preview Box with Lightbox trigger */}
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="relative overflow-hidden rounded-2xl border border-amber-400/30 group/img cursor-pointer shadow-lg aspect-[16/9]"
              >
                <img
                  src="/assets/main_banner.jpg"
                  alt="Trust Poster Banner"
                  className="w-full h-full object-cover object-top group-hover/img:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs text-amber-300 font-bold flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/40">
                    <ZoomIn className="w-3.5 h-3.5 text-amber-300" />
                    <span>क्लिक करके पूरा पोस्टर खोलें (Expand Poster)</span>
                  </span>
                </div>
              </div>

              {/* Live Contact Strip */}
              <div className="space-y-2 text-xs text-emerald-100 font-medium">
                <div className="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-mono font-bold text-white">+91 79053 57033</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="font-mono">Indo@karunasevatrust.com</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Gorakhpur, Uttar Pradesh, India</span>
                </div>
              </div>

              {/* Tax Exemption Banner Badge */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-3.5 rounded-2xl flex items-center justify-between gap-3 shadow-lg font-bold">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-slate-950 shrink-0" />
                  <div>
                    <div className="text-xs font-black">80G आयकर छूट मान्य</div>
                    <div className="text-[10px] text-slate-900 font-semibold">100% पारदर्शी जनसेवा संस्था</div>
                  </div>
                </div>
                <span className="text-[10px] bg-slate-950 text-amber-300 px-2.5 py-1 rounded-md font-mono">100% Tax Free</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. LIGHTBOX MODAL FOR FULL HD POSTER BANNER */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 backdrop-blur-lg p-4"
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
              className="max-w-full max-h-[92vh] object-contain rounded-2xl shadow-2xl border-2 border-[#D4AF37]/60"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


