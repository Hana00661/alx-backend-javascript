/**
 * Determines whether the given Set has all the values from the given array.
 * @param set - The Set to check
 * @param array - The array of values to check for
 * @return - True if the Set has all the values from the array,
 * false otherwise
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
