// Presuming that the ai.vars object has the relevant database URL and query
const DATABASE_URL = ai.getConfig('database_url');
const QUERY = ai.getConfig('query');

const headers = {
  'Content-Type': 'application/json'
};

const data = {
  "database_url": DATABASE_URL,
  "query": QUERY
};

const url = "https://youai-postgre.onrender.com/query";

// Make a POST request to your Flask application
const request = await fetch(url, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(data)
});

// Check if the request was successful
if (request.ok) {
  const jsonData = await request.json();
  console.log("Query successful.");
  console.log(jsonData);
  ai.vars.queryResult = jsonData;
} else {
  console.error("Query failed with status:", request.status);
  ai.vars.queryResult = request.status;
}
