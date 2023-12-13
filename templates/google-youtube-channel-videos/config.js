config = {
  name: 'Get YouTube Videos',
  description: 'Get videos from a YouTube Channel',
  author: 'Marko',
  thumbnailUrl: '',
  blockStyle: {
    backgroundColor: '#007aff',
    foregroundColor: '#ffffff',
    label: 'Get YouTube Videos',
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
          label: 'Channel ID',
          variable: 'channelId',
          helpText: 'Your YouTube Channel ID',
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
