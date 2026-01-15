import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'တာဝန်ယူမှု ရှိသော ကစားခြင်း | Responsible Gaming | Shwe Casino 99',
  description: 'Shwe Casino 99 သည် တာဝန်ယူမှု ရှိသော ကစားခြင်း ကို အားပေးထားသည်။ ကိုယ်တိုင် အကဲဖြတ်ခြင်း၊ ကန့်သတ်ချက် သတ်မှတ်ခြင်း၊ ကိုယ်တိုင် ဖယ်ရှားခြင်း စသော ကိရိယာများ ပေးစွမ်းထားသည်။ Responsible gaming tools - Self-assessment, limits, self-exclusion.',
  keywords: [
    'တာဝန်ယူမှု ရှိသော ကစားခြင်း',
    'responsible gaming Myanmar',
    'gaming limits',
  ],
  alternates: {
    canonical: `${baseUrl}/guide/responsible-gaming`,
  },
};

export default function ResponsibleGamingPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'လမ်းညွှန်', href: '/guide' },
    { label: 'တာဝန်ယူမှု ရှိသော ကစားခြင်း', href: undefined },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          တာဝန်ယူမှု ရှိသော ကစားခြင်း | Responsible Gaming
        </h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              တာဝန်ယူမှု ရှိသော ကစားခြင်း ဆိုတာ ဘာလဲ | What is Responsible Gaming
            </h2>
            <p className="text-white leading-relaxed">
              တာဝန်ယူမှု ရှိသော ကစားခြင်း ဆိုသည်မှာ ကစားခြင်းကို ပျော်ရွှင်ဖွယ် အတွေ့အကြုံ တစ်ခု အဖြစ် ထိန်းသိမ်းရန် နှင့် ငွေကြေး သို့မဟုတ် လူမှုရေး ပြဿနာများ မဖြစ်စေရန် ကစားခြင်း ကို စီမံခန့်ခွဲခြင်း ဖြစ်သည်။
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              ကန့်သတ်ချက် သတ်မှတ်ခြင်း | Setting Limits
            </h2>
            <div className="text-white leading-relaxed">
              <p className="mb-4">သင်၏ အကောင့် တွင် အောက်ပါ ကန့်သတ်ချက်များကို သတ်မှတ်နိုင်သည်:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ငွေသွင်းမှု ကန့်သတ်ချက် - နေ့စဉ်, ပတ်စဉ်, လစဉ်</li>
                <li>လောင်းကြေး ကန့်သတ်ချက် - တစ်ဂိမ်း အတွက် အများဆုံး</li>
                <li>အချိန် ကန့်သတ်ချက် - နေ့စဉ် ကစားချိန်</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

