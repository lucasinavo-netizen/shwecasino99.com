"use client";

import { useEffect } from "react";
import { isExternalLink, trackExternalLinkClick } from "../../lib/utils/analytics";

/**
 * 全局外部連結追蹤組件
 * 自動追蹤頁面上所有外部連結的點擊事件
 */
export default function ExternalLinkTracker() {
  useEffect(() => {
    // 等待頁面完全加載後再設置監聽器
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // 查找最近的 <a> 標籤
      const link = target.closest('a');
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href) return;
      
      // 檢查是否為外部連結
      if (isExternalLink(href)) {
        // 獲取連結文字
        const linkText = link.textContent?.trim() || link.getAttribute('aria-label') || '';
        
        // 獲取連結位置（通過類名或 ID）
        const linkLocation = 
          link.className || 
          link.id || 
          link.closest('[data-component]')?.getAttribute('data-component') || 
          'unknown';
        
        // 追蹤點擊
        trackExternalLinkClick(href, linkText, linkLocation);
      }
    };
    
    // 添加點擊事件監聽器
    document.addEventListener('click', handleClick, true);
    
    // 清理函數
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);
  
  return null;
}

