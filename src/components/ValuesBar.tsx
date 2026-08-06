import React from 'react';
import { VALUES_DATA } from '../data/ngoData';
import { ShieldCheck, Heart, Users, Target, Quote } from 'lucide-react';

interface ValuesBarProps {
  language: 'hi' | 'en';
}

export const ValuesBar: React.FC<ValuesBarProps> = ({ language }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-emerald-700 fill-emerald-100" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-700" />;
      case 'Target':
        return <Target className="w-5 h-5 text-emerald-700" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section className="py-10 bg-emerald-50/60 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
          
          {/* 4 Value Pillars */}
          {VALUES_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white/90 backdrop-blur-xs p-4 rounded-xl border border-emerald-100/80 shadow-2xs hover:shadow-md transition flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                {getIcon(item.icon)}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm font-['Noto_Sans_Devanagari']">
                  {language === 'hi' ? item.title : item.titleEn}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                  {language === 'hi' ? item.description : item.descriptionEn}
                </p>
              </div>
            </div>
          ))}

          {/* 5th Card: Quote Box (Exact dark green quote card on right) */}
          <div className="bg-emerald-700 text-white p-5 rounded-2xl shadow-md flex flex-col justify-between sm:col-span-2 lg:col-span-1 relative overflow-hidden group">
            <Quote className="absolute -right-2 -bottom-2 w-20 h-20 text-emerald-600/30 rotate-12 pointer-events-none" />
            
            <div className="relative z-10 space-y-2">
              <span className="text-emerald-300 font-serif text-3xl leading-none block font-black">“</span>
              <p className="text-sm font-bold text-white leading-snug font-['Noto_Sans_Devanagari']">
                {language === 'hi'
                  ? 'एक छोटा सा कदम, किसी की जिंदगी बदल सकता है।'
                  : 'A small step can transform someone’s entire life.'}
              </p>
            </div>

            <div className="relative z-10 pt-3 flex items-center justify-between text-[11px] text-emerald-200 border-t border-emerald-600/60 mt-2">
              <span>करुणा सेवा ट्रस्ट संकल्प</span>
              <span className="font-bold text-white">#SevaParmodharma</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
