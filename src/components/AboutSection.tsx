import React from 'react';
import { TRUST_INFO, TRUSTEES_DATA } from '../data/ngoData';
import { ShieldCheck, Heart, Award, FileText, CheckCircle, Users } from 'lucide-react';

interface AboutSectionProps {
  onOpenDonate: () => void;
  language: 'hi' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenDonate, language }) => {
  return (
    <div className="py-12 bg-[#f8faf7] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Banner */}
        <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-4 text-center sm:text-left relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="bg-emerald-700 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {language === 'hi' ? 'करुणा सेवा ट्रस्ट परिचय' : 'About Karuna Seva Trust'}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'मानवता की सेवा ही हमारा प्रथम कर्तव्य है' : 'Serving Humanity is Our Supreme Duty'}
            </h1>
            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
              करुणा सेवा ट्रस्ट एक गैर-सरकारी एवं गैर-लाभकारी पंजीकृत सार्वजनिक संस्था है जो समाज के वंचित, असहाय और जरूरतमंद वर्गों के सर्वांगीण विकास एवं उत्थान हेतु निरंतर प्रयासरत है।
            </p>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          
          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6 fill-emerald-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'हमारा लक्ष्य (Our Mission)' : 'Our Mission'}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              कोई भी व्यक्ति भूखा न सोए, हर मरीज को प्राथमिक चिकित्सा मिले, हर बेघर को तन ढकने का वस्त्र मिले और हर बच्चे को शिक्षा का प्रकाश मिले। पर्यावरण का संरक्षण कर आने वाली पीढ़ियों को स्वच्छ वायु व हरियाली सौंपना हमारा मुख्य ध्येय है।
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Award className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'हमारा दृष्टिकोण (Our Vision)' : 'Our Vision'}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              एक ऐसे समरस, करुणामय और स्वावलंबी समाज का निर्माण करना जहाँ किसी भी व्यक्ति के साथ धर्म, जाति या लिंग के आधार पर भेदभाव न हो और हर नागरिक को सम्मानजनक जीवन जीने का अवसर प्राप्त हो सके।
            </p>
          </div>

        </div>

        {/* Legal Certification & 80G Tax Exemption */}
        <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-emerald-800 pb-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                वैधानिक मान्यता एवं कर छूट प्रमाणन
              </span>
              <h3 className="text-2xl font-bold font-['Noto_Sans_Devanagari']">
                80G एवं 12A आयकर अधिनियम पंजीकृत ट्रस्ट
              </h3>
            </div>
            <button
              onClick={onOpenDonate}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 py-3 rounded-full text-sm shadow transition shrink-0"
            >
              कर मुक्त दान करें (80G Benefit)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-emerald-800/80 p-4 rounded-xl space-y-1">
              <div className="text-amber-300 font-bold flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>न्यास पंजीयन</span>
              </div>
              <p className="text-emerald-100 font-mono">{TRUST_INFO.regNo}</p>
            </div>

            <div className="bg-emerald-800/80 p-4 rounded-xl space-y-1">
              <div className="text-amber-300 font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>80G पंजीयन सं</span>
              </div>
              <p className="text-emerald-100 font-mono">TRUST/80G/2023/10492</p>
            </div>

            <div className="bg-emerald-800/80 p-4 rounded-xl space-y-1">
              <div className="text-amber-300 font-bold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                <span>ट्रस्ट पैन नंबर</span>
              </div>
              <p className="text-emerald-100 font-mono">{TRUST_INFO.panNo}</p>
            </div>

            <div className="bg-emerald-800/80 p-4 rounded-xl space-y-1">
              <div className="text-amber-300 font-bold flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>नीति आयोग दर्पण आईडी</span>
              </div>
              <p className="text-emerald-100 font-mono">DL/2019/0284910</p>
            </div>
          </div>
        </div>

        {/* Trustees & Leadership Team */}
        <div className="space-y-6 pt-4">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'न्यास प्रबंधक एवं हमारी टीम' : 'Board of Trustees & Team'}
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              अनुभवी, निःस्वार्थ और समर्पित न्यासियों का समूह जो बिना किसी पारिश्रमिक के केवल समाज कल्याण हेतु कार्यरत हैं।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUSTEES_DATA.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition text-center p-6 space-y-3"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto ring-4 ring-emerald-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg font-['Noto_Sans_Devanagari']">
                    {member.name}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full inline-block mt-1">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
