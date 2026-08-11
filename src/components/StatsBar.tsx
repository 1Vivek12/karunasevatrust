import React from 'react';
import { STATS_DATA } from '../data/ngoData';
import { Utensils, Shirt, Stethoscope, HeartHandshake, Trees, Sparkles } from 'lucide-react';

interface StatsBarProps {
  language: 'hi' | 'en';
}

export const StatsBar: React.FC<StatsBarProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-7 h-7 text-amber-400" />;
      case 'Shirt':
        return <Shirt className="w-7 h-7 text-amber-400" />;
      case 'Stethoscope':
        return <Stethoscope className="w-7 h-7 text-amber-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-amber-400" />;
      case 'Trees':
        return <Trees className="w-7 h-7 text-amber-400" />;
      default:
        return <Utensils className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <section className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white py-10 border-y-2 border-[#D4AF37]/50 shadow-2xl relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        
        {/* Decorative Header Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/40 text-amber-300 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>सेवा ही संकल्प • हमारा प्रभाव (Our Impact Metrics)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-emerald-900/50 backdrop-blur-md p-5 rounded-2xl border border-amber-400/30 hover:border-amber-400 shadow-lg hover:shadow-amber-500/20 transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="p-3.5 bg-emerald-950/90 rounded-2xl shrink-0 shadow-inner border border-amber-400/30 group-hover:scale-110 group-hover:bg-amber-400/10 transition-all duration-300">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none font-['Noto_Sans_Devanagari'] bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent drop-shadow-xs">
                  {item.number}
                </div>
                <div className="text-xs text-emerald-100 font-bold leading-snug font-['Noto_Sans_Devanagari']">
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

