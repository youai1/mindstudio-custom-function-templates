config = {
  name:"PostGreSQL",
  description:"Talk to your postgresql database, public endpoint at https://github.com/braincorporg/YouAIPostGre",
  author:"Kevin L",
  thumbnailUrl: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1704705298924.png',
  blockStyle: {
    backgroundImageUrl: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1704705298924.png',
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
