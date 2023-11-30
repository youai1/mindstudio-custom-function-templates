config = {
  name:"Detailed Stocks News",
  description:"Get detailed stocks news based on news ID",
  author:"Kevin L",
  configurationSections: [
    {
      title: 'Detailed Stocks News',
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
