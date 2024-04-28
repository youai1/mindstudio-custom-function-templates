const API_URL = 'https://api.perplexity.ai/chat/completions'; // Constant for the API URL
const SECRET_KEY = ai.getConfig('Perplexity_API_key'); // Retrieve the Perplexity API key (https://www.perplexity.ai/pro)

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: `Bearer ${SECRET_KEY}`
  },
  body: JSON.stringify({
    model: 'pplx-7b-online', // Set your desired model. (https://docs.perplexity.ai/docs/model-cards)
    messages: [
      {role: 'system', content: 'Be precise and concise.'},
      {role: 'user', content: ai.vars.input} // Assuming you have a variable called 'input', i.e., from a "User input".
    ],
    max_tokens: 4096, // Set the maximum number of tokens.
    temperature: 0.5, // Set the desired temperature (Value between 0 inclusive and 2 exclusive. Higher values are more random and lower values are more deterministic).
    stream: false
  })
};

try {
  const response = await fetch(API_URL, options);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status} - ${response.statusText}`);
  }

  const data = await response.json();
  console.log(data);

  // Validate data before using it
  if (data.choices && data.choices.length > 0 && data.choices[0].message) {
    ai.vars.answer = data.choices[0].message.content; // Store the response in 'answer'
  } else {
    console.error('Invalid data format received:', data);
  }
} 
catch (err) {
  if (err.name === 'TypeError') {
    console.error('Network error:', err); // Handle network errors separately
  } else {
    console.error('Error:', err); // Log other types of errors
  }
}