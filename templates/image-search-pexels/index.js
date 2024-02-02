const query = ai.getConfig('query');
const apiKey = ai.getConfig('authorization');
const outputVarName = ai.getConfig('outputVar');
const count = ai.getConfig('count');
const parsedCount = Number(count) || 1;

if (!apiKey) {
  const errorMessage = 'ERROR: No API key provided.';
  ai.crmLog(errorMessage);
  ai.vars[outputVarName] = errorMessage;
  return;
}

if (!query) {
  const errorMessage = 'ERROR: No Query provided.';
  ai.crmLog(errorMessage);
  ai.vars[outputVarName] = errorMessage;
  return;
}

const authorizationObject = {
  Authorization: apiKey,
};

const headers = {
  'Content-Type': 'application/json',
  ...authorizationObject,
};

const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${parsedCount}`;

ai.log("Searching...");

// Make a GET request to the provided url
const request = await fetch(url, {
  method: 'GET',
  headers: headers,
});

const response = await request.json();

if (request.ok) {
  // The request was successful

  const photos = response.photos.map(({ src }) => src.original);

  const result = JSON.stringify(photos);
  ai.vars[outputVarName] = result;
  ai.crmLog(`Pexels request result: ${result}`);
} else {
  // There was an error with the request, log it and/or set an error flag
  console.error(`Error during GET request to ${url}.`);
  ai.vars[outputVarName] = JSON.stringify(request);
}
