export default {
  titleTemplate: '%s | ZeroBot - Automated Trading Bot',
  defaultTitle: 'ZeroBot | Automated Trading Bot for Zerodha',
  description: 'ZeroBot is an intelligent intraday trading bot for Zerodha, powered by the KiteConnect API with smart capital allocation, real-time analytics, and risk management.',
  canonical: 'https://zerobot-trading.vercel.app',
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'ZeroBot, Zerodha, trading bot, automated trading, KiteConnect API, intraday trading, algorithmic trading, NSE, BSE, stock market, India, trading software, automated investing, algo trading'
    },
    {
      name: 'author',
      content: 'ZeroBot Team'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
    },
    {
      name: 'application-name',
      content: 'ZeroBot'
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'ZeroBot'
    },
    {
      name: 'theme-color',
      content: '#0070f3'
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zerobot-trading.vercel.app',
    title: 'ZeroBot | Automated Trading Bot for Zerodha',
    description: 'Automate your intraday trading with ZeroBot - intelligent trading bot for Zerodha with smart capital allocation and risk management.',
    site_name: 'ZeroBot',
    images: [
      {
        url: 'https://zerobot-trading.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZeroBot - Automated Trading Bot',
        type: 'image/jpeg',
      },
      {
        url: 'https://zerobot-trading.vercel.app/og-image-square.jpg',
        width: 1080,
        height: 1080,
        alt: 'ZeroBot - Automated Trading Bot',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    handle: '@zerobot',
    site: '@zerobot',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: '123456789',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
    {
      rel: 'preconnect', 
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect', 
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous'
    }
  ]
}; 