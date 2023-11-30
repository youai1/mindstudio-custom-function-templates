config = {
  name: "Get stocks detailed news from id",
  description: "Get stocks detailed news from id, works best in combination with get stocks news",
  author: 'Kevin L',
  configurationSections: [
    {
      title: 'Get stocks detailed news from id',
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
