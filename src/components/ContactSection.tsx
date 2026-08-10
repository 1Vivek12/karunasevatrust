import React, { useState } from 'react';
import { TRUST_INFO, BANK_DETAILS } from '../data/ngoData';
import { MapPin, Phone, Mail, Clock, Copy, Send, CheckCircle2, MessageSquare, Building2, QrCode, Heart } from 'lucide-react';
import { PaymentHub } from './PaymentHub';

interface ContactSectionProps {
  language: 'hi' | 'en';
  onOpenDonateModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ language, onOpenDonateModal }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [inquirySent, setInquirySent] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'सामान्य पूछताछ',
    message: ''
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setContactForm({ name: '', phone: '', email: '', subject: 'सामान्य पूछताछ', message: '' });
    }, 3000);
  };

  return (
    <div className="py-12 bg-[#f8faf7] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Banner */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
            {language === 'hi' ? 'हमसे संपर्क करें' : 'Contact & Bank Details'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
            {language === 'hi' ? 'करुणा सेवा ट्रस्ट संपर्क केंद्र' : 'Reach Out to Karuna Seva Trust'}
          </h1>
          <p className="text-slate-600 text-sm">
            किसी भी जानकारी, सेवा सहायता, दान प्राप्ति अथवा आश्रम भ्रमण हेतु हमसे संपर्क करें।
          </p>
        </div>

        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 font-['Noto_Sans_Devanagari']">मुख्य कार्यालय पता</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{TRUST_INFO.address}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 font-['Noto_Sans_Devanagari']">संपर्क सूत्र (Phone)</h4>
            <p className="text-xs text-slate-600 font-mono">{TRUST_INFO.phone}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 font-['Noto_Sans_Devanagari']">ईमेल पता (Email)</h4>
            <p className="text-xs text-slate-600 font-mono">{TRUST_INFO.email}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 font-['Noto_Sans_Devanagari']">कार्यालय समय</h4>
            <p className="text-xs text-slate-600">{TRUST_INFO.workingHours}</p>
          </div>
        </div>

        {/* Bank Transfer Details Section (Full Card replaced with PaymentHub) */}
        <PaymentHub language={language} />

        {/* Contact Form & Map Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900 font-['Noto_Sans_Devanagari']">
              संदेश या पूछताछ भेजें (Send Message)
            </h3>

            {inquirySent ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg font-['Noto_Sans_Devanagari']">संदेश सफलतापूर्वक भेजा गया!</h4>
                <p className="text-xs text-slate-600">
                  हमारी टीम शीघ्र ही आपसे दिए गए मोबाइल नंबर या ईमेल पर संपर्क करेगी।
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">आपका नाम *</label>
                    <input
                      type="text"
                      required
                      placeholder="नाम"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">मोबाइल नंबर *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91..."
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">विषय (Subject)</label>
                  <input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">संदेश (Message) *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="अपना संदेश यहाँ लिखें..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600 resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={() => onOpenDonateModal && onOpenDonateModal()}
                  aria-haspopup="dialog"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black py-2.5 rounded-xl text-xs shadow transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>संदेश भेजें</span>
                </button>
              </form>
            )}
          </div>

          {/* Map Preview */}
          <div className="lg:col-span-5 bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
            <div className="p-4 bg-emerald-800 text-white font-bold text-sm font-['Noto_Sans_Devanagari'] flex items-center gap-2">
              <Heart className="w-4 h-4 fill-slate-950" aria-hidden="true" />
              <span>करुणा सेवा आश्रम स्थान (Delhi Branch)</span>
            </div>
            
            <div className="flex-1 min-h-[300px] sm:min-h-[200px] bg-slate-100 relative flex items-center justify-center">
              {/* Map Canvas Illustration */}
              <div className="absolute inset-0 bg-[#e5e3df] p-6 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-base font-['Noto_Sans_Devanagari']">
                    {TRUST_INFO.nameHi} आश्रम
                  </h4>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto mt-1">
                    {TRUST_INFO.address}
                  </p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(TRUST_INFO.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-full shadow transition"
                >
                  Google Maps पर दिशा-निर्देश देखें
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
