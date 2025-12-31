/**
 * Google Analytics 工具函數
 * 用於追蹤外部連結點擊和其他事件
 */

// 檢查是否為外部連結
export function isExternalLink(url: string): boolean {
  if (!url) return false;
  
  // 檢查是否以 http:// 或 https:// 開頭
  if (url.startsWith('http://') || url.startsWith('https://')) {
    try {
      const currentDomain = typeof window !== 'undefined' ? window.location.hostname : '';
      const linkDomain = new URL(url).hostname;
      return linkDomain !== currentDomain;
    } catch {
      // 如果 URL 解析失敗，假設是外部連結
      return true;
    }
  }
  
  return false;
}

// 從 URL 中提取域名
export function getDomainFromUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return url;
  }
}

// 追蹤外部連結點擊
export function trackExternalLinkClick(url: string, linkText?: string, location?: string): void {
  if (typeof window === 'undefined') return;
  
  // 檢查 gtag 是否可用
  if (typeof window.gtag === 'undefined') {
    console.warn('Google Analytics (gtag) is not loaded');
    return;
  }
  
  const domain = getDomainFromUrl(url);
  
  // 發送 GA4 事件
  window.gtag('event', 'click', {
    event_category: 'outbound',
    event_label: url,
    transport_type: 'beacon',
    // 自定義參數
    link_url: url,
    link_domain: domain,
    link_text: linkText || '',
    link_location: location || '',
  });
  
  // 也發送一個更詳細的 event
  window.gtag('event', 'external_link_click', {
    link_url: url,
    link_domain: domain,
    link_text: linkText || '',
    link_location: location || '',
    transport_type: 'beacon',
  });
}

// 聲明 gtag 類型
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

