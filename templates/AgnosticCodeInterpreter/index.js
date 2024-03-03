const excelFileUrl = ai.getConfig('url_file');
const pythonScript = ai.getConfig('python_script');
console.log("Python Script:", pythonScript);

// Regex to extract only the content within ```python ... ```
const scriptRegex = /```python\s*([\s\S]*?)\s*```/;
const scriptMatch = pythonScript.match(scriptRegex);
const cleanedPythonScript = scriptMatch ? scriptMatch[1].trim() : '';

console.log("Cleaned Python Script:", cleanedPythonScript);

const apiUrl = 'https://mindstudio-analysis.onrender.com/process_excel/';


// Prepare the request body
const requestBody = JSON.stringify({
  url: excelFileUrl,
  python_script: cleanedPythonScript
});

// Make a POST request to the FastAPI service
const response = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: requestBody
});

// Check if the request was successful
if (response.ok) {
  const responseData = await response.json();
  console.log("responseData:", responseData);

  // Check if there are multiple graphs
  if (Array.isArray(responseData.graphs) && responseData.graphs.length) {
    const graphUrls = [];

    // Upload each graph and store the URL
    for (const graphBase64 of responseData.graphs) {
      const graphUrl = await ai.uploadFile(graphBase64, 'image/png', 'base64');
      graphUrls.push(graphUrl);
    }

    // Set the array of graph URLs as a variable
    ai.vars[ai.config.outputVar] = graphUrls;
  } else {
    console.error("No graphs received in response");
  }

  ai.vars[ai.config.outputVarText] = responseData.message;
  ai.vars.success = "done";
} else {
  // There was an error with the request
  console.error("Error during POST request to FastAPI service:", await response.text());
  ai.vars.success = "failed";
}
