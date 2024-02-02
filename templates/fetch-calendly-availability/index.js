const calendlyToken = ai.getConfig('calendly_token');

const availabilityOutputVar =
  ai.getConfig('availabilityOutputVar') || 'calendlyAvailability';

const eventsOutputVar = ai.getConfig('eventsOutputVar') || 'calendlyEvents';

const schedulingOutputVar =
  ai.getConfig('schedulingOutputVar') || 'calendlySchedulingLink';

if (!calendlyToken) {
  ai.crmLog('Calendly Personal Access Token is required.');
  return;
}

const useMockupUrls = false;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${calendlyToken}`,
};

/**
 * Fetch current user
 */
let currentUserUri = '';
let schedulingLink = '';

ai.log("Fetching availability...");

try {
  const request = await fetch(
    useMockupUrls
      ? `https://stoplight.io/mocks/calendly/api-docs/395/users/me`
      : `https://api.calendly.com/users/me`,
    {
      method: 'GET',
      headers,
    },
  );

  const response = await request.json();

  currentUserUri = response.resource.uri;
  schedulingLink = response.resource.scheduling_url;
} catch (err) {
  console.error(`Error during "GetCurrentUser" request.`);
  console.log(err);
  return;
}

if (!currentUserUri || !schedulingLink) {
  ai.crmLog('User URI & Scheduling Link are required');
  return;
}

/**
 * Fetch availability
 */
let availability = '';
let events = '';

try {
  const now = new Date();

  const endTime = new Date();
  endTime.setDate(now.getDate() + 7);

  const startTimeFormatted = now.toISOString();
  const endTimeFormatted = endTime.toISOString();

  const calendlyEventsUrl = `https://api.calendly.com/user_busy_times?user=${currentUserUri}&start_time=${encodeURIComponent(
    startTimeFormatted,
  )}&end_time=${encodeURIComponent(endTimeFormatted)}`;

  const eventsRequest = await fetch(
    useMockupUrls
      ? `https://stoplight.io/mocks/calendly/api-docs/395/user_availability_schedules?user=${currentUserUri}`
      : calendlyEventsUrl,
    {
      method: 'GET',
      headers,
    },
  );

  events = await eventsRequest.text();

  const availabilityRequest = await fetch(
    useMockupUrls
      ? `https://stoplight.io/mocks/calendly/api-docs/395/user_availability_schedules?user=${currentUserUri}`
      : `https://api.calendly.com/user_availability_schedules?user=${currentUserUri}`,
    {
      method: 'GET',
      headers,
    },
  );

  availability = await availabilityRequest.text();
} catch (err) {
  console.error(`Error during "FetchAvailability" request.`);
  console.log(err);
  return;
}

/**
 * Assign vars
 */
ai.vars[schedulingOutputVar] = schedulingLink;
ai.vars[availabilityOutputVar] = availability;
ai.vars[eventsOutputVar] = events;
