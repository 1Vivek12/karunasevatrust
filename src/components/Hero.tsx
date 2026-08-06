import React from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { Heart, Users, Sparkles, Leaf } from 'lucide-react';

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
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9f4] via-[#f8faf7] to-white py-10 lg:py-16 border-b border-emerald-50">
      {/* Decorative leaf watermarks in background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Side Content Column (Exact screenshot typography & layout) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>पंजीकृत जनसेवा न्यास (Registered Public Trust)</span>
            </div>

            {/* Main Title (Exact dark green font) */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-emerald-900 tracking-tight leading-[1.15] font-['Noto_Sans_Devanagari'] drop-shadow-xs">
                {language === 'hi' ? TRUST_INFO.nameHi : TRUST_INFO.nameEn}
              </h1>

              {/* Tagline Line Decoration (Exact matching screenshot line ornament) */}
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

            {/* Hero Action Buttons (Exact matching screenshot style) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* White Outline Button: 👥 हमसे जुड़ें */}
                <button
                  onClick={onOpenVolunteer}
                  className="bg-white hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600 font-extrabold text-lg px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-2.5 cursor-pointer group"
                >
                  <Users className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <span>{language === 'hi' ? 'हमसे जुड़ें' : 'Join Us'}</span>
                </button>

                {/* Green Filled Button: 💚 दान करें */}
                <button
                  onClick={onOpenDonateModal}
                  aria-haspopup="dialog"
                  className="bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold text-lg px-8 py-3.5 rounded-full shadow-lg shadow-emerald-800/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer group"
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

          </div>

          {/* Right Side Photo Collage (Exactly reproducing the screenshot's image layout) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-4">
            
            {/* Background glowing circle */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-emerald-200/50 to-green-300/40 blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-[500px] h-[380px] sm:h-[440px]">

              {/* 1. Main Central Large Circular Image: Hands holding soil & seedling */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 group hover:scale-105 transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
                  alt="वृक्षारोपण एवं पर्यावरण"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-3">
                  <span className="text-white text-xs font-bold px-2 py-0.5 bg-black/50 rounded-full backdrop-blur-xs">
                    पर्यावरण व वृक्षारोपण
                  </span>
                </div>
              </div>

              {/* 2. Top Right Circular Image: Children Food Distribution */}
              <div className="absolute top-0 right-2 sm:right-6 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 hover:scale-105 transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                  alt="भोजन वितरण"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-emerald-800/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  भोजन सेवा
                </div>
              </div>

              {/* 3. Middle Right Doctor / Health Camp Image */}
              <div className="absolute top-1/3 -right-2 sm:right-0 w-36 h-28 sm:w-44 sm:h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl z-20 hover:scale-105 transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
                  alt="स्वास्थ्य शिविर"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent flex items-end p-1.5">
                  <span className="text-[10px] font-bold text-white leading-tight">
                    स्वास्थ्य शिविर
                  </span>
                </div>
              </div>

              {/* 4. Bottom Right Clothes / Blanket Distribution Image */}
              <div className="absolute bottom-2 right-6 sm:right-12 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 hover:scale-105 transition duration-300">
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop"
                  alt="वस्त्र वितरण"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-emerald-800/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  वस्त्र वितरण
                </div>
              </div>

              {/* 5. Central Floating Badge: "मानवता हमारी पहचान" (Exact from screenshot) */}
              <div className="absolute bottom-6 left-2 sm:left-6 z-30 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <p className="text-emerald-950 font-black text-sm sm:text-base leading-tight font-['Noto_Sans_Devanagari']">
                    {language === 'hi' ? TRUST_INFO.badgeTextHi : TRUST_INFO.badgeTextEn}
                  </p>
                  <p className="text-emerald-700 text-xs font-semibold mt-0.5">
                    करुणा • सेवा • समर्पण
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
