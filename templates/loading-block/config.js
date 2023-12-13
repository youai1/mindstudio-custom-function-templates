config = {
  name: "Loading Message Block",
  description: "Display a custom loading message.",
  author: 'Marko',
  thumbnailUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454766544.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1702454797172.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Loading Message',
      items: [
        {
          label: 'Message',
          type: 'text',
          variable: 'message',
          helpText: 'This message will be displayed to the user while the next automation block is processing.',
        },
      ],
    },
  ],
}