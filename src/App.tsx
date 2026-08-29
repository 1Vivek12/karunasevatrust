import React, { useState, useEffect } from 'react';
import { ActiveTab, ServiceCard, DonationReceipt } from './types';
import { AnimatePresence } from 'motion/react';
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
import { OpinionRequestSection } from './components/OpinionRequestSection';
import { CtaBannerSection } from './components/CtaBannerSection';
import { DonateModal } from './components/DonateModal';
import { ReceiptModal } from './components/ReceiptModal';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { RECENT_DONORS, TRUST_INFO } from './data/ngoData';
import { Heart, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<ServiceCard | null>(null);
  const [generatedReceipt, setGeneratedReceipt] = useState<DonationReceipt | null>(null);
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      {/* Cinematic Splash Screen */}
      <AnimatePresence mode="wait">
        {isSplashVisible && <SplashScreen />}
      </AnimatePresence>

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
            {/* 1. Hero Section */}
            <Hero
              onOpenDonateModal={handleOpenDonateModal}
              onOpenVolunteer={handleOpenVolunteer}
              language={language}
            />

            {/* 2. Continuous Moving Animated Impact Stats Bar ("chalta rahega") */}
            <StatsBar language={language} />

            {/* 3. Major Works "हमारे प्रमुख कार्य" */}
            <MajorWorks
              onSelectWork={(work) => setSelectedWork(work)}
              setActiveTab={setActiveTab}
              language={language}
            />

            {/* 4. Values Bar & Quote Card */}
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
                      <span className="w-2 h-2 rounded-full bg-[#1a702b]"></span>
                      <span className="font-bold text-slate-800">{d.name} ({d.city})</span>
                      <span className="text-[#1a702b] font-extrabold">₹{d.amount}</span>
                      <span className="text-slate-500 text-[10px]">({d.cause})</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Decorative Call to Action Banner Section */}
            <CtaBannerSection
              onOpenDonateModal={handleOpenDonateModal}
              onOpenVolunteer={handleOpenVolunteer}
              language={language}
            />
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

        {activeTab === 'opinion' && (
          <OpinionRequestSection language={language} />
        )}

        {activeTab === 'volunteer' && (
          <VolunteerSection language={language} />
        )}

        {activeTab === 'contact' && (
          <ContactSection language={language} onOpenDonateModal={handleOpenDonateModal} />
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

      {/* Printable Official Donation Receipt Modal */}
      <ReceiptModal
        receipt={generatedReceipt}
        onClose={() => setGeneratedReceipt(null)}
        language={language}
      />

      </div>
    </>
  );
}
