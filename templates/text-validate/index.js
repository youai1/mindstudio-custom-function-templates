const text = ai.getConfig('validate_text') || '';
const operation = ai.getConfig('validate_operation');
const customRegex = ai.getConfig('validate_regex');

let isValid = null;

if (operation === 'email') {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isValid = regex.test(text);
}

if (operation === 'regex') {
  const regex = new RegExp(customRegex);
  isValid = regex.test(text);
}

if (operation === 'url') {
  const regex = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i',
  );

  isValid = regex.test(text);
}

ai.vars[ai.config.outputVar] = isValid;
