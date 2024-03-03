const apiKey = ai.getConfig('api_key');
const robotId = ai.getConfig('robot_id');
const url = `https://api.browse.ai/v2/robots/${robotId}/tasks`;
const headers = {
  'Authorization': `Bearer ${apiKey}`
};
const querystring = {
  'page': '1'
};

const response = await fetch(url, {
  method: 'GET',
  headers: headers,
  query: querystring
});

if (response.ok) {
  const responseText = await response.text();
  ai.vars.outputVar = responseText;
  console.log("Response:", responseText);
} else {
  console.error("Request failed with status:", response.status);
  ai.vars.outputVar = 'Error: Request failed.';
}
