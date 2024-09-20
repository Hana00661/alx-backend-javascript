/**
 * Create a function named countStudents. It should accept a path in argument
 * The script should attempt to read the database file synchronously
 * If the database is not available, it should throw an error
 * the text Cannot load the database
 * If the database is available, it should log the following message to the 
 * console Number of students
 * CSV file can contain empty lines (at the end) - 
 * and they are not a valid student!
 *
 * */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path);

    const nameList = data
      .toString()
      .split('\n')
      .filter((name) => name.length > 0);
    const students = nameList.length - 1;
    console.log(`Number of students: ${students}`);

    const CSname = [];
    const SWEname = [];

    nameList.forEach((element) => {
      if (element.includes('CS')) {
        CSname.push(element.split(',')[0]);
      } else if (element.includes('SWE')) {
        SWEname.push(element.split(',')[0]);
      }
    });

    console.log(
      `Number of students in CS: ${CSname.length}. List: ${CSname.join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${SWEname.length}. List: ${SWEname.join(
        ', ',
      )}`,
    );
  } catch (err) {
    throw Error('Cannot load the database');
  }

//   console.log(CSname);
}

module.exports = countStudents;
