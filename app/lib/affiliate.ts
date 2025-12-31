// 將 affiliate 邏輯移到獨立檔案
import { trackExternalLinkClick } from './utils/analytics';

export const affiliateLinks = [
  { url: "https://www.tik999.net/m/home?affiliateCode=seom2502", priority: 5 },
  { url: "https://www.ksr777n1.com/m/home?affiliateCode=seom2602", priority: 5 },
  { url: "https://www.af789.net/m/home?affiliateCode=seom2702", priority: 4 },
  { url: "https://www.pum999.net/m/home?affiliateCode=seom2802", priority: 4 },
  { url: "https://www.etc777.net/m/home?affiliateCode=seom2902", priority: 3 },
  { url: "https://www.paw777.net/m/home?affiliateCode=seom3002", priority: 3 },
];

export const getRandomLink = (): string => {
  const weighted: string[] = [];
  affiliateLinks.forEach(link => {
    for (let i = 0; i < link.priority; i++) weighted.push(link.url);
  });
  return weighted[Math.floor(Math.random() * weighted.length)];
};

export const openAffiliateLink = (linkText?: string, location?: string) => {
  if (typeof window === 'undefined') return;
  const url = getRandomLink();
  
  // 追蹤外部連結點擊
  trackExternalLinkClick(url, linkText || 'Affiliate Link', location || 'openAffiliateLink');
  
  window.open(url, '_blank', 'noopener,noreferrer');
};

