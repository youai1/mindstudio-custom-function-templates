config = {
  name: "Get Stocks News",
  description: "Get daily news from any stocks",
  author: 'Kevin L',
  configurationSections: [
    {
      title: 'Get Stocks News',
      items: [
        {
          label: 'Output Variable',
          type: 'text',
          variable: 'outputVar',
          helpText: 'Save the generated image URL to this variable',
        },
        {
          label: 'Label',
          type: 'text',
          variable: 'performanceID',
          helpText: 'the stock ID',
        },
      ],
    },
  ],
}
