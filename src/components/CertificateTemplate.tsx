import React from 'react';
import { TRUST_INFO } from '../data/ngoData';

export interface CertificateTemplateProps {
  type: '80G_DONATION' | 'VOLUNTEER' | 'CSR_IMPACT';
  name?: string; // used for donor or volunteer or company name
  amount?: number;
  amountInWords?: string;
  panNo?: string;
  receiptNo?: string;
  date?: string;
  contributionTitle?: string;
  certificateId?: string;
  language?: 'hi' | 'en';
}

export const CertificateTemplate: React.FC<CertificateTemplateProps> = ({
  type,
  name = '',
  amount,
  amountInWords = '',
  panNo = '',
  receiptNo = '',
  date = new Date().toLocaleDateString('hi-IN'),
  contributionTitle = '',
  certificateId = `KST-CERT-${Math.floor(100000 + Math.random() * 900000)}`,
  language = 'hi'
}) => {
  return (
    <div className="print-container w-full flex items-center justify-center p-4 bg-slate-100 min-h-screen print:p-0 print:bg-white print:min-h-0">
      <div 
        id="certificate-print-area"
        className="relative w-[1123px] h-[794px] aspect-[1.414/1] bg-white border-[16px] border-[#064e3b] p-8 flex flex-col justify-between shadow-2xl print:shadow-none print:border-[12px] box-border select-none overflow-hidden"
      >
        {/* Inner Gold Border */}
        <div className="absolute inset-2 border-2 border-[#D4AF37] pointer-events-none" />

        {/* Ornamental Corner Accents */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#D4AF37] pointer-events-none" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#D4AF37] pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#D4AF37] pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#D4AF37] pointer-events-none" />

        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <img src="/assets/splash-logo.png" alt="Watermark" className="w-[450px] h-[450px] object-contain" />
        </div>

        {/* Top Header Section */}
        <div className="text-center space-y-2 z-10">
          <div className="flex justify-center items-center gap-3">
            <img src="/assets/splash-logo.png" alt="Karuna Seva Trust Logo" className="w-20 h-20 object-contain shadow-xs rounded-full" />
            <div className="text-left">
              <h1 className="text-3xl font-black text-[#064e3b] font-['Noto_Sans_Devanagari'] tracking-wide">
                करुणा सेवा ट्रस्ट (पंजीकृत न्यास)
              </h1>
              <p className="text-sm font-bold text-slate-600 tracking-wider font-sans uppercase">
                Karuna Seva Trust (Regd.)
              </p>
              <p className="text-[10px] text-emerald-800 font-semibold font-sans mt-0.5">
                Regd No: 389201004921 • 80G Benefit: TRUST/80G/2023/10492
              </p>
            </div>
          </div>
          <div className="w-4/5 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2" />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-12 space-y-6 z-10">
          {type === '80G_DONATION' && (
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-bold text-[#D4AF37] font-['Noto_Sans_Devanagari'] uppercase tracking-widest">
                दान प्रमाण पत्र / DONATION RECEIPT CERTIFICATE
              </h2>
              <p className="text-base text-slate-700 leading-relaxed max-w-3xl mx-auto font-['Noto_Sans_Devanagari']">
                सप्रेम धन्यवाद प्रमाणित किया जाता है कि दाता <strong>{name}</strong> ने करुणा सेवा ट्रस्ट को सामाजिक व परोपकारी कार्यों हेतु <strong>₹{amount}</strong> ({amountInWords}) की राशि दान स्वरूप प्रदान की है।
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto text-sm text-left bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl font-sans mt-4">
                <div>
                  <span className="text-slate-500 block text-xs">Receipt Number (रसीद सं.):</span>
                  <span className="font-bold text-[#064e3b]">{receiptNo || 'KST-80G-' + Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Date of Receipt (दिनांक):</span>
                  <span className="font-bold text-slate-800">{date}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">PAN of Donor (दाता का पैन):</span>
                  <span className="font-bold text-slate-800 uppercase">{panNo || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">80G Reg Number:</span>
                  <span className="font-bold text-emerald-800">TRUST/80G/2023/10492</span>
                </div>
              </div>
            </div>
          )}

          {type === 'VOLUNTEER' && (
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-bold text-[#D4AF37] font-['Noto_Sans_Devanagari'] uppercase tracking-widest">
                स्वयंसेवक सेवा सम्मान पत्र / CERTIFICATE OF VOLUNTEERING
              </h2>
              <p className="text-base text-slate-700 leading-relaxed max-w-3xl mx-auto font-['Noto_Sans_Devanagari']">
                प्रमाणित किया जाता है कि स्वयंसेवक <strong>{name}</strong> ने करुणा सेवा ट्रस्ट के अंतर्गत आयोजित <strong>"{contributionTitle || 'सामाजिक कल्याण अभियान'}"</strong> में अपना अमूल्य समय, सेवा और निःस्वार्थ योगदान प्रदान किया है।
              </p>
              <p className="text-xs text-slate-500 mt-2 font-['Noto_Sans_Devanagari']">
                हम इनके उज्जवल भविष्य एवं समाज कल्याण के प्रति इनके अटूट सेवा भाव की सराहना करते हैं।
              </p>
              <div className="text-xs font-mono text-slate-400 mt-2">
                Certificate ID: {certificateId} • Date: {date}
              </div>
            </div>
          )}

          {type === 'CSR_IMPACT' && (
            <div className="space-y-4 w-full">
              <h2 className="text-2xl font-bold text-[#D4AF37] font-['Noto_Sans_Devanagari'] uppercase tracking-widest">
                CSR सामाजिक प्रभाव प्रमाण पत्र / CSR IMPACT PARTNERSHIP CERTIFICATE
              </h2>
              <p className="text-base text-slate-700 leading-relaxed max-w-3xl mx-auto font-['Noto_Sans_Devanagari']">
                यह प्रमाण पत्र अत्यंत आदरपूर्वक <strong>{name}</strong> को उनकी कॉर्पोरेट सामाजिक जिम्मेदारी (CSR) साझेदारी के अंतर्गत करुणा सेवा ट्रस्ट के लोक कल्याणकारी अभियानों में बहुमूल्य वित्तीय/सामग्री सहयोग प्रदान करने हेतु समर्पित है।
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-xs text-left bg-emerald-50/50 border border-emerald-100 p-3.5 rounded-xl font-sans mt-3">
                <div>
                  <span className="text-slate-500 block">CSR Impact Code:</span>
                  <span className="font-bold text-[#064e3b]">{certificateId}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Partnership Date:</span>
                  <span className="font-bold text-slate-800">{date}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section (QR Code & Signatures) */}
        <div className="flex justify-between items-end border-t border-slate-100 pt-6 px-4 z-10">
          {/* Verification QR Code Placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white border border-slate-200 p-1 rounded-lg flex items-center justify-center shadow-xs">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="white" />
                <rect x="5" y="5" width="25" height="25" fill="#064e3b" />
                <rect x="10" y="10" width="15" height="15" fill="white" />
                <rect x="70" y="5" width="25" height="25" fill="#064e3b" />
                <rect x="75" y="10" width="15" height="15" fill="white" />
                <rect x="5" y="70" width="25" height="25" fill="#064e3b" />
                <rect x="10" y="75" width="15" height="15" fill="white" />
                <path d="M40 5h20v5H40zM40 20h10v10H40zM55 15h10v15H55zM40 40h45v5H40zM5 45h20v10H5zM45 55h15v10H45zM70 55h25v25H70zM40 70h15v20H40zM75 80h15v10H75z" fill="#064e3b" />
              </svg>
            </div>
            <div className="text-left text-[9px] text-slate-400 space-y-0.5">
              <p className="font-bold text-[#064e3b]">करुणा सेवा सत्यापन कोड</p>
              <p>Scan to verify trust registration</p>
              <p>and donation validity.</p>
            </div>
          </div>

          {/* Stamp & Signatures */}
          <div className="flex gap-12 text-center text-xs">
            {/* Stamp Placeholder */}
            <div className="relative flex flex-col justify-end items-center">
              <div className="absolute -top-6 w-14 h-14 rounded-full border-2 border-dashed border-[#064e3b]/30 flex items-center justify-center text-[7px] text-[#064e3b]/30 font-bold rotate-12 select-none pointer-events-none">
                OFFICIAL STAMP
              </div>
              <div className="w-20 h-[1px] bg-slate-300 mb-1" />
              <span className="text-[10px] text-slate-400">ट्रस्ट मुहर / Stamp</span>
            </div>

            {/* Signature Placeholder */}
            <div className="flex flex-col justify-end items-center">
              <div className="font-['Rozha_One'] text-slate-700 text-sm italic mb-1 select-none pointer-events-none">
                Vijay P. Sharma
              </div>
              <div className="w-28 h-[1px] bg-slate-400 mb-1" />
              <span className="font-bold text-[#064e3b] text-[10px]">मुख्य न्यासी / Chairperson</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Print Styles injected locally */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-container, .print-container * {
            visibility: visible;
          }
          .print-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 1123px;
            height: 794px;
            margin: 0;
            padding: 0;
            background: none !important;
          }
          #certificate-print-area {
            border-[16px] border-[#064e3b] !important;
            box-shadow: none !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};
