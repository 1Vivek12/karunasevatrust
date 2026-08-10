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
        return <Utensils className="w-8 h-8 text-[#D4AF37]" />;
      case 'Shirt':
        return <Shirt className="w-8 h-8 text-[#D4AF37]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-8 h-8 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-[#D4AF37]" />;
      case 'Trees':
        return <Trees className="w-8 h-8 text-[#D4AF37]" />;
      default:
        return <Utensils className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  return (
    <section className="bg-emerald-950/90 backdrop-blur-md text-white py-8 md:py-10 border-y border-emerald-900/60 shadow-xl relative overflow-hidden">
      {/* Subtle radial glow in background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-emerald-900/40 backdrop-blur-xs p-5 rounded-2xl border border-white/10 hover:border-emerald-500/20 shadow-md hover:shadow-emerald-900/40 transition-all duration-300 group"
            >
              <div className="p-3 bg-emerald-950/80 rounded-xl shrink-0 shadow-inner border border-white/5 group-hover:scale-105 transition-transform duration-300">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none font-['Noto_Sans_Devanagari'] bg-gradient-to-r from-white via-slate-100 to-[#D4AF37] bg-clip-text text-transparent">
                  {item.number}
                </div>
                <div className="text-xs text-emerald-200/90 font-medium leading-tight font-['Noto_Sans_Devanagari']">
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
