import React, { useState } from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { MessageSquare, MapPin, Send, CheckCircle2, Trees, Utensils, Shirt, GraduationCap, Stethoscope, HeartHandshake, Sparkles, HelpCircle, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';

interface OpinionRequestSectionProps {
  language: 'hi' | 'en';
}

export const OpinionRequestSection: React.FC<OpinionRequestSectionProps> = ({ language }) => {
  const [formType, setFormType] = useState<'area_request' | 'opinion'>('area_request');
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    category: 'वृक्षारोपण (Tree Plantation)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.message) {
      alert(language === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें' : 'Please fill all required fields');
      return;
    }
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      location: '',
      category: 'वृक्षारोपण (Tree Plantation)',
      message: ''
    });
    setSubmitted(false);
  };

  const sampleCommunityRequests = [
    {
      id: 1,
      type: 'क्षेत्रीय कार्य अनुरोध',
      category: 'वृक्षारोपण',
      area: 'राप्ती नगर, गोरखपुर',
      name: 'संजय वर्मा',
      status: 'स्वीकृत (Approved)',
      statusColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      desc: 'हमारे क्षेत्र के पार्क के चारों तरफ 100 फलदार व छायादार पौधे लगाने का अनुरोध।'
    },
    {
      id: 2,
      type: 'क्षेत्रीय कार्य अनुरोध',
      category: 'भोजन सेवा',
      area: 'अस्पताल मार्ग, गोरखपुर',
      name: 'अमित श्रीवास्तव',
      status: 'कार्य प्रगति पर (In Progress)',
      statusColor: 'bg-amber-100 text-amber-900 border-amber-300',
      desc: 'जिला अस्पताल के बाहर मरीजों के परिजनों के लिए रविवार भोजन शिविर।'
    },
    {
      id: 3,
      type: 'जन सुझाव',
      category: 'शिक्षा सहायता',
      area: 'सहबागंज, गोरखपुर',
      name: 'किरण देवी',
      status: 'समीक्षाधीन (Under Review)',
      statusColor: 'bg-blue-100 text-blue-900 border-blue-300',
      desc: 'झुग्गी-झोपड़ी के बच्चों के लिए शाम की निशुल्क कोचिंग क्लास शुरू करने का सुझाव।'
    }
  ];

  return (
    <div className="py-12 bg-[#f8faf7] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#12501d] via-[#1a702b] to-[#12501d] text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center relative overflow-hidden space-y-4">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <span className="bg-white/15 border border-white/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'जन सहभागिता मंच' : 'Citizen Participation Portal'}</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Noto_Sans_Devanagari'] leading-tight">
              {language === 'hi' 
                ? 'जन सुझाव एवं क्षेत्र कार्य अनुरोध केंद्र' 
                : 'Suggestions & Community Work Request'}
            </h1>

            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed font-['Noto_Sans_Devanagari'] max-w-2xl mx-auto">
              आपकी राय हमारे लिए अत्यंत मूल्यवान है! यदि आप अपने क्षेत्र (मोहल्ले, गाँव या शहर) में करुणा सेवा ट्रस्ट के माध्यम से वृक्षारोपण, भोजन सेवा, वस्त्र वितरण, स्वास्थ्य शिविर या शिक्षा सहायता करवाना चाहते हैं, तो नीचे फॉर्म भरें।
            </p>
          </div>
        </div>

        {/* Main Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-emerald-100 shadow-md space-y-6">
            
            {/* Form Type Selector */}
            <div className="flex rounded-2xl bg-slate-100 p-1.5 border border-slate-200">
              <button
                type="button"
                onClick={() => setFormType('area_request')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                  formType === 'area_request'
                    ? 'bg-[#1a702b] text-white shadow-md'
                    : 'text-slate-700 hover:text-[#1a702b]'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span>क्षेत्रीय कार्य का अनुरोध करें</span>
              </button>

              <button
                type="button"
                onClick={() => setFormType('opinion')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 ${
                  formType === 'opinion'
                    ? 'bg-[#1a702b] text-white shadow-md'
                    : 'text-slate-700 hover:text-[#1a702b]'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>अपनी राय / सुझाव दें</span>
              </button>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border-2 border-emerald-300 p-8 rounded-2xl text-center space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-emerald-950 font-['Noto_Sans_Devanagari']">
                    धन्यवाद! आपका {formType === 'area_request' ? 'क्षेत्र कार्य अनुरोध' : 'सुझाव'} दर्ज कर लिया गया है।
                  </h3>
                  <p className="text-sm text-slate-700 font-['Noto_Sans_Devanagari'] max-w-md mx-auto">
                    करुणा सेवा ट्रस्ट की टीम शीघ्र ही आपके दिए गए विवरण की समीक्षा करेगी तथा आवश्यकतानुसार आपके मोबाइल नंबर ({formData.phone}) पर संपर्क करेगी।
                  </p>
                </div>

                <button
                  onClick={resetForm}
                  className="bg-[#1a702b] hover:bg-[#145b22] text-white font-bold px-6 py-2.5 rounded-xl shadow text-sm transition"
                >
                  दूसरा {formType === 'area_request' ? 'अनुरोध' : 'सुझाव'} भेजें
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      आपका पूरा नाम *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. अमित कुमार"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1a702b] focus:ring-2 focus:ring-emerald-100 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      मोबाइल नंबर *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1a702b] focus:ring-2 focus:ring-emerald-100 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      स्थान / क्षेत्र का नाम (शहर/गाँव/मोहल्ला) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="उदा. राप्ती नगर, गोरखपुर"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1a702b] focus:ring-2 focus:ring-emerald-100 font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">
                      संबंधित सेवा श्रेणी (Category)
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1a702b] focus:ring-2 focus:ring-emerald-100 font-bold"
                    >
                      <option value="वृक्षारोपण (Tree Plantation)">🌱 वृक्षारोपण (Tree Plantation)</option>
                      <option value="भोजन सेवा (Food Service)">🍲 भोजन सेवा (Food Service)</option>
                      <option value="वस्त्र वितरण (Clothes Drive)">👕 वस्त्र वितरण (Clothes Drive)</option>
                      <option value="शिक्षा सहायता (Education Aid)">🎓 शिक्षा सहायता (Education Aid)</option>
                      <option value="स्वास्थ्य शिविर (Medical Camp)">🩺 स्वास्थ्य शिविर (Medical Camp)</option>
                      <option value="विवाह सहयोग (Marriage Support)">🤝 विवाह सहयोग (Marriage Support)</option>
                      <option value="अन्य सामान्य सुझाव (Other)">💡 अन्य सामान्य सुझाव (Other)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-800 block mb-1">
                    {formType === 'area_request' 
                      ? 'क्षेत्रीय कार्य का विस्तृत विवरण (किस तरह की सहायता चाहिए) *' 
                      : 'आपकी राय या सुझाव का विस्तृत विवरण *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      formType === 'area_request'
                        ? 'कृपया स्थान का नाम, लोगों की संभावित संख्या तथा कार्य का प्रकार विस्तार से लिखें...'
                        : 'अपने विचार, सुझाव या ट्रस्ट के लिए सलाह यहाँ साझा करें...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#1a702b] focus:ring-2 focus:ring-emerald-100 resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a702b] hover:bg-[#145b22] text-white font-extrabold text-base py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-5 h-5 text-white" />
                  <span>{formType === 'area_request' ? 'क्षेत्रीय कार्य अनुरोध सबमिट करें' : 'अपना सुझाव भेजें'}</span>
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Recent Requests Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#1a702b] font-extrabold text-base border-b border-emerald-100 pb-3">
                <ThumbsUp className="w-5 h-5 text-[#1a702b]" />
                <span>हाल में प्राप्त जन अनुरोध व स्थितियाँ:</span>
              </div>

              <div className="space-y-3">
                {sampleCommunityRequests.map((req) => (
                  <div key={req.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {req.category}
                      </span>
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${req.statusColor}`}>
                        {req.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      "{req.desc}"
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span className="font-semibold text-slate-800">निवेदक: {req.name}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[#1a702b]" />{req.area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Helpline Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-green-950 text-white p-6 rounded-3xl shadow-md space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <HelpCircle className="w-5 h-5" />
                <span>त्वरित सहायता हेल्पलाइन</span>
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed">
                यदि आपको तुरंत सहायता या आपातकालीन शिविर की आवश्यकता है, तो सीधे हमारे हेल्पलाइन नंबर पर संपर्क करें:
              </p>
              <div className="bg-emerald-800/80 p-3 rounded-xl border border-emerald-700 text-center font-mono text-sm font-bold text-amber-300">
                {TRUST_INFO.phone}
              </div>
              <p className="text-[11px] text-emerald-300 text-center">
                कार्यालय समय: {TRUST_INFO.workingHours}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
