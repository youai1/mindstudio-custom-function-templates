config = {
  name:"Get stock movers",
  description:"Get the list of all stocks movements",
  author:"Kevin L",
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
      ],
    },
  ],
}
