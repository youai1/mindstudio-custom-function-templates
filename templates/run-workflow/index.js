const apiKey = ai.getConfig('apiKey');
const outputVarName = ai.getConfig('outputVar') || 'output';
const appId = ai.getConfig('appId')
const variables = JSON.parse(ai.getConfig('variables') || "{}")
const workflowName = ai.getConfig('workflow') || undefined;

ai.log("Performing request...");

const response = await fetch("https://api.mindstudio.ai/developer/v2/apps/run", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    "appId": appId,
    "variables": variables,
    "workflow": workflowName,
  })
});
const data = await response.json();

if (response.ok && data.success) {
  // The request was successful
  const result = data.result
  ai.vars[outputVarName] = result;
  ai.crmLog(`MindStudio AI Result: ${result}`);
} else {
  // There was an error with the request, log it and/or set an error flag
  ai.vars[
    outputVarName
  ] = `Error during request to app ${appId}.\n${JSON.stringify(data)}`;
}
