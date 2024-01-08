config = {
  name:"Detailed Stocks News",
  description:"Get detailed stocks news based on news ID",
  author:"Kevin L",
  blockStyle: {
    backgroundImageUrl: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1704706431638.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Detailed Stocks News',
      items: [
        {
          label: 'News content',
          type: 'text',
          variable: 'newsContent',
          helpText: 'The full news content',
        },
        {
          label: 'rapidapi',
          type: 'text',
          variable: 'rapidapi',
          helpText: 'provide your rapidapi Api key',
        },
        {
          label: 'Label',
          type: 'text',
          variable: 'sourceId',
          helpText: 'the source ID',
        },
        {
          label: 'Label',
          type: 'text',
          variable: 'id',
          helpText: 'the news ID',
        },
      ],
    },
  ],
}
