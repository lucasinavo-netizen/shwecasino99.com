'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="text-yellow-400 text-3xl lg:hidden"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>
      
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-red-900 border-t border-red-700 shadow-lg z-50">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-white hover:text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>
                🏠 လေ့လာရန်
              </Link>
              <Link href="#live-casino" className="text-white hover:text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>
                🎰 လိုင်ဗ်ကာစီနို
              </Link>
              <Link href="#slots" className="text-white hover:text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>
                🎲 စလော့
              </Link>
              <Link href="#promotions" className="text-white hover:text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>
                🎮 ပရိုမိုးရှင်း
              </Link>
              <Link href="#sports" className="text-white hover:text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>
                ⚽ အားကစား
              </Link>
              <Link href="#fishing" className="text-white hover:text-yellow-400 py-2" onClick={() => setMenuOpen(false)}>
                🎣 ဘင်ဂိုး
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

