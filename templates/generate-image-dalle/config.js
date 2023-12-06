config = {
  name: "Generate Image (DALL·E)",
  description: "Use DALL·E to generate an image and save the URL.",
  author: "Marko",
  thumbnailUrl:
    'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861132456.jpg',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861089505.jpg',
    foregroundColor: '#FFFFFF',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'OpenAi API Key',
          variable: 'openai_api_key',
          helpText: 'Your OpenAi API key.',
          type: 'secret',
        },
        {
          label: 'Model (Optional)',
          variable: 'model',
          helpText: 'Dall E model to use. If left empty, dall-e-3 will be used.',
          type: 'text',
        },
        {
          label: 'Prompt',
          variable: 'prompt',
          type: 'text',
          helpText: 'Prompt to use for generating the image. Can be a string or a {{variable}}.',
        },
        {
          label: 'Output Variable',
          type: 'text',
          variable: 'outputVar',
          helpText: 'Save the generated image URL to this variable',
        },
      ],
    },
  ],
}