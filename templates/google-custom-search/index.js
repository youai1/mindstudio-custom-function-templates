async function googleSearch(query, apiKey, cx) {
  const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodeURIComponent(
    query,
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items; // Contains search results
  } catch (error) {
    console.error('Error during Google Search:', error);
    return null;
  }
}

// ==== Config variables
const apiKey = ai.getConfig('apiKey');
const cx = ai.getConfig('cx'); // Custom Search Engine ID
const query = ai.getConfig('query');
const outputVar = ai.getConfig('outputVar') || 'output';
// ====

if (!apiKey) {
  const errorMessage = 'ERROR: No API key provided.';
  ai.crmLog(errorMessage);
  ai.vars[outputVar] = errorMessage;
  return;
}

if (!cx) {
  const errorMessage = 'ERROR: No Custom Search Engine ID provided.';
  ai.crmLog(errorMessage);
  ai.vars[outputVar] = errorMessage;
  return;
}

let data = await googleSearch(query, apiKey, cx);

if (!data) {
  const errorMessage = 'ERROR: Search results not found.';
  console.error(errorMessage);
  ai.vars[outputVar] = errorMessage;
  return;
}

// Delete some properties to lower token count
data = data.map((item) => {
  delete item.cacheId;
  delete item.formattedUrl;
  delete item.htmlFormattedUrl;
  delete item.htmlSnippet;
  delete item.htmlTitle;
  delete item.kind;
  return item;
});

const stringifiedResponse = JSON.stringify(data);

ai.vars[outputVar] = stringifiedResponse;
ai.crmLog(`GET request result: ${stringifiedResponse}`);
