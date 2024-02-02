config = {
  name:"PostGreSQL",
  description:"Talk to your postgresql database, public endpoint at https://github.com/braincorporg/YouAIPostGre",
  author:"Kevin L",
  thumbnailUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1706904267377.png',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1706904267377.png',
    foregroundColor: '#000000',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Database URL',
          variable: 'database_url',
          helpText: 'The URL of your PostgreSQL database.',
          type: 'text',
        },
        {
          label: 'SQL Query',
          variable: 'query',
          helpText: 'The SQL query to execute.',
          type: 'text',
        },
        {
          label: 'Response Data Variable',
          type: 'text',
          variable: 'queryResult',
          helpText: 'Store query result, name this as queryResult',
        },
      ],
    },
  ],
}
