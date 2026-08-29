import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Leaf, CheckCircle2, Award } from 'lucide-react';
import { TRUST_INFO } from '../data/ngoData';

interface CtaBannerSectionProps {
  onOpenDonateModal: () => void;
  onOpenVolunteer: () => void;
  language: 'hi' | 'en';
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({
  onOpenDonateModal,
  onOpenVolunteer,
  language
}) => {
  return (
    <section className="py-14 lg:py-18 bg-gradient-to-r from-emerald-100 via-green-50 to-emerald-100 text-slate-900 relative overflow-hidden border-y-4 border-emerald-300">
      {/* Background Decorative Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT SIDE DECORATIVE PHOTOS */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Photo 1: Tree Plantation */}
            <div className="relative group overflow-hidden rounded-2xl border-2 border-emerald-300 shadow-lg transform lg:-rotate-2 hover:rotate-0 transition-all duration-300">
              <img 
                src="/assets/tree_plantation.jpg" 
                alt="Tree Plantation Drive" 
                className="w-full h-36 lg:h-44 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="bg-[#1a702b] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-md">
                  3,000+ वृक्षारोपण
                </span>
              </div>
            </div>

            {/* Photo 2: Food Distribution */}
            <div className="relative group overflow-hidden rounded-2xl border-2 border-emerald-300 shadow-lg transform lg:rotate-2 hover:rotate-0 transition-all duration-300">
              <img 
                src="/assets/food_distribution.jpg" 
                alt="Food Distribution" 
                className="w-full h-36 lg:h-44 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="bg-[#1a702b] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-md">
                  10,000+ भोजन सेवा
                </span>
              </div>
            </div>
          </div>

          {/* CENTER DECORATIVE CONTENT BLOCK */}
          <div className="lg:col-span-6 text-center space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 border border-emerald-300 text-emerald-950 text-xs sm:text-sm px-4 py-1.5 rounded-full font-extrabold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#1a702b]" />
              <span>100% पारदर्शी संस्था • निष्काम जनसेवा</span>
            </div>

            {/* Heading with Golden Leaf Motifs */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-emerald-700 text-sm font-bold">
                <span className="h-0.5 w-8 bg-emerald-400 rounded-full"></span>
                <Leaf className="w-4 h-4 text-[#1a702b]" />
                <span className="font-extrabold">पुण्य कमाएँ • जीवन बदलें</span>
                <Leaf className="w-4 h-4 text-[#1a702b]" />
                <span className="h-0.5 w-8 bg-emerald-400 rounded-full"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Noto_Sans_Devanagari'] leading-tight tracking-tight text-slate-900">
                आपका एक छोटा सा दान किसी के जीवन में आशा का दीप जला सकता है
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-slate-700 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-['Noto_Sans_Devanagari']">
              {TRUST_INFO.nameHi} के माध्यम से आज ही पर्यावरण संरक्षण, जरूरतमंदों के भोजन, वस्त्र, शिक्षा और कन्या विवाह हेतु अपना अमूल्य सहयोग करें।
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenDonateModal}
                className="bg-[#1a702b] hover:bg-[#145b22] text-white font-black text-lg px-8 sm:px-9 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-2.5 cursor-pointer transform hover:scale-105"
              >
                <Heart className="w-6 h-6 fill-white text-white animate-pulse" />
                <span>ऑनलाइन दान करें (Donate Now)</span>
              </button>

              <button
                onClick={onOpenVolunteer}
                className="bg-white hover:bg-emerald-50 text-emerald-950 border-2 border-emerald-300 font-extrabold text-base px-7 py-4 rounded-full shadow-md transition flex items-center gap-2 cursor-pointer hover:border-emerald-500"
              >
                <span>स्वयंसेवक बनें (Become Volunteer)</span>
                <ArrowRight className="w-5 h-5 text-[#1a702b]" />
              </button>
            </div>

            {/* Trust highlights bullet bar */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-700 font-bold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1a702b]" />
                <span>100% पारदर्शी खाता</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1a702b]" />
                <span>तुरंत डिजिटल रसीद (Instant Receipt)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#1a702b]" />
                <span>सत्यापित गैर-सरकारी संगठन</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE DECORATIVE PHOTOS */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Photo 3: Education Support */}
            <div className="relative group overflow-hidden rounded-2xl border-2 border-amber-400/40 shadow-xl transform lg:rotate-2 hover:rotate-0 transition-all duration-300">
              <img 
                src="/assets/education_support.jpg" 
                alt="Education Support" 
                className="w-full h-36 lg:h-44 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="bg-amber-400 text-slate-950 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-md">
                  शिक्षा सहायता
                </span>
              </div>
            </div>

            {/* Photo 4: Kanya Vivah Support */}
            <div className="relative group overflow-hidden rounded-2xl border-2 border-amber-400/40 shadow-xl transform lg:-rotate-2 hover:rotate-0 transition-all duration-300">
              <img 
                src="/assets/marriage_support.jpg" 
                alt="Marriage Support" 
                className="w-full h-36 lg:h-44 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-center">
                <span className="bg-emerald-400 text-slate-950 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-md">
                  कन्या विवाह सहयोग
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
