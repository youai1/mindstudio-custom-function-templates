config = {
  name: "Fetch Request (GET)",
  description: "Perform a GET request to the provided url",
  author: "Marko",
  thumbnailUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454324594.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454278826.png',
    foregroundColor: '#ffffff',
    label: ' ',
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