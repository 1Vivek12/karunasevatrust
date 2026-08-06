import React, { useState } from 'react';
import { ActiveTab, ServiceCard, DonationReceipt } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { MajorWorks } from './components/MajorWorks';
import { ValuesBar } from './components/ValuesBar';
import { AboutSection } from './components/AboutSection';
import { WorkDetailSection } from './components/WorkDetailSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { GallerySection } from './components/GallerySection';
import { VolunteerSection } from './components/VolunteerSection';
import { ContactSection } from './components/ContactSection';
import { DonateModal } from './components/DonateModal';
import { ReceiptModal } from './components/ReceiptModal';
import { Footer } from './components/Footer';
import { RECENT_DONORS, TRUST_INFO } from './data/ngoData';
import { Heart, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<ServiceCard | null>(null);
  const [generatedReceipt, setGeneratedReceipt] = useState<DonationReceipt | null>(null);
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');

  const handleOpenDonateModal = () => {
    setIsDonateModalOpen(true);
  };

  const handleOpenVolunteer = () => {
    setActiveTab('volunteer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenerateReceipt = (receipt: DonationReceipt) => {
    setGeneratedReceipt(receipt);
  };

  return (
    <div className="min-h-screen bg-[#f8faf7] text-slate-800 flex flex-col font-['Noto_Sans_Devanagari',sans-serif] selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Sticky Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenDonateModal={handleOpenDonateModal}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Content Area Based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* 1. Hero Section (Exact matching user screenshot) */}
            <Hero
              onOpenDonateModal={handleOpenDonateModal}
              onOpenVolunteer={handleOpenVolunteer}
              language={language}
            />

            {/* 2. Impact Stats Green Bar (15000+ भोजन, 8000+ वस्त्र, 3000+ स्वास्थ्य, etc.) */}
            <StatsBar language={language} />

            {/* 3. Major Works "हमारे प्रमुख कार्य" 6 Cards Grid */}
            <MajorWorks
              onSelectWork={(work) => setSelectedWork(work)}
              setActiveTab={setActiveTab}
              language={language}
            />

            {/* 4. Values Bar & Quote Card ("एक छोटा सा कदम, किसी की जिंदगी बदल सकता है।") */}
            <ValuesBar language={language} />

            {/* 5. Live Recent Donors Supporter Marquee */}
            <section className="py-6 bg-white border-y border-emerald-100 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-2 shrink-0 bg-emerald-100 text-emerald-900 px-3 py-1.5 rounded-full text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700 animate-spin" />
                  <span>हाल के दानदाता सहयोग (Recent Supporters):</span>
                </div>

                <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-3 py-1 text-xs">
                  {RECENT_DONORS.map((d) => (
                    <div
                      key={d.id}
                      className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl shrink-0 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      <span className="font-bold text-slate-800">{d.name} ({d.city})</span>
                      <span className="text-emerald-800 font-extrabold">₹{d.amount}</span>
                      <span className="text-slate-500 text-[10px]">({d.cause})</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Call to Action Banner */}
            <section className="py-14 bg-gradient-to-r from-emerald-800 via-green-800 to-emerald-900 text-white relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 bg-emerald-700/80 text-emerald-200 text-xs px-3 py-1 rounded-full font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" />
                  <span>80G आयकर छूट के साथ पुण्य कमाएँ</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Noto_Sans_Devanagari']">
                  आपका एक छोटा सा दान किसी के जीवन में आशा का दीप जला सकता है
                </h2>

                <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto">
                  {TRUST_INFO.nameHi} के माध्यम से आज ही जरूरतमंदों के भोजन, स्वास्थ्य और बालिकाओं के उज्जवल भविष्य हेतु सहयोग करें।
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={handleOpenDonateModal}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-lg px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 cursor-pointer transform hover:scale-105"
                  >
                    <Heart className="w-5 h-5 fill-slate-950" />
                    <span>ऑनलाइन दान करें (Donate Now)</span>
                  </button>

                  <button
                    onClick={handleOpenVolunteer}
                    className="bg-emerald-900/80 hover:bg-emerald-900 text-white border border-emerald-600 font-bold text-base px-8 py-3.5 rounded-full shadow transition flex items-center gap-2 cursor-pointer"
                  >
                    <span>स्वयंसेवक बनें (Become Volunteer)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'about' && (
          <AboutSection
            onOpenDonate={handleOpenDonateModal}
            language={language}
          />
        )}

        {activeTab === 'works' && (
          <WorkDetailSection
            selectedWork={selectedWork}
            onOpenDonate={handleOpenDonateModal}
            language={language}
          />
        )}

        {activeTab === 'activities' && (
          <ActivitiesSection
            onOpenDonate={handleOpenDonateModal}
            onOpenVolunteer={handleOpenVolunteer}
            language={language}
          />
        )}

        {activeTab === 'gallery' && (
          <GallerySection language={language} />
        )}

        {activeTab === 'volunteer' && (
          <VolunteerSection language={language} />
        )}

        {activeTab === 'contact' && (
          <ContactSection language={language} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenDonateModal={handleOpenDonateModal}
        language={language}
      />

      {/* Interactive Donation Modal */}
      <DonateModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        onGenerateReceipt={handleGenerateReceipt}
        language={language}
      />

      {/* Printable 80G Tax Exemption Receipt Modal */}
      <ReceiptModal
        receipt={generatedReceipt}
        onClose={() => setGeneratedReceipt(null)}
        language={language}
      />

    </div>
  );
}
