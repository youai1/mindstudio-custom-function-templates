config = {
  name: 'Text Validate',
  description: 'Common text validate operations',
  author: 'Victor',
  blockStyle: {
    backgroundColor: '#111111',
    foregroundColor: '#ffffff',
    label: 'Text Validate',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Text',
          variable: 'validate_text',
          type: 'text',
          helpText: 'Text to validate. Can be a string or a {{variable}}.',
        },
        {
          label: 'Validate Operation',
          variable: 'validate_operation',
          type: 'select',
          selectOptions: [
            {
              label: 'Email Validation',
              value: 'email',
            },
            {
              label: 'URL Validation',
              value: 'url',
            },
            {
              label: 'Regex Validation',
              value: 'regex',
            },
          ],
        },
        {
          label: 'Regex (Regex Validation)',
          variable: 'validate_regex',
          type: 'text',
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
