config = {
  name: "Slack Webhook",
  description: "Send a Slack message through a webhook url",
  author: "Marko",
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1700602923956.jpg',
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