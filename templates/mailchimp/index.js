const listId = ai.getConfig('list_id');
const apiKey = ai.getConfig('api_key');
const dataCenter = ai.getConfig('data_center');

const url = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members/`;

// Read the variable provided to get the input data
const email = ai.getConfig("input");

if (!email) {
  ai.crmLog("No input to send to Mailchimp.");
  return;
}

const subscriber = {
  email_address: email,
  status: 'subscribed'
};


// Make a POST request to the Mailchimp API
try {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `apikey ${apiKey}`
    },
    body: JSON.stringify(subscriber)
  });

  ai.crmLog(`Email subscribed to your mailchimp list: ${email}`);
} catch (err) {
  console.error("Error during POST request to Mailchimp.");
  ai.crmLog(`Error during POST request to Mailchimp. Data: ${email}`);
}
