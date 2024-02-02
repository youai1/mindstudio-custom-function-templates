config = {
  name: 'Image Search (GettyImages)',
  description: 'Perform an image search using the GettyImages API.',
  author: 'Victor',
  thumbnailUrl:
    'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1706903779272.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1706903767927.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Api Key',
          variable: 'gettyimages_apiKey',
          helpText: 'Your GettyImages API key.',
          type: 'secret',
        },
        {
          label: 'Api Secret',
          variable: 'gettyimages_apiSecret',
          helpText: 'Your GettyImages API secret.',
          type: 'secret',
        },
        {
          label: 'Search Query',
          variable: 'gettyImages_query',
          helpText: 'Can be a string or a {{variable}}.',
          type: 'text',
        },
        {
          label: 'Image Count',
          variable: 'gettyImages_count',
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
