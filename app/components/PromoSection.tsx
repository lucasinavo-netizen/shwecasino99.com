'use client';

import Image from 'next/image';
import ClientButton from './ClientButton';
import { openAffiliateLink } from '../lib/affiliate';

interface PromoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  bgGradient: string;
  textColor: string;
  buttonVariant?: 'primary' | 'secondary';
}

export default function PromoSection({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
  bgGradient,
  textColor,
  buttonVariant = 'primary',
}: PromoSectionProps) {
  const handleClick = () => {
    openAffiliateLink(buttonText, 'PromoSection');
  };

  return (
    <section className={bgGradient}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-4`}>
              {title}
            </h2>
            <p className={`text-xl ${textColor === 'text-white' ? 'text-red-100' : 'text-red-800'} mb-6`}>
              {description}
            </p>
            <ClientButton
              onClick={handleClick}
              variant={buttonVariant}
              className="text-lg px-8 py-3"
            >
              {buttonText}
            </ClientButton>
          </div>
          <div className="flex-1">
            <div className={`relative rounded-lg overflow-hidden ${imageSrc.includes('christmas') ? 'h-80' : 'h-64'} bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center`}>
              <Image 
                src={imageSrc} 
                alt={imageAlt}
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                {imageSrc.includes('christmas') ? '🎁' : '💰🎰'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

