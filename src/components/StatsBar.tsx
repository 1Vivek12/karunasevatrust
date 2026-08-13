import React from 'react';
import { STATS_DATA } from '../data/ngoData';
import { Utensils, Shirt, Stethoscope, HeartHandshake, Trees, Sparkles, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface StatsBarProps {
  language: 'hi' | 'en';
}

export const StatsBar: React.FC<StatsBarProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />;
      case 'Trees':
        return <Trees className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />;
      default:
        return <Utensils className="w-6 h-6 sm:w-7 sm:h-7 text-amber-300" />;
    }
  };

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Premium Decorative Container */}
      <div className="bg-gradient-to-r from-[#12501d] via-[#1a702b] to-[#12501d] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border-2 border-[#D4AF37]/60">
        
        {/* Decorative Background Glowing Light & Pattern */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <div className="relative z-10 space-y-6">
          
          {/* Header Decorative Pill */}
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-[#D4AF37]/50 text-emerald-100 px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
              <Award className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{language === 'hi' ? 'करुणा सेवा न्यास जनसेवा प्रभाव • सेवा ही संकल्प' : 'Trust Impact Pillar Metrics'}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </div>
          </div>

          {/* 5 Stats Cards Grid with Glassmorphism & Gold Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
            {STATS_DATA.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-amber-400/80 backdrop-blur-md p-4 rounded-2xl shadow-xl transition-all duration-300 group flex flex-col items-center text-center justify-between min-h-[120px] transform hover:-translate-y-1"
              >
                {/* Glowing Icon Badge Container */}
                <div className="p-2.5 rounded-2xl bg-gradient-to-br from-amber-400/20 to-emerald-400/20 border border-amber-400/40 group-hover:border-amber-300 group-hover:scale-110 transition duration-300 shadow-md mb-2">
                  {getIcon(item.icon)}
                </div>

                {/* Stat Number with Gold Highlight */}
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none font-['Noto_Sans_Devanagari'] text-white group-hover:text-amber-300 transition-colors drop-shadow-md">
                    {item.number}
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-100 font-bold leading-tight font-['Noto_Sans_Devanagari'] pt-1">
                    {language === 'hi' ? item.label : item.labelEn}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

