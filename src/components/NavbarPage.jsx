import React, { useState } from 'react';
import { Shield, Search, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnthemPlayer from '../components/AnthemPlayer';

function Navbar({ activeSection, scrollTo, searchQuery, setSearchQuery, handleSearchSubmit, isPlaying, toggleAudio }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Bosh sahifa' },
    { id: 'about', label: 'Vatan haqida' },
    { id: 'regions', label: 'Viloyatlar' },
    { id: 'history', label: 'Tarix' },
    { id: 'culture', label: 'Madaniyat' },
  ];

  const onKeyDownInput = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(searchQuery);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-md">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="block font-black text-lg tracking-wider text-gray-900 dark:text-white">O'ZBEKISTON</span>
              <span className="block text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-widest">YAGONA VATAN</span>
            </div>
          </div>

          {/* Universal Search bar */}
          <div className="hidden md:flex items-center relative flex-1 max-w-lg mx-8">
            <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Viloyat, tarix, Navro'z, Amir Temur yoki madaniyatni qidiring..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={onKeyDownInput}
              className="w-full pl-10 pr-16 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-transparent dark:border-gray-700 transition-all shadow-inner"
            />
            <button 
              onClick={() => handleSearchSubmit(searchQuery)}
              className="absolute right-1.5 px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-xs font-semibold transition-colors shadow-sm cursor-pointer"
              title="Qidirish va o'tish"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          


          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-lg border ${
                isPlaying ? 'bg-emerald-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-3 pb-5 space-y-3">
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Qidiruv (tarix, Samarqand...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={onKeyDownInput}
              className="w-full pl-10 pr-20 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg text-sm focus:outline-none"
            />
            <button
              onClick={() => {
                handleSearchSubmit(searchQuery);
                setIsOpen(false);
              }}
              className="absolute right-1 px-3 py-1.5 bg-emerald-500 text-white rounded-md text-xs font-semibold"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollTo(link.id);
                  setIsOpen(false);
                }}
                className="text-left px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;