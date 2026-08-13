import React from 'react';
import { VALUES_DATA } from '../data/ngoData';
import { ShieldCheck, Heart, Users, Target } from 'lucide-react';

interface ValuesBarProps {
  language: 'hi' | 'en';
}

export const ValuesBar: React.FC<ValuesBarProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#156d25]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#156d25] fill-emerald-100" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#156d25]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#156d25]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#156d25]" />;
    }
  };

  return (
    <section className="py-8 bg-[#f0f7f2] border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          
          {/* 4 Value Pillars matching Mockup */}
          {VALUES_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl border border-slate-100 shadow-2xs hover:shadow-xs transition flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-100/80 flex items-center justify-center shrink-0 mt-0.5 text-[#156d25]">
                {getIcon(item.icon)}
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm font-['Noto_Sans_Devanagari']">
                  {language === 'hi' ? item.title : item.titleEn}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug font-['Noto_Sans_Devanagari']">
                  {language === 'hi' ? item.description : item.descriptionEn}
                </p>
              </div>
            </div>
          ))}

          {/* 5th Card: Exact Mockup Green Quote Box */}
          <div className="bg-[#156d25] text-white p-5 rounded-xl shadow-md flex items-center justify-between sm:col-span-2 lg:col-span-1 relative overflow-hidden group">
            <div className="flex items-center gap-3 relative z-10">
              <span className="text-amber-300 font-serif text-4xl leading-none font-black">“</span>
              <p className="text-xs sm:text-sm font-extrabold text-white leading-snug font-['Noto_Sans_Devanagari']">
                {language === 'hi'
                  ? 'एक छोटा सा कदम, किसी की जिंदगी बदल सकता है।'
                  : 'A small step can transform someone’s entire life.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
