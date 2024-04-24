config = {
  name: 'Get Google Calendar Events',
  description: 'Get events from a public Google Calendar',
  author: 'Marko',
  thumbnailUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702577012581.png',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702577036256.png',
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
          label: 'Calendar ID',
          variable: 'calendarId',
          helpText:
            'Your email address or calendar id. (Calendar must be public)',
          type: 'text',
        },
        {
          label: 'Event Limit',
          variable: 'limit',
          helpText: '(Optional) Maximum number of events to fetch. Too many events might exceed token limits.',
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
