config = {
  name: "Scrape URL",
  description: "Scrape a URL and save the resulting text to a variable.",
  author: 'Marko',
  thumbnailUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454101495.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454163990.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'URL to scrape',
          variable: 'url',
          type: 'text',
        },
        {
          label: 'Word count limit',
          variable: 'word_count',
          type: 'text',
          helpText: '(Optional) If empty, all available text will be scraped.'
        },
        {
          label: 'Output Variable',
          variable: 'textOutputVar',
          type: 'text',
        },
      ],
    },
  ],
}