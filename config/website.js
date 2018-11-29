const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Davis Family Catering', // Navigation and Site Title
  siteTitleAlt: 'Davis Catering', // Alternative Site title for SEO
  siteUrl: 'https://davisfamilycatering.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Website for my catering business',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@theafr86', // Twitter Username
  ogSiteName: 'https://www.facebook.com/Davisfamilycatering', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
