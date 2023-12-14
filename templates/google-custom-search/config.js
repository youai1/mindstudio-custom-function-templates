config = {
  name: 'Custom Google Search',
  author: 'Marko',
  description:
    'Perform a Google Search with your Custom Search Engine and save the results to a variable',
  thumbnailUrl: '',
  blockStyle: {
    backgroundColor: '#007aff',
    foregroundColor: '#ffffff',
    label: 'Custom Google Search',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Google Cloud API Key',
          variable: 'apiKey',
          helpText: '',
          type: 'secret',
        },
        {
          label: 'Custom Search Engine ID',
          variable: 'cx',
          helpText: 'Your Custom Search Engine ID',
          type: 'text',
        },
        {
          label: 'Search Query',
          variable: 'query',
          helpText: '',
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
