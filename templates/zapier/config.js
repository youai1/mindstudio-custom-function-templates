config = {
  name: "Zapier Webhook",
  description: "Send data to a Zapier webhook.",
  author: "Marko",
  tutorialUrl: "https://www.youtube.com/watch?v=b0La4G3HY1I",
  thumbnailUrl:
    'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861786958.jpg',
  blockStyle: {
    backgroundImageUrl:
      "https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861733735.jpg",
    foregroundColor: "#111111",
    label: " ",
  },
  configurationSections: [
    {
      title: "Configuration",
      items: [
        {
          label: "Zapier Webhook URL",
          variable: "zapier_webhook_url",
          helpText: "Webhook URL provided by Zapier.",
          type: "text",
        },
        {
          label: "Input",
          variable: "input",
          type: "text",
          helpText:
            "Text sent to the webhook. Can be a string or a {{variable}}.",
        },
      ],
    },
  ],
}
