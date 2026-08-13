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
        return <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />;
      case 'Trees':
        return <Trees className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />;
      default:
        return <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />;
    }
  };

  return (
    <section className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Sleek, Slim, Elegant Dark Green Pill Bar */}
      <div className="bg-gradient-to-r from-[#12501d] via-[#1a702b] to-[#12501d] text-white rounded-full py-2.5 sm:py-3 px-4 sm:px-8 shadow-xl border border-[#D4AF37]/50 relative overflow-hidden">
        
        {/* Subtle top gold sheen line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 sm:gap-4">
          {STATS_DATA.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center gap-2 sm:gap-3 justify-center py-1 px-2 sm:px-4 flex-1 ${
                index !== STATS_DATA.length - 1 ? 'lg:border-r border-white/25' : ''
              }`}
            >
              {/* Sleek Gold Icon */}
              <div className="p-1.5 rounded-full bg-white/10 border border-amber-400/30 shrink-0">
                {getIcon(item.icon)}
              </div>

              {/* Number and Label inline / compact */}
              <div className="flex items-baseline gap-1.5 sm:gap-2 whitespace-nowrap">
                <span className="text-xl sm:text-2xl font-black text-white font-['Noto_Sans_Devanagari'] tracking-tight drop-shadow-xs">
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm text-emerald-100 font-extrabold font-['Noto_Sans_Devanagari']">
                  {language === 'hi' ? item.label : item.labelEn}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

