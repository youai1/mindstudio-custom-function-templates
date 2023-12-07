const text = ai.getConfig('replace_text') || '';
const operation = ai.getConfig('replace_operation') || 'first_occurance';
const pattern = ai.getConfig('replace_pattern');
const replacement = ai.getConfig('replace_replacement');

let transformed = text;

if (operation === 'first_occurance') {
  transformed = text.replace(pattern, replacement);
}

if (operation === 'all_occurances') {
  transformed = text.replaceAll(pattern, replacement);
}

ai.vars[ai.config.outputVar] = transformed;
