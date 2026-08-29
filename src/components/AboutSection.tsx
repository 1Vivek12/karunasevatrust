import React from 'react';
import { TRUST_INFO, TRUSTEES_DATA } from '../data/ngoData';
import { ShieldCheck, Heart, Award, FileText, CheckCircle, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { LegalCompliance } from './LegalCompliance';

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
              <Heart className="w-6 h-6 fill-emerald-700 text-emerald-700" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'हमारा लक्ष्य (Our Mission)' : 'Our Mission'}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm font-['Noto_Sans_Devanagari'] font-medium">
              करुणा केवल एक शब्द नहीं, हमारा जीवन-ध्येय है। हमारा प्रयास है कि कोई असहाय अकेला महसूस न करे—चाहे वह अन्नपूर्णा रसोई से किसी भूखे की तृप्ति हो, किसी बीमार की सेवा, बेघरों को वस्त्र, गरीब कन्याओं के विवाह में सम्बल, या पर्यावरण को बचाने के लिए रोपा गया हर एक नन्हा पौधा। सेवा ही हमारा सबसे बड़ा धर्म है।
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

        {/* Legal Certification & Registration Details */}
        <div className="bg-emerald-900 text-white p-8 rounded-3xl shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-emerald-800 pb-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">
                वैधानिक मान्यता एवं न्यास प्रमाणन
              </span>
              <h3 className="text-2xl font-bold font-['Noto_Sans_Devanagari']">
                उत्तर प्रदेश सरकार द्वारा पंजीकृत जनसेवा न्यास
              </h3>
            </div>
            <button
              onClick={onOpenDonate}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-6 py-3 rounded-full text-sm shadow transition shrink-0 cursor-pointer"
            >
              ऑनलाइन दान करें (Support Us)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-emerald-800/80 p-4 rounded-xl space-y-1">
              <div className="text-amber-300 font-bold flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                <span>न्यास पंजीयन क्रमांक</span>
              </div>
              <p className="text-emerald-100 font-mono">{TRUST_INFO.regNo}</p>
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

        {/* Legal Compliance & Trust Registration Details */}
        <LegalCompliance language={language} />

        {/* Trustees & Leadership Team (ONLY 2 members: Abhinav Kumar & Arjun Kumar) */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-slate-900 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'न्यास प्रबंधक एवं हमारी टीम' : 'Trust Management & Team'}
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto font-['Noto_Sans_Devanagari']">
              अनुभवी और समर्पित नेतृत्व जो निःस्वार्थ भाव से समाज कल्याण एवं पर्यावरण संरक्षण हेतु कार्यरत है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TRUSTEES_DATA.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl overflow-hidden border border-emerald-500/20 hover:border-emerald-600/40 shadow-md hover:shadow-xl transition-all text-center p-8 space-y-5 flex flex-col items-center justify-between"
              >
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#1a702b] p-1 bg-gradient-to-tr from-amber-400/20 to-emerald-500/20 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="space-y-3 w-full">
                  <div>
                    <h3 className="font-black text-slate-900 text-2xl font-['Noto_Sans_Devanagari']">
                      {member.name}
                    </h3>
                    <p className="text-sm font-extrabold text-[#1a702b] bg-emerald-50 border border-emerald-200 px-4 py-1 rounded-full inline-block mt-2 font-['Noto_Sans_Devanagari'] shadow-2xs">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-['Noto_Sans_Devanagari'] font-medium">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
