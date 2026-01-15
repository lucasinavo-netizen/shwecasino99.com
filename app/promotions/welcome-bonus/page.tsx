import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import promotionsData from '../../../data/promotions.json';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'ကြိုဆို ဘောနပ်စ် 100% | Welcome Bonus အမြင့်ဆုံး 50,000 MMK | Shwe Casino 99',
  description: 'Shwe Casino 99 ကြိုဆို ဘောနပ်စ် - ပထမဆုံး အပ်ငွေ 100% အမြင့်ဆုံး 50,000 MMK။ အလွယ်တကူ ရယူနိုင်၊ မြန်ဆန်သော အတည်ပြုချက်၊ နည်းသော လောင်းကြေး လိုအပ်ချက်များ။ Welcome bonus 100% up to 50,000 MMK - Easy claim, low wagering.',
  keywords: [
    'ကြိုဆို ဘောနပ်စ်',
    'ကာစီနို ဘောနပ်စ် မြန်မာ',
    'ပထမဆုံး အပ်ငွေ ဘောနပ်စ်',
    'Shwe Casino ဘောနပ်စ်',
    'welcome bonus Myanmar',
    'casino bonus 100%',
  ],
  alternates: {
    canonical: `${baseUrl}/promotions/welcome-bonus`,
  },
};

export default function WelcomeBonusPage() {
  const promotion = promotionsData.find((p) => p.slug === 'welcome-bonus');

  if (!promotion) {
    return <div>Promotion not found</div>;
  }

  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'ပရိုမိုးရှင်းများ', href: '/promotions' },
    { label: 'ကြိုဆို ဘောနပ်စ်', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {promotion.titleMM} | {promotion.title}
        </h1>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-white text-lg leading-relaxed mb-4">
            {promotion.descriptionMM}
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            {promotion.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-950 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">
              ဘောနပ်စ် အသေးစိတ် | Bonus Details
            </h2>
            <ul className="text-white space-y-2">
              <li>• ပထမဆုံး အပ်ငွေ {promotion.bonusAmount}</li>
              <li>• အမြင့်ဆုံး {promotion.maxBonus.toLocaleString()} {promotion.currency}</li>
              <li>• အနည်းဆုံး အပ်ငွေ {promotion.minDeposit.toLocaleString()} {promotion.currency}</li>
            </ul>
          </div>

          <div className="bg-red-950 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-yellow-400 mb-4">
              လောင်းကြေး လိုအပ်ချက် | Wagering Requirements
            </h2>
            <ul className="text-white space-y-2">
              <li>• ဘောနပ်စ်ကို ငွေထုတ်ယူမီ {promotion.wageringRequirement}x လောင်းကြေး လိုအပ်သည်</li>
              <li>• {promotion.validForMM}</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-950 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold text-yellow-400 mb-4">
            ဘယ်လို ရယူမလဲ | How to Claim
          </h2>
          <div className="text-white whitespace-pre-line">
            {promotion.fullContentMM}
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 rounded-lg text-center">
          <h3 className="text-2xl font-bold text-red-900 mb-4">
            အခုပဲ စတင်ပါ | Start Now
          </h3>
          <Link
            href="/"
            className="inline-block bg-red-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors"
          >
            ယခု စာရင်းသွင်းပါ | Register Now
          </Link>
        </div>
      </main>
    </div>
  );
}

