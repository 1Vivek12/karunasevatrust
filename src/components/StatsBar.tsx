import React from 'react';
import { STATS_DATA } from '../data/ngoData';
import { Users, Shirt, Stethoscope, HeartHandshake, Trees } from 'lucide-react';

interface StatsBarProps {
  language: 'hi' | 'en';
}

export const StatsBar: React.FC<StatsBarProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Users className="w-8 h-8 text-white" />;
      case 'Shirt':
        return <Shirt className="w-8 h-8 text-white" />;
      case 'Stethoscope':
        return <Stethoscope className="w-8 h-8 text-white" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-8 h-8 text-white" />;
      case 'Trees':
        return <Trees className="w-8 h-8 text-white" />;
      default:
        return <Users className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Exact Mockup Green Bar */}
      <div className="bg-[#156d25] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 items-center">
          {STATS_DATA.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 justify-center py-2 px-3 ${
                index !== STATS_DATA.length - 1 ? 'lg:border-r border-white/25' : ''
              }`}
            >
              <div className="shrink-0 p-1">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-0.5 text-left">
                <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none font-['Noto_Sans_Devanagari'] text-white drop-shadow-xs">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm text-emerald-100 font-bold leading-tight font-['Noto_Sans_Devanagari']">
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

