module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.feativestudios.com",
  generateRobotsTxt: true,

  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,

  exclude: [
    "/server-sitemap.xml",
    "/admin/**",
    "/api/**",
    "/404",
    "/500",
    "/contact",
    "/projects",
    "/services",
    "/services/**",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/api",
          "/404",
          "/500",
          "/contact",
          "/projects",
          "/services",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://www.feativestudios.com/sitemap.xml"],
  },

  transform: async (config, path) => {
    if (path.startsWith("/blog")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
      };
    }

    if (path.startsWith("/products")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.6,
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
    };
  },

  additionalPaths: async (config) => {
    const additionalUrls = [
      { loc: "/custom-page", changefreq: "yearly", priority: 0.5 },
    ];
    return additionalUrls;
  },

  trailingSlash: true,
};
