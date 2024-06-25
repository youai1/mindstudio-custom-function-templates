config = {
  name: 'Crawl website - Apify',
  description: 'Crawls your website, scrapes all content in the pages, and saves it as markdown in a file.',
  author: 'Giorgio',
  thumbnailUrl: 'https://i.ibb.co/Jm8fLFp/Crawl-URL.jpg',
  blockStyle: {
    backgroundImageUrl: 'https://i.ibb.co/Jm8fLFp/Crawl-URL.jpg',
    foregroundColor: '#111111',
    label: ' '
  },
  configurationSections: [
    {
      title: 'Apify Configuration',
      items: [
        {
          label: 'Apify Token',
          variable: 'apify_token',
          helpText: 'Your Apify API token',
          type: 'secret',
        },
        {
          label: 'URL to Crawl',
          variable: 'url',
          helpText: 'The starting URL for the crawler',
          type: 'text',
        },
        {
          label: 'Max Crawl Depth',
          variable: 'maxCrawlDepth',
          helpText: 'Maximum depth for crawling (enter a number)',
          type: 'text',
        },
        {
          label: 'Max Crawl Pages',
          variable: 'maxCrawlPages',
          helpText: 'Maximum number of pages to crawl (enter a number)',
          type: 'text',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          helpText: 'Variable to store the uploaded CSV file URL',
          type: 'text',
        },
      ],
    },
  ],
}