import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';

export const metadata: Metadata = {
  title: 'ငွေပေးချေမှု နည်းလမ်းများ | Payment Methods Myanmar | Shwe Casino 99',
  description: 'Shwe Casino 99 ငွေပေးချေမှု နည်းလမ်းများ - Wave Money, KBZ Pay, CB Pay, AYA Pay, ဘဏ် ငွေလွှဲပြောင်းမှု။ ငွေသွင်းခြင်း နှင့် ငွေထုတ်ယူခြင်း အပြည့်အစုံ လမ်းညွှန်။ Payment methods guide - Deposit and withdrawal instructions.',
  keywords: [
    'ငွေပေးချေမှု နည်းလမ်းများ',
    'Wave Money',
    'KBZ Pay',
    'payment methods Myanmar',
    'deposit Myanmar',
  ],
  alternates: {
    canonical: `${baseUrl}/guide/payment-methods`,
  },
};

export default function PaymentMethodsPage() {
  const breadcrumbs = [
    { label: 'လေ့လာရန်', href: '/' },
    { label: 'လမ်းညွှန်', href: '/guide' },
    { label: 'ငွေပေးချေမှု နည်းလမ်းများ', href: undefined },
  ];

  const paymentMethods = [
    {
      name: 'Wave Money',
      nameMM: 'Wave Money',
      minAmount: 1000,
      maxAmount: 5000000,
      processingTime: 'ချက်ချင်း',
      fee: 'အခမဲ့',
    },
    {
      name: 'KBZ Pay',
      nameMM: 'KBZ Pay',
      minAmount: 1000,
      maxAmount: 5000000,
      processingTime: 'ချက်ချင်း',
      fee: 'အခမဲ့',
    },
    {
      name: 'CB Pay',
      nameMM: 'CB Pay',
      minAmount: 1000,
      maxAmount: 5000000,
      processingTime: 'ချက်ချင်း',
      fee: 'အခမဲ့',
    },
  ];

  return (
    <div className="min-h-screen bg-red-900">
      <Breadcrumbs items={breadcrumbs} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ငွေပေးချေမှု နည်းလမ်းများ | Payment Methods
        </h1>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-white text-lg leading-relaxed mb-4">
            Shwe Casino 99 တွင် Wave Money, KBZ Pay, CB Pay, AYA Pay စသော ဒေသတွင်း ငွေပေးချေမှု နည်းလမ်းများကို ပံ့ပိုးထားသည်။ ငွေသွင်းခြင်း နှင့် ငွေထုတ်ယူခြင်း အတွက် လုံခြုံပြီး မြန်ဆန်သော နည်းလမ်းများ ရရှိနိုင်ပါသည်။
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {paymentMethods.map((method) => (
            <div key={method.name} className="bg-red-950 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                {method.nameMM}
              </h3>
              <ul className="text-white space-y-2">
                <li>• အနည်းဆုံး: {method.minAmount.toLocaleString()} MMK</li>
                <li>• အများဆုံး: {method.maxAmount.toLocaleString()} MMK</li>
                <li>• လုပ်ဆောင်ချိန်: {method.processingTime}</li>
                <li>• လုပ်ဆောင်ခ: {method.fee}</li>
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

