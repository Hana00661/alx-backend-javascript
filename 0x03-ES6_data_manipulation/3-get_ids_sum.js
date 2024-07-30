/**
 * Calculate the sum of all students IDs in a list of students.
 * @param students - The list of students to process
 * @return The sum of all students IDs
 */

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
