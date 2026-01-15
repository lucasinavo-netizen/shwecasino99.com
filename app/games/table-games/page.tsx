import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'စားပွဲ ဂိမ်းများ | Table Games Myanmar | Shwe Casino 99',
  description: 'Shwe Casino 99 တွင် ရိုးရာ စားပွဲ ဂိမ်းများ ကစားပါ။ ပိုကာ၊ 21 ပွိုင့်၊ ရူလက်၊ စီကီဘော။ စည်းမျဉ်းများ သင်ယူခြင်း၊ ဗျူဟာ ကျွမ်းကျင်ခြင်း။ Play classic table games - Poker, Blackjack, Roulette, Sic Bo.',
  keywords: [
    'စားပွဲ ဂိမ်း',
    'ပိုကာ မြန်မာ',
    '21 ပွိုင့်',
    'table games Myanmar',
    'online poker Myanmar',
  ],
  alternates: {
    canonical: `${baseUrl}/games/table-games`,
  },
};

export default function TableGamesPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'စားပွဲ ဂိမ်းများ', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          စားပွဲ ဂိမ်းများ | Table Games Myanmar
        </h1>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-white text-lg leading-relaxed">
            Shwe Casino 99 တွင် ရိုးရာ စားပွဲ ဂိမ်းများ ကစားပါ။ ပိုကာ၊ 21 ပွိုင့်၊ ရူလက်၊ စီကီဘော။
          </p>
        </div>
      </main>
    </div>
  );
}

