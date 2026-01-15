import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'လိုင်စင်နှင့် အတည်ပြုချက်များ | Licenses & Certifications | Shwe Casino 99',
  description: 'Shwe Casino 99 လိုင်စင် နှင့် အတည်ပြုချက်များ - လည်ပတ်မှု လိုင်စင်၊ ဂိမ်း တရားမျှတမှု အတည်ပြုချက်၊ SSL encryption၊ ကိုယ်ရေးလုံခြုံမှု မူဝါဒ။ Licenses and certifications - Operating license, game fairness, SSL encryption.',
  keywords: [
    'လိုင်စင်',
    'အတည်ပြုချက်',
    'casino license Myanmar',
    'gaming license',
  ],
  alternates: {
    canonical: `${baseUrl}/about/licenses`,
  },
};

export default function LicensesPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'ကျွန်ုပ်တို့ အကြောင်း', href: '/about' },
    { label: 'လိုင်စင်နှင့် အတည်ပြုချက်များ', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          လိုင်စင်နှင့် အတည်ပြုချက်များ | Licenses & Certifications
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-white text-lg leading-relaxed">
            Shwe Casino 99 သည် တရားဝင် လိုင်စင် ရရှိထားပြီး SSL encryption ဖြင့် လုံခြုံစေထားသည်။
          </p>
        </div>
      </main>
    </div>
  );
}

