import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import promotionsData from '../../../data/promotions.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'ထည့်သွင်းမှု ဘောနပ်စ် | Referral Bonus | Shwe Casino 99',
  description: 'Shwe Casino 99 ထည့်သွင်းမှု ဘောနပ်စ် - မိတ်ဆွေများကို ထည့်သွင်းပြီး ဘောနပ်စ် ဆုလာဘ်များ ရယူပါ။ Refer friends and earn bonus rewards.',
  keywords: [
    'ထည့်သွင်းမှု ဘောနပ်စ်',
    'referral bonus Myanmar',
    'friend bonus',
  ],
  alternates: {
    canonical: `${baseUrl}/promotions/referral`,
  },
};

export default function ReferralPage() {
  const promotion = promotionsData.find((p) => p.slug === 'referral');

  if (!promotion) {
    return <div>Promotion not found</div>;
  }

  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'ပရိုမိုးရှင်းများ', href: '/promotions' },
    { label: 'ထည့်သွင်းမှု ဘောနပ်စ်', href: undefined },
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

