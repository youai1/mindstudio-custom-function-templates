config = {
  name: 'Normalize URL',
  description:
    'Standardizes URLs by correcting protocols, simplifying domain format, and maintaining consistent trailing slashes',
  author: 'Marko',
  thumbnailUrl: '',
  blockStyle: {
    backgroundColor: '#007AFF',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Input',
          variable: 'input',
          type: 'text',
          helpText: 'URL to normalize. Can be a string or a {{variable}}.',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          type: 'text',
        },
      ],
    },
  ],
}
