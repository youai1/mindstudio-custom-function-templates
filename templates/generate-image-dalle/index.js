const apiKey = ai.getConfig("openai_api_key");
const model = ai.getConfig("model");

// Read the variable provided to get the prompt
const prompt = ai.getConfig("prompt");

if (!prompt) {
  ai.crmLog("No prompt to send to Open AI.");
  return;
}

const defaultModel = 'dall-e-3';

// Use a default model in case one is not provided
const resolvedModel = model && `${model}`.trim() !== "" ? model : defaultModel;

const data = {
  model: resolvedModel,
  prompt,
  n: 1,
  size: "1024x1024",
  response_format: 'b64_json'
}

const url = `https://api.openai.com/v1/images/generations`;

try {
  // Make a POST request to the OpenAi API
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(data)
  });

  const response = await request.json();

  // Upload the image
  const responseUrl = await ai.uploadFile(`${response.data[0].b64_json}`, 'image/png', 'base64');

  // Set the URL as a variable
  ai.vars[ai.config.outputVar] = `${responseUrl}?w=1024`;

  ai.crmLog(`Image generated: ${responseUrl}?w=1024`);
} catch (err) {
  console.error("Error during POST request.");
}
