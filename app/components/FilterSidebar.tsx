'use client';

interface FilterSidebarProps {
  providers: string[];
  selectedProvider: string | null;
  onProviderChange: (provider: string | null) => void;
  rtpRange: { min: number; max: number };
  selectedRtp: { min: number; max: number };
  onRtpChange: (min: number, max: number) => void;
  volatilityOptions: string[];
  selectedVolatility: string | null;
  onVolatilityChange: (volatility: string | null) => void;
}

export default function FilterSidebar({
  providers,
  selectedProvider,
  onProviderChange,
  rtpRange,
  selectedRtp,
  onRtpChange,
  volatilityOptions,
  selectedVolatility,
  onVolatilityChange,
}: FilterSidebarProps) {
  return (
    <aside className="bg-red-950 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-6">ဖျတ်ထားရန် | Filters</h3>

      {/* Provider Filter */}
      <div className="mb-6">
        <h4 className="text-yellow-400 font-semibold mb-3">ထုတ်လုပ်သူ | Provider</h4>
        <div className="space-y-2">
          <button
            onClick={() => onProviderChange(null)}
            className={`w-full text-left px-3 py-2 rounded ${
              selectedProvider === null
                ? 'bg-yellow-600 text-white'
                : 'bg-red-900 text-white hover:bg-red-800'
            } transition-colors`}
          >
            အားလုံး | All
          </button>
          {providers.map((provider) => (
            <button
              key={provider}
              onClick={() => onProviderChange(provider)}
              className={`w-full text-left px-3 py-2 rounded ${
                selectedProvider === provider
                  ? 'bg-yellow-600 text-white'
                  : 'bg-red-900 text-white hover:bg-red-800'
              } transition-colors`}
            >
              {provider}
            </button>
          ))}
        </div>
      </div>

      {/* RTP Filter */}
      <div className="mb-6">
        <h4 className="text-yellow-400 font-semibold mb-3">
          RTP: {selectedRtp.min}% - {selectedRtp.max}%
        </h4>
        <div className="space-y-2">
          <input
            type="range"
            min={rtpRange.min}
            max={rtpRange.max}
            value={selectedRtp.min}
            onChange={(e) => onRtpChange(Number(e.target.value), selectedRtp.max)}
            className="w-full"
          />
          <input
            type="range"
            min={rtpRange.min}
            max={rtpRange.max}
            value={selectedRtp.max}
            onChange={(e) => onRtpChange(selectedRtp.min, Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      {/* Volatility Filter */}
      <div className="mb-6">
        <h4 className="text-yellow-400 font-semibold mb-3">ပြင်းထန်မှု | Volatility</h4>
        <div className="space-y-2">
          <button
            onClick={() => onVolatilityChange(null)}
            className={`w-full text-left px-3 py-2 rounded ${
              selectedVolatility === null
                ? 'bg-yellow-600 text-white'
                : 'bg-red-900 text-white hover:bg-red-800'
            } transition-colors`}
          >
            အားလုံး | All
          </button>
          {volatilityOptions.map((volatility) => (
            <button
              key={volatility}
              onClick={() => onVolatilityChange(volatility)}
              className={`w-full text-left px-3 py-2 rounded ${
                selectedVolatility === volatility
                  ? 'bg-yellow-600 text-white'
                  : 'bg-red-900 text-white hover:bg-red-800'
              } transition-colors`}
            >
              {volatility}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          onProviderChange(null);
          onRtpChange(rtpRange.min, rtpRange.max);
          onVolatilityChange(null);
        }}
        className="w-full bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors"
      >
        ဖျတ်ထားရန် ပြန်လည် သတ်မှတ်ရန် | Reset Filters
      </button>
    </aside>
  );
}

