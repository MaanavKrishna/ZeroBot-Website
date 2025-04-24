import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Statistics from "@/components/Statistics";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebSite, Organization, SoftwareApplication, Article } from "schema-dts";

export default function Home() {
  // FAQs for structured data
  const faqStructuredData = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does ZeroBot connect to my Zerodha account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ZeroBot uses Zerodha's official KiteConnect API to securely connect to your account. You'll need to authorize the connection through Zerodha's login page and provide an API key. ZeroBot never stores your login credentials - it only uses the authorized session token provided by Zerodha."
        }
      },
      {
        "@type": "Question",
        name: "What trading strategies does ZeroBot use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ZeroBot comes with multiple pre-built algorithmic strategies including momentum, mean reversion, breakout, and trend-following approaches. Each strategy is customizable with parameters like entry/exit conditions, position size, and risk limits."
        }
      },
      {
        "@type": "Question",
        name: "How much capital do I need to use ZeroBot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ZeroBot is designed to work with various capital sizes. We recommend starting with at least ₹50,000 to allow for proper diversification and risk management."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen">
      {/* Software Application schema */}
      <script
        {...jsonLdScriptProps<SoftwareApplication>({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ZeroBot",
          "applicationCategory": "FinanceApplication",
          "operatingSystem": "Windows, macOS, Linux",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
          },
          "description": "ZeroBot is an automated intraday trading bot for Zerodha, powered by the KiteConnect API. It features smart capital allocation, real-time analytics, customizable strategies, and built-in risk management.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "125"
          }
        })}
      />

      {/* Organization schema */}
      <script
        {...jsonLdScriptProps<Organization>({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ZeroBot",
          "url": "https://zerobot-trading.vercel.app",
          "logo": "https://zerobot-trading.vercel.app/logo.png",
          "sameAs": [
            "https://github.com/MaanavKrishna/ZeroBot"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "support@zerobot-trading.vercel.app"
          }
        })}
      />

      {/* Website schema */}
      <script
        {...jsonLdScriptProps<WebSite>({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://zerobot-trading.vercel.app",
          "name": "ZeroBot - Automated Trading Bot for Zerodha",
          "description": "ZeroBot is an intelligent intraday trading bot for Zerodha with smart capital allocation and risk management.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://zerobot-trading.vercel.app/search?q={search_term_string}"
          }
        })}
      />

      {/* FAQ schema */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
        type="application/ld+json"
      />

      {/* Article schema for better content categorization */}
      <script
        {...jsonLdScriptProps<Article>({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "ZeroBot - Automated Trading Bot for Zerodha",
          "image": "https://zerobot-trading.vercel.app/og-image.jpg",
          "author": {
            "@type": "Organization",
            "name": "ZeroBot Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "ZeroBot",
            "logo": {
              "@type": "ImageObject",
              "url": "https://zerobot-trading.vercel.app/logo.png"
            }
          },
          "datePublished": "2023-07-16",
          "dateModified": new Date().toISOString().split('T')[0],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://zerobot-trading.vercel.app/"
          },
          "description": "ZeroBot is an automated intraday trading bot for Zerodha, powered by the KiteConnect API."
        })}
      />

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Statistics />
      <FAQ />
      <Footer />
    </main>
  );
}
