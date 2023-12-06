config = {
  name: "Slack Webhook",
  description: "Send a Slack message through a webhook url",
  author: "Marko",
  thumbnailUrl:
    'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861603362.jpg',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861564605.jpg',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Slack Webhook URL',
          variable: 'slack_webhook_url',
          helpText: 'Webhook URL provided by Slack.',
          type: 'text',
        },
        {
          label: 'Input',
          variable: 'input',
          type: 'text',
          helpText: 'Text sent to the webhook. Can be a string or a {{variable}}.',
        },
      ],
    },
  ],
}