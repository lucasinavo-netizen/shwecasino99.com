'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const affiliateLinks = [
  { url: "https://www.tik999.net/m/home?affiliateCode=seom2502", priority: 5 },
  { url: "https://www.ksr777n1.com/m/home?affiliateCode=seom2602", priority: 5 },
  { url: "https://www.af789.net/m/home?affiliateCode=seom2702", priority: 4 },
  { url: "https://www.pum999.net/m/home?affiliateCode=seom2802", priority: 4 },
  { url: "https://www.etc777.net/m/home?affiliateCode=seom2902", priority: 3 },
  { url: "https://www.paw777.net/m/home?affiliateCode=seom3002", priority: 3 },
];

const getRandomLink = () => {
  const weighted: string[] = [];
  affiliateLinks.forEach(link => {
    for (let i = 0; i < link.priority; i++) weighted.push(link.url);
  });
  return weighted[Math.floor(Math.random() * weighted.length)];
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-gradient-to-b from-red-900 to-red-800 border-b-4 border-yellow-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold text-red-900">🏆</div>
            <div>
              <div className="text-yellow-400 font-bold text-xl">Shwe</div>
              <div className="text-yellow-300 text-xs">CASINO 99</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => window.open(getRandomLink(), '_blank')} className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 px-6 py-2 rounded font-bold text-sm hover:shadow-lg">အကောင့်ဖွင့်ရန်</button>
            <button onClick={() => window.open(getRandomLink(), '_blank')} className="border-2 border-yellow-500 text-yellow-400 px-6 py-2 rounded font-bold text-sm hover:bg-yellow-500 hover:text-red-900">အကောင့်ဝင်ရန်</button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-yellow-400 text-3xl lg:hidden">☰</button>
          </div>
        </div>
        <nav className="border-t border-red-700 py-3">
          <div className="hidden lg:flex justify-center gap-6 text-sm">
            <a href="#" className="flex items-center gap-2 text-white hover:text-yellow-400"><span>🏠</span> လေ့လာရန်</a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-yellow-400"><span>🎰</span> လိုင်ဗ်ကာစီနို</a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-yellow-400"><span>🎲</span> စလော့</a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-yellow-400"><span>🎮</span> ပရိုမိုးရှင်း</a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-yellow-400"><span>⚽</span> အားကစား</a>
            <a href="#" className="flex items-center gap-2 text-white hover:text-yellow-400"><span>🎣</span> ဘင်ဂိုး</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

const HeroBanner = () => (
  <section className="bg-red-900">
    <div className="container mx-auto px-4 py-6">
      <div className="relative rounded-lg h-96 overflow-hidden">
        <Image 
          src="/images/le-santa.jpg" 
          alt="LE SANTA Christmas Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">ဂျောက်ပွဲ ၅၀,၀၀၀ ကျပ်</h2>
            <p className="text-xl text-yellow-200 drop-shadow-lg">Starlight Christmas မှာ Scatter တွေပါဝင်မယ်</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SearchBar = () => (
  <section className="bg-red-900 pb-6">
    <div className="container mx-auto px-4">
      <div className="relative">
        <input type="text" placeholder="အကောင့်ဖွင့်ရန်လျှောက်ထားပါ" className="w-full bg-red-950 border border-red-700 rounded-lg px-6 py-4 text-white placeholder-red-400 focus:outline-none focus:border-yellow-500" />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400 text-2xl">🔍</button>
      </div>
    </div>
  </section>
);

const GameProviders = () => {
  const providers = [
    { name: 'BGAMING', color: 'from-orange-600 to-red-700', icon: '🐼' },
    { name: 'PRAGMATIC', color: 'from-purple-900 to-red-900', icon: '🎭' },
    { name: 'PG SOFT', color: 'from-blue-900 to-purple-900', icon: '🐉' },
    { name: 'BNG', color: 'from-red-800 to-red-900', icon: '💰' },
    { name: 'SHAN', color: 'from-orange-700 to-red-800', icon: '🎴' },
    { name: 'HACKSAW', color: 'from-gray-800 to-red-900', icon: '🦝' },
  ];
  return (
    <section className="bg-red-950 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">11</span> ဂိမ်းကျူများ
          </h2>
          <span className="text-yellow-400 text-sm cursor-pointer">အားလုံးကြည့်ရန်</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {providers.map((p, i) => (
            <div key={i} onClick={() => window.open(getRandomLink(), '_blank')} className={`bg-gradient-to-br ${p.color} rounded-lg p-6 h-48 flex flex-col items-center justify-center border border-red-700 hover:border-yellow-500 cursor-pointer`}>
              <div className="text-4xl mb-3">{p.icon}</div>
              <div className="text-white font-bold text-sm">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PopularGames = () => {
  const games = [
    { name: 'Shwe Bonanza', provider: 'PRAGMATIC', badge: 'မြင့်', image: '/images/shwe-bonanza.jpg' },
    { name: 'Starlight Princess', provider: 'PRAGMATIC', badge: 'ပူပန်', image: '/images/starlight-princess.jpg' },
    { name: '5 Lions Megaways', provider: 'PRAGMATIC', badge: 'မြင့်', image: '/images/5-lions-megaways.jpg' },
    { name: 'Gates of Olympus', provider: 'PRAGMATIC', badge: 'မြင့်', image: '/images/gates-of-olympus.jpg' },
    { name: 'Ancient Egypt Classic', provider: 'PRAGMATIC', badge: 'ပူပန်', image: '/images/ancient-egypt.jpg' },
    { name: 'Caishen\'s Gold', provider: 'PRAGMATIC', badge: 'မြင့်', image: '/images/caishens-gold.jpg' },
    { name: 'Crazy 777 2', provider: 'PRAGMATIC', badge: 'ပူပန်', image: '/images/crazy-777-2.jpg' },
    { name: 'Super Ace DELUXE', provider: 'PRAGMATIC', badge: 'မြင့်', image: '/images/super-ace-deluxe.jpg' },
  ];
  return (
    <section className="bg-red-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">238</span> လူကြိုက်များသော
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {games.map((g, i) => (
            <div key={i} onClick={() => window.open(getRandomLink(), '_blank')} className="bg-gradient-to-br from-purple-900 via-blue-900 to-red-900 rounded-lg overflow-hidden border border-red-700 hover:border-yellow-500 cursor-pointer relative group">
              {g.badge && <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">{g.badge}</div>}
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600">
                {g.image ? (
                  <Image 
                    src={g.image} 
                    alt={g.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl">{g.icon || '🎮'}</div>
                  </div>
                )}
              </div>
              <div className="p-2 bg-gradient-to-b from-gray-900/80 to-black/80">
                <div className="text-white text-xs font-bold truncate">{g.name}</div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-400">{g.provider}</span>
                  <button className="text-white bg-red-700 rounded-full p-1 hover:bg-red-600 transition-colors">▶</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PromoSections = () => (
  <>
    <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">သင့်၏ Shwe Casino Journey ကို စတင်လိုက်ပါ။</h2>
            <p className="text-xl text-red-100 mb-6">ကမာရန် အခုသင့်ရှေ့ပြေးပါ။ သင့်အကောင့်ကို စတင်ဖွင့်လိုင့် ဖမ်းပါ။</p>
            <button onClick={() => window.open(getRandomLink(), '_blank')} className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 px-8 py-3 rounded-lg font-bold">ယခု စတင်အသုံးပြုပါ</button>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-8 h-64 flex items-center justify-center text-8xl">💰🎰</div>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-4">ကျွန်ုပ်တို့၏ စိတ်လှုပ်ရှားဖွယ် ပရိုမိုးရှင်း</h2>
            <p className="text-xl text-red-800 mb-6">ဖြစ်ထွန်း ဘိုးသန့်သော ပျက်ရန်ကို ဖြင့်ကြည်သလိုပါ။</p>
            <button onClick={() => window.open(getRandomLink(), '_blank')} className="bg-gradient-to-r from-red-800 to-red-900 text-white px-8 py-3 rounded-lg font-bold">ပရိုမိုးရှင်းကြည့်ရှုပါ</button>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-lg h-80 flex items-center justify-center"><div className="text-center"><div className="text-9xl">🎁</div><div className="text-white text-2xl font-bold mt-4">CASH PRIZE</div></div></div>
          </div>
        </div>
      </div>
    </section>
  </>
);

const Footer = () => (
  <footer className="bg-gradient-to-b from-red-950 to-black border-t-4 border-red-800">
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">အကြောင်းအရာ</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-yellow-400">စည်းကမ်းချက်များ</a></li>
            <li><a href="#" className="hover:text-yellow-400">ကျန်ရန်ကို့အကောင်း</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">ပရိုဂျက်</h3>
          <p className="text-sm text-gray-400">Shwe App ကိုဒေါင်းလုဒ်လုပ်ပါ။</p>
        </div>
      </div>
      <div className="border-t border-red-900 pt-6 text-center">
        <p className="text-gray-500 text-sm">Copyright Shwe Casino 2025. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-red-900">
      <Header />
      <HeroBanner />
      <SearchBar />
      <GameProviders />
      <PopularGames />
      <PromoSections />
      <Footer />
    </div>
  );
}
