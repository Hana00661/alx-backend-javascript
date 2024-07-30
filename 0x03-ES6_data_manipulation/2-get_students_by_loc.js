/**
 * Filters a list of students by location and return the students from specified city.
 * @param students - The list of students to filter
 * @param city - The city to filter students by
 * @return The list of students from the specified city
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    // Filter the students by city
    return students.filter((student) => student.location === city);
  }
  // If students isn't array, return empty array
  return [];
}
