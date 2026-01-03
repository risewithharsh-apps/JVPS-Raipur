
import React, { useState } from 'react';
import { CONTENT, YOUTUBE_VIDEO_ID } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('hi');

  const t = CONTENT[lang];

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation / Language Toggle */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-[#E5E7EB]">
        <div className="text-sm font-semibold tracking-wider text-[#2C3E50]">
          JV RAIPUR
        </div>
        <button
          onClick={toggleLanguage}
          className="px-4 py-1.5 rounded-full border border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all duration-300 text-sm font-medium"
        >
          {lang === 'en' ? 'हिन्दी' : 'English'}
        </button>
      </nav>

      {/* Hero / Thank You Section */}
      <section className="pt-32 pb-8 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in">
            Registration Received
          </span>
          <h1 className={`text-4xl md:text-6xl font-heading mb-6 ${lang === 'hi' ? 'font-hindi' : ''} text-[#1A1A1A]`}>
            {t.thankYou}
          </h1>
          <p className={`text-lg md:text-xl text-slate-600 mb-10 leading-relaxed ${lang === 'hi' ? 'font-hindi' : ''}`}>
            {t.reachOut}
          </p>
          
          {/* Requested Header Section */}
          <div className="mt-8 border-t border-slate-100 pt-12 mb-4">
             <h2 className={`text-3xl md:text-5xl font-heading text-[#2C3E50] ${lang === 'hi' ? 'font-hindi' : ''}`}>
               {t.title}
             </h2>
          </div>
        </div>
      </section>

      {/* Main Info Cards */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-[#F3F4F6] hover:shadow-lg transition-shadow">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">When</h3>
            <p className={`text-xl font-semibold ${lang === 'hi' ? 'font-hindi' : ''}`}>{t.dates}</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-[#F3F4F6] hover:shadow-lg transition-shadow">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Where</h3>
            <p className={`text-xl font-semibold ${lang === 'hi' ? 'font-hindi' : ''}`}>{t.location}</p>
          </div>
          <div className="p-8 rounded-2xl bg-[#FAF9F6] border border-[#F3F4F6] hover:shadow-lg transition-shadow">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Venue</h3>
            <p className={`text-xl font-semibold ${lang === 'hi' ? 'font-hindi' : ''}`}>{t.venueName}</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 py-20 bg-[#F1F5F9]">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-heading mb-12 text-center ${lang === 'hi' ? 'font-hindi' : ''}`}>
            {t.videoTitle}
          </h2>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-8 text-center text-sm text-slate-500 italic">
            {lang === 'en' ? 'Watch our latest workshop session to get a feel for the environment.' : 'हमारे वर्कशॉप के माहौल को समझने के लिए नवीनतम सत्र देखें।'}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl font-heading mb-10 text-center ${lang === 'hi' ? 'font-hindi' : ''}`}>
            {t.aboutTitle}
          </h2>
          <div className="space-y-10 text-slate-700 text-lg leading-relaxed">
            {/* Main Content Paragraph - Ensured as single paragraph */}
            <p className={`text-center md:text-justify ${lang === 'hi' ? 'font-hindi' : ''}`}>
              {t.aboutContent[0]}
            </p>
            
            {/* Fee/Contribution Information Highlighted for better readability */}
            <div className={`p-8 bg-blue-50/50 rounded-2xl border-l-4 border-blue-200 relative overflow-hidden ${lang === 'hi' ? 'font-hindi' : ''}`}>
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <p className="relative z-10 font-medium text-slate-800 italic">
                {t.aboutContent[1]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-white border-t border-[#F3F4F6]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className={`text-lg font-medium text-slate-500 mb-6 ${lang === 'hi' ? 'font-hindi' : ''}`}>
            {t.contactTitle}
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {t.contacts.map((contact, idx) => (
              <a 
                key={idx} 
                href={`tel:${contact.phone}`}
                className="group flex items-center gap-3 p-4 rounded-xl hover:bg-[#FAF9F6] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#2C3E50] group-hover:bg-[#2C3E50] group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div className="text-left">
                  <div className={`text-sm font-bold text-slate-400 uppercase tracking-wider ${lang === 'hi' ? 'font-hindi' : ''}`}>{contact.name}</div>
                  <div className="text-lg font-semibold text-[#2C3E50]">{contact.phone}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 border-t border-[#E5E7EB] text-center bg-white px-6">
        <p className={`text-sm text-slate-500 uppercase tracking-widest ${lang === 'hi' ? 'font-hindi' : ''}`}>
          {t.footerText}
        </p>
        <div className="mt-4 text-xs text-slate-400">
          © {new Date().getFullYear()} Jeevan Vidya. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
