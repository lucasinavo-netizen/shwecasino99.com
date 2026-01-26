import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-red-900 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">ရှာမတွေ့ပါ</h2>
        <p className="text-gray-300 text-lg mb-8">
          သင်ရှာနေသော စာမျက်နှာကို ရှာမတွေ့ပါ
        </p>
        <div className="space-x-4">
          <Link 
            href="/" 
            className="inline-block bg-yellow-500 text-red-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
          >
            ပင်မစာမျက်နှာသို့ ပြန်သွားမည်
          </Link>
          <Link 
            href="/games" 
            className="inline-block bg-red-950 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors"
          >
            ဂိမ်းများ
          </Link>
        </div>
      </div>
    </div>
  );
}
