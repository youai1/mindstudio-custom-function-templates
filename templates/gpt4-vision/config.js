config = {
  name:"GPT4-Vision",
  description:"Provide any image and GPT4V will describe it based on your instructions",
  author:"Kevin L",
  blockStyle: {
    backgroundImageUrl: 'https://youai-cdn.s3.us-west-2.amazonaws.com/images/d83bf0b7-ffc0-442f-a7a2-efb97a670708_1702632143584.png',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'OpenAI Image Analysis',
      items: [
        {
          label: 'OpenAI API Key',
          type: 'secret',
          variable: 'openai_api_key',
          helpText: 'Enter your OpenAI API key here',
        },
        {
          label: 'Image URL',
          type: 'text',
          variable: 'image_url',
          helpText: 'URL of the image to analyze',
        },
        {
          label: 'GPT-4 Vision Instructions',
          type: 'text',
          variable: 'instructions',
          helpText: 'Text used to prompt GPT-4 Vision.\n(e.g. "Summarize this image.")'
        },
        {
          label: 'Response Data Variable',
          type: 'text',
          variable: 'responseData',
          helpText: 'Variable to store the response data from OpenAI',
        },
      ],
    },
  ],
}
