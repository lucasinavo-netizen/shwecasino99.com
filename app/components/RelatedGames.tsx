import Image from 'next/image';
import Link from 'next/link';

interface Game {
  id: number;
  slug: string;
  name: string;
  nameMM: string;
  provider: string;
  providerMM: string;
  thumbnail: string;
  rtp: number;
  volatility: string;
  volatilityMM: string;
}

interface RelatedGamesProps {
  currentGame: Game;
  games: Game[];
  maxItems?: number;
}

export default function RelatedGames({ currentGame, games, maxItems = 4 }: RelatedGamesProps) {
  // 根據供應商、類別、標籤推薦遊戲
  const relatedGames = games
    .filter((game) => {
      // 排除當前遊戲
      if (game.id === currentGame.id) return false;
      
      // 優先推薦相同供應商的遊戲
      if (game.provider === currentGame.provider) return true;
      
      // 其次推薦相同波動性的遊戲
      if (game.volatility === currentGame.volatility) return true;
      
      return false;
    })
    .slice(0, maxItems);

  if (relatedGames.length === 0) {
    return null;
  }

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">
        သင်လည်း နှစ်သက်နိုင်သော ဂိမ်းများ | You May Also Like
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedGames.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.slug}`}
            className="bg-red-950 rounded-lg overflow-hidden hover:bg-red-900 transition-colors"
          >
            <div className="relative aspect-square">
              <Image
                src={game.thumbnail}
                alt={`${game.nameMM} - ${game.name}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <div className="text-white font-semibold text-sm truncate mb-1">
                {game.nameMM}
              </div>
              <div className="text-gray-400 text-xs truncate mb-2">
                {game.providerMM}
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-yellow-400">RTP {game.rtp}%</span>
                <span className="text-gray-500">{game.volatilityMM}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}


