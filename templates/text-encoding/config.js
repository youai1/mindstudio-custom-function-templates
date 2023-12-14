config = {
  name: 'Text Encode',
  description: 'Common text encoding operations',
  author: 'Victor',
  thumbnailUrl:
    'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702485823414.png',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702485865759.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Text',
          variable: 'encoding_text',
          type: 'text',
          helpText: 'Text to encode. Can be a string or a {{variable}}.',
        },
        {
          label: 'Operation',
          variable: 'encoding_operation',
          type: 'select',
          selectOptions: [
            {
              label: 'Encode',
              value: 'encode',
            },
            {
              label: 'Decode',
              value: 'decode',
            },
          ],
        },
        {
          label: 'Encoding',
          variable: 'encoding_method',
          type: 'select',
          selectOptions: [
            {
              label: 'Base64',
              value: 'base64',
            },
            {
              label: 'Uniform Resource Identifier',
              value: 'uri',
            },
          ],
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          type: 'text',
        },
      ],
    },
  ],
}
