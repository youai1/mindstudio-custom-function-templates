config = {
  name: 'Discord Webhook',
  description: 'Send a Discord message through a webhook url',
  author: 'Victor',
  blockStyle: {
    backgroundImageUrl:
      'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1700659560462.jpg',
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
