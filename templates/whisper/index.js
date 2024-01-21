// Get the OpenAI API key from the configuration
const openAiApiKey = ai.getConfig('openai_api_key');

// Prepare the request body for Whisper
const requestBody = JSON.stringify({
  model: "whisper-large",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "Transcribe this audio"
        },
        {
          type: "audio_url",
          audio_url: {
            url: ai.getConfig('audio_url') // Use audio URL
          }
        }
      ]
    }
  ]
});

// Define the OpenAI API URL for Whisper
const apiUrl = 'https://api.openai.com/v1/chat/completions';

// Make a POST request to the OpenAI API
const response = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${openAiApiKey}`
  },
  body: requestBody
});

// Check if the request was successful
if (response.ok) {
  const responseData = await response.json();

  const responseDataContent = responseData.choices[0].message.content;
  ai.vars.success = "done";
  ai.vars[ai.config.responseData] = responseDataContent;

} else {
  // There was an error with the request
  responseDataContent = await response.text()
  console.error("Error during POST request to OpenAI API:", responseDataContent);
  ai.vars.success = "failed";
  ai.vars[ai.config.responseData] = responseDataContent;
}
