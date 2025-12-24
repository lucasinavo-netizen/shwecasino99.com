'use client';

import Image from 'next/image';
import { openAffiliateLink } from '../lib/affiliate';

interface ProviderCardProps {
  provider: {
    name: string;
    color: string;
    logo: string;
  };
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div 
      onClick={openAffiliateLink}
      className={`bg-gradient-to-br ${provider.color} rounded-lg overflow-hidden h-48 flex flex-col items-center justify-center border border-red-700 hover:border-yellow-500 transition-colors relative group cursor-pointer`}
    >
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src={provider.logo} 
          alt={`${provider.name} Gaming Provider - Play ${provider.name} Games at Shwe Casino 99`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
        <div className="text-white font-bold text-sm text-center">{provider.name}</div>
      </div>
    </div>
  );
}

