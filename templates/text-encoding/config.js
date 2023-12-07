config = {
  name: 'Text Encode',
  description: 'Common text encoding operations',
  author: 'Victor',
  blockStyle: {
    backgroundColor: '#111111',
    foregroundColor: '#ffffff',
    label: 'Text Encode',
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
            /*{
              label: 'Base64',
              value: 'base64',
            },*/
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
