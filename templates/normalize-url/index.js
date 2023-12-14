const normalizeUrl = (input) => {
  // Ensure the protocol is present and correct. Default to 'https://' if missing.
  let url = /^https?:\/\//i.test(input) ? input : `https://${input}`;

  // Remove 'www.' for a cleaner URL
  url = url.replace(/^(https?:\/\/)www\./i, '$1');

  // Ensure URL ends with a trailing slash for consistency
  if (!/\/$/.test(url)) {
    url += '/';
  }

  return url;
};

//==== Config Data
const input = ai.getConfig('input') || '';
const outputVar = ai.getConfig('outputVar');
//====

const fixedUrl = normalizeUrl(input);
ai.vars[ai.config.outputVar] = `${fixedUrl}`;
