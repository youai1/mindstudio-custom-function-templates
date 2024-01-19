const accessKey = ai.getConfig('unsplash_access_key');
const query = ai.getConfig('unsplash_query');
const imageCount = ai.getConfig('unsplash_image_count') || '1';
const colorFilter = ai.getConfig('unsplash_color_filter');
const orientationFilter = ai.getConfig('unsplash_orientation_filter');
const outputVarName = ai.getConfig('outputVar');

if (!accessKey) {
  const errorMessage = 'ERROR: No Access key provided.';
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

const params = {
  query,
  per_page: imageCount,
  page: '1',
};

if (colorFilter !== 'none') {
  params['color'] = colorFilter;
}

if (orientationFilter !== 'none') {
  params['orientation'] = orientationFilter;
}

const queryParams = Object.keys(params)
  .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  .join('&');

const url = `https://api.unsplash.com/search/photos?${queryParams}`;

const headers = {
  'Content-Type': 'application/json',
  'Accept-Version': 'v1',
  Authorization: `Client-ID ${accessKey}`,
};

// Make a GET request to the provided url
const request = await fetch(url, {
  method: 'GET',
  headers: headers,
});

const data = await request.json();

if (data.total === 0) {
  const errorMessage = 'WARNING: Pictures not found.';
  ai.crmLog(errorMessage);
  ai.vars[outputVarName] = errorMessage;
  return;
}

/**
 * It's either an array of image URLs or a single image URL string
 */
let urls = data.results.map((r) => r.urls.raw);

if (urls.length === 1) {
  urls = urls[0];
}

ai.vars[ai.config.outputVar] = urls;
