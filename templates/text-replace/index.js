const text = ai.getConfig('replace_text') || '';
const operation = ai.getConfig('replace_operation') || 'first_occurance';
const pattern = ai.getConfig('replace_pattern');
const replacement = ai.getConfig('replace_replacement') || '';

let transformed = text;

if (operation === 'first_occurance') {
  transformed = text.replace(pattern, replacement);
}

if (operation === 'all_occurances') {
  transformed = text.replaceAll(pattern, replacement);
}

if (operation === 'first_occurance_regex') {
  transformed = text.replace(new RegExp(pattern), replacement);
}

if (operation === 'all_occurances_regex') {
  transformed = text.replaceAll(new RegExp(pattern), replacement);
}

if (operation === 'stop_words') {
  const stopWords = pattern.split(',');

  transformed = stopWords.reduce((result, stopWord) => {
    return result.replaceAll(stopWord, replacement);
  }, text);
}

ai.vars[ai.config.outputVar] = transformed;
