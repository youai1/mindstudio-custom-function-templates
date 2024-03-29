ai.log('Generating image...');

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${ai.getConfig('apiKey')}`, // Use the user's API key
};

const generationOptions = {
  "steps": 40,
  "width": 1024,
  "height": 1024,
  "seed": 0,
  "cfg_scale": 5,
  "samples": 1,
  "text_prompts": [
    {
      "text": ai.getConfig('userPrompt'), // Use the user's prompt
      "weight": 1
    },
    {
      "text": "blurry, bad",
      "weight": -1
    }
  ]
};

ai.log("Generating image...");

// Make the generation request
const url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";
const request = await fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(generationOptions)
});
const response = await request.json();

// Upload the image
const responseUrl = await ai.uploadFile(`${response.artifacts[0].base64}`, 'image/png', 'base64');

// Set the URL as a variable
ai.vars[ai.config.outputVar] = responseUrl;
