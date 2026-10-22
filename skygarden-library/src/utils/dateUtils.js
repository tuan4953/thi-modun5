/**
 * Utility functions for date manipulation and formatting
 */

/**
 * Format a date string (YYYY-MM-DD or ISO or dd/MM/yyyy) to dd/MM/yyyy format
 * @param {string|Date} dateInput
 * @returns {string} Formatted date in dd/MM/yyyy
 */
export const formatDate = (dateInput) => {
  if (!dateInput) return '';

  // If already in dd/MM/yyyy format
  if (typeof dateInput === 'string' && /^\d{2}\/\d{2}\/\d{4}$/.test(dateInput)) {
    return dateInput;
  }

  const date = new Date(dateInput);
  if (isNaN(date.getTime())) {
    return String(dateInput);
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

/**
 * Check if a date string is not greater than the current date (today)
 * @param {string} dateString - YYYY-MM-DD or date string
 * @returns {boolean} True if date <= today
 */
export const isDateInPastOrToday = (dateString) => {
  if (!dateString) return false;

  const inputDate = new Date(dateString);
  if (isNaN(inputDate.getTime())) return false;

  const today = new Date();
  today.setHours(23, 59, 59, 999); // End of today

  return inputDate <= today;
};

/**
 * Get current date in YYYY-MM-DD format (for HTML date input max value)
 * @returns {string} Current date ISO string slice
 */
export const getTodayISODate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
