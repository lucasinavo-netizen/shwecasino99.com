import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import promotionsData from '../../../data/promotions.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'VIP အစီအစဉ် | 5 層級會員制度 | Shwe Casino 99',
  description: 'Shwe Casino 99 VIP အစီအစဉ်သို့ ဝင်ရောက်ပြီး အထူး အကျိုးကျေးဇူးများ ခံစားပါ။ 5 အဖွဲ့ဝင် အဆင့်များ - ကြေးဝါ၊ ငွေ၊ ရွှေ၊ ပလက်တီနမ်၊ စိန်။ Join VIP program - 5 membership tiers with exclusive benefits.',
  keywords: [
    'VIP အစီအစဉ်',
    'VIP program Myanmar',
    'ကာစီနို VIP',
  ],
  alternates: {
    canonical: `${baseUrl}/promotions/vip-program`,
  },
};

export default function VIPProgramPage() {
  const promotion = promotionsData.find((p) => p.slug === 'vip-program');

  if (!promotion) {
    return <div>Promotion not found</div>;
  }

  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'ပရိုမိုးရှင်းများ', href: '/promotions' },
    { label: 'VIP အစီအစဉ်', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {promotion.titleMM} | {promotion.title}
        </h1>
        <div className="prose prose-invert max-w-none mb-8">
          <div className="text-white whitespace-pre-line">
            {promotion.fullContentMM}
          </div>
        </div>
      </main>
    </div>
  );
}


