config = {
  name: 'Google Search - Custom',
  author: 'Marko',
  description:
    'Perform a Google Search with your Custom Search Engine and save the results to a variable',
  thumbnailUrl:
    'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454492491.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702576480635.png',
    foregroundColor: '#000000',
    label: ' ',
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
