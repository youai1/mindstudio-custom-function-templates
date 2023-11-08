config = {
  name: "Loading Message Block",
  description: "Display a custom loading message.",
  author: 'Marko',
  blockStyle: {
    backgroundColor: '#111111',
    foregroundColor: 'white',
    label: 'Loading Block',
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