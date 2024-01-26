config = {
  name: 'Image Search (Pexels)',
  description: 'Perform an image search using the Pexels API.',
  author: 'Marko',
  thumbnailUrl:
    'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1706290819584.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1706290849202.png',
    foregroundColor: '#ffffff',
    label: ' ',
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
};
