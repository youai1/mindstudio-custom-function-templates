config = {
  name: "Agnostic Code Interpretor",
  description: "Agnostic code interpretor for data analysis",
  author: 'Kevin L',
  thumbnailUrl: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1706706447707.png',
  blockStyle: {
    backgroundImageUrl:
      'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1706706447707.png',
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
          label: 'Output Variable Text',
          type: 'text',
          variable: 'outputVarText',
          helpText: 'display the print statement',
        },
        {
          label: 'file',
          type: 'text',
          variable: 'url_file',
          helpText: 'url of the uploaded file',
        },
        {
          label: 'code to generate',
          type: 'text',
          variable: 'python_script',
          helpText: 'code to send',
        },
      ],
    },
  ],
}
