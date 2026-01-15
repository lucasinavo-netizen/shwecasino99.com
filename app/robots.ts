import { MetadataRoute } from 'next'

// 確保 robots 正確導出，Next.js 14 會自動生成 robots.txt
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
