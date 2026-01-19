import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'ကျွန်ုပ်တို့ အကြောင်း | About Shwe Casino 99 | Myanmar 領先線上娛樂城',
  description: 'Shwe Casino 99 အကြောင်း သိရှိပါ။ မြန်မာနိုင်ငံ၏ အကောင်းဆုံး အွန်လိုင်း ကာစီနို၊ လုံခြုံပြီး တရားဝင် လိုင်စင်ရရှိထားသော ကာစီနို။ About Shwe Casino 99 - Myanmar\'s best online casino, secure and licensed.',
  keywords: [
    'Shwe Casino 99 အကြောင်း',
    'about us Myanmar',
    'online casino Myanmar',
  ],
  alternates: {
    canonical: `${baseUrl}/about/company`,
  },
};

export default function CompanyPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'ကျွန်ုပ်တို့ အကြောင်း', href: '/about' },
    { label: 'ကုမ္ပဏီ', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ကျွန်ုပ်တို့ အကြောင်း | About Us
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-white text-lg leading-relaxed mb-4">
            Shwe Casino 99 သည် မြန်မာနိုင်ငံ၏ အကောင်းဆုံး အွန်လိုင်း ကာစီနို တစ်ခု ဖြစ်သည်။ ကျွန်ုပ်တို့သည် လုံခြုံပြီး တရားဝင် လိုင်စင်ရရှိထားသော ကာစီနို အတွေ့အကြုံ ပေးစွမ်းထားသည်။
          </p>
        </div>
      </main>
    </div>
  );
}


