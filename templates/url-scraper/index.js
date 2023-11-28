const url = ai.getConfig('url');
const wordCount = ai.getConfig('word_count');

const urlResult = await ai.scrapeUrl(url);
const textResult = urlResult.text;

if (wordCount && Number(wordCount)) {
  const snippet = textResult.split(' ').slice(0, Number(wordCount)).join(' ');
  ai.vars[ai.config.textOutputVar] = snippet;
} else {
  ai.vars[ai.config.textOutputVar] = textResult;
}
