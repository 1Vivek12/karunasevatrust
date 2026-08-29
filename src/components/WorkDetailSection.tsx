import React, { useState } from 'react';
import { MAJOR_WORKS } from '../data/ngoData';
import { ServiceCard } from '../types';
import { Heart, CheckCircle2, ArrowRight } from 'lucide-react';

interface WorkDetailSectionProps {
  selectedWork?: ServiceCard | null;
  onOpenDonate: () => void;
  language: 'hi' | 'en';
}

export const WorkDetailSection: React.FC<WorkDetailSectionProps> = ({
  selectedWork,
  onOpenDonate,
  language
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(selectedWork?.id || 'all');

  const filteredWorks = activeFilter === 'all'
    ? MAJOR_WORKS
    : MAJOR_WORKS.filter((w) => w.id === activeFilter);

  return (
    <div className="py-12 bg-[#f8faf7] space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
            {language === 'hi' ? 'सेवा ही परमो धर्म:' : 'Our Core Initiatives'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
            {language === 'hi' ? 'करुणा सेवा ट्रस्ट के प्रमुख सेवा कार्य' : 'Key Services of Karuna Seva Trust'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            हम समाज के हर वर्ग तक पहुंचकर वृक्षारोपण, भोजन, वस्त्र, शिक्षा, स्वास्थ्य और विवाह सहयोग के क्षेत्र में नि:स्वार्थ कार्य कर रहे हैं।
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition ${
              activeFilter === 'all'
                ? 'bg-[#1a702b] text-white shadow'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50'
            }`}
          >
            सभी सेवा कार्य (All Services)
          </button>
          {MAJOR_WORKS.map((w) => (
            <button
              key={w.id}
              onClick={() => setActiveFilter(w.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                activeFilter === w.id
                  ? 'bg-[#1a702b] text-white shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50'
              }`}
            >
              {language === 'hi' ? w.title : w.titleEn}
            </button>
          ))}
        </div>

        {/* Detailed Work Cards */}
        <div className="space-y-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Left Image Banner */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-emerald-800/90 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md backdrop-blur-xs">
                  {work.impactMetric}
                </div>
              </div>

              {/* Right Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#1a702b]"></span>
                    <h2 className="text-2xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
                      {language === 'hi' ? work.title : work.titleEn}
                    </h2>
                  </div>

                  <p className="text-slate-800 font-medium text-base">
                    {language === 'hi' ? work.description : work.descriptionEn}
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {work.details}
                  </p>

                  <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100 space-y-1.5 text-xs text-emerald-950 font-medium">
                    <div className="flex items-center gap-2 font-bold text-[#1a702b]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>प्रमुख विशेषताएँ व प्रभाव:</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-1 text-slate-700">
                      <li>दैनिक एवं साप्ताहिक नियमित अभियानों का नि:शुल्क संचालन।</li>
                      <li>स्थानीय प्रशासन एवं निस्वार्थ वालंटियर्स के सहयोग से पूर्ण पारदर्शिता।</li>
                      <li>दाता को लाइव फोटो एवं डिजिटल रसीद प्रमाण पत्र की व्यवस्था।</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="text-xs text-slate-500 font-bold">
                    100% निष्काम पारदर्शी सेवा
                  </div>
                  <button
                    onClick={onOpenDonate}
                    className="bg-[#1a702b] hover:bg-[#145b22] text-white font-bold px-6 py-2.5 rounded-full shadow flex items-center gap-2 transition cursor-pointer text-sm"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    <span>इस कार्य में सहयोग करें</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
