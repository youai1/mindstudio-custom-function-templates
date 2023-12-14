config = {
  name: 'Normalize URL',
  description:
    'Standardizes URLs by correcting protocols, simplifying domain format, and maintaining consistent trailing slashes',
  author: 'Marko',
  thumbnailUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702581218270.png',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702581231593.png',
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
