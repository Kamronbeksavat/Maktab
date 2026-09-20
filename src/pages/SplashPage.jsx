import React from 'react';
import { Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function SplashPage({ onEnter }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-teal-950 to-emerald-950 text-white p-4">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl animate-fadeIn">
        <div className="w-24 h-24 mb-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-emerald-400 shadow-2xl animate-bounce">
          <Globe className="w-12 h-12 text-emerald-300" />
        </div>
        
        <span className="text-emerald-400 font-semibold tracking-widest uppercase text-sm mb-2">
          O'zbekiston Respublikasi
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
          Yagona vatan, Yagona xalq!
        </h1>
        
        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
          Tariximiz, madaniyatimiz, qadriyatlarimiz va buyuk kelajagimiz sari birgalikda sayohat qiling.
        </p>
        
        <Link to="/home" onClick={onEnter} >
        <button
          onClick={onEnter}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-emerald-400/50 cursor-pointer"
        >
          <span>Saytga kirish</span>
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
        </Link>
      </div>

      <div className="absolute bottom-6 text-xs text-emerald-200/60 font-medium">
        Barcha huquqlar himoyalangan © 2026
      </div>
    </div>
  );
}

export default SplashPage;