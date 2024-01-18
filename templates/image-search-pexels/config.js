config = {
  name: 'Image Search (Pexels)',
  description: 'Perform an image search using the Pexels API.',
  author: 'Marko',
  thumbnailUrl: '',
  blockStyle: {
    backgroundColor: 'rgb(7, 160, 129)',
    foregroundColor: '#ffffff',
    label: 'Image Search (Pexels)',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'API Key',
          variable: 'authorization',
          helpText: 'Your Pexels API key.',
          type: 'secret',
        },
        {
          label: 'Search Query',
          variable: 'query',
          helpText: 'Can be a string or a {{variable}}.',
          type: 'text',
        },
        {
          label: 'Image Count',
          variable: 'count',
          helpText: 'How many images to return? (Default: 1)',
          type: 'text',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          helpText: 'Variable to assign the output to.',
          type: 'text',
        },
      ],
    },
  ],
}
