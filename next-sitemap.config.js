const URL = process.env.SITE_URL || "https://dianastewartinsurance.com"

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: URL,
  generateRobotsTxt: true,
  exclude: [], // <= exclude here
  robotsTxtOptions: {},
}
