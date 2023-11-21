// Presuming that the ai.config object has the relevant Zapier webhook URL
const ZAPIER_WEBHOOK_URL = ai.getConfig("zapier_webhook_url");

// Read the variable provided to get the input data
const input = ai.getConfig("input");

if (!input) {
  ai.crmLog("No input to send to Zapier.");
  return;
}

// Make a POST request to the Zapier webhook URL
const request = await fetch(ZAPIER_WEBHOOK_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ data: input }),
});

// Check if the request was successful
if (request.ok) {
  ai.crmLog(`Data sent to Zapier: ${input}`);
} else {
  console.error("Error during POST request to Zapier.");
  ai.crmLog(`Error during POST request to Zapier. Data: ${input}`);
}
