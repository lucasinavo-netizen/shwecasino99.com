import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import gamesData from '../../../data/games.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return gamesData.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const game = gamesData.find((g) => g.slug === params.slug);

  if (!game) {
    return {
      title: 'Game Not Found | Shwe Casino 99',
      description: 'Game not found',
    };
  }

  // 緬甸語 SEO 規範：標題格式 = 緬甸語 | 英文 | 品牌名
  const title = `${game.nameMM} - ဂိမ်း အပြည့်အစုံ သုံးသပ်ချက် | ${game.name} Review | Shwe Casino 99`;
  
  // 緬甸語 SEO 規範：描述 = 緬甸語為主（80-100字）+ 英文補充（20-30字）
  const description = `${game.nameMM} ဆလော့ ဂိမ်းကို Shwe Casino 99 တွင် ကစားပါ။ RTP ${game.rtp}%၊ ${game.volatilityMM} ပြင်းထန်မှု၊ အမြင့်ဆုံး ဆုငွေ ${game.maxWin}။ ${game.providerMM} ၏ အကောင်းဆုံး ဂိမ်း။ Play ${game.name} slot - RTP ${game.rtp}%, Max win ${game.maxWin}, ${game.provider} game.`;

  // 緬甸語 SEO 規範：關鍵字 = 60% 緬甸語 + 20% 混合 + 20% 英文
  const keywords = [
    // 緬甸語核心（60%）
    game.nameMM,
    `${game.nameMM} ဂိမ်း`,
    'ဆလော့ ဂိမ်း မြန်မာ',
    'အွန်လိုင်း ကာစီနို',
    'ရွှေ ကာစီနို ဂိမ်းများ',
    `${game.providerMM} ဂိမ်းများ`,
    `${game.nameMM} ဘယ်လို ကစားမလဲ`,
    'အကောင်းဆုံး ဆလော့ ဂိမ်း',
    'ဆုငွေ များတဲ့ ဂိမ်း',
    
    // 混合關鍵字（20%）
    `${game.name} Myanmar`,
    `${game.provider} Myanmar`,
    'online slots Myanmar',
    `${game.nameMM} slot`,
    
    // 英文關鍵字（20%）
    `${game.name} slot`,
    `${game.provider} games`,
    'Shwe Casino 99',
    'online casino Myanmar',
  ];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${game.nameMM} | ${game.name} | Shwe Casino 99`,
      description: `${game.nameMM} - RTP ${game.rtp}%၊ အမြင့်ဆုံး ${game.maxWin}`,
      type: 'article',
      locale: 'my_MM',
      url: `${baseUrl}/games/${game.slug}`,
      images: [
        {
          url: `${baseUrl}${game.images[0]}`,
          alt: `${game.nameMM} - ${game.name} Screenshot`,
        },
      ],
    },
    alternates: {
      canonical: `${baseUrl}/games/${game.slug}`,
      languages: {
        'my-MM': `${baseUrl}/games/${game.slug}`,
        'en': `${baseUrl}/en/games/${game.slug}`,
      },
    },
  };
}

export default function GameDetailPage({ params }: PageProps) {
  const game = gamesData.find((g) => g.slug === params.slug);

  if (!game) {
    return (
      <div className="min-h-screen bg-red-900 text-white p-8">
        <h1>Game Not Found</h1>
        <Link href="/games" className="text-yellow-400 hover:underline">
          Back to Games
        </Link>
      </div>
    );
  }

  // 找出相關遊戲
  const relatedGames = gamesData
    .filter((g) => 
      game.relatedGames.includes(g.slug) && g.id !== game.id
    )
    .slice(0, 4);

  // Game Schema.org 結構化數據
  const gameSchema = {
    '@context': 'https://schema.org',
    '@type': 'Game',
    name: game.name,
    alternateName: game.nameMM,
    description: game.descriptionMM,
    genre: 'Casino/Slot',
    gamePlatform: 'Web Browser, Mobile',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'MMK',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: game.rating,
      ratingCount: game.popularity,
    },
  };

  return (
    <>
      <Script
        id="game-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />

      <div className="min-h-screen bg-red-900">
        {/* Breadcrumbs */}
        <nav className="bg-red-950 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-white">
              <Link href="/" className="hover:text-yellow-400">
                လေ့လာရန်
              </Link>
              <span>/</span>
              <Link href="/games/slots" className="hover:text-yellow-400">
                ဆလော့ ဂိမ်းများ
              </Link>
              <span>/</span>
              <span className="text-yellow-400">{game.nameMM}</span>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          {/* H1 - 緬甸語 + 英文 */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {game.nameMM} - အပြည့်အစုံ ဂိမ်း သုံးသပ်ချက် | {game.name} Complete Review
          </h1>

          {/* 遊戲圖片 */}
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
            <Image
              src={game.images[0]}
              alt={`${game.nameMM} ဆလော့ ဂိမ်း မျက်နှာပြင် - ${game.name} Slot Game Screenshot`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* 遊戲資訊卡片 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-red-950 p-4 rounded-lg">
              <div className="text-yellow-400 text-sm mb-1">RTP</div>
              <div className="text-white text-xl font-bold">{game.rtp}%</div>
            </div>
            <div className="bg-red-950 p-4 rounded-lg">
              <div className="text-yellow-400 text-sm mb-1">ပြင်းထန်မှု</div>
              <div className="text-white text-xl font-bold">{game.volatilityMM}</div>
            </div>
            <div className="bg-red-950 p-4 rounded-lg">
              <div className="text-yellow-400 text-sm mb-1">အမြင့်ဆုံး ဆုငွေ</div>
              <div className="text-white text-xl font-bold">{game.maxWin}</div>
            </div>
            <div className="bg-red-950 p-4 rounded-lg">
              <div className="text-yellow-400 text-sm mb-1">ထုတ်လုပ်သူ</div>
              <div className="text-white text-xl font-bold">{game.providerMM}</div>
            </div>
          </div>

          {/* 第一段 - 緬甸語為主 */}
          <div className="prose prose-invert max-w-none mb-8">
            <p className="text-white text-lg leading-relaxed mb-4">
              {game.descriptionMM}
            </p>
            <p className="text-gray-300 text-base leading-relaxed">
              {game.description}
            </p>
          </div>

          {/* 遊戲特色 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              ဂိမ်း အင်္ဂါရပ်များ | Game Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {game.featuresMM.map((feature, index) => (
                <div key={index} className="bg-red-950 p-4 rounded-lg">
                  <div className="text-yellow-400 font-semibold mb-2">
                    {feature}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {game.features[index]}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 完整內容 */}
          {game.fullContentMM && (
            <section className="mb-8">
              <div className="prose prose-invert max-w-none">
                <div className="text-white whitespace-pre-line">
                  {game.fullContentMM}
                </div>
                {game.fullContent && (
                  <div className="text-gray-300 mt-4 whitespace-pre-line">
                    {game.fullContent}
                  </div>
                )}
              </div>
            </section>
          )}

          {/* 投注資訊 */}
          <section className="mb-8 bg-red-950 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">
              လောင်းကြေး အချက်အလက်များ | Betting Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-yellow-400 mb-1">အနည်းဆုံး လောင်းကြေး</div>
                <div className="text-white text-lg font-semibold">
                  {game.minBet.toLocaleString()} MMK
                </div>
              </div>
              <div>
                <div className="text-yellow-400 mb-1">အများဆုံး လောင်းကြေး</div>
                <div className="text-white text-lg font-semibold">
                  {game.maxBet.toLocaleString()} MMK
                </div>
              </div>
            </div>
          </section>

          {/* 相關遊戲 */}
          {relatedGames.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                သင်လည်း နှစ်သက်နိုင်သော ဂိမ်းများ | You May Also Like
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedGames.map((relatedGame) => (
                  <Link
                    key={relatedGame.id}
                    href={`/games/${relatedGame.slug}`}
                    className="bg-red-950 rounded-lg overflow-hidden hover:bg-red-900 transition-colors"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={relatedGame.thumbnail}
                        alt={`${relatedGame.nameMM} - ${relatedGame.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <div className="text-white font-semibold text-sm truncate">
                        {relatedGame.nameMM}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {relatedGame.providerMM}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-red-900 mb-4">
              {game.nameMM} ကို အခုပဲ ကစားပါ | Play {game.name} Now
            </h3>
            <p className="text-red-900 mb-4">
              Shwe Casino 99 တွင် {game.nameMM} ကို အခမဲ့ စမ်းသပ်ကစား နိုင်ပြီး ငွေစစ်ဖြင့်လည်း ကစားနိုင်ပါသည်။
            </p>
            <Link
              href="/"
              className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors"
            >
              ယခု ကစားပါ | Play Now
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

