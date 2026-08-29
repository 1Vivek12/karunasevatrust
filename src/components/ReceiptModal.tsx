import React from 'react';
import { DonationReceipt } from '../types';
import { X, Printer, ShieldCheck } from 'lucide-react';
import { CertificateTemplate } from './CertificateTemplate';

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

  const getAmountInWords = (num: number): string => {
    if (num === 101) return 'एक सौ एक रुपये मात्र (One Hundred One Rupees Only)';
    if (num === 501) return 'पांच सौ एक रुपये मात्र (Five Hundred One Rupees Only)';
    if (num === 1100) return 'एक हजार एक सौ रुपये मात्र (One Thousand One Hundred Rupees Only)';
    if (num === 5100) return 'पांच हजार एक सौ रुपये मात्र (Five Thousand One Hundred Rupees Only)';
    return `${num} रुपये मात्र`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-emerald-200 max-w-[1180px] w-full overflow-hidden animate-in zoom-in-95 duration-200 my-8">
        
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between no-print">
          <span className="text-xs sm:text-sm font-bold text-emerald-400 flex items-center gap-1.5">
            <ShieldCheck className="w-5 h-5" />
            <span>आधिकारिक दान रसीद एवं प्रमाण पत्र (Official Donation Receipt Certificate)</span>
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-[#1a702b] hover:bg-[#145b22] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>रसीद प्रिंट करें / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Official Certificate Body */}
        <div className="p-4 bg-slate-100 flex items-center justify-center overflow-x-auto">
          <div className="min-w-[1123px]">
            <CertificateTemplate
              type="DONATION"
              name={receipt.donorName}
              amount={receipt.amount}
              amountInWords={getAmountInWords(receipt.amount)}
              panNo={receipt.panNo}
              receiptNo={receipt.receiptNo}
              date={receipt.date}
            />
          </div>
        </div>

      </div>

      {/* Tailwind Print Styles injected locally */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .fixed {
            position: absolute !important;
            background: none !important;
            padding: 0 !important;
          }
          .bg-white {
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
};
