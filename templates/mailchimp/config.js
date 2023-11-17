config = {
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1700252678601.jpg',
    foregroundColor: '#111111',
    label: '.',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'API Key',
          variable: 'api_key',
          helpText: 'You can find this in your account settings.',
          type: 'text',
        },
        {
          label: 'List ID',
          variable: 'list_id',
          helpText: 'You can find this in your Audience settings.',
          type: 'text',
        },
        {
          label: 'Data Center',
          variable: 'data_center',
          helpText: "Your API endpoint's URL depends on the data center associated with your account. For example, if your API key is 1234567890-us1, your data center is us1.",
          type: 'text',
        },
        {
          label: 'Input',
          variable: 'input',
          type: 'text',
          helpText: 'Input can be a string or a {{variable}}.',
        },
      ],
    },
  ],
}