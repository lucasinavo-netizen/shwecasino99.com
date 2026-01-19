import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import promotionsData from '../../../data/promotions.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'နေ့စဉ် ဘောနပ်စ် | Daily Bonus | Shwe Casino 99',
  description: 'Shwe Casino 99 နေ့စဉ် ဘောနပ်စ် - နေ့စဉ် 10-20% အပ်ငွေ ဘောနပ်စ် ရယူပါ။ Daily bonus 10-20% on deposits.',
  keywords: [
    'နေ့စဉ် ဘောနပ်စ်',
    'daily bonus Myanmar',
    'casino bonus',
  ],
  alternates: {
    canonical: `${baseUrl}/promotions/daily-bonus`,
  },
};

export default function DailyBonusPage() {
  const promotion = promotionsData.find((p) => p.slug === 'daily-bonus');

  if (!promotion) {
    return <div>Promotion not found</div>;
  }

  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'ပရိုမိုးရှင်းများ', href: '/promotions' },
    { label: 'နေ့စဉ် ဘောနပ်စ်', href: undefined },
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


