config = {
  name: "Custom Function Sample",
  description: "Sample showing all the APIs currently available in functions",
  author: 'MindStudio',
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
      ],
    },
  ],
}
