config = {
  name: 'Get YouTube Videos',
  description: 'Get videos from a YouTube Channel',
  author: 'Marko',
  thumbnailUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702576938356.png',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702576973575.png',
    foregroundColor: '#111111',
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
