// Read a variable that was set by another automation
console.log(ai.vars.myVariable);

// Set a variable
ai.vars.myVariable = "New Value"

// Make a fetch request to an API
const url = `https://goweather.herokuapp.com/weather/${ai.vars.cityName}`;
const request = await fetch(url)
const result = await request.json();

// Save the value to a variable name defined in the config
const temperatureOutputVar = ai.config.temperatureOutputVar;
ai.vars[temperatureOutputVar] = result.temperature;

// Scrape a URL and save the first 100 words as a variable
const urlResult = await ai.scrapeUrl('https://en.wikipedia.org/wiki/Preserved_Fish');
const textResult = urlResult.text;
const snippet = textResult.split(' ').slice(0, 100).join(' ');
ai.vars[ai.config.textOutputVar] = snippet;

// Query a data source (replace with IDs from variables)
if (ai.config.dataSourceId) {
  const dataSourceResult = await ai.queryDataSource(
    ai.config.dataSourceId,
    "query text",
    numResults,
  );

  console.log(dataSourceResult);
}
