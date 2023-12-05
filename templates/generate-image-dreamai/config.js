config = {
  name: "Generate Image (DreamAi)",
  description: "Use DreamAi to generate an image and save the URL.",
  author: "Victor",
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701763143140.jpg',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'DreamAI API Key',
          variable: 'dreamai_api_key',
          helpText: 'Your DreamAI API key.',
          type: 'text',
        },
        {
          label: 'Image Style',
          variable: 'dreamai_style',
          helpText: 'Number from 1 (Synthwave) to 21 (Surreal)',
          type: 'text',
        },
        {
          label: 'Prompt',
          variable: 'dreamai_prompt',
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
