export const formatTimeAgo = (dateString: string | null | undefined): string => {
  if (!dateString) {
    return 'a while ago';
  }

  const date = new Date(dateString);
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = now.getTime() - date.getTime();

  // Convert the difference to days, weeks, months, and years
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30); // Approximate (30 days per month)
  const diffInYears = Math.floor(diffInMonths / 12);

  // Return the appropriate time difference
  if (diffInMinutes < 1) return 'just now';
  if (diffInMinutes === 1) return 'a minute ago';
  if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
  if (diffInHours === 1) return 'an hour ago';
  if (diffInHours < 24) return `${diffInHours} hours ago`;
  if (diffInDays === 1) return 'yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInWeeks === 1) return 'a week ago';
  if (diffInWeeks < 4) return `${diffInWeeks} weeks ago`;
  if (diffInMonths === 1) return 'a month ago';
  if (diffInMonths < 12) return `${diffInMonths} months ago`;
  if (diffInYears === 1) return 'a year ago';
  return `${diffInYears} years ago`;
}
