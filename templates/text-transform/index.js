const text = ai.getConfig('transform_text') || '';
const operation = ai.getConfig('transform_operation');

let transformed = text;

if (operation === 'uppercase') {
  transformed = text.toUpperCase();
}

if (operation === 'lowercase') {
  transformed = text.toLowerCase();
}

if (operation === 'trim') {
  transformed = text.trim();
}

if (operation === 'trimStart') {
  transformed = text.trimStart();
}

if (operation === 'trimEnd') {
  transformed = text.trimEnd();
}

ai.vars[ai.config.outputVar] = transformed;
