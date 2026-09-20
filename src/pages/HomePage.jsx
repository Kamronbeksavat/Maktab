import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, VolumeX, Search, Menu, X, Compass, Globe, 
  MapPin, BookOpen, Heart, Award, Sparkles, ChevronRight, 
  Landmark, Music, Users, Shield, Star, CheckCircle2, ArrowRight
} from 'lucide-react';
import Navbar from '../components/NavbarPage';
import Footer from '../components/Footerpage';
import { highlightDetails } from '../data/regionsData';
import tashkentImage from '../images/tashkent.jpg';
import samarqandImage from '../images/samarqand.jpg';
import buxoroImage from '../images/buxoro.jpg';
import xorazmImage from '../images/xorazm.jpg';
import fargonaImage from '../images/fargona.jpg';
import andijonImage from '../images/andijon.jpg';
import namanganImage from '../images/namangan.jpg';
import qashqadaryoImage from "../images/qashqadaryo.jpg"
import surxandaryoImage from "../images/surxandaryo.jpg"
import jizzaxImage from "../images/jizzax.jpg"
import sirdaryoImage from "../images/sirdaryo.jpg"
import navoiyImage from "../images/navoiy.jpg"
import toshkentvImage from "../images/toshkentv.jpg"
import qoraqolpoqImage from "../images/qoraqalpoq.jpg"

const UZBEKISTAN_DATA = {
  aboutText: "O'zbekiston Respublikasi — Markaziy Osiyoning qoq markazida joylashgan, boy tarixga, betakror tabiat va ming yillik qadriyatlarga ega bo'lgan mustaqil davlat. 'Yagona vatan, yagona xalq!' g'oyasi ostida turli millat va elat vakillari ahil-inoq yashab kelmoqda.",
  regions: [
    {
      id: 1,
      category: "viloyat",
      name: "Toshkent shahri",
      title: "Poytaxt va ilm-fan markazi",
      description: "O'zbekistonning siyosiy, iqtisodiy va madaniy markazi. Qadimiy tarix va zamonaviy arxitektura uyg'unlashgan ulug'vor shahar.",
      image: tashkentImage,
      highlights: ["Amir Temur xiyoboni", "Hazrati Imom majmuasi", "Metro bekati san'ati"]
    },
    {
      id: 2,
      category: "viloyat",
      name: "Samarqand viloyati",
      title: "Sharq gavhari va qadimiy meros",
      description: "Buyuk ipak yo'lining yuragi, jahon madaniyati beshigi. Registon maydoni va Shohizinda ansambli bilan mashhur.",
      image: samarqandImage,
      highlights: ["Registon maydoni", "Go'ri Amir", "Bibi Xonim masjidi"]
    },
    {
      id: 3,
      category: "viloyat",
      name: "Buxoro viloyati",
      title: "Ipak yo'lining qadimiy durdonasi",
      description: "O'rta asrlarning eng yirik ilmiy va diniy markazlaridan biri. Shahar markazi UNESCO Butunjahon merosi ro'yxatiga kiritilgan.",
      image: buxoroImage,
      highlights: ["Minorai Kalon", "Ark qo'rg'oni", "Labihovuz ansambli"]
    },
    {
      id: 4,
      category: "viloyat",
      name: "Xorazm viloyati",
      title: "Avesto vatani va mardlar yurti",
      description: "Qadimiy Xorazm sivilizatsiyasi markazi, Ichan-qal'a qo'riqxonasi joylashgan betakror o'lka.",
      image: xorazmImage,
      highlights: ["Ichan-qal'a", "Kalta Minor", "Kunya Ark"]
    },
    {
      id: 5,
      category: "viloyat",
      name: "Farg'ona viloyati",
      title: "Tabiat jannati va hunarmandchilik beshigi",
      description: "Adras va atlas to'qish markazi, Marg'ilonning mashhur ipak fabrikalari hamda xushmanzara tabiatga ega viloyat.",
      image: fargonaImage,
      highlights: ["Marg'ilon Ipakchilik fabrikasi", "Yozyovon cho'llari", "Ahmad Al Farg'oniy majmuasi"]
    },
    {
      id: 6,
      category: "viloyat",
      name: "Andijon viloyati",
      title: "Tong yulduzi va hunarmandlar diyori",
      description: "Buyuk sarkarda va shoir Zahiriddin Muhammad Bobur tavallud topgan, qadimiy tarixga ega fayzli o'lka.",
      image: andijonImage,
      highlights: ["Bobur yodgorlik majmuasi", "Ibrohim ota masjidi", "Andijon viloyat o'lkashunoslik muzeyi"]
    },
    {
      id: 7,
      category: "viloyat",
      name: "Namangan viloyati",
      title: "Gullar diyori va ma'rifat maskani",
      description: "Har yili an'anaviy 'Gullar bayrami' o'tkaziladigan, hunarmandchiligi va bog'dorchiligi bilan nom qozongan viloyat.",
      image: namanganImage,
      highlights: ["Axsikent qadimiy shahri", "Mullo To'ychi madrasasi", "Gullar bog'i"]
    },
    {
      id: 8,
      category: "viloyat",
      name: "Qashqadaryo viloyati",
      title: "Sohibqiron Amir Temur vatani",
      description: "Qarshi va Shahrisabz shaharlari bilan mashhur bo'lib, buyuk sarkarda tug'ilib o'sgan qadimiy zamin.",
      image: qashqadaryoImage,
      highlights: ["Oqsaroy majmuasi", "Dor us-Saodat", "Amir Temur yodgorligi"]
    },
    {
      id: 9,
      category: "viloyat",
      name: "Surxondaryo viloyati",
      title: "Quyoshli o'lka va qadimiy Budizm maskani",
      description: "Tarixiy Fayoztepa, Dalvarzintepa va Boysunning betakror folklor merosi saqlanib qolgan betakror manzillar.",
      image: surxandaryoImage,
      highlights: ["Boysun", "Kampirtepa", "Sulton Saodat majmuasi"]
    },
    {
      id: 10,
      category: "viloyat",
      name: "Jizzax viloyati",
      title: "So'lim tabiat va tog'li o'lka",
      description: "Zomin milliy tabiat bog'i, o'ziga xos tog' landshaftlari va betakror ekoturizm maskani.",
      image: jizzaxImage,
      highlights: ["Zomin milliy bog'i", "Peshog'or g'ori", "Forish tog'lari"]
    },
    {
      id: 11,
      category: "viloyat",
      name: "Sirdaryo viloyati",
      title: "Dehqonchilik va sahovatli yer",
      description: "Sirdaryo bo'yida joylashgan, boy agrar salohiyatiga va mehnatsevar xalqqa ega hudud.",
      image: sirdaryoImage,
      highlights: ["Sirdaryo qirg'oqlari", "Guliston shahri obidalari", "Agrosanoat majmualari"]
    },
    {
      id: 12,
      category: "viloyat",
      name: "Navoiy viloyati",
      title: "Cho'l gavhari va sanoat markazi",
      description: "Qadimiy Nurota buloqlari va Sarmishsoy qoyatosh rasmlari bilan mashhur qadimiy zamin.",
      image: navoiyImage,
      highlights: ["Sarmishsoy petrogliflari", "Chashma majmuasi", "Aidarkul"]
    },
    {
      id: 13,
      category: "viloyat",
      name: "Toshkent viloyati",
      title: "Tog'lar qo'ynidagi jannat",
      description: "Chorvoq suv ombori, Chimyon tog'lari va Bo'stonliqning go'zal tabiati bilan mashhur hudud.",
      image: toshkentvImage,
      highlights: ["Chorvoq suv ombori", "Chimyon tog'lari", "Ugom-Chatqol milliy bog'i"]
    },
    {
      id: 14,
      category: "viloyat",
      name: "Qoraqalpog'iston Respublikasi",
      title: "Sahro va san'at diyori",
      description: "Qadimiy qal'alar, Orol dengizi fojiasi va o'ziga xos boy madaniyat hamda folklor merosiga ega respublika.",
      image: qoraqolpoqImage,
      highlights: ["Savitskiy nomidagi san'at muzeyi", "Tuproqqal'a", "Mizdaxqon arxeologiya majmuasi"]
    }
  ],
  history: [
    {
      id: 101,
      category: "tarix",
      period: "Qadimgi davr",
      title: "Buyuk Ipak Yo'li va Sug'd sivilizatsiyasi",
      text: "O'zbekiston hududi qadimdan Sharq va G'arbni bog'lovchi savdo yo'llarining markazi bo'lgan. Baqtriya, Xorazm va Sug'd davlatlari yuksak madaniyatga ega edi."
    },
    {
      id: 102,
      category: "tarix",
      period: "IX - XII asrlar",
      title: "Sharq Uyg'onish davri (Birinchi Renessans)",
      text: "Al-Xorazmiy, Abu Ali ibn Sino, Imom Buxoriy, Abu Rayhon Beruniy kabi buyuk mutafakkirlar jahon ilm-faniga ulkan hissalar qo'shgan davr."
    },
    {
      id: 103,
      category: "tarix",
      period: "XIV - XV asrlar",
      title: "Temuriylar Renessansi va Amir Temur",
      text: "Amir Temur va Temuriylar davrida ilm-fan, me'morchilik va san'at misli ko'rilmagan darajada rivojlandi. Samarqand va Buxoro jahonning ilm markaziga aylandi."
    },
    {
      id: 104,
      category: "tarix",
      period: "1991 yil 31-avgust",
      title: "Mustaqillik e'lon qilinishi",
      text: "O'zbekiston Respublikasi o'z mustaqilligini qo'lga kiritib, suveren, demokratik va huquqiy davlat qurish sari dadil qadam tashladi."
    }
  ],
  culture: [
    {
      id: 201,
      category: "madaniyat",
      title: "Milliy qadriyatlar va birdamlik",
      desc: "'Yagona vatan, yagona xalq!' g'oyasi ostida turli millat va elat vakillari ahil-inoq yashab kelmoqda. Navro'z va boshqa bayramlar umumxalq ruhida nishonlanadi.",
      icon: Users
    },
    {
      id: 202,
      category: "madaniyat",
      title: "O'zbek oshxonasi va Palov",
      desc: "Jahon bo'ylab tan olingan o'zbek palovi, somsa, manti va shashlik kabi tansiq taomlar milliy mehmondo'stlik va totuvlik ramzidir.",
      icon: Award
    },
    {
      id: 203,
      category: "madaniyat",
      title: "San'at, Maqom va Hunarmandchilik",
      desc: "Milliy naqshlar, zardo'zlik, kulolchilik, gilamdo'zlik va Shashmaqom san'ati UNESCO tomonidan insoniyatning nomoddiy madaniy merosi sifatida e'tirof etilgan.",
      icon: Sparkles
    }
  ]
};



<Navbar></Navbar>

function Hero({ scrollTo }) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-blue-950 via-teal-950 to-gray-900 text-white overflow-hidden py-20 px-4">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-sm font-semibold mb-6 shadow-lg">
          <Star className="w-4 h-4 fill-emerald-300 text-emerald-300" />
          <span>O'zbekiston Respublikasi — Mustaqil va Buyuk Kelajak</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Yagona vatan, <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
            Yagona xalq!
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Tarixi qadim, kelajagi buyuk, azaldan tinchlik va totuvlik maskani bo'lgan ajib O'zbekistonimiz haqida barcha ma'lumotlar bir joyda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('about')}
            className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            Batafsil tanishish
          </button>
          <button
            onClick={() => scrollTo('regions')}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all transform hover:-translate-y-1 cursor-pointer"
          >
            Viloyatlar bilan tanishish
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/10 text-center">
          <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-extrabold text-emerald-400">14 ta</div>
            <div className="text-sm text-gray-300 mt-1 font-medium">Hudud va mintaqalar</div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-extrabold text-teal-400">37 mln+</div>
            <div className="text-sm text-gray-300 mt-1 font-medium">Aholi soni</div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-extrabold text-blue-400">3000+</div>
            <div className="text-sm text-gray-300 mt-1 font-medium">Yillik tarix</div>
          </div>
          <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-extrabold text-amber-400">130+</div>
            <div className="text-sm text-gray-300 mt-1 font-medium">Millat va elatlar</div>
          </div>
        </div>

      </div>
    </section>
  );
}

function AboutUzbekistan({ aboutText, searchQuery }) {
  const isHighlighted = searchQuery && aboutText.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <section id="about" className={`py-20 bg-white dark:bg-gray-900 transition-colors ${isHighlighted ? 'ring-4 ring-emerald-400/50 bg-emerald-50/30' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm tracking-widest uppercase">Muqaddas zamin</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            O'zbekiston – Bag'rikenglik va birdamlik diyori
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            {aboutText}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Landmark className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tarixiy meros</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Samarqand, Buxoro, Xiva va Shahrisabz kabi qadimiy shaharlar o'zining betakror obidalari bilan butun dunyoni lol qoldirib kelmoqda.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Totuvlik va birdamlik</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Mamlakatimizda turli millat va din vakillari yagona oila kabi tinch-totuv, o'zaro hurmat va hamjihatlikda hayot kechirmoqda.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Yangi marralar</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Bugungi kunda Yangi O'zbekiston shiddat bilan rivojlanib, ta'lim, fan, texnologiya va sportda ulkan yutuqlarga erishmoqda.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Regions({ regions, searchQuery }) {
  // Modal oynaning holatini boshqarish uchun state
  const [activeHighlight, setActiveHighlight] = useState(null);

  // Tugma bosilganda ishlaydigan funksiya
  const handleHighlightClick = (highlightName) => {
    const details = highlightDetails[highlightName];
    if (details) {
      setActiveHighlight(details);
    } else {
      // Agar bazada topilmasa zaxira ma'lumot chiqarish
      setActiveHighlight({
        title: highlightName,
        description: `${highlightName} — O'zbekistonning diqqatga sazovor va tarixiy maskanlaridan biri hisoblanadi.`,
        image: "https://placehold.co/800x500/10b981/FFFFFF.png?text=" + encodeURIComponent(highlightName)
      });
    }
  };

  const filteredRegions = regions.filter(reg => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      reg.name.toLowerCase().includes(q) ||
      reg.title.toLowerCase().includes(q) ||
      reg.description.toLowerCase().includes(q) ||
      reg.highlights.some(h => h.toLowerCase().includes(q))
    );
  });

  return (
    <section id="regions" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm tracking-widest uppercase">Hududlar</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            O'zbekiston viloyatlari va markazlari
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            Har bir hudud o'ziga xos tarixga, madaniyatga va mehmondo'st xalqqa ega.
          </p>
        </div>

        {filteredRegions.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 max-w-xl mx-auto">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">Bu bo'limda "{searchQuery}" bo'yicha viloyatlar topilmadi.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRegions.map((region) => {
              const isHighlighted = searchQuery && (
                region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                region.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                region.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
              );
              return (
                <div 
                  key={region.id}
                  className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border transition-all duration-300 flex flex-col ${
                    isHighlighted ? 'border-emerald-500 ring-4 ring-emerald-400/40 scale-[1.02]' : 'border-gray-100 dark:border-gray-800 hover:-translate-y-2'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={region.image} 
                      alt={region.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => { e.target.src = "https://placehold.co/600x400/10b981/ffffff?text=O'zbekiston"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <span className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">
                      {region.name}
                    </span>
                    {isHighlighted && (
                      <span className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Mos keldi
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold text-emerald-600 dark:text-emerald-400 text-sm mb-2">{region.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{region.description}</p>
                    </div>

                    <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mt-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Diqqatga sazovor joylar:</span>
                      
                      {/* Diqqatga sazovor joylar tugmalari ko'rinishiga keltirildi va onClick qo'shildi */}
                      <div className="flex flex-wrap gap-2">
                        {region.highlights.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleHighlightClick(item)}
                            className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-600 hover:text-white text-emerald-700 dark:text-emerald-300 rounded-md text-xs font-medium transition-colors cursor-pointer text-left border border-emerald-200 dark:border-emerald-900"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* --- MODAL OYNA (Tugma bosilganda chiqadigan oyna) --- */}
      {activeHighlight && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Modal rasmi */}
            <div className="relative h-56 sm:h-64 w-full">
              <img 
                src={activeHighlight.image} 
                alt={activeHighlight.title}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://placehold.co/800x500/10b981/ffffff?text=Ma'lumot"; }}
              />
              <button 
                onClick={() => setActiveHighlight(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-red-600 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal matni */}
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{activeHighlight.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                {activeHighlight.description}
              </p>
              
              <button
                onClick={() => setActiveHighlight(null)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors cursor-pointer shadow-lg shadow-emerald-600/30"
              >
                Yopish
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

function History({ historyData, searchQuery }) {
  const filteredHistory = historyData.filter(item => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.text.toLowerCase().includes(q) ||
      item.period.toLowerCase().includes(q)
    );
  });

  return (
    <section id="history" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm tracking-widest uppercase">Shonli o'tmish</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            O'zbekiston tarixining asosiy sahifalari
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            Ming yillik davlatchilik va madaniyat tariximiz bilan faxrlanamiz.
          </p>
        </div>

        {filteredHistory.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">Bu bo'limda "{searchQuery}" bo'yicha tarixiy ma'lumot topilmadi.</p>
          </div>
        ) : (
          <div className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-4 md:ml-32 space-y-12">
            {filteredHistory.map((item) => {
              const isHighlighted = searchQuery && (
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.period.toLowerCase().includes(searchQuery.toLowerCase())
              );
              return (
                <div key={item.id} className="relative pl-8 md:pl-12 group">
                  <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 transition-transform ${
                    isHighlighted ? 'bg-amber-500 scale-125 ring-4 ring-amber-400/30' : 'bg-emerald-500 group-hover:scale-125'
                  }`}></div>
                  
                  <div className="hidden md:block absolute -left-36 top-1 text-right w-24 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {item.period}
                  </div>

                  <div className={`p-6 rounded-2xl border transition-all ${
                    isHighlighted 
                      ? 'bg-amber-50/60 dark:bg-amber-950/30 border-amber-400 ring-2 ring-amber-400/40 shadow-md' 
                      : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 shadow-sm'
                  }`}>
                    <span className="md:hidden inline-block px-3 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-bold mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

function Culture({ cultureData, searchQuery }) {
  const filteredCulture = cultureData.filter(item => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );
  });

  return (
    <section id="culture" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm tracking-widest uppercase">Madaniyat va Qadriyatlar</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
            O'zbek xalqining ma'naviy olami
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            Mehmondo'stlik, kattalarga hurmat va ezgulik bizning azaliy qadriyatlarimizdir.
          </p>
        </div>

        {filteredCulture.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">Bu bo'limda "{searchQuery}" bo'yicha ma'lumot topilmadi.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCulture.map((item) => {
              const IconComp = item.icon;
              const isHighlighted = searchQuery && (
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchQuery.toLowerCase())
              );
              return (
                <div 
                  key={item.id} 
                  className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md border text-center transition-all ${
                    isHighlighted ? 'border-emerald-500 ring-4 ring-emerald-400/40 scale-[1.02]' : 'border-gray-100 dark:border-gray-800 hover:-translate-y-1'
                  }`}
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

<Footer></Footer>

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    // Initializing high-quality instrumental anthem audio looping infinitely
    audioRef.current = new Audio('https://upload.wikimedia.org/wikipedia/commons/3/33/National_anthem_of_Uzbekistan_%28instrumental%29.ogg');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Audio playback error:", err);
      });
    }
  };

  const handleEnterSite = () => {
    setShowSplash(false);
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Audio autoplay note:", err);
      });
    }
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 100% Universal Smart Search routing across ALL sections (regions, history, culture, about)
  const handleSearchSubmit = (query) => {
    if (!query.trim()) return;
    const lowerQ = query.toLowerCase();

    // 1. Check if query matches History
    const foundHistory = UZBEKISTAN_DATA.history.some(h => 
      h.title.toLowerCase().includes(lowerQ) || h.text.toLowerCase().includes(lowerQ) || h.period.toLowerCase().includes(lowerQ)
    );
    if (foundHistory) {
      scrollTo('history');
      return;
    }

    // 2. Check if query matches Regions/Cities
    const foundRegion = UZBEKISTAN_DATA.regions.some(r => 
      r.name.toLowerCase().includes(lowerQ) || r.title.toLowerCase().includes(lowerQ) || r.description.toLowerCase().includes(lowerQ) || r.highlights.some(h => h.toLowerCase().includes(lowerQ))
    );
    if (foundRegion) {
      scrollTo('regions');
      return;
    }

    // 3. Check if query matches Culture/Traditions
    const foundCulture = UZBEKISTAN_DATA.culture.some(c => 
      c.title.toLowerCase().includes(lowerQ) || c.desc.toLowerCase().includes(lowerQ)
    );
    if (foundCulture) {
      scrollTo('culture');
      return;
    }

    // 4. Check if query matches About info
    if (UZBEKISTAN_DATA.aboutText.toLowerCase().includes(lowerQ)) {
      scrollTo('about');
      return;
    }

    // Default fallback to regions section if partial match exists anywhere
    scrollTo('regions');
  };

  // Track scroll position for active navbar item highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'regions', 'history', 'culture'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar 
        activeSection={activeSection} 
        scrollTo={scrollTo} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearchSubmit={handleSearchSubmit}
        isPlaying={isPlaying}
        toggleAudio={toggleAudio}
      />
      <main>
        <Hero scrollTo={scrollTo} />
        <AboutUzbekistan aboutText={UZBEKISTAN_DATA.aboutText} searchQuery={searchQuery} />
        <Regions regions={UZBEKISTAN_DATA.regions} searchQuery={searchQuery} />
        <History historyData={UZBEKISTAN_DATA.history} searchQuery={searchQuery} />
        <Culture cultureData={UZBEKISTAN_DATA.culture} searchQuery={searchQuery} />
      </main>
      <Footer />
    </div>
  );
}