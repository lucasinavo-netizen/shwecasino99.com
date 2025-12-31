'use client';

import GameCard from './GameCard';
import { openAffiliateLink } from '../lib/affiliate';

interface GameCardWrapperProps {
  game: {
    name: string;
    provider: string;
    badge?: string;
    image: string;
  };
}

export default function GameCardWrapper({ game }: GameCardWrapperProps) {
  const handlePlay = () => {
    openAffiliateLink(game.name, 'GameCardWrapper');
  };
  
  return <GameCard game={game} onPlay={handlePlay} />;
}



