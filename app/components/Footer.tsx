import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-950 to-black border-t-4 border-red-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">အကြောင်းအရာ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-yellow-400">ကျွန်ုပ်တို့အကြောင်း</Link></li>
              <li><Link href="/terms" className="hover:text-yellow-400">စည်းကမ်းချက်များ</Link></li>
              <li><Link href="/privacy" className="hover:text-yellow-400">ကိုယ်ရေးကိုယ်တာ</Link></li>
              <li><Link href="/responsible-gaming" className="hover:text-yellow-400">တာဝန်ယူမှု</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">ဝန်ဆောင်မှုများ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/support" className="hover:text-yellow-400">ဖောက်သည်ဝန်ဆောင်မှု</Link></li>
              <li><Link href="/payment-methods" className="hover:text-yellow-400">ငွေပေးချေမှု</Link></li>
              <li><Link href="/faq" className="hover:text-yellow-400">မေးခွန်းများ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">ဂိမ်းများ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/games/slots" className="hover:text-yellow-400">စလော့ဂိမ်းများ</Link></li>
              <li><Link href="/games/live-casino" className="hover:text-yellow-400">လိုင်ဗ်ကာစီနို</Link></li>
              <li><Link href="/games/sports" className="hover:text-yellow-400">အားကစား</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-400 mb-4">ဆက်သွယ်ရန်</h3>
            <p className="text-sm text-gray-400 mb-2">24/7 Live Chat ထောက်ပံ့မှု</p>
            <p className="text-sm text-gray-400">Email: support@shwecasino99.com</p>
          </div>
        </div>
        <div className="border-t border-red-900 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 Shwe Casino 99. All Rights Reserved. 
            Licensed and Regulated.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            21+ | Play Responsibly | Gambling can be addictive
          </p>
        </div>
      </div>
    </footer>
  );
}

