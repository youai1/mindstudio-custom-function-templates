config = {
  name: "Generate Image (Stable Diffusion)",
  description: "Use Stable Diffusion to generate an image and save the URL",
  author: 'sean t',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701763332627.jpg',
    label: ' ',
    foregroundColor: '#FFFFFF'
  },
  configurationSections: [
    {
      title: 'Stability AI Configuration',
      items: [
        {
          label: 'API Key',
          type: 'secret',
          variable: 'apiKey',
          helpText: 'Generate your API key by visiting https://platform.stability.ai',
        },
      ],
    },
    {
      title: 'Image Generation Options',
      items: [
        {
          label: 'Prompt',
          type: 'text',
          variable: 'userPrompt',
          helpText: 'Explicit prompt or variable containing a prompt to generate',
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
