import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import gamesData from '../../../data/games.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

// 緬甸語 SEO 規範：標題格式
export const metadata: Metadata = {
  title: 'ဆလော့ ဂိမ်းများ မြန်မာ | 500+ Slot Games | Shwe Casino 99',
  description: 'Shwe Casino 99 တွင် 500+ ဆလော့ ဂိမ်းများ ကစားနိုင်ပါသည်။ Pragmatic Play, PG Soft, BGaming ၏ အကောင်းဆုံး ဂိမ်းများ။ အမြင့်ဆုံး RTP, အခမဲ့ စမ်းသပ်ခြင်း, ငွေစစ် ကစားခြင်း ရရှိနိုင်ပါသည်။ Play 500+ slot games - Top providers, Free play available.',
  keywords: [
    // 緬甸語核心（60%）
    'ဆလော့ ဂိမ်း မြန်မာ',
    'အွန်လိုင်း ဆလော့',
    'ရွှေ ကာစီနို ဆလော့',
    'အကောင်းဆုံး ဆလော့ ဂိမ်း',
    'ဆုငွေ များတဲ့ ဆလော့',
    'Pragmatic Play ဆလော့',
    'PG Soft ဆလော့',
    'BGaming ဆလော့',
    // 混合關鍵字（20%）
    'slot games Myanmar',
    'online slots Myanmar',
    'Shwe Casino slots',
    // 英文關鍵字（20%）
    'slot games',
    'online slots',
    'Shwe Casino 99',
  ],
  openGraph: {
    title: 'ဆလော့ ဂိမ်းများ | Slot Games Myanmar | Shwe Casino 99',
    description: '500+ ဆလော့ ဂိမ်းများ - Pragmatic Play, PG Soft, BGaming',
    type: 'website',
    locale: 'my_MM',
    url: `${baseUrl}/games/slots`,
  },
  alternates: {
    canonical: `${baseUrl}/games/slots`,
  },
};

export default function SlotsPage() {
  // 篩選出所有 slots 遊戲
  const slotsGames = gamesData.filter((game) => game.category === 'slots');

  return (
    <div className="min-h-screen bg-red-900">
      {/* Breadcrumbs */}
      <nav className="bg-red-950 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-white">
            <Link href="/" className="hover:text-yellow-400">
              လေ့လာရန်
            </Link>
            <span>/</span>
            <span className="text-yellow-400">ဆလော့ ဂိမ်းများ</span>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* H1 - 緬甸語 + 英文 */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ဆလော့ ဂိမ်းများ | Slot Games Myanmar
        </h1>

        {/* 介紹段落 - 緬甸語為主 */}
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-white text-lg leading-relaxed mb-4">
            Shwe Casino 99 တွင် 500+ ဆလော့ ဂိမ်းများ ကစားနိုင်ပါသည်။ Pragmatic Play, PG Soft, BGaming, Hacksaw Gaming စသော ထိပ်တန်း ဂိမ်း ထုတ်လုပ်သူများ၏ အကောင်းဆုံး ဂိမ်းများ ပါဝင်သည်။ အမြင့်ဆုံး RTP, အခမဲ့ စမ်းသပ်ခြင်း, ငွေစစ် ကစားခြင်း ရရှိနိုင်ပါသည်။
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            Play over 500 slot games at Shwe Casino 99. Featuring top providers like Pragmatic Play, PG Soft, BGaming, and Hacksaw Gaming. Enjoy highest RTP, free play, and real money gaming.
          </p>
        </div>

        {/* 遊戲列表 */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {slotsGames.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.slug}`}
              className="bg-red-950 rounded-lg overflow-hidden hover:bg-red-900 transition-colors group"
            >
              <div className="relative aspect-square">
                <Image
                  src={game.thumbnail}
                  alt={`${game.nameMM} - ${game.name} Slot Game`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <div className="text-white font-semibold text-sm truncate mb-1">
                  {game.nameMM}
                </div>
                <div className="text-gray-400 text-xs truncate">
                  {game.providerMM}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-400 text-xs">
                    RTP {game.rtp}%
                  </span>
                  <span className="text-gray-500 text-xs">
                    {game.volatilityMM}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 內容區塊 - 緬甸語為主 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            ဘာကြောင့် Shwe Casino 99 ကို ရွေးချယ်သင့်သနည်း | Why Choose Shwe Casino 99
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-950 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                ထိပ်တန်း ထုတ်လုပ်သူများ
              </h3>
              <p className="text-white">
                Pragmatic Play, PG Soft, BGaming, Hacksaw Gaming စသော ကမ္ဘာ့ ထိပ်တန်း ဂိမ်း ထုတ်လုပ်သူများ၏ ဂိမ်းများ ပါဝင်သည်။
              </p>
            </div>
            <div className="bg-red-950 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                အမြင့်ဆုံး RTP
              </h3>
              <p className="text-white">
                အများစု ဂိမ်းများတွင် RTP 96%+ ရှိပြီး စျေးကွက်တွင် အမြင့်ဆုံး ပြန်အမ်းနှုန်း ပေးစွမ်းထားသည်။
              </p>
            </div>
            <div className="bg-red-950 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                အခမဲ့ စမ်းသပ်ခြင်း
              </h3>
              <p className="text-white">
                ငွေမသုံးဘဲ အခမဲ့ စမ်းသပ်ကစား နိုင်ပြီး ဂိမ်းများကို နားလည်ရန် အခွင့်အရေး ရရှိမည်။
              </p>
            </div>
            <div className="bg-red-950 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                မိုဘိုင်း နှစ်သက်သော
              </h3>
              <p className="text-white">
                မိုဘိုင်း ဖုန်း၊ တက်ဘလက် နှင့် ကွန်ပျူတာ အားလုံးတွင် ကစားနိုင်ပါသည်။
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            အခုပဲ စတင်ကစားပါ | Start Playing Now
          </h3>
          <p className="text-red-900 mb-4">
            Shwe Casino 99 တွင် အကောင်းဆုံး ဆလော့ ဂိမ်းများကို ကစားပါ။
          </p>
          <Link
            href="/"
            className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors"
          >
            ယခု စတင်ပါ | Start Now
          </Link>
        </div>
      </main>
    </div>
  );
}

