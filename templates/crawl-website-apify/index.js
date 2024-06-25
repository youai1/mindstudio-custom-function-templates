const token = ai.getConfig('apify_token');
const maxCrawlDepth = ai.getConfig('maxCrawlDepth');
const maxCrawlPages = ai.getConfig('maxCrawlPages');
const url = ai.getConfig('url');
const outputVar = ai.getConfig('outputVar');

ai.log('Starting Apify crawler...');

// Check if any required config is missing
if (!token || !url || !outputVar) {
  ai.crmLog('Missing required configuration: token, url, or outputVar.');
  return;
}

const apiUrl = `https://api.apify.com/v2/acts/apify~website-content-crawler/run-sync-get-dataset-items?token=${token}`;

const body = {
  aggressivePrune: false,
  clickElementsCssSelector: '[aria-expanded="false"]',
  clientSideMinChangePercentage: 15,
  crawlerType: 'playwright:adaptive',
  debugLog: false,
  debugMode: false,
  ignoreCanonicalUrl: false,
  maxCrawlDepth: maxCrawlDepth ? Number(maxCrawlDepth) : 5, // default to 5 if not provided
  maxCrawlPages: maxCrawlPages ? Number(maxCrawlPages) : 100, // default to 100 if not provided
  proxyConfiguration: {
    useApifyProxy: true,
  },
  readableTextCharThreshold: 100,
  removeCookieWarnings: true,
  removeElementsCssSelector:
    'nav, footer, script, style, noscript, svg,\n[role="alert"],\n[role="banner"],\n[role="dialog"],\n[role="alertdialog"],\n[role="region"][aria-label*="skip" i],\n[aria-modal="true"]',
  renderingTypeDetectionPercentage: 10,
  saveFiles: false,
  saveHtml: false,
  saveHtmlAsFile: false,
  saveMarkdown: true,
  saveScreenshots: false,
  startUrls: [
    {
      url: url,
    },
  ],
  useSitemaps: false,
};

const toBase64 = (str) => {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch (e) {
    console.error('Failed to convert to Base64: ', e);
    return null;
  }
};

const escapeCSV = (str) => {
  if (str == null) return '';
  return `"${str.replace(/"/g, '""')}"`;
};

try {
  ai.log('Making API call to Apify...');
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  ai.log('API call successful. Generating CSV...');

  // Create CSV content
  let csvContent = 'URL,Markdown Content\n';

  data.forEach((result) => {
    const url = escapeCSV(result.url);
    const markdown = escapeCSV(result.markdown);
    csvContent += `${url},${markdown}\n`;
  });

  // Convert to Base64
  const base64String = toBase64(csvContent);

  // Upload file
  ai.log('Uploading CSV file...');
  const fileUrl = await ai.uploadFile(base64String, 'text/csv', 'base64');

  ai.vars[outputVar] = fileUrl;
  ai.log('CSV file generated and uploaded successfully.');
} catch (error) {
  ai.crmLog(`Error during process: ${error.message}`);
  ai.vars[outputVar] = 'Error occurred during the process';
}
