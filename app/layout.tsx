import type { Metadata } from "next";
import { Noto_Sans_Myanmar, Inter } from "next/font/google";
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="my" className={`${myanmar.variable} ${inter.variable}`}>
      <body className={myanmar.className}>{children}</body>
    </html>
  );
}
