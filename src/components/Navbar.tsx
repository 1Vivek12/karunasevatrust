import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { TRUST_INFO } from '../data/ngoData';
import { Heart, Phone, Mail, Menu, X, Globe, ShieldCheck, Users } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenDonateModal: () => void;
  language: 'hi' | 'en';
  setLanguage: (lang: 'hi' | 'en') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenDonateModal,
  language,
  setLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; labelHi: string; labelEn: string }[] = [
    { id: 'home', labelHi: 'होम', labelEn: 'Home' },
    { id: 'about', labelHi: 'हमारे बारे में', labelEn: 'About Us' },
    { id: 'works', labelHi: 'हमारे कार्य', labelEn: 'Our Work' },
    { id: 'activities', labelHi: 'गतिविधियाँ', labelEn: 'Activities' },
    { id: 'gallery', labelHi: 'गैलरी', labelEn: 'Gallery' },
    { id: 'volunteer', labelHi: 'स्वयंसेवक बनें', labelEn: 'Volunteer' },
    { id: 'contact', labelHi: 'संपर्क करें', labelEn: 'Contact' },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-emerald-100">
      {/* Top Notification / Info Strip */}
      <div className="bg-emerald-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>पंजीकृत न्यास संख्या: {TRUST_INFO.regNo}</span>
            </span>
            <span className="hidden md:inline text-emerald-400">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-100">
              <span className="bg-emerald-700 text-emerald-100 text-[10px] px-1.5 py-0.5 rounded font-semibold">80G Tax Free</span>
              <span>दान पर 80G आयकर छूट उपलब्ध</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href={`tel:${TRUST_INFO.phone}`} className="hover:text-emerald-300 flex items-center gap-1 transition">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{TRUST_INFO.phone.split('/')[0]}</span>
            </a>
            <a href={`mailto:${TRUST_INFO.email}`} className="hover:text-emerald-300 hidden lg:flex items-center gap-1 transition">
              <Mail className="w-3.5 h-3.5" />
              <span>{TRUST_INFO.email}</span>
            </a>
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'hi' ? 'en' : 'hi')}
              className="flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 text-emerald-100 px-2 py-0.5 rounded transition text-xs font-medium border border-emerald-600"
              title="Change Language"
            >
              <Globe className="w-3 h-3 text-emerald-300" />
              <span>{language === 'hi' ? 'English' : 'हिंदी'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        
        {/* Logo Section (Exactly matching screenshot) */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          {/* Custom NGO Logo Graphic */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-600 to-green-700 flex items-center justify-center p-2 shadow-lg shadow-emerald-700/20 group-hover:scale-105 transition-transform">
            <div className="relative flex items-center justify-center text-white">
              {/* Hands holding seedling & heart emblem */}
              <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="rgba(255,255,255,0.25)" stroke="#ffffff" />
                <path d="M12 6v6m-3-3l3-3 3 3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.4)" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-800 tracking-tight leading-none font-['Noto_Sans_Devanagari'] group-hover:text-emerald-700 transition">
              {language === 'hi' ? TRUST_INFO.nameHi : TRUST_INFO.nameEn}
            </h1>
            <p className="text-xs sm:text-sm text-emerald-600 font-medium mt-0.5 tracking-wide flex items-center gap-1">
              <span className="text-amber-500 font-bold">—</span>
              <span>{language === 'hi' ? TRUST_INFO.taglineHi : TRUST_INFO.taglineEn}</span>
              <span className="text-amber-500 font-bold">—</span>
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                  isActive
                    ? 'text-emerald-800 bg-emerald-50 border-b-2 border-emerald-600 shadow-xs'
                    : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                {language === 'hi' ? item.labelHi : item.labelEn}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-emerald-600 rounded-full"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button (Donate Now - Exact dark green with heart) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Volunteer Button (Join) */}
          <button
            onClick={() => { setActiveTab('volunteer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hidden xl:flex bg-white hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600 font-extrabold text-sm px-4 py-2 rounded-full shadow-sm hover:shadow transition-all items-center gap-2 cursor-pointer group"
          >
            <Users className="w-4 h-4 text-emerald-700 group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span>{language === 'hi' ? 'स्वयंसेवक बनें' : 'Join Us'}</span>
          </button>
          {/* Donate Button */}
          <button
            onClick={onOpenDonateModal}
            aria-haspopup="dialog"
            className="bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold px-4 sm:px-6 py-2.5 rounded-full shadow-md shadow-emerald-800/20 hover:shadow-lg transition-all flex items-center gap-2 group transform active:scale-95 cursor-pointer text-sm sm:text-base"
          >
            <Heart className="w-4 h-4 fill-white text-white group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span>{language === 'hi' ? 'दान करें' : 'Donate Now'}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-emerald-100 px-4 py-3 space-y-1 shadow-xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                  isActive
                    ? 'bg-emerald-700 text-white font-bold'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                <span>{language === 'hi' ? item.labelHi : item.labelEn}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 mt-2 flex flex-col gap-2">
            {/* Volunteer Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveTab('volunteer');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-white hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600 font-extrabold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <Users className="w-5 h-5 text-emerald-700" aria-hidden="true" />
              <span>{language === 'hi' ? 'स्वयंसेवक बनें' : 'Join Us'}</span>
            </button>
            {/* Donate Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonateModal();
              }}
              aria-haspopup="dialog"
              className="w-full bg-emerald-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <Heart className="w-5 h-5 fill-white text-white" aria-hidden="true" />
              <span>{language === 'hi' ? 'दान करें (Donate Now)' : 'Donate Now'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
