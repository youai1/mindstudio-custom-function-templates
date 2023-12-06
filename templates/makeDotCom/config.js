config = {
  name: "Make Webhook",
  description: "Send data to a Make webhook.",
  author: "Marko",
  thumbnailUrl:
    'https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861514359.jpg',
  blockStyle: {
    backgroundImageUrl:
      "https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701861466111.jpg",
    foregroundColor: "#000000",
    label: " ",
  },
  configurationSections: [
    {
      title: "Configuration",
      items: [
        {
          label: "Make Webhook URL",
          variable: "make_webhook_url",
          helpText: "Webhook URL provided by Make.",
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
