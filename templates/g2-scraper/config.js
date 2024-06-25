config = {
  name: 'G2 Scraper',
  description: 'Scrape reviews for a product on G2.',
  author: 'Giorgio',
  thumbnailUrl: 'https://i.ibb.co/yPL7ZGs/G2-reviews.png',
  blockStyle: {
    backgroundImageUrl: 'https://i.ibb.co/yPL7ZGs/G2-reviews.png',
    foregroundColor: '#111111',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Apify API Token',
          variable: 'apify_token',
          helpText: 'Your Apify API token',
          type: 'secret',
        },
        {
          label: 'Query',
          variable: 'query',
          helpText: 'The search query for G2 Explorer',
          type: 'text',
        },
        {
          label: 'Limit',
          variable: 'limit',
          helpText: 'Maximum number of results to fetch (default: 50)',
          type: 'text',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          helpText: 'Variable to store the CSV file URL',
          type: 'text',
        },
      ],
    },
  ],
}