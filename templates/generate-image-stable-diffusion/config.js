config = {
  name: "Generate Image (Stable Diffusion)",
  description: "Use Stable Diffusion to generate an image and save the URL",
  author: 'sean t',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a47f3f3a-a1fa-41ca-8de3-e415452b4611_1699905529437.png',
    label: ' ',
    foregroundColor: 'white'
  },
  configurationSections: [
    {
      title: 'Stability AI Configuration',
      items: [
        {
          label: 'API Key',
          type: 'text',
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
