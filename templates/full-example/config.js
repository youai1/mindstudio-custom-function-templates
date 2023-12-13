config = {
  name: "Custom Function Sample",
  description: "Sample showing all the APIs currently available in functions",
  author: 'MindStudio',
  thumbnailUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454649830.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454681979.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Temperature Destination',
          variable: 'temperatureOutputVar',
          type: 'text',
        },
        {
          label: 'Text Destination',
          variable: 'textOutputVar',
          type: 'text',
        },
        {
          label: 'Data Source',
          variable: 'dataSourceId',
          type: 'dataSource',
        },
      ],
    },
  ],
}
