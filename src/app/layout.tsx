import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZeroBot | Automated Trading Bot for Zerodha",
  description: "ZeroBot is an intelligent intraday trading bot for Zerodha, powered by the KiteConnect API with smart capital allocation, real-time analytics, and risk management.",
  keywords: "ZeroBot, Zerodha, trading bot, automated trading, KiteConnect API, intraday trading, algorithmic trading, NSE, BSE, stock market, India, trading software, automated investing, algo trading",
  authors: [{ name: "ZeroBot Team" }],
  creator: "ZeroBot",
  publisher: "ZeroBot",
  metadataBase: new URL("https://zerobot-trading.vercel.app"),
  alternates: {
    canonical: "/",
  },
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
    type: "website",
    locale: "en_IN",
    url: "https://zerobot-trading.vercel.app",
    title: "ZeroBot | Automated Trading Bot for Zerodha",
    description: "Automate your intraday trading with ZeroBot - intelligent trading bot for Zerodha with smart capital allocation and risk management.",
    siteName: "ZeroBot",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZeroBot - Automated Trading Bot for Zerodha",
      },
      {
        url: "/og-image-square.jpg",
        width: 1080,
        height: 1080,
        alt: "ZeroBot - Automated Trading Bot for Zerodha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroBot | Automated Trading Bot for Zerodha",
    description: "Automate your intraday trading with ZeroBot - intelligent trading bot for Zerodha with smart capital allocation and risk management.",
    images: ["/twitter-image.jpg"],
    creator: "@zerobot",
    site: "@zerobot",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    msValidate: "msvalidate.01=bing-verification-code",
    other: {
      "facebook-domain-verification": "facebook-verification-code",
    },
  },
  category: "Technology",
  classification: "Financial Technology, Trading Software, Automated Trading",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        
        {/* DNS prefetching */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://zerodha.com" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Humans.txt */}
        <link rel="author" href="/humans.txt" />
        
        {/* Alternate pages */}
        <link rel="alternate" href="https://zerobot-trading.vercel.app" hrefLang="x-default" />
        <link rel="alternate" href="https://zerobot-trading.vercel.app" hrefLang="en" />

        {/* Browser config */}
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* Mobile specific meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="ZeroBot" />
        <meta name="application-name" content="ZeroBot" />
        
        {/* Search engines */}
        <meta name="google" content="notranslate" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
