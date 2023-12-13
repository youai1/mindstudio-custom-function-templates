config = {
  name: 'Get Google Calendar Events',
  description: 'Get events from a public Google Calendar',
  author: 'Marko',
  thumbnailUrl: '',
  blockStyle: {
    backgroundColor: '#007aff',
    foregroundColor: '#ffffff',
    label: 'Get Google Calendar Events',
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
