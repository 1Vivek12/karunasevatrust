import React, { useState } from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { ShieldCheck, Copy, CheckCircle2, X, FileText, Calendar, MapPin, User, Stamp, Hash } from 'lucide-react';
import { motion } from 'motion/react';

// Trust Legal Data
const LEGAL_DATA = {
  trustName: 'Karuna Seva Trust (करुणा सेवा ट्रस्ट)',
  trustNameHi: 'करुणा सेवा ट्रस्ट (पंजीकृत न्यास)',
  founder: 'श्री अभिनव कुमार (Shri Abhinav Kumar)',
  eStampCertNo: 'IN-UP61947604089839Y',
  docUniqueRef: 'SUBIN-UPUP1472240417553751843606Y',
  registrationDate: '10 जुलाई 2026',
  registeredOffice:
    '69 एफ, सेक्टर-3, शिवपुर, सहबागंज, शक्तिनगर कॉलोनी, वार्ड-15, गोरखपुर - 273014, उत्तर प्रदेश',
  regAuthority: 'उत्तर प्रदेश सरकार द्वारा पंजीकृत न्यास',
};

interface LegalComplianceProps {
  language: 'hi' | 'en';
}

export const LegalCompliance: React.FC<LegalComplianceProps> = ({ language }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showDeedModal, setShowDeedModal] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const fields = [
    {
      icon: <FileText className="w-5 h-5" />,
      label: language === 'hi' ? 'न्यास नाम (Trust Name)' : 'Trust Name',
      value: LEGAL_DATA.trustName,
      mono: false,
      copyKey: null,
    },
    {
      icon: <User className="w-5 h-5" />,
      label: language === 'hi' ? 'संस्थापक (Founder & Settlor)' : 'Founder & Settlor',
      value: LEGAL_DATA.founder,
      mono: false,
      copyKey: null,
    },
    {
      icon: <Stamp className="w-5 h-5" />,
      label: 'e-Stamp Certificate No',
      value: LEGAL_DATA.eStampCertNo,
      mono: true,
      copyKey: 'estamp',
    },
    {
      icon: <Hash className="w-5 h-5" />,
      label: 'Doc Unique Ref No',
      value: LEGAL_DATA.docUniqueRef,
      mono: true,
      copyKey: 'docref',
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: language === 'hi' ? 'पंजीकरण तिथि (Registration Date)' : 'Registration Date',
      value: LEGAL_DATA.registrationDate,
      mono: false,
      copyKey: null,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: language === 'hi' ? 'पंजीकृत कार्यालय (Registered Office)' : 'Registered Office',
      value: LEGAL_DATA.registeredOffice,
      mono: false,
      copyKey: null,
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full"
      >
        {/* Section Heading */}
        <div className="text-center space-y-2 mb-8">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {language === 'hi' ? 'वैधानिक एवं न्यास विवरण' : 'Legal & Trust Registration Details'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
            {language === 'hi'
              ? 'वैधानिक एवं न्यास पंजीकरण विवरण'
              : 'Legal & Trust Registration Details'}
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            {language === 'hi'
              ? 'करुणा सेवा ट्रस्ट उत्तर प्रदेश सरकार के ट्रस्ट एक्ट के तहत विधिवत पंजीकृत संस्था है।'
              : 'Karuna Seva Trust is a legally registered entity under the UP Trust Act.'}
          </p>
        </div>

        {/* Main Glassmorphism Card */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge Header */}
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shadow-lg shadow-emerald-500/10">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <p className="text-emerald-300 font-bold text-sm tracking-wide">
                {LEGAL_DATA.regAuthority}
              </p>
              <p className="text-emerald-500/70 text-xs">
                {language === 'hi'
                  ? 'विधिवत सत्यापित एवं प्रमाणित न्यास'
                  : 'Legally Verified & Certified Trust'}
              </p>
            </div>
          </div>

          {/* Bento Grid of Legal Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {fields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`bg-slate-800/60 border border-emerald-500/15 rounded-xl p-4 space-y-2 hover:border-emerald-500/30 transition-colors ${
                  field.copyKey === 'docref' ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-center gap-2 text-amber-400">
                  {field.icon}
                  <span className="text-xs font-bold uppercase tracking-wide">{field.label}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p
                    className={`text-sm leading-relaxed ${
                      field.mono
                        ? 'font-mono text-emerald-300 break-all'
                        : "text-white font-semibold font-['Noto_Sans_Devanagari']"
                    }`}
                  >
                    {field.value}
                  </p>
                  {field.copyKey && (
                    <button
                      onClick={() => handleCopy(field.value, field.copyKey!)}
                      className="shrink-0 p-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-300 transition-colors"
                      title="Copy"
                    >
                      {copiedKey === field.copyKey ? (
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Trust Deed Button */}
          <div className="mt-6 flex justify-center relative z-10">
            <button
              onClick={() => setShowDeedModal(true)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg shadow-emerald-800/30 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-5 h-5" />
              <span className="font-['Noto_Sans_Devanagari']">
                {language === 'hi'
                  ? 'न्यास विलेख देखें (View Official Deed Document)'
                  : 'View Official Trust Deed'}
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Trust Deed Dialog/Modal */}
      {showDeedModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowDeedModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <div>
                  <h3 className="text-white font-bold text-lg font-['Noto_Sans_Devanagari']">
                    {language === 'hi' ? 'न्यास विलेख (Trust Deed)' : 'Official Trust Deed Document'}
                  </h3>
                  <p className="text-emerald-400/70 text-xs">
                    e-Stamp: {LEGAL_DATA.eStampCertNo}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDeedModal(false)}
                className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-slate-950/50">
              <img
                src="/assets/trust-deed.jpg"
                alt="करुणा सेवा ट्रस्ट — Official Trust Deed Document (e-Stamp)"
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg border border-slate-700"
                loading="eager"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-emerald-500/20 flex items-center justify-between text-xs text-emerald-400">
              <p>Doc Ref: {LEGAL_DATA.docUniqueRef}</p>
              <button
                onClick={() => setShowDeedModal(false)}
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded-lg transition text-sm"
              >
                {language === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};
