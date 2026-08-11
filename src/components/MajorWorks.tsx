import React from 'react';
import { MAJOR_WORKS } from '../data/ngoData';
import { ActiveTab, ServiceCard } from '../types';
import { UtensilsCrossed, Stethoscope, Shirt, HeartHandshake, Trees, GraduationCap, ArrowRight, Leaf, Sparkles, Eye } from 'lucide-react';

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
        return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-amber-400" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-amber-400" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-amber-400" />;
      default:
        return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#f8faf7] via-white to-[#f0f7f2] relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Decorative Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center gap-2 bg-emerald-100/90 border border-emerald-300 text-emerald-900 px-4 py-1.5 rounded-full text-xs font-extrabold shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-700 animate-pulse" />
            <span>करुणा सेवा न्यास जनसेवा कार्य एवं पहलें</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-emerald-950">
            <span className="h-0.5 w-10 sm:w-16 bg-gradient-to-r from-transparent to-amber-500 rounded-full"></span>
            <Leaf className="w-6 h-6 text-emerald-600 shrink-0" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Noto_Sans_Devanagari'] tracking-tight">
              {language === 'hi' ? 'हमारे प्रमुख कार्य' : 'Our Major Initiatives'}
            </h2>
            <Leaf className="w-6 h-6 text-emerald-600 shrink-0" />
            <span className="h-0.5 w-10 sm:w-16 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></span>
          </div>

          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed font-['Noto_Sans_Devanagari']">
            {language === 'hi'
              ? 'हम समाज के असहाय, बेघर और जरूरतमंद वर्गों के सर्वांगीण उत्थान हेतु निष्काम भाव से निरंतर समर्पित हैं।'
              : 'We are dedicated to all sections of society and continuously engaged in selfless service.'}
          </p>
        </div>

        {/* 6 Decorative Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAJOR_WORKS.map((work) => (
            <div
              key={work.id}
              onClick={() => {
                onSelectWork(work);
                setActiveTab('works');
              }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-emerald-100 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-2 relative"
            >
              {/* Top Photo Frame */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-emerald-950/20">
                <img
                  src={work.image}
                  alt={language === 'hi' ? work.title : work.titleEn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for Badge Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-black/30 to-transparent pointer-events-none" />

                {/* Icon Ribbon Badge (Top Left) */}
                <div className="absolute top-3 left-3 bg-emerald-950/80 backdrop-blur-md border border-amber-400/40 text-white px-3 py-1.5 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg">
                  <div className="p-1 bg-amber-400/20 rounded-lg">
                    {getIcon(work.icon)}
                  </div>
                  <span className="font-['Noto_Sans_Devanagari']">{language === 'hi' ? work.title : work.titleEn}</span>
                </div>

                {/* Impact Metric Pill (Bottom Overlay) */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-md">
                    {work.impactMetric}
                  </span>
                  <span className="bg-black/50 hover:bg-black/80 backdrop-blur-md text-amber-300 p-1.5 rounded-full border border-amber-400/30 transition opacity-0 group-hover:opacity-100">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-900 transition-colors font-['Noto_Sans_Devanagari'] leading-snug">
                    {language === 'hi' ? work.title : work.titleEn}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {language === 'hi' ? work.description : work.descriptionEn}
                  </p>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-4 border-t border-emerald-50 flex items-center justify-between mt-auto">
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg">
                    करुणा सेवा न्यास पहल
                  </span>

                  <span className="text-emerald-800 group-hover:text-amber-600 text-sm font-black flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    <span>{language === 'hi' ? 'विस्तार से देखें' : 'View Details'}</span>
                    <ArrowRight className="w-4 h-4 text-amber-500" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

