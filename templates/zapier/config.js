config = {
  name: "Zapier Webhook",
  description: "Send data to a Zapier webhook.",
  author: "Marko",
  blockStyle: {
    backgroundImageUrl:
      "https://youai-cdn.s3.us-west-2.amazonaws.com/images/536a1924-ae79-4522-9d3a-1ff6c49cd22f_1700083749469.jpg",
    foregroundColor: "transparent",
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
};
