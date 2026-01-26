import type { Metadata, Viewport } from "next";
import { Noto_Sans_Myanmar, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ExternalLinkTracker from "./components/analytics/ExternalLinkTracker";

const myanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "600", "700"],
  variable: "--font-myanmar",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// 環境變數（請在 .env.local 中設定）
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://shwecasino99.com';
const siteName = 'Shwe Casino 99';

// Viewport 設定
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#8B0000' },
    { media: '(prefers-color-scheme: dark)', color: '#8B0000' }
  ],
};

// 完整的 Metadata
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  
  title: {
    default: "Shwe Casino 99 | အကောင်းဆုံး အွန်လိုင်း ကာစီနို Myanmar 2025",
    template: "%s | Shwe Casino 99"
  },
  
  description: "Shwe Casino 99 - မြန်မာ့ အကောင်းဆုံး အွန်လိုင်း ကာစီနို။ Pragmatic Play, PG Soft ဂိမ်းများ၊ ဘောနပ်စ် အများဆုံး၊ ငွေထုတ် မြန်ဆန်၊ 24/7 ထောက်ပံ့မှု။",
  
  keywords: [
    // 緬甸文關鍵字
    "shwe casino 99",
    "ရွှေ ကာစီနို 99",
    "မြန်မာ အွန်လိုင်း ကာစီနို",
    "အွန်လိုင်း စလော့",
    "လိုင်ဗ် ကာစီနို မြန်မာ",
    // 英文關鍵字
    "shwe casino myanmar",
    "online casino myanmar",
    "myanmar casino 2025",
    "pragmatic play myanmar",
    "pg soft myanmar",
    "online slots myanmar",
    "live casino myanmar",
    // 長尾關鍵字
    "best online casino myanmar",
    "safe casino myanmar",
    "myanmar casino bonus",
    "fast withdrawal casino myanmar"
  ],
  
  authors: [
    { name: 'Shwe Casino 99 Team' }
  ],
  
  creator: 'Shwe Casino 99',
  publisher: 'Shwe Casino 99',
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'my_MM',
    url: baseUrl,
    siteName: siteName,
    title: "Shwe Casino 99 | မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို",
    description: "Shwe Casino 99 - Pragmatic Play, PG Soft, BGaming ဂိမ်းများ။ ဘောနပ်စ် အများဆုံး၊ ငွေထုတ်ယူမှု မြန်ဆန်။",
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Shwe Casino 99 - Myanmar Best Online Casino',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Shwe Casino 99 | မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို",
    description: "Pragmatic Play, PG Soft, BGaming ဂိမ်းများ။ ဘောနပ်စ် အများဆုံး။",
    images: [`${baseUrl}/images/twitter-card.jpg`],
  },
  
  alternates: {
    canonical: baseUrl,
    languages: {
      'my-MM': baseUrl,
    },
  },
  
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
  
  category: 'Online Casino',
  
  other: {
    'geo.region': 'MM',
    'geo.country': 'MM',
    'geo.placename': 'Myanmar',
    'geo.position': '16.8661;96.1951',
    'ICBM': '16.8661, 96.1951',
    'language': 'my-MM',
    'content-language': 'my-MM',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "alternateName": "ရွှေ ကာစီနို 99",
    "url": baseUrl,
    "description": "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို",
    "inLanguage": "my-MM",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/games?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "alternateName": "ရွှေ ကာစီနို 99",
    "url": baseUrl,
    "logo": `${baseUrl}/images/logo.png`,
    "description": "မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MM"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["my", "en"],
      "hoursAvailable": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59"
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "image": `${baseUrl}/images/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MM",
      "addressRegion": "Yangon"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "16.8661",
      "longitude": "96.1951"
    },
    "url": baseUrl,
    "priceRange": "$$"
  };

  return (
    <html lang="my" className={`${myanmar.variable} ${inter.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={myanmar.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PXLF9Y5ZD6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PXLF9Y5ZD6');
          `}
        </Script>

        {/* Schema.org Structured Data */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        
        <ExternalLinkTracker />
        {children}
      </body>
    </html>
  );
}
