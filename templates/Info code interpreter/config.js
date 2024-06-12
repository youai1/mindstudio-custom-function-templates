config = {
  name: "INFO for Agnostic Code Interpretor",
  description: "Mandatory to make the code interpretor work. It provide insight about your data content/format",
  author: 'Kevin L',
  thumbnailUrl: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1706706735200.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1706706735200.png',
    foregroundColor: '#000000',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Custom Block',
      items: [
        {
          label: 'Output Variable',
          type: 'text',
          variable: 'outputVar',
          helpText: 'Save the generated image URL to this variable',
        },
        {
          label: 'file',
          type: 'text',
          variable: 'url_file',
          helpText: 'url of the uploaded file',
        },
      ],
    },
  ],
}
