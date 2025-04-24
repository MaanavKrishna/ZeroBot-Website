import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://zerodha.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/geist-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Alternate languages */}
        <link rel="alternate" hrefLang="en" href="https://zerobot-trading.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://zerobot-trading.vercel.app" />
        
        {/* Mobile-specific meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        
        {/* Performance & SEO meta tags */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />
        
        {/* Social Media Verification (example placeholders) */}
        <meta name="facebook-domain-verification" content="your-facebook-verification-code" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* Favicons and app icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0070f3" />
        <meta name="msapplication-TileColor" content="#0070f3" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://zerobot-trading.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 