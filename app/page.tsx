import Image from 'next/image';
import Script from 'next/script';
import Header from './components/Header';
import Footer from './components/Footer';
import GameCardWrapper from './components/GameCardWrapper';
import ProviderCard from './components/ProviderCard';
import PromoSection from './components/PromoSection';

// 這是一個 Server Component（不要加 'use client'）
export default function Home() {
  // Server Component 可以直接定義數據
  const providers = [
    { name: 'BGAMING', color: 'from-orange-600 to-red-700', logo: '/images/bgaming-logo.jpg' },
    { name: 'PRAGMATIC', color: 'from-purple-900 to-red-900', logo: '/images/pragmatic-logo.jpg' },
    { name: 'PG SOFT', color: 'from-blue-900 to-purple-900', logo: '/images/pgsoft-logo.jpg' },
    { name: 'BNG', color: 'from-red-800 to-red-900', logo: '/images/bng-logo.jpg' },
    { name: 'SHAN', color: 'from-orange-700 to-red-800', logo: '/images/shan-logo.jpg' },
    { name: 'HACKSAW', color: 'from-gray-800 to-red-900', logo: '/images/hacksaw-logo.jpg' },
  ];

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

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Shwe Casino 99 သည် ဘင်းပါသလား?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shwe Casino 99 သည် နိုင်ငံတကာ လိုင်စင်ရရှိထားပြီး SSL encryption ဖြင့် လုံခြုံစေသည်။"
        }
      },
      {
        "@type": "Question",
        "name": "ငွေထုတ်ယူရန် မည်မျှကြာမြင့်ပါသလဲ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ငွေထုတ်ယူမှုကို ၂၄ နာရီအတွင်း လုပ်ဆောင်ပေးပါသည်။ များသောအားဖြင့် ၁-၂ နာရီအတွင်း ရရှိပါသည်။"
        }
      }
    ]
  };

  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": games.map((game, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": game.name,
      "description": `${game.name} - ${game.provider} slot game available at Shwe Casino 99`
    }))
  };


  return (
    <>
      {/* Schema Markup */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="game-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />

      <div className="min-h-screen bg-red-900">
        <Header />

        {/* Main Content */}
        <main>
          {/* Hero Banner - Server Component */}
          <section className="bg-red-900" aria-label="Hero banner">
            <div className="container mx-auto px-4 py-6">
              <h1 className="sr-only">
                Shwe Casino 99 - မြန်မာ့ အကောင်းဆုံး အွန်လိုင်း ကာစီနို
              </h1>
              <div className="relative rounded-lg h-96 overflow-hidden">
                <Image 
                  src="/images/heng3.jpg" 
                  alt="Shwe Casino 99 Welcome Bonus - Get 100% Match Bonus up to 50,000 MMK"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Search Bar */}
          <section className="bg-red-900 pb-6">
            <div className="container mx-auto px-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="အကောင့်ဖွင့်ရန်လျှောက်ထားပါ" 
                  className="w-full bg-red-950 border border-red-700 rounded-lg px-6 py-4 text-white placeholder-red-400 focus:outline-none focus:border-yellow-500" 
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-yellow-400 text-2xl" aria-label="Search">🔍</button>
              </div>
            </div>
          </section>

          {/* Game Providers - Server Component */}
          <section className="bg-red-950 py-6" aria-labelledby="providers-title">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-4">
                <h2 id="providers-title" className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">11</span> 
                  ဂိမ်းကျူများ
                </h2>
                <a href="#providers" className="text-yellow-400 text-sm cursor-pointer hover:underline">
                  အားလုံးကြည့်ရန်
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {providers.map((provider, index) => (
                  <ProviderCard key={index} provider={provider} />
                ))}
              </div>
            </div>
          </section>

          {/* Popular Games - Server Component with Client interactions */}
          <section className="bg-red-900 py-6" aria-labelledby="games-title">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-4">
                <h2 id="games-title" className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">238</span> 
                  လူကြိုက်များသော
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {games.map((game, index) => (
                  <GameCardWrapper 
                    key={index}
                    game={game}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Promotions - Server Component */}
          <PromoSection
            title="သင့်၏ Shwe Casino Journey ကို စတင်လိုက်ပါ။"
            description="ကမာရန် အခုသင့်ရှေ့ပြေးပါ။ သင့်အကောင့်ကို စတင်ဖွင့်လိုင့် ဖမ်းပါ။"
            buttonText="ယခု စတင်အသုံးပြုပါ"
            imageSrc="/images/promo-welcome-bonus.jpg"
            imageAlt="Shwe Casino 99 New Member Welcome Bonus - 100% First Deposit Bonus"
            bgGradient="bg-gradient-to-r from-red-800 via-red-700 to-red-800"
            textColor="text-white"
            buttonVariant="primary"
          />
          
          <PromoSection
            title="ကျွန်ုပ်တို့၏ စိတ်လှုပ်ရှားဖွယ် ပရိုမိုးရှင်း"
            description="ဖြစ်ထွန်း ဘိုးသန့်သော ပျက်ရန်ကို ဖြင့်ကြည်သလိုပါ။"
            buttonText="ပရိုမိုးရှင်းကြည့်ရှုပါ"
            imageSrc="/images/promo-christmas.jpg"
            imageAlt="Shwe Casino 99 Christmas Promotion - Special Bonuses & Rewards"
            bgGradient="bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200"
            textColor="text-red-900"
            buttonVariant="secondary"
          />
        </main>

        <Footer />
      </div>
    </>
  );
}
