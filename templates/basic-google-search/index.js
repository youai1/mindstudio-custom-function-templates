/**
 * Get the query.
 *
 * Note: While we could use ai.config.query to get the query,
 * ai.getConfig(configVariableName) will automatically resolve
 * the value if the provided value references another variable.
 *
 * For example, if you just wanted to search for "cats" every
 * time this function runs, you could set query to "cats" in
 * the function configuration and get it with ai.config.query.
 *
 * But if you to use a User Input block to get a query from
 * a user and save it as variable myQuery, you would type
 * {{myQuery}} in the function configuration. But then
 * ai.config.query would return the literal value "{{myQuery}}".
 * ai.getConfig('query'), on the other hand, will automatically
 * resolve {{myQuery}} to whatever the user's query is.
 */
const query = ai.getConfig('query');

// Make sure there is a query. Otherwise, we have nothing to
// search for.
if (!query) {
  console.log('No query defined');
  return;
}

// Execute the search
const result = await ai.searchGoogle(query);

/**
 * Searching returns an object with two keys:
 *  - text:   The search result page structured as text, which
 *            makes it easy to use as a variable in a message
 * - results: The results structured as an array of
 *            { title, description, url }, for more advanced
 *            processing.
 */
console.log(result.text);
console.log(result.results);

// Assign the text result to the variable
const { outputVariable } = ai.config;
ai.vars[outputVariable] = result.text;
