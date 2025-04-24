/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://zerobot-trading.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://zerobot-trading.vercel.app/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  priority: 1.0,
  changefreq: 'weekly',
  exclude: ['/404', '/500'],
  generateIndexSitemap: true,
  outDir: 'public',
  transform: async (config, path) => {
    // Custom transform function for sitemap
    // Modify priority based on path
    let priority = 0.7;
    
    if (path === '/') {
      priority = 1.0; // Homepage gets highest priority
    } else if (path.startsWith('/features')) {
      priority = 0.9;
    } else if (path.startsWith('/how-it-works')) {
      priority = 0.8;
    }
    
    return {
      loc: path, // => this will be exported as 'loc' attribute in sitemap.xml
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
}; 