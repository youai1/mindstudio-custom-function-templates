// Read values from config
const input = ai.getConfig('input');
const fileType = ai.getConfig('fileType') || 'txt';
const outputVar = ai.getConfig('outputVar');

const toBase64 = (str) => {
  try {
    return btoa(str);
  } catch (e) {
    console.error('Failed to convert to Base64: ', e);
    return null;
  }
};

//=== Error handling
if (!input) {
  ai.crmLog('No input defined.');
  return;
}

if (!outputVar) {
  ai.crmLog('No output var defined.');
  return;
}
//===

const resolveType = () => {
  if (fileType === 'csv') return 'text/csv';
  if (fileType === 'json') return 'application/json';
  if (fileType === 'html') return 'text/html';
  if (fileType === 'xml') return 'application/xml';
  if (fileType === 'markdown') return 'text/markdown';
  return 'text/plain';
};

ai.log('Generating file...');

// Upload file and get the url
try {
  const base64String = toBase64(input);
  const url = await ai.uploadFile(base64String, resolveType(), 'base64');

  ai.vars[ai.config.outputVar] = url;
} catch {
  ai.crmLog('Error during upload.');
  ai.vars[ai.config.outputVar] = 'Error during upload.';
}
