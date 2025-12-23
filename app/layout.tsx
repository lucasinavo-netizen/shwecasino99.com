import type { Metadata } from "next";
import { Noto_Sans_Myanmar, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const myanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "600", "700"],
  variable: "--font-myanmar",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shwe Casino 99 | အကောင်းဆုံး အွန်လိုင်း ကာစီနို Myanmar 2025",
  description: "Shwe Casino 99 - မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို။ ဘောနပ်စ် အများဆုံး၊ ငွေထုတ်ယူမှု မြန်ဆန်။",
  keywords: "shwe casino, myanmar casino, online casino myanmar, ကာစီနို",
  
  openGraph: {
    title: "Shwe Casino 99 | အကောင်းဆုံး အွန်လိုင်း ကာစီနို Myanmar 2025",
    description: "Shwe Casino 99 - မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို။",
    url: 'https://shwecasino99.com',
    siteName: 'Shwe Casino 99',
    images: [{
      url: 'https://shwecasino99.com/images/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    locale: 'my_MM',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Shwe Casino 99 | အကောင်းဆုံး အွန်လိုင်း ကာစီနို Myanmar 2025',
    description: 'Shwe Casino 99 - မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို။',
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  alternates: {
    canonical: 'https://shwecasino99.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="my" className={`${myanmar.variable} ${inter.variable}`}>
      <body className={myanmar.className}>
        {/* Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Shwe Casino 99',
              url: 'https://shwecasino99.com',
              logo: 'https://shwecasino99.com/images/logo.png',
              description: 'မြန်မာ့အကောင်းဆုံး အွန်လိုင်း ကာစီနို',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'MM',
              },
            }),
          }}
        />
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
        {children}
      </body>
    </html>
  );
}
