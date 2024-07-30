/**
 * Updates the grades of students.
 * If a student doesn’t have grade in newGrades.
 * @param students - The list of students to process
 * @param city - The city to filter students by
 * @param newGrades - The list of new grades to use for updating
 * @return The updated list of students
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      // filter the students by city and update their grades
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        // Find the corresponding new grade for a student
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
