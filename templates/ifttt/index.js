const iftttKey = ai.getConfig('ifttt_webhook_key');
const eventName = ai.getConfig('ifttt_event_name');
const input = ai.getConfig('ifttt_input');

if (!input) {
  ai.crmLog('No input to send to IFTTT.');
  return;
}

if (!eventName) {
  ai.crmLog('Event name is required');
  return;
}

if (!iftttKey) {
  ai.crmLog('Webhook key is required');
  return;
}

// Build webhook URL
const url = `https://maker.ifttt.com/trigger/${eventName}/json/with/key/${iftttKey}`

// Make a POST request to the IFTTT webhook URL
const request = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ data: input }),
});

// Check if the request was successful
if (request.ok) {
  ai.crmLog(`Data sent to IFTTT: ${input}`);
} else {
  console.error('Error during POST request to IFTTT.');
  ai.crmLog(`Error during POST request to IFTTT. Data: ${input}`);
}
