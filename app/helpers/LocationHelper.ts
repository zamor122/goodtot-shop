export const formatLocation = (location: string | null | undefined): string => {
  if (!location) {
    return 'Unknown location';
  }

  const parts = location.split(',').map(part => part.trim());

  // Handle cases with 3 or 4 commas
  if (parts.length === 5) {
    // Format for 4 commas: "City, County, State"
    const city = parts[1];
    const state = getStateAbbreviation(parts[3]);
    return `${city}, ${state}`;
  } else if (parts.length === 4) {
    // Format for 3 commas: "County, State"
    const county = parts[1];
    const state = getStateAbbreviation(parts[2]);
    return `${county}, ${state}`;
  }

  // Return 'Unknown' if the format is unexpected
  return 'Unknown location';
};

// Helper function to get state abbreviation
function getStateAbbreviation(state: string): string {
  const states: Record<string, string> = {
    'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR',
    'California': 'CA', 'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE',
    'Florida': 'FL', 'Georgia': 'GA', 'Hawaii': 'HI', 'Idaho': 'ID',
    'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA', 'Kansas': 'KS',
    'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD',
    'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS',
    'Missouri': 'MO', 'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV',
    'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM',
    'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND',
    'Ohio': 'OH', 'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA',
    'Rhode Island': 'RI', 'South Carolina': 'SC', 'South Dakota': 'SD',
    'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT',
    'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV',
    'Wisconsin': 'WI', 'Wyoming': 'WY'
  };

  return states[state] || state; // If not found, return the original state name
}