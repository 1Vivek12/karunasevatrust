import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TRUST_INFO, BANK_DETAILS } from '../data/ngoData';
import { DonationFormData, DonationReceipt } from '../types';
import { X, Heart, ShieldCheck, QrCode, CreditCard, Building2, CheckCircle2, Download, Copy, ArrowRight, ArrowLeft } from 'lucide-react';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerateReceipt: (receipt: DonationReceipt) => void;
  language: 'hi' | 'en';
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  onGenerateReceipt,
  language
}) => {
  const [formData, setFormData] = useState<DonationFormData>({
    amount: 1100,
    cause: 'भोजन सेवा (Food Service)',
    fullName: '',
    phone: '',
    email: '',
    panNumber: '',
    city: 'नई दिल्ली',
    paymentMethod: 'upi',
    is80GRequired: true
  });

  const [step, setStep] = useState<1 | 2>(1);
  const [customAmountInput, setCustomAmountInput] = useState('');
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [createdReceipt, setCreatedReceipt] = useState<DonationReceipt | null>(null);

  if (!isOpen) return null;

  const presetAmounts = [100, 500, 1100, 2100, 5100, 11000];
  const causeOptions = [
    'भोजन सेवा (Food Distribution)',
    'स्वास्थ्य सहायता व दवाइयाँ (Health & Medical)',
    'वस्त्र व कंबल वितरण (Clothes & Blankets)',
    'निर्धन कन्या विवाह सहयोग (Marriage Support)',
    'वृक्षारोपण व पर्यावरण (Tree Plantation)',
    'बाल शिक्षा एवं पठन सामग्री (Education Drive)',
    'सामान्य दान (General Trust Support)'
  ];

  const handleAmountSelect = (amt: number) => {
    setIsCustomAmount(false);
    setFormData((prev) => ({ ...prev, amount: amt }));
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    setCustomAmountInput(val);
    const num = parseInt(val, 10) || 0;
    setFormData((prev) => ({ ...prev, amount: num }));
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback safe
    }
  };

  const handleNextStep = () => {
    if (formData.amount <= 0) {
      alert(language === 'hi' ? 'कृपया एक वैध दान राशि चुनें' : 'Please select a valid donation amount');
      return;
    }
    setStep(2);
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert(language === 'hi' ? 'कृपया अपना नाम और मोबाइल नंबर दर्ज करें' : 'Please enter your Name and Mobile Number');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      triggerConfetti();

      const receipt: DonationReceipt = {
        receiptNo: `KST-${Math.floor(100000 + Math.random() * 900000)}`,
        donorName: formData.fullName,
        amount: formData.amount,
        cause: formData.cause,
        date: new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
        panNo: formData.panNumber || 'N/A',
        phone: formData.phone,
        txnId: `TXN${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        paymentMode: formData.paymentMethod.toUpperCase()
      };

      setCreatedReceipt(receipt);
    }, 1500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xl overflow-y-auto">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-emerald-500/20 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200 my-8">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-green-900 text-white p-5 sm:p-6 flex items-center justify-between relative">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-emerald-700/80 text-emerald-200 text-xs px-2.5 py-0.5 rounded-full font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>80G Tax Free Donation</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'ऑनलाइन दान करें (Donate Now)' : 'Donate to Karuna Seva Trust'}
            </h3>
            <p className="text-xs text-emerald-200">
              {TRUST_INFO.nameHi} • {TRUST_INFO.taglineHi}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-emerald-900/60 hover:bg-emerald-900 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Step Bar */}
        {!isSuccess && (
          <div className="px-6 pt-4 flex items-center justify-center gap-2">
            <div className={`h-2 rounded-full flex-1 transition-all duration-300 ${step === 1 ? 'bg-emerald-600' : 'bg-emerald-200'}`} />
            <div className={`h-2 rounded-full flex-1 transition-all duration-300 ${step === 2 ? 'bg-emerald-600' : 'bg-emerald-200'}`} />
          </div>
        )}

        {!isSuccess ? (
          <form onSubmit={handleSubmitDonation} className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {step === 1 ? (
              /* STEP 1: Amount Selection & Cause Dropdown */
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-800 flex items-center justify-between">
                    <span>{language === 'hi' ? '1. दान राशि चुनें (Select Amount):' : '1. Choose Donation Amount:'}</span>
                    <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      80G टैक्स लाभ उपलब्ध
                    </span>
                  </label>

                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {presetAmounts.map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => handleAmountSelect(amt)}
                        className={`py-2.5 px-2 rounded-xl text-sm font-extrabold transition border ${
                          !isCustomAmount && formData.amount === amt
                            ? 'bg-emerald-700 text-white border-emerald-700 shadow-md scale-102'
                            : 'bg-slate-50 hover:bg-emerald-50 text-slate-800 border-slate-200 hover:border-emerald-300'
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>

                  {/* Custom amount input toggle */}
                  <div className="pt-1">
                    {!isCustomAmount ? (
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustomAmount(true);
                          setFormData((prev) => ({ ...prev, amount: 0 }));
                        }}
                        className="text-xs text-emerald-700 hover:text-emerald-800 font-bold underline"
                      >
                        + अन्य राशि दर्ज करें (Enter Custom Amount)
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-slate-700">₹</span>
                        <input
                          type="text"
                          placeholder="उदा. 2500"
                          value={customAmountInput}
                          onChange={handleCustomAmountChange}
                          className="flex-1 px-4 py-2 border-2 border-emerald-500 rounded-xl focus:outline-none text-lg font-bold text-slate-800"
                          autoFocus
                        />
                        <button
                          type="button"
                          onClick={() => handleAmountSelect(1100)}
                          className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-2 rounded-xl font-bold"
                        >
                          रद्द करें
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-800">
                    {language === 'hi' ? '2. सेवा कार्य चुनें (Select Cause):' : '2. Select Cause:'}
                  </label>
                  <select
                    value={formData.cause}
                    onChange={(e) => setFormData({ ...formData, cause: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  >
                    {causeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm px-6 py-3 rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>{language === 'hi' ? 'विवरण भरें (Next)' : 'Fill Details (Next)'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* STEP 2: Donor Details, Tax Exemption PAN, & Payment Method */
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-800">
                    {language === 'hi' ? '3. दानदाता विवरण (Donor Details):' : '3. Donor Details:'}
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="पूरा नाम (Full Name) *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="मोबाइल नंबर (Phone) *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="ईमेल (Email Optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="पैन नंबर (PAN for 80G Tax Receipt)"
                        value={formData.panNumber}
                        onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-600 uppercase"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <label className="text-sm font-bold text-slate-800">
                    {language === 'hi' ? '4. भुगतान माध्यम (Payment Method):' : '4. Payment Method:'}
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition ${
                        formData.paymentMethod === 'upi'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/20'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <QrCode className="w-5 h-5 text-emerald-700" />
                      <span>UPI QR Code</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition ${
                        formData.paymentMethod === 'card'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/20'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <CreditCard className="w-5 h-5 text-emerald-700" />
                      <span>Card / NetBanking</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'qr' })}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition ${
                        formData.paymentMethod === 'qr'
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-2 ring-emerald-600/20'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Building2 className="w-5 h-5 text-emerald-700" />
                      <span>बैंक ट्रांसफर</span>
                    </button>
                  </div>

                  {formData.paymentMethod === 'upi' && (
                    <div className="bg-emerald-50/80 border border-emerald-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                      <div className="bg-white p-2 rounded-xl shadow-xs border border-emerald-200 shrink-0">
                        <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none">
                          <rect width="100" height="100" fill="white" />
                          <rect x="10" y="10" width="25" height="25" fill="#15803d" />
                          <rect x="15" y="15" width="15" height="15" fill="white" />
                          <rect x="18" y="18" width="9" height="9" fill="#15803d" />
                          <rect x="65" y="10" width="25" height="25" fill="#15803d" />
                          <rect x="70" y="15" width="15" height="15" fill="white" />
                          <rect x="73" y="18" width="9" height="9" fill="#15803d" />
                          <rect x="10" y="65" width="25" height="25" fill="#15803d" />
                          <rect x="15" y="70" width="15" height="15" fill="white" />
                          <rect x="18" y="73" width="9" height="9" fill="#15803d" />
                          <path d="M40 10h15v5H40zM40 25h10v10H40zM55 20h10v15H55zM40 45h45v5H40zM10 45h20v10H10zM45 55h15v10H45zM65 55h20v20H65zM40 70h15v20H40zM70 80h15v10H70z" fill="#15803d" />
                        </svg>
                      </div>
                      
                      <div className="space-y-1 text-xs text-slate-700">
                        <p className="font-extrabold text-emerald-900 text-sm">
                          UPI ID: <span className="text-amber-700">{BANK_DETAILS.upiId}</span>
                        </p>
                        <p>PhonePe, GPay, Paytm, BHIM ऐप से QR स्कैन करें।</p>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(BANK_DETAILS.upiId)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-200/60 hover:bg-emerald-200 px-2.5 py-1 rounded-lg mt-1 transition"
                        >
                          <Copy className="w-3 h-3" />
                          <span>{copiedText ? 'कॉपी हो गया!' : 'UPI ID कॉपी करें'}</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {formData.paymentMethod === 'qr' && (
                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs space-y-1">
                      <p className="font-bold text-slate-900">{BANK_DETAILS.bankName}</p>
                      <p>खाता नाम: <strong>{BANK_DETAILS.accountName}</strong></p>
                      <p>खाता संख्या: <strong className="font-mono text-emerald-800 text-sm">{BANK_DETAILS.accountNumber}</strong></p>
                      <p>IFSC कोड: <strong className="font-mono text-amber-800">{BANK_DETAILS.ifscCode}</strong></p>
                      <p>शाखा: {BANK_DETAILS.branch}</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-slate-600 hover:text-slate-800 font-extrabold text-sm flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>{language === 'hi' ? 'पीछे जाएं' : 'Back'}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-extrabold text-base px-8 py-3.5 rounded-full shadow-lg shadow-emerald-800/20 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>संसाधित हो रहा है...</span>
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5 fill-white" />
                        <span>₹{formData.amount || 0} का दान करें</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

          </form>
        ) : (
          /* Success Screen & Receipt Generation Trigger */
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700 animate-bounce">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                दान सफलतापूर्वक प्राप्त हुआ!
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Noto_Sans_Devanagari']">
                आपका हार्दिक धन्यवाद, {formData.fullName}!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                करुणा सेवा ट्रस्ट आपके योगदान के लिए आपका आभार व्यक्त करता है। आपका यह दान <strong className="text-emerald-800">{formData.cause}</strong> में उपयोग किया जाएगा।
              </p>
            </div>

            {createdReceipt && (
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-left max-w-sm mx-auto text-xs space-y-1.5">
                <div className="flex justify-between border-b pb-1 font-bold text-slate-800">
                  <span>रसीद संख्या:</span>
                  <span className="text-emerald-800 font-mono">{createdReceipt.receiptNo}</span>
                </div>
                <div className="flex justify-between">
                  <span>दान राशि:</span>
                  <span className="font-extrabold text-emerald-900">₹{createdReceipt.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>दिनांक:</span>
                  <span>{createdReceipt.date}</span>
                </div>
                <div className="flex justify-between">
                  <span>लेन-देन संख्या:</span>
                  <span className="font-mono text-slate-600">{createdReceipt.txnId}</span>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {createdReceipt && (
                <button
                  onClick={() => {
                    onGenerateReceipt(createdReceipt);
                    onClose();
                  }}
                  className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl shadow flex items-center justify-center gap-2 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>80G दान रसीद डाउनलोड करें</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl transition"
              >
                बंद करें
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
