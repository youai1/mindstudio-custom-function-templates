config = {
  name: "Basic Google Search",
  description: "Search Google and save results as a variable",
  author: 'MindStudio',
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Search Query',
          variable: 'query',
          helpText: 'Search query can be a string or a {{variable}}',
          type: 'text',
        },
        {
          label: 'Output Variable',
          variable: 'outputVariable',
          type: 'text',
        },
      ],
    },
  ],
}
