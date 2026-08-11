import React from 'react';
import { MAJOR_WORKS } from '../data/ngoData';
import { ActiveTab, ServiceCard } from '../types';
import { UtensilsCrossed, Stethoscope, Shirt, HeartHandshake, Trees, GraduationCap, ArrowRight, Leaf, Sparkles } from 'lucide-react';

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
        return <UtensilsCrossed className="w-6 h-6 text-emerald-800" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-emerald-800" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 text-emerald-800" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-emerald-800" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-emerald-800" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-800" />;
      default:
        return <UtensilsCrossed className="w-6 h-6 text-emerald-800" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8faf7] via-white to-[#f0f7f2] relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        
        {/* Section Decorative Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center gap-2 bg-emerald-100/80 border border-emerald-200 text-emerald-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>करुणा सेवा न्यास मुख्य पहलें</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-emerald-900">
            <span className="h-0.5 w-10 bg-amber-400 rounded-full"></span>
            <Leaf className="w-6 h-6 text-emerald-600" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Noto_Sans_Devanagari'] tracking-tight">
              {language === 'hi' ? 'हमारे प्रमुख कार्य' : 'Our Major Initiatives'}
            </h2>
            <Leaf className="w-6 h-6 text-emerald-600" />
            <span className="h-0.5 w-10 bg-amber-400 rounded-full"></span>
          </div>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            {language === 'hi'
              ? 'हम समाज के हर असहाय एवं जरूरतमंद वर्ग के लिए समर्पित हैं और निरंतर निष्काम सेवा कार्यों में संलग्न हैं।'
              : 'We are dedicated to all sections of society and continuously engaged in selfless service.'}
          </p>
        </div>

        {/* 6 Decorative Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MAJOR_WORKS.map((work) => (
            <div
              key={work.id}
              onClick={() => {
                onSelectWork(work);
                setActiveTab('works');
              }}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-md hover:shadow-2xl border-2 border-emerald-100 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative top golden gradient line accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-amber-400 to-emerald-700 opacity-90 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {/* Round Green Icon Circle */}
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100/90 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:bg-emerald-800 group-hover:text-amber-300 transition-all duration-300 shadow-sm">
                    <div className="group-hover:scale-110 transition-transform">
                      {getIcon(work.icon)}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors font-['Noto_Sans_Devanagari'] leading-tight">
                    {language === 'hi' ? work.title : work.titleEn}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'hi' ? work.description : work.descriptionEn}
                </p>
              </div>

              {/* Bottom "और जानें →" link */}
              <div className="pt-5 mt-5 border-t border-emerald-50 flex items-center justify-between">
                <span className="text-xs font-extrabold text-emerald-900 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200/80">
                  {work.impactMetric}
                </span>

                <span className="text-emerald-800 group-hover:text-amber-600 text-sm font-extrabold flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  <span>{language === 'hi' ? 'विस्तार से जानें' : 'Learn More'}</span>
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
