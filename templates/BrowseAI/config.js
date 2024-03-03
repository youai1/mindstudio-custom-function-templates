config = {
  name:"BrowseAI",
  description:"Retrieve content from any website using browseAI web scrapping",
  author:"Kevin L",
  blockStyle: {
    backgroundImageUrl: 'https://cdn-1.webcatalog.io/catalog/browse-ai/browse-ai-icon-filled-256.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'api_key',
          variable: 'api_key',
          type: 'text',
          helpText: 'Your browseAI API key',
        },
        {
          label: 'robot_id',
          variable: 'robot_id',
          type: 'text',
          helpText: 'Your browse AI robot ID',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          type: 'text',
          helpText: 'Variable to output the scrapped content',
        },
      ],
    },
  ],
}
