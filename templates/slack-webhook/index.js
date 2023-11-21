// Presuming that the ai.config object has the relevant Slack webhook URL
const SLACK_WEBHOOK_URL = ai.getConfig("slack_webhook_url");

// Read the variable provided to get the input data
const input = ai.getConfig("input");

if (!input) {
  ai.crmLog("No input to send to Slack.");
  return;
}

// Make a POST request to the Slack webhook URL
const request = await fetch(SLACK_WEBHOOK_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: input }),
});

// Check if the request was successful
if (request.ok) {
  ai.crmLog(`Message sent to Slack: ${input}`);
} else {
  ai.crmLog(`Error during POST request to Slack. Data: ${input}`);
}
