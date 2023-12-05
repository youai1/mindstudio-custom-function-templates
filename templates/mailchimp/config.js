config = {
  name: "Mailchimp - Collect Emails",
  description: "Collect emails for your Mailchimp mailing list.",
  author: "Marko",
  tutorialUrl: "https://www.youtube.com/watch?v=giWd2rA_Yus",
  blockStyle: {
    backgroundImageUrl:
      "https://youai.imgix.net/images/9e603bae-0732-4f04-8136-2eeec1f0a9fe_1701763221447.jpg",
    foregroundColor: "#111111",
    label: " ",
  },
  configurationSections: [
    {
      title: "Configuration",
      items: [
        {
          label: "API Key",
          variable: "api_key",
          helpText: "You can find this in your account settings.",
          type: "secret",
        },
        {
          label: "List ID",
          variable: "list_id",
          helpText: "You can find this in your Audience settings.",
          type: "text",
        },
        {
          label: "Data Center",
          variable: "data_center",
          helpText:
            "Your API endpoint URL depends on the data center associated with your account. For example, if your API key is 1234567890-us1, your data center is us1.",
          type: "text",
        },
        {
          label: "Input",
          variable: "input",
          type: "text",
          helpText: "Email address to be sent to Mailchimp. Can be a string or a {{variable}}.",
        },
      ],
    },
  ],
}
