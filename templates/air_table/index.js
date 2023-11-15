// Presuming that the ai.vars object has the relevant Airtable API credentials and data
const AIRTABLE_API_KEY = ai.getConfig('airtable_api_key');
const AIRTABLE_BASE_ID = ai.getConfig('airtable_base_id');
const AIRTABLE_TABLE_NAME = ai.getConfig('airtable_table_name');

const headers = {
  'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
  'Content-Type': 'application/json'
};

const data = {
  "records": [
    {
      "fields": {
        "title": ai.getConfig('title'),
        "description": ai.getConfig('description'),
        "keywords": ai.getConfig('keywords'),
      }
    }
  ]
};
const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
const successOut = ai.config.success
// Make a POST request to Airtable
const request = await fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
});

// Check if the request was successful
if (request.ok) {
  // The POST request was successful
  ai.vars.success = "done";
} else {
  // There was an error with the request, log it and/or set an error flag
  console.error("Error during POST request to Airtable.");
  ai.vars.success = "failed";
}

