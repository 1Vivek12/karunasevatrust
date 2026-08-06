import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/ngoData';
import { GalleryItem } from '../types';
import { X, MapPin, Calendar, ZoomIn, Image } from 'lucide-react';

interface GallerySectionProps {
  language: 'hi' | 'en';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', labelHi: 'सभी तस्वीरें', labelEn: 'All Photos' },
    { id: 'food', labelHi: 'भोजन सेवा', labelEn: 'Food' },
    { id: 'health', labelHi: 'स्वास्थ्य शिविर', labelEn: 'Healthcare' },
    { id: 'clothes', labelHi: 'वस्त्र वितरण', labelEn: 'Clothing' },
    { id: 'marriage', labelHi: 'विवाह सहयोग', labelEn: 'Marriage' },
    { id: 'tree', labelHi: 'वृक्षारोपण', labelEn: 'Tree Plantation' },
    { id: 'education', labelHi: 'शिक्षा पहल', labelEn: 'Education' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-12 bg-[#f8faf7] space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Banner */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase flex items-center justify-center gap-1.5 w-fit mx-auto">
            <Image className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'फोटो एवं वीडियो गैलरी' : 'Photo & Video Gallery'}</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
            {language === 'hi' ? 'सेवा कार्यों की झलकियाँ' : 'Glimpses of Service Drives'}
          </h1>
          <p className="text-slate-600 text-sm">
            करुणा सेवा ट्रस्ट द्वारा आयोजित विभिन्न सामाजिक, सांस्कृतिक और सहायता अभियानों की प्रामाणिक तस्वीरें।
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-emerald-50'
              }`}
            >
              {language === 'hi' ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="bg-emerald-700/80 p-2.5 rounded-full backdrop-blur-xs">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                <span className="absolute top-2 left-2 bg-emerald-800/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm line-clamp-2 font-['Noto_Sans_Devanagari'] group-hover:text-emerald-800 transition">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-emerald-600" />
                    <span>{item.date}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Image Preview Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-700">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 space-y-2 bg-slate-900 text-white">
              <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                {activeImage.categoryLabel}
              </span>
              <h3 className="text-xl font-bold font-['Noto_Sans_Devanagari']">
                {activeImage.title}
              </h3>
              <div className="flex items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{activeImage.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{activeImage.location}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
