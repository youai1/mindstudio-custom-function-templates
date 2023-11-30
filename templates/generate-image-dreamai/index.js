const apiKey = ai.getConfig('dreamai_api_key');
const style = ai.getConfig('dreamai_style');
const prompt = ai.getConfig('dreamai_prompt');

if (!prompt) {
  ai.crmLog('No prompt to send to DreamAI.');
  return;
}

if (!style) {
  ai.crmLog('Style is required (1 - 21)');
  return;
}

if (!apiKey) {
  ai.crmLog('API Key is required');
  return;
}

/**
 * Create DreamAI task
 */

let taskId = null;

try {
  const request = await fetch('https://api.luan.tools/api/tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      use_target_image: false,
    }),
  });

  const response = await request.json();
  taskId = response.id;
} catch (err) {
  console.error('Error during POST request.');
}

if (!taskId) {
  ai.crmLog('Task ID is required');
  return;
}

/**
 * Provide task specifications
 */
try {
  await fetch('https://api.luan.tools/api/tasks/' + taskId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      input_spec: {
        style: style,
        prompt,
        target_image_weight: 0.1,
        width: 1024,
        height: 1024,
      },
    }),
  });
} catch (err) {
  console.error('Error during PUT request.');
}

/**
* Timeout 3 seconds
*/
await new Promise((res) => setTimeout(res, 3000));

/**
 * Poll the image
 */
let timesPolled = 0;
let imageUrl = null;

while (true) {
  try {
    const request = await fetch('https://api.luan.tools/api/tasks/' + taskId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const response = await request.json();

    const state = response.state;

    if (state === 'generating') {
      console.log('generating');
    } else if (state === 'failed') {
      console.log('failed!');
      break;
    } else if (state === 'completed') {
      imageUrl = response.result;
      break;
    }

    /**
     * Timeout 4 seconds
     */
    await new Promise((res) => setTimeout(res, 4000));

    timesPolled++;

    /**
     * break the loop if polled 3 times with no success
     */
    if (timesPolled > 3) {
      break;
    }
  } catch (err) {
    console.error('Error during GET request.');
    break;
  }
}

if (!imageUrl) {
  ai.crmLog('Image URL is required');
  return;
}

/**
 * Download the image and upload to YouAI CDN
 */
const data = await fetch(imageUrl);
const imageContent = await data.text();

const responseUrl = await ai.uploadFile(imageContent, 'image/png', 'utf8');

ai.vars[ai.config.outputVar] = responseUrl;