// Validate required inputs
if (!ai.config.apiKey) throw new Error('Airtable API key is required');
if (!ai.config.baseId) throw new Error('Base ID is required');
if (!ai.config.tableId) throw new Error('Table ID is required'); 
if (!ai.config.recordId) throw new Error('Record ID is required');
if (!ai.config.updateData) throw new Error('Update data is required');

console.log("This is the update data that has been passed:");
console.log(ai.config.updateData);

// Validate input formats
if (!ai.config.apiKey.startsWith('pat') && !ai.config.apiKey.startsWith('key')) {
  throw new Error('Invalid API key format. Must start with "pat" or "key"');
}

if (!ai.config.baseId.startsWith('app')) {
  throw new Error('Invalid Base ID format. Must start with "app"');
}

if (!ai.config.recordId.startsWith('rec')) {
  throw new Error('Invalid Record ID format. Must start with "rec"');
}

// Parse and validate update data
let updateFields;
try {
  let updateArray;

  // Check if updateData is a string before parsing 
  if (typeof ai.config.updateData === 'string') {
    try {
      updateArray = JSON.parse(ai.config.updateData);
    } catch (err) {
      throw new Error(`Invalid update data JSON format: ${err.message}`);
    }
  } else {
    updateArray = ai.config.updateData; // Or use it directly if it's already an object
  }

  // Ensure updateArray is an array
  if (!Array.isArray(updateArray)) {
    throw new Error('Update data must be an array of objects');
  }

  // Ensure all elements in the array are objects
  if (!updateArray.every(item => typeof item === 'object' && item !== null)) {
    throw new Error('Update data must contain only valid objects');
  }

  // Convert array of objects into a single object with merged properties
  updateFields = updateArray.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});

} catch (err) {
  throw new Error(`Invalid update data format: ${err.message}`);
}

console.log(`Updating Airtable record ${ai.config.recordId}`);
console.log('Fields to update:', updateFields);

// Construct API URL
const apiUrl = `https://api.airtable.com/v0/${ai.config.baseId}/${encodeURIComponent(ai.config.tableId)}/${ai.config.recordId}`;

try {
  // Make API request
  const response = await fetch(apiUrl, {
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${ai.config.apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: updateFields
    })
  });

  // Handle API response
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || `API request failed with status ${response.status}`);
  }

  const result = await response.json();
  
  if (!result.id) {
    throw new Error('Update failed - no record ID returned');
  }

  console.log('Update successful');
  ai.vars.updateSuccess = true;

} catch (err) {
  console.log(`Update failed: ${err.message}`);
  ai.vars.updateSuccess = false;
  ai.vars.error = err.message;
  throw err;
}
