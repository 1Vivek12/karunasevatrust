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
    <section className="py-16 bg-[#f8faf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Exact matching screenshot header) */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-emerald-800 text-sm font-bold">
            <span className="h-0.5 w-6 bg-emerald-500 rounded-full"></span>
            <Leaf className="w-4 h-4 text-emerald-600" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'हमारे प्रमुख कार्य' : 'Our Major Initiatives'}
            </h2>
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span className="h-0.5 w-6 bg-emerald-500 rounded-full"></span>
          </div>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            {language === 'hi'
              ? 'हम समाज के हर वर्ग के लिए समर्पित हैं और निरंतर सेवा कार्यों में लगे हुए हैं।'
              : 'We are dedicated to all sections of society and continuously engaged in selfless service.'}
          </p>
        </div>

        {/* 6 Cards Grid (Exact matching photo layout & cards style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MAJOR_WORKS.map((work) => (
            <div
              key={work.id}
              onClick={() => {
                onSelectWork(work);
                setActiveTab('works');
              }}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-100 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {/* Round Green Icon Circle */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 border border-emerald-200/80 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {getIcon(work.icon)}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors font-['Noto_Sans_Devanagari']">
                    {language === 'hi' ? work.title : work.titleEn}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {language === 'hi' ? work.description : work.descriptionEn}
                </p>
              </div>

              {/* Bottom "और जानें →" link */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {work.impactMetric}
                </span>

                <span className="text-emerald-800 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  <span>{language === 'hi' ? 'और जानें' : 'Learn More'}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-700" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
