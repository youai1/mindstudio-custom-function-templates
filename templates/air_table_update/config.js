config = {
  transitionType: 'controlled',
  metadata: {
    name: 'Update Airtable Record',
    description: 'Updates a single record in an Airtable table with specified field values',
  },
  blockStyle: {
    label: 'Update Airtable Record',
  },
  configurationSections: [
    {
      title: 'Authentication',
      items: [
        {
          label: 'Airtable API Key',
          type: 'secret',
          variable: 'apiKey',
          helpText: "Your Airtable API key (starts with 'pat' or 'key')",
        },
      ],
    },
    {
      title: 'Record Configuration',
      items: [
        {
          label: 'Base ID',
          type: 'text',
          variable: 'baseId',
          helpText: "The ID of your Airtable base (starts with 'app')",
          placeholder: 'appXXXXXXXXXXXXXX',
        },
        {
          label: 'Table ID',
          type: 'text',
          variable: 'tableId',
          helpText: 'The name or ID of your table',
          placeholder: 'tblXXXXXXXXXXXXXX',
        },
        {
          label: 'Record ID',
          type: 'inputVariable',
          variable: 'recordId',
          helpText: "The ID of the record to update (starts with 'rec')",
          placeholder: 'recXXXXXXXXXXXXXX',
        },
      ],
    },
    {
      title: 'Update Data',
      items: [
        {
          label: 'Fields to Update',
          type: 'text',
          variable: 'updateData',
          helpText: 'JSON array of objects containing field names and values to update. Example: [{"Column Name": "New Value"}]',
          placeholder: '[{"Column Name": "New Value"}, {"Another Column": "Another Value"}]',
          textOptions: {
            textType: 'multiline',
          },
        },
      ],
    },
  ],
}
