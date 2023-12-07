config = {
  name: 'Text Transform',
  description: 'Common text transform operations',
  author: 'Victor',
  blockStyle: {
    backgroundColor: '#111111',
    foregroundColor: '#ffffff',
    label: 'Text Transform',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Text',
          variable: 'transform_text',
          type: 'text',
          helpText: 'Text to transform. Can be a string or a {{variable}}.',
        },
        {
          label: 'Transform Operation',
          variable: 'transform_operation',
          type: 'select',
          selectOptions: [
            {
              label: 'Uppercase',
              value: 'uppercase',
            },
            {
              label: 'Lowercase',
              value: 'lowercase',
            },
            {
              label: 'Trim',
              value: 'trim',
            },
            {
              label: 'Trim Start',
              value: 'trimStart',
            },
            {
              label: 'Trim End',
              value: 'trimEnd',
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
