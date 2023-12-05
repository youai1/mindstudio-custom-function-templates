config = {
  name: "Fetch Request (GET)",
  description: "Perform a GET request to the provided url",
  author: "Marko",
  blockStyle: {
    backgroundColor: '#007aff',
    foregroundColor: '#ffffff',
    label: 'GET Request',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'URL',
          variable: 'url',
          helpText: 'Full URL of your GET request.',
          type: 'text',
        },
        {
          label: 'Authorization',
          variable: 'authorization',
          helpText: 'Authorization to include in the header. Usually an API key.',
          type: 'secret',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          helpText: 'Variable to assign the output to.',
          type: 'text',
        },
      ],
    },
  ],
}