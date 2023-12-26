config = {
  name: 'Twilio - Send SMS',
  description: 'Send SMS with Twilio',
  author: 'Victor',
  thumbnailUrl:
    'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1703609903923.jpg',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1703609975739.jpg',
    foregroundColor: '#111111',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Twilio Account SID',
          variable: 'twilio_account_sid',
          type: 'secret',
        },
        {
          label: 'Twilio Auth Token',
          variable: 'twilio_auth_token',
          type: 'secret',
        },
        {
          label: 'SMS Text',
          variable: 'twilio_text',
          type: 'text',
          helpText: 'Text to send. Can be a string or a {{variable}}.',
        },
        {
          label: 'FROM Number',
          variable: 'twilio_from',
          type: 'text',
          helpText: 'Number to send from.',
        },
        {
          label: 'TO Number',
          variable: 'twilio_to',
          type: 'text',
          helpText: 'Number to send to.',
        },
      ],
    },
  ],
};
