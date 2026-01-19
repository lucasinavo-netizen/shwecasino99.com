import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'အွန်လိုင်း ကာစီနို ကစားနည်း | How to Play Guide | Shwe Casino 99',
  description: 'Shwe Casino 99 တွင် အွန်လိုင်း ကာစီနို ဘယ်လို ကစားရမလဲ သိရှိလိုပါသလား။ အကောင့်ဖွင့်ခြင်း၊ ငွေသွင်းခြင်း၊ ဂိမ်းရွေးခြင်း၊ ငွေထုတ်ခြင်း အဆင့်ဆင့် မြန်မာဘာသာဖြင့် ရှင်းပြထားပါသည်။ Learn how to play at Shwe Casino 99 - Step by step guide in Myanmar language.',
  keywords: [
    'ကာစီနို ကစားနည်း',
    'အွန်လိုင်း ကာစီနို လမ်းညွှန်',
    'Shwe Casino အသုံးပြုနည်း',
    'how to play casino Myanmar',
    'casino guide Myanmar',
  ],
  alternates: {
    canonical: `${baseUrl}/guide/how-to-play`,
  },
};

export default function HowToPlayPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'လမ်းညွှန်', href: '/guide' },
    { label: 'ကစားနည်း', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          အွန်လိုင်း ကာစီနို ကစားနည်း | How to Play Online Casino
        </h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              ၁။ အကောင့်ဖွင့်ခြင်း | Creating an Account
            </h2>
            <div className="text-white leading-relaxed">
              <p className="mb-4">
                Shwe Casino 99 တွင် အကောင့် ဖွင့်ရန် လွယ်ကူပါသည်။ အောက်ပါ အဆင့်များကို လိုက်နာပါ:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Shwe Casino 99 ဝက်ဘ်ဆိုက် သို့မဟုတ် app သို့ သွားရောက်ပါ</li>
                <li>"အကောင့်ဖွင့်ရန်" ခလုတ်ကို နှိပ်ပါ</li>
                <li>သင်၏ အချက်အလက်များကို ဖြည့်သွင်းပါ (အမည်, ဖုန်းနံပါတ်, အီးမေးလ်)</li>
                <li>စကားဝှက် သတ်မှတ်ပါ</li>
                <li>စည်းမျဉ်းများကို ဖတ်ရှုပြီး သဘောတူညီချက်ကို အတည်ပြုပါ</li>
                <li>အကောင့် ဖွင့်ရန် ခလုတ်ကို နှိပ်ပါ</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              ၂။ ငွေသွင်းခြင်း | Making a Deposit
            </h2>
            <div className="text-white leading-relaxed">
              <p className="mb-4">
                အကောင့် ဖွင့်ပြီးနောက် ငွေသွင်းရန်:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>အကောင့်သို့ ဝင်ရောက်ပါ</li>
                <li>"ငွေသွင်းရန်" အပိုင်းသို့ သွားရောက်ပါ</li>
                <li>ငွေပေးချေမှု နည်းလမ်းကို ရွေးချယ်ပါ (Wave Money, KBZ Pay, CB Pay)</li>
                <li>သွင်းလိုသော ပမာဏကို ထည့်သွင်းပါ</li>
                <li>ငွေလွှဲပြောင်းမှု အတည်ပြုပါ</li>
                <li>ငွေများကို ချက်ချင်း ရရှိမည်</li>
              </ol>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              ၃။ ဂိမ်းရွေးချယ်ခြင်း | Choosing Games
            </h2>
            <div className="text-white leading-relaxed">
              <p className="mb-4">
                Shwe Casino 99 တွင် ဂိမ်းမျိုးစုံ ရရှိနိုင်ပါသည်:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ဆလော့ ဂိမ်းများ - Shwe Bonanza, Starlight Princess, Gates of Olympus</li>
                <li>လိုင်ဗ် ကာစီနို - ဘာကက်ရက်, ရူလက်, ဘလက်ဂျက်</li>
                <li>ငါးဖမ်း ဂိမ်းများ - Big Bass Bonanza</li>
                <li>စားပွဲ ဂိမ်းများ - ပိုကာ, 21 ပွိုင့်</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              ၄။ ငွေထုတ်ယူခြင်း | Withdrawing Funds
            </h2>
            <div className="text-white leading-relaxed">
              <p className="mb-4">
                ငွေထုတ်ယူရန်:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>"ငွေထုတ်ယူရန်" အပိုင်းသို့ သွားရောက်ပါ</li>
                <li>ထုတ်ယူလိုသော ပမာဏကို ထည့်သွင်းပါ</li>
                <li>ငွေပေးချေမှု နည်းလမ်းကို ရွေးချယ်ပါ</li>
                <li>အတည်ပြုပါ</li>
                <li>24 နာရီအတွင်း ငွေများ ရရှိမည်</li>
              </ol>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


