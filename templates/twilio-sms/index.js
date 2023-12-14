const accountSid = ai.getConfig('twilio_account_sid');
const authToken = ai.getConfig('twilio_auth_token');

const text = ai.getConfig('twilio_text');
const from = ai.getConfig('twilio_from');
const to = ai.getConfig('twilio_to');

const data = `From=${encodeURIComponent(from)}&Body=${encodeURIComponent(
  text,
)}&To=${encodeURIComponent(to)}`;

const auth = 'Basic ' + btoa(`${accountSid}:${authToken}`);

/**
 * Provide task specifications
 */
try {
  await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: auth,
      },
      body: data,
    },
  );
} catch (err) {
  console.log(err);
  console.error('Error during POST request.');
}
