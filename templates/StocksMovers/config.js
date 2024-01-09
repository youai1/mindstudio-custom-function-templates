config = {
  name:"Get stock movers",
  description:"Get the list of all stocks movements",
  author:"Kevin L",
  blockStyle: {
    backgroundImageUrl: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1704706323125.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Get stock movers',
      items: [
        {
          label: 'Movers list',
          type: 'text',
          variable: 'movers',
          helpText: 'List of all stocks movement of the day',
        },
        {
          label: 'rapidapi',
          type: 'text',
          variable: 'rapidapi',
          helpText: 'provide your rapidapi key',
        },
      ],
    },
  ],
}
