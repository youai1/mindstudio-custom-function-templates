const apiKey = ai.getConfig('eyepopai_apiKey');
const pop_uuid = ai.getConfig('eyepopai_popuuid');
const image_url = ai.getConfig('eyepopai_url');
const outputVarName = ai.getConfig('outputVar');

// Get access token
let accessToken = '';

try {
  //encodeURIComponent
  const body = JSON.stringify({
    secret_key: apiKey,
  });
  const url = `https://api.eyepop.ai/authentication/token`;

  const headers = {
    'Content-Type': 'application/json',
  };

  ai.log('Loading Access Token...');

  const request = await fetch(url, {
    method: 'POST',
    headers,
    body,
  });

  const data = await request.json();

  accessToken = data.access_token;

  if (!accessToken) {
    throw new Error('Access token is invalid');
  }
} catch (e) {
  const errorMessage = 'ERROR. Unable to get the access token';
  ai.crmLog(errorMessage);
  ai.crmLog(e.toString());
  ai.vars[outputVarName] = errorMessage;
  return;
}

// Get Pop Config
let popConfig = {};

try {
  const url =
    'https://api.eyepop.ai/pops/' + pop_uuid + '/config?auto_start=true';

  ai.log('Loading PopConfig...');

  const request = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await request.json();
  popConfig = data;
  //ai.crmLog(popConfig);
} catch (e) {
  const errorMessage = 'ERROR. Unable to fetch the pop_config';
  ai.crmLog(errorMessage);
  ai.crmLog(e.toString());

  ai.vars[outputVarName] = errorMessage;
  return;
}

// Get Analysis
let outputResult = '';
try {
  //ai.crmLog(popConfig)
  const url =
    popConfig.base_url +
    '/pipelines/' +
    popConfig.pipeline_id +
    '/source?mode=preempt&processing=sync';
  const body = JSON.stringify({
    sourceType: 'URL',
    url: image_url,
  });

  ai.log('Analyzing...');
  //ai.crmLog(body);

  const request = await fetch(url, {
    method: 'PATCH',
    body: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await request.json();
  outputResult = data;
  //ai.crmLog("OUTPUT:")
  //ai.crmLog(JSON.stringify(outputResult));
} catch (e) {
  const errorMessage = 'ERROR. Unable to fetch the image json';
  ai.crmLog(errorMessage);
  ai.crmLog(e.toString());

  ai.vars[outputVarName] = errorMessage;
  return;
}

//JSON.stringify(
ai.vars[outputVarName] = outputResult;
