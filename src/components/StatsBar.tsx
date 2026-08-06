import React from 'react';
import { STATS_DATA } from '../data/ngoData';
import { Utensils, Shirt, Stethoscope, HeartHandshake, Trees } from 'lucide-react';

interface StatsBarProps {
  language: 'hi' | 'en';
}

export const StatsBar: React.FC<StatsBarProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-200" />;
      case 'Shirt':
        return <Shirt className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-200" />;
      case 'Stethoscope':
        return <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-200" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-200" />;
      case 'Trees':
        return <Trees className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-200" />;
      default:
        return <Utensils className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-200" />;
    }
  };

  return (
    <section className="bg-emerald-800 text-white py-6 md:py-8 shadow-inner border-y border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2 divide-y md:divide-y-0 md:divide-x divide-emerald-700/60 items-center">
          {STATS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center justify-center gap-3 md:gap-4 px-2 ${
                idx > 0 ? 'pt-4 md:pt-0' : ''
              }`}
            >
              <div className="p-2 bg-emerald-700/60 rounded-2xl shrink-0 shadow-xs border border-emerald-600/40">
                {getIcon(item.icon)}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-none font-['Noto_Sans_Devanagari']">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm text-emerald-100 font-medium mt-1 leading-tight">
                  {language === 'hi' ? item.label : item.labelEn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
