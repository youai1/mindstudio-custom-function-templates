async function getPublicCalendarEvents(calendarId, apiKey) {
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    calendarId,
  )}/events?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.items; // List of events
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return null;
  }
}

// ==== Config variables
const apiKey = ai.getConfig('apiKey');
const calendarId = ai.getConfig('calendarId');
const limit = ai.getConfig('limit');
const outputVar = ai.getConfig('outputVar') || 'output';
// ====

if (!apiKey) {
  const errorMessage = 'ERROR: No API key provided.';
  ai.crmLog(errorMessage);
  ai.vars[outputVar] = errorMessage;
}

let events = await getPublicCalendarEvents(calendarId, apiKey);

if (!events) {
  const errorMessage = 'ERROR: Events not found.';
  console.error(errorMessage);
  ai.vars[outputVar] = errorMessage;
  return;
}

// Trim some unnecessary data to lower token count
events = events.map((event) => {
  delete event.kind;
  delete event.etag;
  delete event.id;
  delete event.sequence;
  delete event.iCalUID;
  delete event.conferenceData;
  delete event.conferenceSolution;
  return event;
});

// Reverse so we can see the latest events first
events = events.reverse();

if (limit && parseInt(limit)) {
  events = events.slice(0, limit);
}

const stringifiedResponse = JSON.stringify(events);

ai.vars[outputVar] = stringifiedResponse;
ai.crmLog(`GET request result: ${stringifiedResponse}`);
