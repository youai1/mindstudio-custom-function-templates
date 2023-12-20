const apiKey = ai.getConfig('telegram_api_key');
const channel = ai.getConfig('telegram_channel');
const message = ai.getConfig('telegram_message');

const request = await fetch(
  `https://api.telegram.org/bot${apiKey}/sendMessage?chat_id=${channel}&text=${message}`,
);

const response = await request.json();

if (!response.ok) {
  console.log(response.description);
}
