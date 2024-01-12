const jsonString = ai.getConfig('json_input') || '';
const jsonProperty = ai.getConfig('json_property');

function getNestedProperty(obj, path) {
  return path.split('.').reduce(function (acc, key) {
    return acc && acc[key];
  }, obj);
}

let parsed = null;

try {
  parsed = JSON.parse(jsonString);
} catch (e) {
  ai.crmLog('Error during parsing the JSON string');
  return;
}

if (!parsed) {
  return;
}

let result = null;

try {
  result = getNestedProperty(parsed, jsonProperty);
} catch (e) {
  ai.crmLog('Error accessing property using dot notation');
  return;
}

ai.vars[ai.config.outputVar] = result;
