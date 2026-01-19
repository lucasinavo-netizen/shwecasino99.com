import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'လိုင်ဗ် ကာစီနို မြန်မာ | Live Casino Myanmar | Shwe Casino 99',
  description: 'Shwe Casino 99 တွင် လိုင်ဗ် ကာစီနို ဂိမ်းများ ကစားပါ။ ပရော်ဖက်ရှင်နယ် ဒီလာများ၊ HD လိုင်ဗ် စတရိမ်များ၊ 24/7 လည်ပတ်မှု။ ဘာကက်ရက်၊ ရူလက်၊ စီကီဘော၊ လောင်းဟူ စသော ဂိမ်းများ။ Experience live casino games - Professional dealers, HD streaming, 24/7 operation.',
  keywords: [
    'လိုင်ဗ် ကာစီနို',
    'လိုင်ဗ် ဒီလာ',
    'ဘာကက်ရက် မြန်မာ',
    'ရူလက် မြန်မာ',
    'live casino Myanmar',
    'online casino Myanmar',
    'Shwe Casino live',
  ],
  alternates: {
    canonical: `${baseUrl}/games/live-casino`,
  },
};

export default function LiveCasinoPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'လိုင်ဗ် ကာစီနို', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          လိုင်ဗ် ကာစီနို | Live Casino Myanmar
        </h1>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-white text-lg leading-relaxed">
            Shwe Casino 99 တွင် လိုင်ဗ် ကာစီနို ဂိမ်းများ ကစားပါ။ ပရော်ဖက်ရှင်နယ် ဒီလာများ၊ HD လိုင်ဗ် စတရိမ်များ၊ 24/7 လည်ပတ်မှု။
          </p>
        </div>
      </main>
    </div>
  );
}


