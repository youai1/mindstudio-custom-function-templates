config = {
  name: "Basic Google Search",
  description: "Search Google and save results as a variable",
  author: 'MindStudio',
  thumbnailUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454492491.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454546507.png',
    foregroundColor: '#000000',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Search Query',
          variable: 'query',
          helpText: 'Search query can be a string or a {{variable}}',
          type: 'text',
        },
        {
          label: 'Output Variable',
          variable: 'outputVariable',
          type: 'text',
        },
      ],
    },
  ],
}
