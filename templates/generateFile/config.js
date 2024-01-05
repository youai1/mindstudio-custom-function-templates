config = {
  author: 'Marko',
  name: 'Generate File',
  description: 'Generate CSV, JSON, HTML, XML, or Markdown files from an input string.',
  thumbnailUrl: '',
  blockStyle: {
    backgroundImageUrl: '',
    backgroundColor: '#007AFF',
    foregroundColor: '#ffffff',
    label: 'Generate File',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Input',
          variable: 'input',
          type: 'text',
          helpText: 'Can be a string or {{variable}}.',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          type: 'text',
          helpText: 'Variable to output the resulting file URL to.',
        },
        {
          label: 'Output File Type',
          variable: 'fileType',
          type: 'select',
          selectOptions: [
            {
              label: 'Plain Text (.txt)',
              value: 'txt',
            },
            {
              label: 'CSV',
              value: 'csv',
            },
            {
              label: 'HTML',
              value: 'html',
            },
            {
              label: 'XML',
              value: 'xml',
            },
            {
              label: 'JSON',
              value: 'json',
            },
            {
              label: 'Markdown (.md)',
              value: 'markdown',
            },
          ],
        },
      ],
    },
  ],
}
