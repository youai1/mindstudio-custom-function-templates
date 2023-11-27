config = {
  name: "Make Webhook",
  description: "Send data to a Make webhook.",
  author: "Marko",
  blockStyle: {
    backgroundImageUrl:
      "https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1700594752696.jpg",
    foregroundColor: "#000000",
    label: ".",
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
