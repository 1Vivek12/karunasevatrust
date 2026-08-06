import React from 'react';
import { TRUST_INFO } from '../data/ngoData';
import { DonationReceipt } from '../types';
import { X, Printer, ShieldCheck, Heart, Download } from 'lucide-react';

interface ReceiptModalProps {
  receipt: DonationReceipt | null;
  onClose: () => void;
  language: 'hi' | 'en';
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({
  receipt,
  onClose,
  language
}) => {
  if (!receipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-emerald-200 w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-8">
        
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between no-print">
          <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>आधिकारिक दान रसीद (Official 80G Tax Exemption Receipt)</span>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>प्रिंट / PDF सेव करें</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Receipt Body */}
        <div id="printable-receipt" className="p-8 sm:p-10 space-y-6 bg-amber-50/20 text-slate-800 font-sans relative">
          
          {/* Header Seal / Logo */}
          <div className="text-center border-b-2 border-emerald-800 pb-6 space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-700 text-white mx-auto shadow-md mb-1">
              <Heart className="w-9 h-9 fill-white" />
            </div>
            
            <h2 className="text-3xl font-black text-emerald-900 font-['Noto_Sans_Devanagari'] tracking-tight">
              {TRUST_INFO.nameHi}
            </h2>
            <p className="text-xs text-amber-800 font-bold tracking-widest uppercase">
              {TRUST_INFO.nameEn}
            </p>
            <p className="text-xs text-emerald-800 font-medium">
              — {TRUST_INFO.taglineHi} —
            </p>
            <p className="text-[11px] text-slate-600 max-w-lg mx-auto mt-1">
              {TRUST_INFO.address} • फोन: {TRUST_INFO.phone}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-[10px] font-bold text-emerald-900">
              <span className="bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                पंजीयन संख्या: {TRUST_INFO.regNo}
              </span>
              <span className="bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                पैन संख्या: {TRUST_INFO.panNo}
              </span>
              <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">
                80G पंजीयन सं: TRUST/80G/2023/10492
              </span>
            </div>
          </div>

          {/* Receipt Watermark Stamp */}
          <div className="flex justify-between items-center text-xs text-slate-700 pt-1 font-bold">
            <div>
              रसीद संख्या: <span className="font-mono text-emerald-800 text-sm">{receipt.receiptNo}</span>
            </div>
            <div>
              दिनांक: <span className="text-slate-900">{receipt.date}</span>
            </div>
          </div>

          {/* Receipt Form Content Table */}
          <div className="border border-slate-300 rounded-xl overflow-hidden bg-white text-sm">
            <div className="grid grid-cols-3 p-3 border-b border-slate-200">
              <span className="font-bold text-slate-600">दानदाता का नाम:</span>
              <span className="col-span-2 font-black text-slate-900">{receipt.donorName}</span>
            </div>
            <div className="grid grid-cols-3 p-3 border-b border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-600">प्राप्त दान राशि:</span>
              <span className="col-span-2 font-black text-emerald-800 text-lg">
                ₹{receipt.amount.toLocaleString('hi-IN')} /-
              </span>
            </div>
            <div className="grid grid-cols-3 p-3 border-b border-slate-200">
              <span className="font-bold text-slate-600">दान का उद्देश्य:</span>
              <span className="col-span-2 font-semibold text-slate-800">{receipt.cause}</span>
            </div>
            <div className="grid grid-cols-3 p-3 border-b border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-600">दानदाता का पैन नं:</span>
              <span className="col-span-2 font-mono font-bold text-slate-800">{receipt.panNo}</span>
            </div>
            <div className="grid grid-cols-3 p-3">
              <span className="font-bold text-slate-600">भुगतान संदर्भ (Txn ID):</span>
              <span className="col-span-2 font-mono text-xs text-slate-700">{receipt.txnId} ({receipt.paymentMode})</span>
            </div>
          </div>

          {/* 80G Tax Exemption Declaration */}
          <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs text-emerald-900 space-y-1">
            <p className="font-bold text-emerald-950">
              ✓ आयकर धारा 80G प्रमाण पत्र घोषणा:
            </p>
            <p className="text-[11px] leading-relaxed text-emerald-800">
              आयकर अधिनियम 1961 की धारा 80G के तहत यह दान 50% कर छूट हेतु योग्य है। करुणा सेवा ट्रस्ट इस अमूल्य सहयोग हेतु आपका सदैव आभारी रहेगा।
            </p>
          </div>

          {/* Signatures Row */}
          <div className="pt-8 flex justify-between items-end text-center text-xs">
            <div className="space-y-1">
              <div className="w-24 h-1 border-b border-slate-400 mx-auto"></div>
              <p className="font-bold text-slate-700">दानदाता हस्ताक्षर</p>
            </div>

            <div className="space-y-1">
              <div className="w-28 h-10 border border-emerald-300 rounded bg-emerald-50/60 flex items-center justify-center text-[10px] text-emerald-800 font-serif font-bold italic mx-auto">
                KST Authorized Seal
              </div>
              <p className="font-bold text-emerald-900">अधिकृत कोषाध्यक्ष / अध्यक्ष</p>
              <p className="text-[10px] text-slate-500">{TRUST_INFO.nameHi}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
