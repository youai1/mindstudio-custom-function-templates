config = {
  name: "Generate Image (DALL·E)",
  description: "Use DALL·E to generate an image and save the URL.",
  author: "Marko",
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1700599537727.jpg',
    foregroundColor: '#111111',
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
          type: 'text',
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