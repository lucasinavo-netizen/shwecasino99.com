import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'လုံခြုံမှု နှင့် ကိုယ်ရေးလုံခြုံမှု | Security & Privacy | Shwe Casino 99',
  description: 'Shwe Casino 99 လုံခြုံမှု - အချက်အလက် encryption နည်းပညာ၊ အကောင့် လုံခြုံမှု အကာအကွယ်များ၊ ငွေပေးချေမှု လုံခြုံမှု၊ ကိုယ်ရေးလုံခြုံမှု မူဝါဒ။ Security and privacy - Data encryption, account security, payment security.',
  keywords: [
    'လုံခြုံမှု',
    'ကိုယ်ရေးလုံခြုံမှု',
    'security Myanmar',
    'privacy policy',
  ],
  alternates: {
    canonical: `${baseUrl}/about/security`,
  },
};

export default function SecurityPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'ကျွန်ုပ်တို့ အကြောင်း', href: '/about' },
    { label: 'လုံခြုံမှု နှင့် ကိုယ်ရေးလုံခြုံမှု', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          လုံခြုံမှု နှင့် ကိုယ်ရေးလုံခြုံမှု | Security & Privacy
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-white text-lg leading-relaxed">
            Shwe Casino 99 သည် SSL encryption နည်းပညာ ကို အသုံးပြု၍ သင်၏ အချက်အလက်များကို ကာကွယ်ထားသည်။
          </p>
        </div>
      </main>
    </div>
  );
}


