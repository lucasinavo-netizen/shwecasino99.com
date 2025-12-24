'use client';

import Image from 'next/image';
import Link from 'next/link';
import ClientButton from './ClientButton';
import MobileMenu from './MobileMenu';
import { openAffiliateLink } from '../lib/affiliate';

export default function Header() {
  return (
    <header className="bg-[#8B0000] border-b-4 border-yellow-600">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-auto flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="Shwe Casino 99 - Myanmar's Premier Online Casino Platform"
                width={180}
                height={48}
                className="object-contain h-full w-auto"
                priority
                style={{ maxHeight: '48px', width: 'auto' }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ClientButton 
              onClick={openAffiliateLink}
              variant="primary"
            >
              အကောင့်ဖွင့်ရန်
            </ClientButton>
            <ClientButton 
              onClick={openAffiliateLink}
              variant="secondary"
            >
              အကောင့်ဝင်ရန်
            </ClientButton>
            <MobileMenu />
          </div>
        </div>
        
        {/* Navigation - Server Component */}
        <nav className="border-t border-red-700 py-3" role="navigation" aria-label="Main navigation">
          <div className="hidden lg:flex justify-center gap-6 text-sm">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-yellow-400">
              <span role="img" aria-label="home">🏠</span> လေ့လာရန်
            </Link>
            <Link href="#live-casino" className="flex items-center gap-2 text-white hover:text-yellow-400">
              <span role="img" aria-label="casino">🎰</span> လိုင်ဗ်ကာစီနို
            </Link>
            <Link href="#slots" className="flex items-center gap-2 text-white hover:text-yellow-400">
              <span role="img" aria-label="slots">🎲</span> စလော့
            </Link>
            <Link href="#promotions" className="flex items-center gap-2 text-white hover:text-yellow-400">
              <span role="img" aria-label="promotions">🎮</span> ပရိုမိုးရှင်း
            </Link>
            <Link href="#sports" className="flex items-center gap-2 text-white hover:text-yellow-400">
              <span role="img" aria-label="sports">⚽</span> အားကစား
            </Link>
            <Link href="#fishing" className="flex items-center gap-2 text-white hover:text-yellow-400">
              <span role="img" aria-label="bingo">🎣</span> ဘင်ဂိုး
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

