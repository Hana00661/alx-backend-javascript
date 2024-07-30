/**
 * Cleans a Set by filtering out values that do not start with the given
 * string, and returns a string of the remaining values joined by '-'.
 * When a value starts with startString you only append the rest of the
 * string.
 * The string contains all the values of the set separated by -.
 * @param set - The Set to clean
 * @param - startString - The string to filter values by
 * @return - A string of the remaining values joined by '-'
 */
export default function cleanSet(set, startString) {
  const parts = [];
  // Return an empty string if any of the parameters are invalid
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    // Check if the value is a string and starts with the given string
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Extract the substring after the startString
      const valueSubStr = value.substring(startString.length);
      // Add the substring to the parts array if it is not empty and not
      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
