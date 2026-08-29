import React from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { ActiveTab } from '../types';
import { Heart, ShieldCheck, MapPin, Phone, Mail, ChevronRight, Users, MessageSquare } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDonateModal: () => void;
  language: 'hi' | 'en';
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenDonateModal,
  language
}) => {
  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t-4 border-[#1a702b] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About Trust */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-emerald-500/20 shrink-0 shadow-md">
                <img 
                  src="/assets/splash-logo.png" 
                  alt="NGO Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white font-['Noto_Sans_Devanagari'] leading-none">
                  {TRUST_INFO.nameHi}
                </h3>
                <p className="text-[11px] text-emerald-300 font-medium mt-0.5">
                  — {TRUST_INFO.taglineHi} —
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-200/90 leading-relaxed">
              करुणा सेवा ट्रस्ट एक पंजीकृत जनसेवा संस्था है जो वृक्षारोपण, भोजन सेवा, वस्त्र वितरण, शिक्षा सहायता, स्वास्थ्य शिविर और विवाह सहयोग के लिए समर्पित है।
            </p>

            <div className="bg-emerald-900/80 p-3 rounded-xl border border-emerald-800 text-xs space-y-1">
              <p className="font-bold text-amber-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>सरकारी पंजीकृत संस्था:</span>
              </p>
              <p className="text-[11px] text-emerald-200">
                100% पारदर्शी एवं सामाजिक कल्याण के लिए संकल्पित गैर-सरकारी संगठन।
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base font-['Noto_Sans_Devanagari'] border-b border-emerald-800 pb-2">
              नेविगेशन (Quick Links)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-amber-300 flex items-center gap-1 transition min-h-[32px]">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>मुख्य पृष्ठ (Home)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-amber-300 flex items-center gap-1 transition min-h-[32px]">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>हमारे बारे में (About Us)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('works')} className="hover:text-amber-300 flex items-center gap-1 transition min-h-[32px]">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>हमारे कार्य (Our Works)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('activities')} className="hover:text-amber-300 flex items-center gap-1 transition min-h-[32px]">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>गतिविधियाँ (Activities)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-amber-300 flex items-center gap-1 transition min-h-[32px]">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>फोटो गैलरी (Gallery)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('opinion')} className="hover:text-amber-300 flex items-center gap-1 transition min-h-[32px]">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>सुझाव व क्षेत्र कार्य अनुरोध (Suggestions)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('volunteer')} className="hover:text-amber-300 flex items-center gap-1 transition min-h-[32px]">
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>स्वयंसेवक बनें (Volunteer)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Works */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base font-['Noto_Sans_Devanagari'] border-b border-emerald-800 pb-2">
               प्रमुख सेवा अभियान
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200">
              <li>• हरित धरा वृक्षारोपण अभियान</li>
              <li>• भोजन सेवा (अन्नपूर्णा रसोई)</li>
              <li>• गरम वस्त्र व कंबल वितरण</li>
              <li>• बाल शिक्षा एवं पठन सामग्री</li>
              <li>• निशुल्क स्वास्थ्य व नेत्र शिविर</li>
              <li>• निर्धन कन्या विवाह सहयोग</li>
            </ul>
          </div>

          {/* Col 4: Contact & Donate CTA */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base font-['Noto_Sans_Devanagari'] border-b border-emerald-800 pb-2">
              संपर्क सूत्र (Contact Us)
            </h4>
            <div className="space-y-2 text-xs text-emerald-200">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{TRUST_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{TRUST_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{TRUST_INFO.email}</span>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { setActiveTab('volunteer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="w-full bg-emerald-900/40 hover:bg-emerald-900/60 text-emerald-100 border border-emerald-700/50 font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm min-h-[44px]"
              >
                <Users className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                <span>{language === 'hi' ? 'स्वयंसेवक बनें' : 'Join Us'}</span>
              </button>
              <button
                onClick={onOpenDonateModal}
                aria-haspopup="dialog"
                className="w-full bg-[#1a702b] hover:bg-[#145b22] text-white font-black py-3 rounded-xl text-sm shadow transition flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <Heart className="w-4 h-4 fill-white" aria-hidden="true" />
                <span>{language === 'hi' ? 'ऑनलाइन दान करें' : 'Donate Now'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 border-t border-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-400">
          <p>© {new Date().getFullYear()} {TRUST_INFO.nameHi}. सर्वाधिकार सुरक्षित।</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px]">
            <span>पंजीयन सं: {TRUST_INFO.regNo}</span>
            <span className="hidden sm:inline">•</span>
            <span>#SevaParmodharma</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
