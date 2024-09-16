config = {
  name: "Run MindStudio Workflow",
  description: "Run a MindStudio workflow",
  author: "Stiven",
  blockStyle: {
    foregroundColor: '#fefeff',
    label: 'Run Workflow',
    backgroundColor: '#121213',
  },
  configurationSections: [
    {
      title: 'Configuration',
      items: [
        {
          label: 'API Key',
          variable: 'apiKey',
          helpText: 'MindStudio API key found here: https://app.mindstudio.ai/workspace/settings/developer',
          type: 'secret',
        },
        {
          label: 'App ID',
          variable: 'appId',
          helpText: 'The ID of the app to run',
          type: 'text',
        },
        {
          label: 'Workflow name',
          variable: 'workflow',
          helpText: 'Name of the workflow to run',
          type: 'text',
        },
        {
          label: 'Variables',
          variable: 'variables',
          helpText: 'JSON of variables for the workflow',
          type: 'text',
        },
        {
          label: 'Output Variable',
          variable: 'outputVar',
          helpText: 'Variable to assign the output to.',
          type: 'text',
        },
      ],
    },
  ],
}