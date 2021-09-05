module.exports = {
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            // sidebars file relative to website dir.
            sidebarPath: require.resolve('./sidebars.json'),
            routeBasePath: '/',
            showLastUpdateTime: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          }
        },
      ],
    ],

    title: 'BitBuckets Wiki', // Title for your website.
    tagline: 'BitBuckets Robotics Team Wiki',
    url: 'https://bitbuckets-wiki.netlify.com/', // Your website URL
    baseUrl: '/', // Base URL for your project
    // For github.io type URLs, you would set the url and baseUrl like:
    //   url: 'https://facebook.github.io',
    //   baseUrl: '/test-site/',

    // Used for publishing and more
    projectName: 'bitbuckets-wiki',
    organizationName: 'sajo8',
    // For top-level user or org sites, the organization is still the same.
    // e.g., for the https://JoelMarcey.github.io site, it would be set like...
    //   organizationName: 'JoelMarcey'

    favicon: 'img/logo.png',

    // For the "copy code" button in each long code block
    scripts: [
        'https://buttons.github.io/buttons.js',
        'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
        './src/js/code-block-buttons.js',
    ],

    themeConfig: {
        navbar: {
            title: 'BitBuckets Wiki',
            logo: {
                alt: 'BitBuckets',
                src: 'img/logo.png',
            },
            items: [
                {to: 'design/SOLIDWORKS-Installation', label: 'Design', position: 'left'},
                {to: 'software/Software-Getting-Started', label: 'Software', position: 'left'},
                {to: 'fabrication/fab-placeholder', label: 'Fabrication', position: 'left'},
                {to: 'electrical/electric-placeholder', label: 'Electrical', position: 'left'},
            ],
          },
        footer: {
          logo: {
            alt: 'BitBuckets Robotics',
            src: '/img/logo.png',
            href: 'https://bitbuckets.org/',
          },
          copyright: `Copyright © ${new Date().getFullYear()} BitBuckets`, // You can also put own HTML here
        },
        image: '/img/logo.png',
        // algolia: {
            //apiKey; '123',
            //indexName: 'bitbuckets-wiki',
            //algoliaOptions: {},
        // },
    },
};
