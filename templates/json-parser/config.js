config = {
  name: 'JSON Parser',
  description: 'Parse JSON string and access it\'s properties',
  author: 'Victor',
  blockStyle: {
    backgroundColor: '#111111',
    foregroundColor: '#ffffff',
    label: 'JSON Parser',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'JSON',
          variable: 'json_input',
          type: 'text',
          helpText: 'JSON to parse. Can be a string or a {{variable}}.',
        },
        {
          label: 'Property',
          variable: 'json_property',
          type: 'text',
          helpText: 'You can use dot notation. Ex: name.first',
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
