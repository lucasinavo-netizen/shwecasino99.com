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
  return <GameCard game={game} onPlay={openAffiliateLink} />;
}

