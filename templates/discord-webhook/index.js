const webhookUrl = ai.getConfig('discord_webhook_url');
const input = ai.getConfig('discord_input');

if (!input) {
  ai.crmLog('No input to send to Discord.');
  return;
}

if (!webhookUrl) {
  ai.crmLog('Discord Webhook URL is required.');
  return;
}

// Make a POST request to the Discord webhook URL
const request = await fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ content: input }),
});

// Check if the request was successful
if (request.ok) {
  ai.crmLog(`Message sent to Discord: ${input}`);
} else {
  ai.crmLog(`Error during POST request to Discord. Data: ${input}`);
}
