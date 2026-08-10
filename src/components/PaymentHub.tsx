import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, Check, QrCode, Building2, PhoneCall } from 'lucide-react';
import { BANK_DETAILS } from '../data/ngoData';

interface PaymentHubProps {
  language: 'hi' | 'en';
  amount?: number;
  onAmountChange?: (amt: number) => void;
}

export const PaymentHub: React.FC<PaymentHubProps> = ({ language, amount, onAmountChange }) => {
  const [activeTab, setActiveTab] = useState<'upi' | 'bank'>('upi');
  const [selectedAmount, setSelectedAmount] = useState<number>(amount || 1100);
  const [customAmount, setCustomAmount] = useState<string>(amount ? String(amount) : '');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const presetAmounts = [100, 500, 1100, 5100];

  const handleAmountSelect = (amt: number) => {
    setIsCustom(false);
    setSelectedAmount(amt);
    if (onAmountChange) onAmountChange(amt);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setCustomAmount(val);
    const num = parseInt(val, 10) || 0;
    setSelectedAmount(num);
    if (onAmountChange) onAmountChange(num);
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const currentAmount = isCustom ? (parseInt(customAmount, 10) || 0) : selectedAmount;
  const upiURI = `upi://pay?pa=${BANK_DETAILS.upiId}&pn=KARUNA%20SEVA%20TRUST&am=${currentAmount}&cu=INR`;

  return (
    <div className="w-full bg-gradient-to-br from-emerald-900 to-green-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-emerald-500/20 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Tabs Navigation Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-emerald-800 pb-5 mb-6">
        <div>
          <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest font-sans">
            {language === 'hi' ? 'सुरक्षित भुगतान केंद्र' : 'SECURE PAYMENT HUB'}
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-['Noto_Sans_Devanagari'] text-white mt-1">
            {language === 'hi' ? 'करुणा सेवा ट्रस्ट दान केंद्र' : 'Karuna Seva Trust Donation Hub'}
          </h3>
        </div>

        {/* Tab Switcher Button Group */}
        <div className="bg-emerald-950/80 p-1.5 rounded-2xl border border-white/5 flex gap-1 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('upi')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'upi'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-emerald-300 hover:text-white hover:bg-emerald-900/40'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'UPI और QR कोड' : 'UPI & QR Code'}</span>
          </button>
          <button
            onClick={() => setActiveTab('bank')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'bank'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-emerald-300 hover:text-white hover:bg-emerald-900/40'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'बैंक ट्रांसफर (NEFT/IMPS)' : 'Bank Transfer'}</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="space-y-6">
        {activeTab === 'upi' ? (
          /* TAB 1: Instant UPI & Dynamic QR */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Amount selection */}
            <div className="md:col-span-6 space-y-4">
              <label className="text-sm font-bold text-emerald-200 block font-['Noto_Sans_Devanagari']">
                {language === 'hi' ? 'दान राशि का चयन करें (Select Donation Amount):' : 'Select Donation Amount:'}
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {presetAmounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => handleAmountSelect(amt)}
                    className={`py-3 px-2 rounded-xl text-sm font-extrabold transition-all border ${
                      !isCustom && selectedAmount === amt
                        ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md font-black'
                        : 'bg-emerald-950/40 hover:bg-emerald-900/60 text-white border-emerald-800'
                    }`}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>

              {/* Custom Amount input */}
              <div className="pt-2">
                {!isCustom ? (
                  <button
                    onClick={() => {
                      setIsCustom(true);
                      setSelectedAmount(0);
                    }}
                    className="text-xs text-amber-300 hover:text-amber-400 font-bold underline"
                  >
                    + {language === 'hi' ? 'अन्य राशि दर्ज करें' : 'Enter Custom Amount'}
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-amber-400">₹</span>
                    <input
                      type="text"
                      placeholder="उदा. 2500"
                      value={customAmount}
                      onChange={handleCustomChange}
                      className="flex-1 max-w-[200px] px-4 py-2.5 bg-emerald-950/60 border border-emerald-500/30 rounded-xl text-base font-bold text-white focus:outline-none focus:border-amber-400"
                      autoFocus
                    />
                    <button
                      onClick={() => handleAmountSelect(1100)}
                      className="text-xs bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 px-3.5 py-2.5 rounded-xl font-bold"
                    >
                      {language === 'hi' ? 'रद्द करें' : 'Cancel'}
                    </button>
                  </div>
                )}
              </div>

              <div className="text-xs text-emerald-200 space-y-1 pt-2 font-['Noto_Sans_Devanagari']">
                <p className="font-bold text-white">✓ {language === 'hi' ? 'डायनेमिक क्यूआर जनरेशन:' : 'Dynamic QR Generation:'}</p>
                <p>{language === 'hi' ? 'जैसे ही आप दान राशि बदलते हैं, क्यूआर कोड स्वतः ही उस राशि के अनुसार अपडेट हो जाता है।' : 'The QR code automatically updates dynamically with your chosen amount.'}</p>
              </div>
            </div>

            {/* Right side: Dynamic QR Code Rendering */}
            <div className="md:col-span-6 flex flex-col items-center justify-center space-y-4">
              <div className="bg-emerald-950/40 p-6 rounded-3xl border border-emerald-500/30 shadow-2xl flex items-center justify-center relative group">
                <div className="bg-white p-4 rounded-2xl shadow-inner border border-emerald-300">
                  <QRCodeSVG
                    value={upiURI}
                    size={160}
                    level="Q"
                    imageSettings={{
                      src: "/assets/logo.png",
                      x: undefined,
                      y: undefined,
                      height: 32,
                      width: 32,
                      excavate: true,
                    }}
                  />
                </div>
              </div>

              <div className="text-center space-y-2 w-full max-w-[280px]">
                <p className="text-xs text-amber-300 font-mono font-bold">
                  UPI ID: {BANK_DETAILS.upiId}
                </p>
                
                {/* Mobile direct pay link button */}
                <a
                  href={upiURI}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-6 rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-200" />
                  <span>{language === 'hi' ? 'यूपीआई ऐप से भुगतान करें' : 'Pay via UPI App'}</span>
                </a>
              </div>
            </div>

          </div>
        ) : (
          /* TAB 2: Direct Bank Transfer */
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Bank Name */}
              <div className="bg-emerald-950/40 p-4 rounded-2xl border border-emerald-800 flex justify-between items-center group">
                <div>
                  <span className="text-[10px] text-emerald-300 block uppercase font-sans font-bold">बैंक का नाम (Bank Name)</span>
                  <span className="text-sm font-extrabold text-white font-['Noto_Sans_Devanagari']">{BANK_DETAILS.bankName}</span>
                </div>
                <button
                  onClick={() => handleCopy(BANK_DETAILS.bankName, 'bank')}
                  className="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 transition-all"
                  title="Copy Bank Name"
                >
                  {copiedKey === 'bank' ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Account Holder Name */}
              <div className="bg-emerald-950/40 p-4 rounded-2xl border border-emerald-800 flex justify-between items-center group">
                <div>
                  <span className="text-[10px] text-emerald-300 block uppercase font-sans font-bold">खाताधारक नाम (Account Name)</span>
                  <span className="text-sm font-extrabold text-white">{BANK_DETAILS.accountName}</span>
                </div>
                <button
                  onClick={() => handleCopy(BANK_DETAILS.accountName, 'name')}
                  className="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 transition-all"
                  title="Copy Account Holder Name"
                >
                  {copiedKey === 'name' ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Account Number */}
              <div className="bg-emerald-950/40 p-4 rounded-2xl border border-emerald-800 flex justify-between items-center group">
                <div>
                  <span className="text-[10px] text-emerald-300 block uppercase font-sans font-bold">खाता संख्या (A/c No)</span>
                  <span className="text-base font-black font-mono text-emerald-400 tracking-wider">{BANK_DETAILS.accountNumber}</span>
                </div>
                <button
                  onClick={() => handleCopy(BANK_DETAILS.accountNumber, 'acc')}
                  className="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 transition-all"
                  title="Copy Account Number"
                >
                  {copiedKey === 'acc' ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* IFSC Code */}
              <div className="bg-emerald-950/40 p-4 rounded-2xl border border-emerald-800 flex justify-between items-center group">
                <div>
                  <span className="text-[10px] text-emerald-300 block uppercase font-sans font-bold">IFSC कोड</span>
                  <span className="text-base font-black font-mono text-emerald-400 tracking-wider">{BANK_DETAILS.ifscCode}</span>
                </div>
                <button
                  onClick={() => handleCopy(BANK_DETAILS.ifscCode, 'ifsc')}
                  className="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 transition-all"
                  title="Copy IFSC Code"
                >
                  {copiedKey === 'ifsc' ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Branch Details */}
            <div className="bg-emerald-950/40 p-4 rounded-2xl border border-emerald-800 flex justify-between items-center group">
              <div>
                <span className="text-[10px] text-emerald-300 block uppercase font-sans font-bold">शाखा विवरण (Branch Details)</span>
                <span className="text-xs font-semibold text-slate-200">{BANK_DETAILS.branch}</span>
              </div>
              <button
                onClick={() => handleCopy(BANK_DETAILS.branch, 'branch')}
                className="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 transition-all"
                title="Copy Branch Details"
              >
                {copiedKey === 'branch' ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}
      </div>

      {copiedKey && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-full shadow-lg animate-fade-in-up">
          {language === 'hi' ? 'सफलतापूर्वक कॉपी हो गया!' : 'Successfully copied!'}
        </div>
      )}
    </div>
  );
};
