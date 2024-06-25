config = {
  name: 'Scrape YouTube Channel',
  description: 'This function crawls your YouTube channel, scrapes all core data, and saves it as markdown in a file.',
  author: 'Giorgio',
  thumbnailUrl: 'https://i.ibb.co/h8DVjWp/YT-Videos.png',
  blockStyle: {
    backgroundImageUrl: 'https://i.ibb.co/h8DVjWp/YT-Videos.png',
    foregroundColor: '#000000',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'YouTube Scraper Configuration',
      items: [
        {
          label: 'Apify Token',
          variable: 'apify_token',
          helpText: 'Your Apify API token',
          type: 'secret',
        },
        {
          label: 'YouTube URL',
          variable: 'url',
          helpText: 'URL of the YouTube channel or video to scrape',
          type: 'text',
        },
        {
          label: 'Max Results',
          variable: 'maxResults',
          helpText: 'Maximum number of results to fetch (enter a number)',
          type: 'text',
        },
        {
          label: 'Download Subtitles',
          variable: 'downloadSubtitles',
          helpText: 'Whether to download subtitles (true or false)',
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