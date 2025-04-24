import type { MetadataRoute } from 'next';

export async function GET(): Promise<Response> {
  // Define the URLs that should be included in the sitemap
  const sitemap = [
    {
      url: 'https://zerobot-trading.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://zerobot-trading.vercel.app/#features',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://zerobot-trading.vercel.app/#how-it-works',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://zerobot-trading.vercel.app/#statistics',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://zerobot-trading.vercel.app/#faq',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  // Convert the data to XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(item => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Return the XML with the correct content type
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 
