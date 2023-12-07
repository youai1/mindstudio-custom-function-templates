const text = ai.getConfig('encoding_text') || '';
const operation = ai.getConfig('encoding_operation') || 'encode';
const method = ai.getConfig('encoding_method');

let transformed = text;

if (method === 'uri') {
  transformed =
    operation === 'encode'
      ? encodeURIComponent(text)
      : decodeURIComponent(text);
}

ai.vars[ai.config.outputVar] = transformed;
