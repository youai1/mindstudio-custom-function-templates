config = {
  name:"Get Stocks News",
  description:"Get daily news about the desired stock",
  author:"Kevin L",
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
