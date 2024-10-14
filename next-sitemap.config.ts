/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://onxwork.com',
    generateRobotsTxt: true, // Generates robots.txt file
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/private', '/admin/*'], // Exclude private pages if any
    transform: async (config: unknown, path: string) => {
        return {
            loc: path, // The URL
            changefreq: 'weekly',
            priority: path === '/' ? 1.0 : 0.7, // Prioritize the homepage
            lastmod: new Date().toISOString(), // The last modified time
        };
    },
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' }, // Allow all crawling
            { userAgent: '*', disallow: '/private' }, // Block private section
        ],
        additionalSitemaps: [
            'https://onxwork.com/sitemap.xml', // Add additional sitemaps if necessary
        ],
    },
};
