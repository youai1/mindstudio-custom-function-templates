const apiKey = ai.getConfig('apiKey');
const imageUrl = ai.getConfig('imageUrl');
const detectionType = ai.getConfig('detectionType') || 'IMAGE_PROPERTIES';
const outputVar = ai.getConfig('outputVar');

if (!apiKey) {
  const errorMessage = 'ERROR: No API key provided.';
  ai.crmLog(errorMessage);
  ai.vars[outputVar] = errorMessage;
  return;
}

if (!imageUrl) {
  const errorMessage = 'ERROR: No image url provided.';
  ai.crmLog(errorMessage);
  ai.vars[outputVar] = errorMessage;
  return;
}

const removeBoundingPoly = (result) => {
  return result[0].map((item) => {
    const cleanedItem = { ...item };
    delete cleanedItem.boundingPoly;
    return cleanedItem;
  });
};

try {
  // Make the request
  const url = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;
  const requestBody = {
    requests: [
      {
        image: {
          source: {
            imageUri: imageUrl,
          },
        },
        features: [
          {
            type: detectionType,
          },
        ],
      },
    ],
  };

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(requestBody),
    headers: { 'Content-Type': 'application/json' },
  });

  // Check if the request was successful
  const data = await response.json();
  const result = Object.values(data.responses[0]); // Array of detected labels

  let cleanedResult = result;

  // Remove bounding box data to save up tokens
  switch (detectionType) {
    case 'DOCUMENT_TEXT_DETECTION':
    case 'TEXT_DETECTION':
    case 'OBJECT_LOCALIZATION':
    case 'LOGO_DETECTION':
    case 'LANDMARK_DETECTION':
      cleanedResult = removeBoundingPoly(result);
      break;

    default:
      cleanedResult = result;
      break;
  }

  // Assign the results to the output var
  ai.vars[ai.config.outputVar] = JSON.stringify(cleanedResult);
} catch (error) {
  ai.vars[ai.config.outputVar] = 'Error with Google Cloud Vision API';
  console.error('Error with Google Cloud Vision API:', error);
  return null;
}
