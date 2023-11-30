config = {
  name: "GPT4-Vision",
  description: "Use GPT4-Vision model from OpenAI",
  author: "Kevin L",
  configurationSections: [
    {
      title: 'OpenAI Image Analysis',
      items: [
        {
          label: 'OpenAI API Key',
          type: 'text',
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
          label: 'Response Data Variable',
          type: 'text',
          variable: 'responseData',
          helpText: 'Variable to store the response data from OpenAI',
        },
        {
          label: 'Success Variable',
          type: 'text',
          variable: 'success',
          helpText: 'Variable to indicate if the operation was successful',
        },
      ],
    },
  ],
}
