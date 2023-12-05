config = {
  name: 'IFTTT Webhook',
  description: 'Send data to a IFTTT webhook.',
  author: 'Victor',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701763191532.jpg',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Webhook Key',
          variable: 'ifttt_webhook_key',
          helpText: 'Webhook key provided by IFTTT',
          type: 'secret',
        },
        {
          label: 'Webhook Event Name',
          variable: 'ifttt_event_name',
          helpText: 'Webhook event name created by you',
          type: 'text',
        },
        {
          label: 'Input',
          variable: 'ifttt_input',
          type: 'text',
          helpText: 'Input can be a string or a {{variable}}.',
        },
      ],
    },
  ],
}
