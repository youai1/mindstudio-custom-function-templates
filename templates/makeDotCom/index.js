// Presuming that the ai.config object has the relevant Make webhook URL
const MAKE_WEBHOOK_URL = ai.getConfig("make_webhook_url");

// Read the variable provided to get the input data
const input = ai.getConfig("input");

if (!input) {
  ai.crmLog("No input to send to Make.");
  return;
}

// Make a POST request to the Make webhook URL
const request = await fetch(MAKE_WEBHOOK_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ data: input }),
});

// Check if the request was successful
if (request.ok) {
  ai.crmLog(`Data sent to Make: ${input}`);
} else {
  console.error("Error during POST request to Make.");
  ai.crmLog(`Error during POST request to Make. Data: ${input}`);
}
