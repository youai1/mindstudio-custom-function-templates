config = {
  name: "Scrape URL",
  description: "Scrape a URL and save the resulting text to a variable.",
  author: 'Marko',
  blockStyle: {
    backgroundColor: '#007AFF',
    foregroundColor: 'white',
    label: 'Scrape URL',
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