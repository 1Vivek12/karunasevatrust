import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TRUST_INFO, BANK_DETAILS } from '../data/ngoData';
import { DonationFormData, DonationReceipt } from '../types';
import { X, Heart, ShieldCheck, CheckCircle2, Download, Copy, ArrowRight, ArrowLeft } from 'lucide-react';
import { PaymentHub } from './PaymentHub';

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
    amount: 101,
    cause: 'वृक्षारोपण व पर्यावरण (Tree Plantation)',
    fullName: '',
    phone: '',
    email: '',
    panNumber: '',
    city: 'गोरखपुर',
    paymentMethod: 'upi'
  });

  const [step, setStep] = useState<1 | 2>(1);
  const [customAmountInput, setCustomAmountInput] = useState('');
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdReceipt, setCreatedReceipt] = useState<DonationReceipt | null>(null);

  if (!isOpen) return null;

  const presetAmounts = [101, 501, 1100, 5100];
  const causeOptions = [
    'वृक्षारोपण व पर्यावरण (Tree Plantation)',
    'भोजन सेवा (Food Distribution)',
    'वस्त्र व कंबल वितरण (Clothes & Blankets)',
    'बाल शिक्षा एवं पठन सामग्री (Education Drive)',
    'स्वास्थ्य सहायता व दवाइयाँ (Health & Medical)',
    'निर्धन कन्या विवाह सहयोग (Marriage Support)',
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
      alert(language === 'hi' ? 'कृपया एक वैध दान राशि दर्ज करें' : 'Please select or enter a valid donation amount');
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xl overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-emerald-300 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in duration-200 my-8">
        
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-emerald-100 via-green-100 to-emerald-200 text-slate-900 p-5 sm:p-6 flex items-center justify-between relative border-b border-emerald-300">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 bg-[#1a702b] text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>100% पारदर्शी सेवा ऑनलाइन दान</span>
            </div>
            <h3 className="text-2xl font-black text-emerald-950 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'ऑनलाइन दान करें (Donate Now)' : 'Donate to Karuna Seva Trust'}
            </h3>
            <p className="text-xs text-slate-700 font-semibold">
              {TRUST_INFO.nameHi} • {TRUST_INFO.taglineHi}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-emerald-200 hover:bg-emerald-300 text-emerald-900 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Step Bar */}
        {!isSuccess && (
          <div className="px-6 pt-4 flex items-center justify-center gap-2">
            <div className={`h-2 rounded-full flex-1 transition-all duration-300 ${step === 1 ? 'bg-[#1a702b]' : 'bg-emerald-200'}`} />
            <div className={`h-2 rounded-full flex-1 transition-all duration-300 ${step === 2 ? 'bg-[#1a702b]' : 'bg-emerald-200'}`} />
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
                  </label>

                  {/* Preset Amount Buttons: 101, 501, 1100, 5100 */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {presetAmounts.map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => handleAmountSelect(amt)}
                        className={`py-3 px-4 rounded-xl text-base font-black transition border ${
                          !isCustomAmount && formData.amount === amt
                            ? 'bg-[#1a702b] text-white border-[#1a702b] shadow-md scale-102'
                            : 'bg-slate-50 hover:bg-emerald-50 text-slate-800 border-slate-200 hover:border-emerald-300'
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>

                  {/* Custom amount input field below */}
                  <div className="pt-3 bg-emerald-50/60 border border-emerald-200 p-4 rounded-2xl space-y-2">
                    <span className="text-xs font-extrabold text-[#1a702b] block">
                      न्यूनतम / इच्छानुसार अन्य राशि दर्ज करने के लिए नीचे लिखें:
                    </span>
                    {!isCustomAmount ? (
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustomAmount(true);
                          setFormData((prev) => ({ ...prev, amount: 0 }));
                        }}
                        className="w-full bg-white hover:bg-emerald-100 text-[#1a702b] border-2 border-emerald-300 font-extrabold text-sm py-2.5 px-4 rounded-xl shadow-2xs transition text-center cursor-pointer"
                      >
                        ✏️ अपनी इच्छानुसार अन्य राशि दर्ज करें (Enter Custom Amount)
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black text-slate-800">₹</span>
                        <input
                          type="text"
                          placeholder="उदा. 2100"
                          value={customAmountInput}
                          onChange={handleCustomAmountChange}
                          className="flex-1 px-4 py-2.5 border-2 border-[#1a702b] rounded-xl focus:outline-none text-xl font-bold text-slate-800 bg-white"
                          autoFocus
                        />
                        <button
                          type="button"
                          onClick={() => handleAmountSelect(101)}
                          className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 px-3 py-3 rounded-xl font-bold"
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
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#1a702b] focus:ring-2 focus:ring-emerald-100"
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
                    className="bg-[#1a702b] hover:bg-[#145b22] text-white font-extrabold text-sm px-6 py-3 rounded-xl shadow transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>{language === 'hi' ? 'विवरण भरें (Next)' : 'Fill Details (Next)'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              /* STEP 2: Donor Details & Payment Method */
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
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1a702b]"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="मोबाइल नंबर (Phone) *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1a702b]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="ईमेल (Email Optional)"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1a702b]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="शहर / पता (City/Address)"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#1a702b]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <label className="text-sm font-bold text-slate-800">
                    {language === 'hi' ? '4. भुगतान माध्यम (Payment Method):' : '4. Payment Method:'}
                  </label>
                  <PaymentHub language={language} amount={formData.amount} />
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
                    className="bg-[#1a702b] hover:bg-[#145b22] active:bg-emerald-900 text-white font-extrabold text-base px-8 py-3.5 rounded-full shadow-lg shadow-emerald-800/20 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>संसाधित हो रहा है...</span>
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5 fill-white text-white" />
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
              <CheckCircle2 className="w-12 h-12 text-[#1a702b]" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                दान सफलतापूर्वक प्राप्त हुआ!
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Noto_Sans_Devanagari']">
                आपका हार्दिक धन्यवाद, {formData.fullName}!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                करुणा सेवा ट्रस्ट आपके योगदान के लिए आपका आभार व्यक्त करता है। आपका यह दान <strong className="text-[#1a702b]">{formData.cause}</strong> में उपयोग किया जाएगा।
              </p>
            </div>

            {createdReceipt && (
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-left max-w-sm mx-auto text-xs space-y-1.5">
                <div className="flex justify-between border-b pb-1 font-bold text-slate-800">
                  <span>रसीद संख्या:</span>
                  <span className="text-[#1a702b] font-mono">{createdReceipt.receiptNo}</span>
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
                  className="w-full sm:w-auto bg-[#1a702b] hover:bg-[#145b22] text-white font-bold px-6 py-3 rounded-xl shadow flex items-center justify-center gap-2 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>दान रसीद डाउनलोड करें</span>
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
