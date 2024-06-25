const token = ai.getConfig('apify_token');
const query = ai.getConfig('query');
const outputVar = ai.getConfig('outputVar');
const limit = parseInt(ai.getConfig('limit')) || 50; // Default to 50 if not provided

if (!token || !query || !outputVar) {
  ai.crmLog('Missing required configuration: apify_token, query, or outputVar.');
  return;
}

const apiUrl = `https://api.apify.com/v2/acts/jupri~g2-explorer/run-sync-get-dataset-items?token=${token}`;

const body = {
  "dev_dataset_clear": false,
  "dev_dataset_enable": false,
  "dev_transform_enable": false,
  "include_article_content": false,
  "limit": limit,
  "no_parse": false,
  "query": query,
  "strict_search": false
};

const escapeCSV = (value) => {
  if (value == null) return '';
  value = String(value).replace(/"/g, '""');
  return `"${value}"`;
};

try {
  ai.log("Making API call to Apify...");
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  ai.log("API call successful. Generating CSV...");

  // Create CSV content
  let csvContent = 'Answer 0,Answer 1,Answer 2,Answer 3,Date Published,Industry,Location Country,Location Primary,Location Region,Name,Product Slug,Role,Score,Segment,Source Review,Title,Type,URL\n';
  
  data.forEach(result => {
    const answer0 = escapeCSV(result.answers && result.answers[0] || '');
    const answer1 = escapeCSV(result.answers && result.answers[1] || '');
    const answer2 = escapeCSV(result.answers && result.answers[2] || '');
    const answer3 = escapeCSV(result.answers && result.answers[3] || '');
    const datePublished = escapeCSV(result.date && result.date.published || '');
    const industry = escapeCSV(result.industry || '');
    const locationCountry = escapeCSV(result.location && result.location.country || '');
    const locationPrimary = escapeCSV(result.location && result.location.primary || '');
    const locationRegion = escapeCSV(result.location && result.location.region || '');
    const name = escapeCSV(result.name || '');
    const productSlug = escapeCSV(result.product && result.product.slug || '');
    const role = escapeCSV(result.role || '');
    const score = escapeCSV(result.score || '');
    const segment = escapeCSV(result.segment || '');
    const sourceReview = escapeCSV(result.source && result.source.review || '');
    const title = escapeCSV(result.title || '');
    const type = escapeCSV(result.type || '');
    const url = escapeCSV(result.url || '');
    
    csvContent += `${answer0},${answer1},${answer2},${answer3},${datePublished},${industry},${locationCountry},${locationPrimary},${locationRegion},${name},${productSlug},${role},${score},${segment},${sourceReview},${title},${type},${url}\n`;
  });

  // Upload file
  ai.log("Uploading CSV file...");
  const fileUrl = await ai.uploadFile(csvContent, 'text/csv', 'utf8');

  ai.vars[outputVar] = fileUrl;
  ai.log('CSV file generated and uploaded successfully.');
} catch (error) {
  ai.crmLog(`Error during process: ${error.message}`);
  ai.vars[outputVar] = 'Error occurred during the process';
}