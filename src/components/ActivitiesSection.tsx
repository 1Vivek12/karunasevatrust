import React, { useState } from 'react';
import { ACTIVITIES_DATA } from '../data/ngoData';
import { Calendar, MapPin, Clock, Users, CheckCircle2, Heart } from 'lucide-react';

interface ActivitiesSectionProps {
  onOpenDonate: () => void;
  onOpenVolunteer: () => void;
  language: 'hi' | 'en';
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({
  onOpenDonate,
  onOpenVolunteer,
  language
}) => {
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);

  const toggleEventRegister = (eventId: string) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(registeredEvents.filter((id) => id !== eventId));
    } else {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
  };

  const upcomingEvents = ACTIVITIES_DATA.filter((a) => a.isUpcoming);
  const pastEvents = ACTIVITIES_DATA.filter((a) => !a.isUpcoming);

  return (
    <div className="py-12 bg-[#f8faf7] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Banner */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
            {language === 'hi' ? 'कार्यक्रम एवं गतिविधियाँ' : 'Events & Activities'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
            {language === 'hi' ? 'करुणा सेवा ट्रस्ट की प्रमुख गतिविधियाँ' : 'Activities & Upcoming Events'}
          </h1>
          <p className="text-slate-600 text-sm">
            हमारे द्वारा आयोजित आगामी समाज सेवा शिविरों में भाग लें या संपन्न गतिविधियों की रिपोर्ट देखें।
          </p>
        </div>

        {/* Upcoming Events Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b-2 border-emerald-700 pb-2">
            <Calendar className="w-5 h-5 text-emerald-700" />
            <h2 className="text-2xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'आगामी सेवा कार्यक्रम (Upcoming Events)' : 'Upcoming Events'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => {
              const isRegistered = registeredEvents.includes(event.id);
              return (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      {event.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 font-['Noto_Sans_Devanagari']">
                        {event.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed">
                        {event.description}
                      </p>

                      <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <Clock className="w-4 h-4 text-emerald-600" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{(event.registeredCount || 0) + (isRegistered ? 1 : 0)} वालंटियर्स शामिल</span>
                      </span>

                      <button
                        onClick={() => toggleEventRegister(event.id)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                          isRegistered
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                            : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow'
                        }`}
                      >
                        {isRegistered ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                            <span>आप शामिल हो चुके हैं</span>
                          </>
                        ) : (
                          <span>भाग लें (RSVP)</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Past Events / Reports */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-2 border-b-2 border-slate-300 pb-2">
            <CheckCircle2 className="w-5 h-5 text-slate-600" />
            <h2 className="text-2xl font-black text-slate-900 font-['Noto_Sans_Devanagari']">
              {language === 'hi' ? 'हाल ही में संपन्न गतिविधियाँ' : 'Completed Activities & Reports'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4"
              >
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1 text-xs">
                  <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">
                    {event.date}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm font-['Noto_Sans_Devanagari']">
                    {event.title}
                  </h4>
                  <p className="text-slate-600 line-clamp-2">
                    {event.description}
                  </p>
                  <p className="text-emerald-800 font-semibold pt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
