const calendlyToken = ai.getConfig('calendly_token');

const availabilityOutputVar =
  ai.getConfig('availabilityOutputVar') || 'calendlyAvailability';

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

try {
  const request = await fetch(
    useMockupUrls
      ? `https://stoplight.io/mocks/calendly/api-docs/395/user_availability_schedules?user=${currentUserUri}`
      : `https://api.calendly.com/user_availability_schedules?user=${currentUserUri}`,
    {
      method: 'GET',
      headers,
    },
  );

  availability = await request.text();
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
