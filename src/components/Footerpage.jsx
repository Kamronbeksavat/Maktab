import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Globe, ChevronRight } from 'lucide-react';
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-teal-500 to-emerald-500 flex items-center justify-center text-white">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <span className="block font-black text-lg tracking-wider">O'ZBEKISTON</span>
            <span className="block text-xs text-emerald-400 font-medium tracking-widest">YAGONA VATAN, YAGONA XALQ!</span>
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          Ushbu veb-sahifa O'zbekistonning boy merosi va birdamligiga bag'ishlanadi.
        </p>

        <div className="text-emerald-400 font-semibold text-sm">
          Barcha huquqlar himoyalangan © 2026
        </div>

      </div>
    </footer>
  );
}

export default Footer;