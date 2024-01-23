// Get the OpenAI API key from the configuration
const openAiApiKey = ai.getConfig('openai_api_key');

// Prepare the request body
const requestBody = JSON.stringify({
  model: "gpt-4-vision-preview",
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: ai.getConfig('instructions').toString()
        },
        {
          type: "image_url",
          image_url: {
            url: ai.getConfig('image_url')
          }
        }
      ]
    }
  ],
  max_tokens: 300
});

// Define the OpenAI API URL
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
