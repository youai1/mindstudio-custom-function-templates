config = {
  name:"Whisper",
  description:"Provide any audio file and Whisper will transcribe it.",
  author:"Matthew G",
  blockStyle: {
    backgroundImageUrl: 'https://images.openai.com/blob/13c810cb-0592-442d-9580-714838b8ed28/whisper.jpg?trim=519,129,519,119&width=2000',
    foregroundColor: '#ffffff',
    label: ' ',
  },
  configurationSections: [
    {
      title: 'OpenAI Image Analysis',
      items: [
        {
          label: 'OpenAI API Key',
          type: 'text',
          variable: 'openai_api_key',
          helpText: 'Enter your OpenAI API key here',
        },
        {
          label: 'Audio URL',
          type: 'text',
          variable: 'audio_url',
          helpText: 'URL of the audio to transcribe',
        },
        {
          label: 'Response Data Variable',
          type: 'text',
          variable: 'responseData',
          helpText: 'Variable to store the response data from OpenAI',
        },
        {
          label: 'Success Variable',
          type: 'text',
          variable: 'success',
          helpText: 'Variable to indicate if the operation was successful',
        },
      ],
    },
  ],
}