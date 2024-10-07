// DateHelper.ts

/**
 * Helper function to convert an ISO date string to a formatted Month, Year (e.g., October, 2024)
 * @param isoDate - A string representing the date in ISO format (e.g., "2024-10-06T15:32:16.138Z")
 * @returns A string in the format "Month, Year" (e.g., "October, 2024")
 */
export const formatDateToMonthYear = (isoDate: string): string => {
  console.log("ISODate: ", isoDate)
  if (!isoDate) {
    throw new Error("Invalid date string");
  }

  const date = new Date(isoDate);
  
  // Check if the date is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format");
  }

  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long" };

  // Return the formatted date string as "Month, Year"
  return date.toLocaleDateString("en-US", options);
};
