import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { regions } from '../data/regionsData';
import { ArrowLeft, MapPin, Landmark } from 'lucide-react';

export default function RegionDetail() {
  const { id } = useParams();
  const region = regions.find(r => r.id === id);

  if (!region) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Viloyat topilmadi</h2>
        <Link to="/home" className="px-4 py-2 bg-emerald-600 rounded-xl text-white font-semibold flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Ortga qaytish tugmasi */}
        <Link to="/home" className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gray-900 border border-gray-800 hover:bg-gray-800 text-emerald-400 rounded-xl font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Orqaga qaytish
        </Link>

        {/* Viloyat Banner Rasmi va Sarlavhasi */}
        <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8 border border-gray-800">
          <img 
            src={region.image} 
            alt={region.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 inline-block">
              {region.title}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">{region.name}</h1>
          </div>
        </div>

        {/* Asosiy Ma'lumot va Tarix */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 sm:p-8 mb-12 shadow-lg">
          <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5" /> Hudud haqida umumiy ma'lumot
          </h3>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
            {region.description}
          </p>
          {region.history && (
            <>
              <h4 className="text-lg font-semibold text-white mb-2">Tarixi</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                {region.history}
              </p>
            </>
          )}
        </div>

        {/* Diqqatga Sazovor Joylar (Kengaytirilgan Kartochkalar) */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Landmark className="w-6 h-6 text-emerald-400" /> Diqqatga sazovor joylar va obidalar
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {region.highlights.map((item, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-md flex flex-col hover:border-emerald-500/50 transition-all">
                {item.image && (
                  <div className="h-48 w-full overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2">{item.name}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}