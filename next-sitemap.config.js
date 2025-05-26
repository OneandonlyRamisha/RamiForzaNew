/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ramiforza.com",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
