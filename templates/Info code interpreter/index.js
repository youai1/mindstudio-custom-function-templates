const excelFileUrl = ai.getConfig('url_file');

const apiUrl = 'https://mindstudio-analysis.onrender.com/excel_info/';

// Make a POST request to the FastAPI service
const response = await fetch(`${apiUrl}?url=${encodeURIComponent(excelFileUrl)}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Check if the request was successful
if (response.ok) {
  const responseData = await response.json();

  // Combine DataFrame information and the first row into a single output
  const combinedOutput = {
    dfInfo: responseData.df_info,
    firstRow: responseData.first_row
  };

  // Convert the combined output object to a JSON string
  const outputString = JSON.stringify(combinedOutput, null, 2); // The '2' argument adds indentation for readability

  // Set the stringified output as a variable
  ai.vars[ai.config.outputVar] = outputString;
  ai.vars.success = "done";
  
} else {
  // There was an error with the request
  console.error("Error during POST request to FastAPI service:", await response.text());
  ai.vars.success = "failed";
}
