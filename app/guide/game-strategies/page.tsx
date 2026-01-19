import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'ဂိမ်း ဗျူဟာ | Game Strategies | Shwe Casino 99',
  description: 'Shwe Casino 99 ဂိမ်း ဗျူဟာ လမ်းညွှန် - ဆလော့ လောင်းကြေး ဗျူဟာ၊ ငွေကြေး စီမံခန့်ခွဲမှု၊ RTP နှင့် ပြင်းထန်မှု ရှင်းလင်းချက်။ Game strategies guide - Slot betting, bankroll management, RTP and volatility explained.',
  keywords: [
    'ဂိမ်း ဗျူဟာ',
    'ဆလော့ ဗျူဟာ',
    'game strategies Myanmar',
    'betting strategy',
  ],
  alternates: {
    canonical: `${baseUrl}/guide/game-strategies`,
  },
};

export default function GameStrategiesPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'လမ်းညွှန်', href: '/guide' },
    { label: 'ဂိမ်း ဗျူဟာ', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ဂိမ်း ဗျူဟာ | Game Strategies
        </h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              ဆလော့ လောင်းကြေး ဗျူဟာ | Slot Betting Strategy
            </h2>
            <p className="text-white leading-relaxed">
              ဆလော့ ဂိမ်းများတွင် အောင်မြင်ရန် ဗျူဟာ များစွာ ရှိပါသည်။ မြင့်မားသော RTP ရှိသော ဂိမ်းများကို ရွေးချယ်ပါ၊ ငွေကြေး စီမံခန့်ခွဲမှု လုပ်ပါ၊ နှင့် သင်၏ လောင်းကြေးကို စနစ်တကျ သတ်မှတ်ပါ။
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              ငွေကြေး စီမံခန့်ခွဲမှု | Bankroll Management
            </h2>
            <p className="text-white leading-relaxed">
              ငွေကြေး စီမံခန့်ခွဲမှု သည် ကစားခြင်း၏ အရေးကြီးဆုံး အပိုင်း တစ်ခု ဖြစ်သည်။ နေ့စဉ် လောင်းကြေး ကန့်သတ်ချက် သတ်မှတ်ပါ၊ ဆုံးရှုံးမှုများကို လိုက်မပြေးပါနှင့်၊ နှင့် သင်၏ ဘတ်ဂျက်ကို လိုက်နာပါ။
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}


