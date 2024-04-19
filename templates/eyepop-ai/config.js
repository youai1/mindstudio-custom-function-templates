// Code
config = {
  name: 'Image Analysis (EyePop.ai)',
  description: 'Perform image analysis using the EyePop.ai API.',
  author: 'Andy',
  thumbnailUrl:
    'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1713540914654.png',
  blockStyle: {
    backgroundImageUrl: '',
    foregroundColor: '#ffffff',
    backgroundColor: '#111111',
    label: 'EyePop.ai',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Api Key',
          variable: 'eyepopai_apiKey',
          helpText: 'Your EyePop.ai API key.',
          type: 'secret',
        },
        {
          label: 'Pop UUID',
          variable: 'eyepopai_popuuid',
          helpText: 'Can be a string or a {{variable}}.',
          type: 'text',
        },
        {
          label: 'Image URL',
          variable: 'eyepopai_url',
          helpText: 'Enter a URL to an image.',
          type: 'text',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          helpText: 'Variable to assign the JSON output to.',
          type: 'text',
        },
      ],
    },
  ],
}
