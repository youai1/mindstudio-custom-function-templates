config = {
  name:"Get Stocks News",
  description:"Get daily news about the desired stock",
  author:"Kevin L",
  blockStyle: {
    backgroundImageUrl: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1704706180757.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'All news',
      items: [
        {
          label: 'All news',
          type: 'text',
          variable: 'allNews',
          helpText: 'Store allNews related to a stock',
        },
        {
          label: 'Label',
          type: 'text',
          variable: 'performanceID',
          helpText: 'the stock ID',
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
