import React from 'react';
import { STATS_DATA } from '../data/ngoData';
import { Utensils, Shirt, Stethoscope, HeartHandshake, Trees, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

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
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />;
      default:
        return <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] shrink-0" />;
    }
  };

  // Duplicate items for continuous seamless loop ticker
  const tickerItems = [...STATS_DATA, ...STATS_DATA, ...STATS_DATA];

  return (
    <section className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Sleek, Slim, Elegant Dark Green Pill Bar */}
      <div className="bg-gradient-to-r from-[#12501d] via-[#1a702b] to-[#12501d] text-white rounded-full py-2.5 sm:py-3.5 px-4 shadow-xl border border-[#D4AF37]/60 relative overflow-hidden">
        
        {/* Subtle top gold sheen line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent z-10" />

        {/* Continuous Horizontal Ticker Motion */}
        <div className="flex overflow-hidden relative select-none">
          <motion.div
            className="flex items-center gap-6 sm:gap-10 shrink-0 whitespace-nowrap"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 22,
            }}
          >
            {tickerItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex items-center gap-2 sm:gap-3 py-1 px-3 bg-white/10 backdrop-blur-xs rounded-full border border-amber-400/30 shrink-0"
              >
                {/* Gold Icon */}
                <div className="p-1 rounded-full bg-white/10 text-amber-300">
                  {getIcon(item.icon)}
                </div>

                {/* Number and Label */}
                <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                  <span className="text-xl sm:text-2xl font-black text-amber-300 font-['Noto_Sans_Devanagari'] tracking-tight drop-shadow-xs">
                    {item.number}
                  </span>
                  <span className="text-xs sm:text-sm text-white font-extrabold font-['Noto_Sans_Devanagari']">
                    {language === 'hi' ? item.label : item.labelEn}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
