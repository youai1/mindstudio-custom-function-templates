config = {
  name: 'Discord Webhook',
  description: 'Send a Discord message through a webhook url',
  author: 'Victor',
  thumbnailUrl:
    'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701851940449.jpg',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861165885.jpg',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Discord Webhook URL',
          variable: 'discord_webhook_url',
          helpText: 'Webhook URL provided by Discord.',
          type: 'text',
        },
        {
          label: 'Input',
          variable: 'discord_input',
          type: 'text',
          helpText:
            'Text sent to the webhook. Can be a string or a {{variable}}.',
        },
      ],
    },
  ],
}
