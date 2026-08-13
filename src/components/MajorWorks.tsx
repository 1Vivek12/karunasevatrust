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
        return <UtensilsCrossed className="w-6 h-6 text-[#156d25]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#156d25]" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-[#156d25]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#156d25]" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-[#156d25]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#156d25]" />;
      default:
        return <UtensilsCrossed className="w-6 h-6 text-[#156d25]" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-[#f8faf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header matching Mockup */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#156d25] text-sm sm:text-base font-bold">
            <span className="text-emerald-600">🍃 —</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'हमारे प्रमुख कार्य' : 'Our Major Initiatives'}
            </h2>
            <span className="text-emerald-600">— 🍃</span>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto font-medium font-['Noto_Sans_Devanagari']">
            {language === 'hi'
              ? 'हम समाज के हर वर्ग के लिए समर्पित हैं और निरंतर सेवा कार्यों में लगे हुए हैं।'
              : 'We are dedicated to all sections of society and continuously engaged in selfless service.'}
          </p>
        </div>

        {/* 6 Cards Grid matching Mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {MAJOR_WORKS.map((work) => (
            <div
              key={work.id}
              onClick={() => {
                onSelectWork(work);
                setActiveTab('works');
              }}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:shadow-md hover:border-emerald-300 transition flex flex-col justify-between items-center text-center group cursor-pointer"
            >
              {/* Circular Light Green Icon Box */}
              <div className="w-14 h-14 rounded-full bg-emerald-100/80 flex items-center justify-center text-[#156d25] mb-3 group-hover:scale-110 transition shrink-0">
                {getIcon(work.icon)}
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5 mb-4 flex-1 flex flex-col justify-start">
                <h3 className="font-extrabold text-slate-900 text-base font-['Noto_Sans_Devanagari'] group-hover:text-[#156d25] transition">
                  {language === 'hi' ? work.title : work.titleEn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal font-['Noto_Sans_Devanagari']">
                  {language === 'hi' ? work.description : work.descriptionEn}
                </p>
              </div>

              {/* Action Link: "और जानें ->" */}
              <div className="flex items-center justify-center gap-1 text-xs font-extrabold text-[#156d25] group-hover:text-[#11571d] mt-auto pt-2">
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

