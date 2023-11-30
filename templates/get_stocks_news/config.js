config = {
  name:"Get Stocks News",
  description:"Get daily news about the desired stock",
  author:"Kevin L",
  configurationSections: [
    {
      title: 'Custom Block',
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
