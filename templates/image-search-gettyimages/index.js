const apiKey = ai.getConfig('gettyimages_apiKey');
const apiSecret = ai.getConfig('gettyimages_apiSecret');
const query = ai.getConfig('gettyImages_query');
const count = ai.getConfig('gettyImages_count') || '1';
const outputVarName = ai.getConfig('outputVar');

// Get access token
let accessToken = '';

try {
  const body = `grant_type=client_credentials&client_id=${encodeURIComponent(
    apiKey,
  )}&client_secret=${encodeURIComponent(apiSecret)}`;

  const url = `https://authentication.gettyimages.com/oauth2/token`;

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

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
  ai.vars[outputVarName] = errorMessage;
  return;
}

// Search images

let images = [];

try {
  const url = `https://api.gettyimages.com/v3/search/images/creative?phrase=${query}&page_size=${count}&fields=display_set`;

  const request = await fetch(url, {
    method: 'GET',
    headers: {
      'Api-Key': apiKey,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await request.json();
  images = data.images;
} catch (e) {
  const errorMessage = 'ERROR. Unable to fetch the images';
  ai.crmLog(errorMessage);
  ai.vars[outputVarName] = errorMessage;
  return;
}

// Format the response

if (images.length === 0) {
  const errorMessage = 'WARNING: Pictures not found.';
  ai.crmLog(errorMessage);
  ai.vars[outputVarName] = errorMessage;
  return;
}

/**
 * It's either an array of image URLs or a single image URL string
 */
let outputResult = '';

const urls = images
  .map((image) => {
    const sizes = image.display_sizes;

    const compactSize = sizes.find(
      (s) => s.name === 'comp' || s.name === 'comp_webp',
    );

    if (compactSize) {
      return compactSize.uri;
    }

    const previewSize = sizes.find((s) => s.name === 'preview');

    if (previewSize) {
      return previewSize.uri;
    }

    const thumbSize = sizes.find((s) => s.name === 'thumb');

    if (thumbSize) {
      return thumbSize.uri;
    }

    return null;
  })
  .filter((u) => u !== null);

/**
 * If URLs not found
 */
if (urls.length === 0) {
  const errorMessage = 'WARNING: URLs not found.';
  ai.crmLog(errorMessage);
  ai.vars[outputVarName] = errorMessage;
  return;
}

if (urls.length === 1) {
  outputResult = urls[0];
} else {
  outputResult = JSON.stringify(urls);
}

ai.vars[outputVarName] = outputResult;
