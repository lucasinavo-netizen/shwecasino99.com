import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'ငါးဖမ်း ဂိမ်းများ | Fishing Games Myanmar | Shwe Casino 99',
  description: 'Shwe Casino 99 တွင် စိတ်လှုပ်ရှားဖွယ် ငါးဖမ်း ဂိမ်းများ ကစားပါ။ ပုံစံမျိုးစုံ၊ ကြွယ်ဝသော ဆုလာဘ်များ၊ လွယ်ကူသော ကစားနည်း။ Play exciting fishing games - Multiple themes, Rich rewards, Easy gameplay.',
  keywords: [
    'ငါးဖမ်း ဂိမ်း',
    'fishing games Myanmar',
    'အွန်လိုင်း ငါးဖမ်း',
    'fishing slots',
  ],
  alternates: {
    canonical: `${baseUrl}/games/fishing`,
  },
};

export default function FishingPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'ငါးဖမ်း ဂိမ်းများ', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ငါးဖမ်း ဂိမ်းများ | Fishing Games Myanmar
        </h1>
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-white text-lg leading-relaxed">
            Shwe Casino 99 တွင် စိတ်လှုပ်ရှားဖွယ် ငါးဖမ်း ဂိမ်းများ ကစားပါ။ ပုံစံမျိုးစုံ၊ ကြွယ်ဝသော ဆုလာဘ်များ၊ လွယ်ကူသော ကစားနည်း။
          </p>
        </div>
      </main>
    </div>
  );
}


