import React from 'react';
import { MAJOR_WORKS } from '../data/ngoData';
import { ActiveTab, ServiceCard } from '../types';
import { UtensilsCrossed, Stethoscope, Shirt, HeartHandshake, Trees, GraduationCap, ArrowRight, Leaf } from 'lucide-react';

interface MajorWorksProps {
  onSelectWork: (work: ServiceCard) => void;
  setActiveTab: (tab: ActiveTab) => void;
  language: 'hi' | 'en';
}

export const MajorWorks: React.FC<MajorWorksProps> = ({
  onSelectWork,
  setActiveTab,
  language
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#1a702b]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#1a702b]" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-[#1a702b]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#1a702b]" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-[#1a702b]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#1a702b]" />;
      default:
        return <UtensilsCrossed className="w-6 h-6 text-[#1a702b]" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-r from-emerald-100 via-green-100 to-emerald-100 border-y-2 border-emerald-300 relative overflow-hidden shadow-inner">
      {/* Soft Background Leaf Ambient Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Section Header matching Mockup */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#1a702b] text-sm sm:text-base font-bold">
            <span className="text-[#1a702b] font-black">🍃 —</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-['Noto_Sans_Devanagari'] drop-shadow-xs">
              {language === 'hi' ? 'हमारे प्रमुख कार्य' : 'Our Major Initiatives'}
            </h2>
            <span className="text-[#1a702b] font-black">— 🍃</span>
          </div>

          <p className="text-slate-700 text-xs sm:text-sm max-w-xl mx-auto font-bold font-['Noto_Sans_Devanagari']">
            {language === 'hi'
              ? 'हम समाज के हर वर्ग के लिए समर्पित हैं और निरंतर सेवा कार्यों में लगे हुए हैं।'
              : 'We are dedicated to all sections of society and continuously engaged in selfless service.'}
          </p>
        </div>

        {/* 6 Cards Grid with Crisp Light Green Styling */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {MAJOR_WORKS.map((work) => (
            <div
              key={work.id}
              onClick={() => {
                onSelectWork(work);
                setActiveTab('works');
              }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border-2 border-emerald-200/90 shadow-sm hover:shadow-xl hover:border-[#1a702b] transition duration-300 flex flex-col justify-between items-center text-center group cursor-pointer transform hover:-translate-y-1"
            >
              {/* Circular Light Green Icon Box */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-[#1a702b] mb-3 group-hover:scale-110 group-hover:bg-[#1a702b] group-hover:text-white transition duration-300 shrink-0 shadow-2xs">
                {getIcon(work.icon)}
              </div>

              {/* Title & Description */}
              <div className="space-y-1 mb-3 flex-1 flex flex-col justify-start">
                <h3 className="font-black text-slate-900 text-sm sm:text-base font-['Noto_Sans_Devanagari'] group-hover:text-[#1a702b] transition leading-snug">
                  {language === 'hi' ? work.title : work.titleEn}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-semibold font-['Noto_Sans_Devanagari']">
                  {language === 'hi' ? work.description : work.descriptionEn}
                </p>
              </div>

              {/* Action Link: "और जानें ->" */}
              <div className="flex items-center justify-center gap-1 text-xs font-black text-[#1a702b] group-hover:text-[#145b22] mt-auto pt-1">
                <span>{language === 'hi' ? 'और जानें' : 'Read More'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

