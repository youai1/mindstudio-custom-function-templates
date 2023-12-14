config = {
  name: 'Mailgun - Send Email',
  description: 'Send an email with Mailgun',
  author: 'Marko',
  thumbnailUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702597577451.png',
  blockStyle: {
    backgroundImageUrl: 'https://youai.imgix.net/images/a8284d01-9ec8-4683-a15d-7f4d7d922e5f_1702597594565.png',
    foregroundColor: '#984043',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'Mailgun API Key',
          variable: 'apiKey',
          type: 'secret',
        },
        {
          label: 'Mailgun Domain',
          variable: 'domain',
          type: 'text',
          helpText: 'This usually looks like yourdomainname.mailgun.org',
        },
        {
          label: 'Sender Email',
          variable: 'from',
          type: 'text',
        },
        {
          label: 'Receiver Email',
          variable: 'to',
          type: 'text',
        },
        {
          label: 'Subject',
          variable: 'subject',
          type: 'text',
          helpText: 'Email subject.',
        },
        {
          label: 'Text',
          variable: 'text',
          type: 'text',
          helpText: 'Email text.',
        },
        {
          label: 'Success Output Variable',
          variable: 'text',
          type: 'text',
          helpText: '(Optional) Variable to assign the success output to.',
        },
      ],
    },
  ],
}
