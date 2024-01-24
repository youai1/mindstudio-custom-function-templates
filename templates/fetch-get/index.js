const url = ai.getConfig('url');
const authorization = ai.getConfig('authorization');
const outputVarName = ai.getConfig('outputVar') || 'output';

if (!url) {
  ai.crmLog('No url provided.');
  ai.vars[outputVarName] = 'No url provided.';
  return;
}

let authorizationObject = {};

if (authorization) {
  authorizationObject = {
    Authorization: authorization,
  };
}

const headers = {
  'Content-Type': 'application/json',
  ...authorizationObject,
};

const successOut = ai.config.success;
// Make a GET request to the provided url
const request = await fetch(url, {
  method: 'GET',
  headers: headers,
});

const response = await request.json();

if (request.ok) {
  // The request was successful
  const result = JSON.stringify(response);
  ai.vars[outputVarName] = result;
  ai.crmLog(`GET request result: ${result}`);
} else {
  // There was an error with the request, log it and/or set an error flag
  ai.vars[
    outputVarName
  ] = `Error during GET request to ${url}.\n${JSON.stringify(response)}`;
}
