// Get the configuration
let {
  query,
  outputVariable,
} = ai.config;

// If the query is a variable, resolve it
if (query.startsWith('{{')) {
  const queryVariableName = query
    .replace('{{', '')
    .replace('}}', '');
  query = ai.vars[queryVariableName];
}

// Make sure there is a query
if (!query) {
  console.log('No query defined');
  return;
}

// Execute the search
const result = await ai.searchGoogle(query);

/**
 * Searching returns an object with two keys:
 *  - text: The search result page structured as text, which makes it easy to use as a variable in a message
 * - results: The results structured as an array of { title, description, url }, for more advanced processing.
 */
console.log(result.text);
console.log(result.results);

// Assign the text result to the variable
ai.vars[outputVariable] = result.text;
