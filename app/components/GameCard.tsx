'use client';

import Image from 'next/image';

interface GameCardProps {
  game: {
    name: string;
    provider: string;
    badge?: string;
    image: string;
  };
  onPlay: () => void;
}

export default function GameCard({ game, onPlay }: GameCardProps) {
  return (
    <div 
      onClick={onPlay}
      className="bg-gradient-to-br from-purple-900 via-blue-900 to-red-900 rounded-lg overflow-hidden border border-red-700 hover:border-yellow-500 cursor-pointer relative group"
    >
      {game.badge && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">
          {game.badge}
        </div>
      )}
      <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-blue-400 to-purple-600">
        <Image 
          src={game.image} 
          alt={`${game.name} Slot Game by ${game.provider} - Play at Shwe Casino 99`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 12.5vw"
        />
      </div>
      <div className="p-2 bg-gradient-to-b from-gray-900/80 to-black/80">
        <div className="text-white text-xs font-bold truncate">{game.name}</div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-gray-400">{game.provider}</span>
          <button 
            className="text-white bg-red-700 rounded-full p-1 hover:bg-red-600 transition-colors"
            aria-label={`Play ${game.name}`}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

