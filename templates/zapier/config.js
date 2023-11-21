config = {
  name: "Zapier Webhook",
  description: "Send data to a Zapier webhook.",
  author: "Marko",
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1700267311272.jpg',
    foregroundColor: "#FF5102",
    label: ".",
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
          helpText: "Input can be a string or a {{variable}}.",
        },
      ],
    },
  ],
}
