config = {
  name: 'Text Replace',
  description: 'Common text replacement operations',
  author: 'Victor',
  blockStyle: {
    backgroundColor: '#111111',
    foregroundColor: '#ffffff',
    label: 'Text Replace',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Text',
          variable: 'replace_text',
          type: 'text',
          helpText: 'Initial Text. Can be a string or a {{variable}}.',
        },
        {
          label: 'Replace Operation',
          variable: 'replace_operation',
          type: 'select',
          selectOptions: [
            {
              label: 'Only First Occurance',
              value: 'first_occurance',
            },
            {
              label: 'All Occurances',
              value: 'all_occurances',
            },
            {
              label: 'Only First Occurance (Regex)',
              value: 'first_occurance_regex',
            },
            {
              label: 'All Occurances (Regex)',
              value: 'all_occurances_regex',
            },
            {
              label: 'Stop Words by comma',
              value: 'stop_words',
            },
          ],
        },
        {
          label: 'Pattern',
          variable: 'replace_pattern',
          type: 'text',
        },
        {
          label: 'Replacement',
          variable: 'replace_replacement',
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
