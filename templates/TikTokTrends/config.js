config = {
  name:"Tiktoktrends",
  description:"Get latest tiktok trends by region",
  author:"Kevin L",
  blockStyle: {
    backgroundImageUrl: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1701342183801.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Tiktoktrends',
      items: [
        {
          label: 'Output Variable',
          type: 'text',
          variable: 'OutputVariable',
          helpText: 'Save the trending hashtag on TikTok',
        },
        {
          label: 'Region',
          type: 'text',
          variable: 'region',
          helpText: 'Select your region of interested (eg. US)',
        },
        {
          label: 'Rapidapi ApiKey',
          type: 'text',
          variable: 'apiKey',
          helpText: 'Provide your rapidapi tokapi key',
        },
      ],
    },
  ],
}
