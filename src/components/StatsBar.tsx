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
        return <Utensils className="w-7 h-7 text-emerald-700" />;
      case 'Shirt':
        return <Shirt className="w-7 h-7 text-emerald-700" />;
      case 'Stethoscope':
        return <Stethoscope className="w-7 h-7 text-emerald-700" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-emerald-700" />;
      case 'Trees':
        return <Trees className="w-7 h-7 text-emerald-700" />;
      default:
        return <Utensils className="w-7 h-7 text-emerald-700" />;
    }
  };

  return (
    <section className="bg-gradient-to-r from-emerald-100 via-green-100 to-emerald-100 text-slate-900 py-10 border-y-2 border-emerald-300 shadow-sm relative overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        
        {/* Decorative Header Badge */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-emerald-300 text-emerald-900 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700 animate-spin" />
            <span>सेवा ही संकल्प • हमारा प्रभाव (Our Impact Metrics)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STATS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-emerald-200 hover:border-emerald-400 shadow-md hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1"
            >
              <div className="p-3.5 bg-emerald-100 rounded-2xl shrink-0 border border-emerald-200 group-hover:scale-110 group-hover:bg-emerald-200/60 transition-all duration-300">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none font-['Noto_Sans_Devanagari'] text-emerald-950">
                  {item.number}
                </div>
                <div className="text-xs text-slate-700 font-bold leading-snug font-['Noto_Sans_Devanagari']">
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

