//=== Config Data
const apiKey = ai.getConfig('apiKey');
const domain = ai.getConfig('domain');
const from = ai.getConfig('from');
const to = ai.getConfig('to');
const subject = ai.getConfig('subject');
const text = ai.getConfig('text');
const successOutput = ai.getConfig('successVar');
//====

async function sendEmail(apiKey, domain, from, to, subject, text) {
  const url = `https://api.mailgun.net/v3/${domain}/messages`;

  // Manually build the URL-encoded form data
  const formData =
    'from=' +
    encodeURIComponent(from) +
    '&to=' +
    encodeURIComponent(to) +
    '&subject=' +
    encodeURIComponent(subject) +
    '&text=' +
    encodeURIComponent(text);

  // Encode API key for Basic Auth using btoa
  const base64ApiKey = btoa(`api:${apiKey}`);

  const headers = {
    Authorization: `Basic ${base64ApiKey}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending email with Mailgun:', error);
    return null;
  }
}

if (!apiKey) {
  const errorMessage = 'ERROR: No API key provided.';
  ai.crmLog(errorMessage);
  ai.vars[successOutput] = errorMessage;
  return;
}

if (!domain) {
  const errorMessage = 'ERROR: No domain provided.';
  ai.crmLog(errorMessage);
  ai.vars[successOutput] = errorMessage;
  return;
}

if (!from || !to || !subject || !text) {
  const errorMessage = 'ERROR: Insufficient email data provided.';
  ai.crmLog(errorMessage);
  ai.vars[successOutput] = errorMessage;
  return;
}

const success = await sendEmail(apiKey, domain, from, to, subject, text);

if (!successOutput) return;

if (success) {
  ai.vars[successOutput] = success.message;
}
