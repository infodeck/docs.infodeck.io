// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Infodeck Docs",
  tagline: "Infodeck Docs",
  url: "https://docs.infodeck.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  organizationName: "infodeck",
  projectName: "docs.infodeck.io",
  trailingSlash: false,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/infodeck/docs.infodeck.io/tree/main",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Infodeck Documentation",
        logo: {
          alt: "Infodeck",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "api/introduction",
            label: "API",
            position: "left",
          },
          {
            href: "https://support.infodeck.io/",
            label: "Help",
            position: "right",
          },
          {
            href: "https://infodeck.statuspage.io/",
            label: "Status",
            position: "right",
          },
          {
            href: "https://github.com/infodeck/docs.infodeck.io",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentations",
            items: [
              {
                label: "Homepage",
                to: "/",
              },
              {
                label: "API Documentation",
                to: "/category/rest/api",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Website",
                href: "https://www.infodeck.io",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/infodeck-technology",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://www.infodeck.io/blog-news",
              },
              {
                label: "GitHub",
                href: "https://github.com/infodeck/",
              },
            ],
          },
        ],
        copyright: `©${new Date().getFullYear()} Infodeck.io All Rights Reserved.`,
      },
      prism: {
        additionalLanguages: [],
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
          variant: "requests",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
          variant: "axios",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
          variant: "httpclient",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
      ],
      algolia: {
        apiKey: "2c1b88db66d1a09451dc1ac5a81b52e2",
        appId: "SDBS6AQH84",
        indexName: "infodeck",
        contextualSearch: false,
        searchParameters: {
          facetFilters: [],
        },
      },
      // announcementBar: {
      //   id: "announcementBar_1",
      //   content:
      //     "🥳 First v2.0.0 stable release! Currently only compatible with Docusaurus v2.4.1 -> v2.4.3",
      // },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          api: {
            specPath: "https://app.infodeck.io/api/docs/openapi",
            downloadUrl: "https://app.infodeck.io/api/docs/openapi",
            outputDir: "docs/api/rest",
            sidebarOptions: {
              groupPathsBy: "tag",
              sidebarCollapsible: true,
            },
            template: "api.mustache", // Customize API MDX with mustache template
          },
        },
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};
async function createConfig() {
  const lightTheme = (await import("./src/utils/prismLight.mjs")).default;
  const darkTheme = (await import("./src/utils/prismDark.mjs")).default;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.theme = lightTheme;
  // @ts-expect-error: we know it exists, right
  config.themeConfig.prism.darkTheme = darkTheme;
  return config;
}

module.exports = createConfig;
