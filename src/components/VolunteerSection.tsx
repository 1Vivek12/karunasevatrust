import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TRUST_INFO } from '../data/ngoData';
import { VolunteerFormData } from '../types';
import { Users, CheckCircle, Award, Heart, ShieldCheck, Sparkles, Send, Download, Printer, X } from 'lucide-react';
import { CertificateTemplate } from './CertificateTemplate';

interface VolunteerSectionProps {
  language: 'hi' | 'en';
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({ language }) => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: 'नई दिल्ली',
    occupation: 'छात्र / नौकरीपेशा',
    interests: ['भोजन वितरण', 'वृक्षारोपण'],
    availability: 'सप्ताहांत (Weekends)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [volunteerId, setVolunteerId] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);

  const interestOptions = [
    'भोजन वितरण (Food Drive)',
    'स्वास्थ्य शिविर (Medical Camp)',
    'वस्त्र व कंबल वितरण (Clothes Drive)',
    'पर्यावरण व वृक्षारोपण (Plantation)',
    'बाल शिक्षा व ट्यूशन (Teaching)',
    'सोशल मीडिया व इवेंट्स (Event Management)'
  ];

  const handleInterestToggle = (item: string) => {
    if (formData.interests.includes(item)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter((i) => i !== item)
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, item]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert(language === 'hi' ? 'कृपया अपना नाम और मोबाइल नंबर भरें' : 'Please fill Name and Mobile Number');
      return;
    }

    const newId = `VOL-KST-${Math.floor(1000 + Math.random() * 9000)}`;
    setVolunteerId(newId);
    setIsSubmitted(true);

    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="py-12 bg-[#f8faf7] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Banner */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center justify-center gap-1.5 w-fit mx-auto">
            <Users className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'सेवा ही सबसे बड़ा धर्म है' : 'Become a Volunteer'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
            {language === 'hi' ? 'करुणा सेवा ट्रस्ट के स्वयंसेवक बनें' : 'Join as a Volunteer'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            समय, ज्ञान & सेवा का दान करके किसी की जिंदगी बदलने का माध्यम बनें। हमसे जुड़ें और नि:स्वार्थ समाज सेवा का हिस्सा बनें।
          </p>
        </div>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Info Column - Light Green Aesthetic */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100 text-slate-900 p-8 rounded-3xl border-2 border-emerald-300 shadow-md space-y-6">
              <div className="space-y-2">
                <span className="text-emerald-800 font-extrabold text-xs uppercase tracking-wider bg-white/80 px-3 py-1 rounded-full border border-emerald-200 shadow-2xs">
                  स्वयंसेवक बनने के लाभ
                </span>
                <h3 className="text-2xl font-black font-['Noto_Sans_Devanagari'] text-emerald-950">
                  क्यों जुड़ें करुणा सेवा ट्रस्ट से?
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-slate-900">आधिकारिक स्वयंसेवक प्रमाण पत्र</h4>
                    <p className="text-xs text-slate-600 mt-0.5">सफल सेवा सहभागिता पर ट्रस्ट का सर्टिफिकेट प्रदान किया जाता है।</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-slate-900">समाज सेवा एवं आत्मसंतुष्टि</h4>
                    <p className="text-xs text-slate-600 mt-0.5">जरूरतमंदों के चेहरे पर मुस्कान लाने की असीम आध्यात्मिक अनुभूति।</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-slate-900">कौशल एवं नेतृत्व विकास</h4>
                    <p className="text-xs text-slate-600 mt-0.5">इवेंट मैनेजमेंट, टीम लीडरशिप और कम्युनिकेशन स्किल्स का विकास।</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 p-4 rounded-2xl border-2 border-emerald-300 text-xs text-emerald-950 space-y-1 shadow-xs">
                <p className="font-black text-emerald-800 text-sm">विशेष नोट:</p>
                <p className="font-bold">स्वयंसेवक के रूप में जुड़ने हेतु सदस्यता फीस मात्र ₹11 रखी गई है।</p>
              </div>
            </div>

            {/* Right Registration Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-emerald-200 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-100 pb-3">
                  <h3 className="text-xl font-bold text-slate-900 font-['Noto_Sans_Devanagari']">
                    स्वयंसेवक पंजीकरण फॉर्म (Volunteer Registration)
                  </h3>
                  <span className="bg-emerald-700 text-white text-xs font-black px-3 py-1 rounded-full shadow-xs shrink-0 w-fit">
                    सदस्यता फीस: ₹11
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">पूरा नाम (Full Name) *</label>
                    <input
                      type="text"
                      required
                      placeholder="श्री / श्रीमती / सुश्री..."
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">मोबाइल नंबर (Phone) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">ईमेल आईडी (Email)</label>
                    <input
                      type="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">शहर / क्षेत्र (City / Area)</label>
                    <input
                      type="text"
                      placeholder="उदा. दिल्ली, नोएडा, जयपुर..."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                {/* Skill / Interest Selection */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-slate-700 block">
                    आप किन सेवा कार्यों में रुचि रखते हैं? (Select Areas of Interest)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interestOptions.map((opt) => {
                      const isChecked = formData.interests.includes(opt);
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => handleInterestToggle(opt)}
                          className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition flex items-center gap-2 ${
                            isChecked
                              ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                            isChecked ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-slate-300'
                          }`}>
                            {isChecked ? '✓' : ''}
                          </span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">संदेश या सुझाव (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="आप हमारे साथ कैसे योगदान देना चाहते हैं..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base py-3.5 rounded-2xl shadow-lg shadow-emerald-800/20 hover:shadow-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>स्वयंसेवक पंजीकरण जमा करें (सदस्यता फीस ₹11)</span>
                </button>
              </form>
            </div>

          </div>
        ) : (
          /* Instant Generated Volunteer Card & Certificate Option */
          <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl max-w-lg mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mx-auto">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                पंजीकरण सफल!
              </span>
              <h3 className="text-2xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
                बधाई हो, {formData.fullName}!
              </h3>
              <p className="text-xs text-slate-600 font-['Noto_Sans_Devanagari']">
                आप करुणा सेवा ट्रस्ट के पंजीकृत स्वयंसेवक बन चुके हैं।
              </p>
            </div>

            {/* Simulated Volunteer Pass Badge */}
            <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white p-6 rounded-2xl text-left space-y-3 relative overflow-hidden shadow-md">
              <div className="flex justify-between items-center border-b border-emerald-700 pb-2">
                <div>
                  <p className="font-extrabold text-white text-sm font-['Noto_Sans_Devanagari']">{TRUST_INFO.nameHi}</p>
                  <p className="text-[10px] text-emerald-300">VOLUNTEER IDENTITY CARD</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-white" />
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <p>नाम: <strong className="text-white text-sm">{formData.fullName}</strong></p>
                <p>स्वयंसेवक सं: <strong className="font-mono text-amber-300">{volunteerId}</strong></p>
                <p>शहर: <span>{formData.city}</span></p>
                <p>फोन: <span>{formData.phone}</span></p>
              </div>

              <div className="pt-2 border-t border-emerald-700 text-[10px] text-emerald-300 flex justify-between">
                <span>सत्यापित न्यास सदस्य</span>
                <span>#SevaParmodharma</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setShowCertificate(true)}
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition"
              >
                <Award className="w-4 h-4" />
                <span>सेवा प्रमाण पत्र देखें व प्रिंट करें</span>
              </button>

              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl text-xs transition"
              >
                दूसरा पंजीकरण करें
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Volunteer Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto no-print">
          <div className="bg-white rounded-3xl shadow-2xl border border-emerald-200 max-w-[1180px] w-full overflow-hidden">
            
            {/* Top Control Bar */}
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5" />
                <span>स्वयंसेवक प्रमाण पत्र (Official Volunteering Certificate)</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>प्रमाण पत्र प्रिंट करें / Save PDF</span>
                </button>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Render */}
            <div className="p-4 bg-slate-100 flex items-center justify-center overflow-x-auto">
              <div className="min-w-[1123px]">
                <CertificateTemplate
                  type="VOLUNTEER"
                  name={formData.fullName}
                  contributionTitle={formData.interests.map(i => i.split(' (')[0]).join(', ') || 'समाज सेवा'}
                  certificateId={volunteerId}
                />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
