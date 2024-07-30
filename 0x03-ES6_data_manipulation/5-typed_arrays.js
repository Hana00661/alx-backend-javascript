/**
 * Creates a new Int8Array with the given length, sets the value at the
 * specified position.
 * If adding the value is not possible the error Position outside range
 * should be thrown.
 * @param length - The length of the new array
 * @param position - The position to set the value at
 * @param value - The value to set at the specified position
 * @return A DataView of the new array
 */

export default function createInt8TypedArray(length, position, value) {
  // Check if the position is outside the range of the array
  if (position >= length) {
    throw new Error('Position outside range');
  }
  // Create DataView of the array and return it
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
