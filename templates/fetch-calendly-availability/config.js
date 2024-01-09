config = {
  name: 'Calendly: Fetch Availability',
  description: 'Fetch the availability schedules.',
  author: 'Victor',
  thumbnailUrl:
    'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861038204.jpg',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861003652.jpg',
    foregroundColor: '#366BFF',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Calendly Personal Token',
          variable: 'calendly_token',
          helpText:
            'See https://developer.calendly.com/how-to-authenticate-with-personal-access-tokens',
          type: 'secret',
        },
        {
          label: 'Availability Output Variable',
          variable: 'availabilityOutputVar',
          helpText: 'Variable to assign the availability output to.',
          type: 'text',
        },
        {
          label: 'Events Output Variable',
          variable: 'eventsOutputVar',
          helpText: 'Variable to assign the information about scheduled events to.',
          type: 'text',
        },
        {
          label: 'Scheduling Link Output Variable',
          variable: 'schedulingOutputVar',
          helpText: 'Variable to assign the scheduling link output to.',
          type: 'text',
        },
      ],
    },
  ],
}
