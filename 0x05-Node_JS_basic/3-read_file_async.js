
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
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
          `Number of students in CS: ${CSname.length}. List: ${CSname.join(
            ', ',
          )}`,
        );
        console.log(
          `Number of students in SWE: ${SWEname.length}. List: ${SWEname.join(
            ', ',
          )}`,
        );
        resolve();
      }
    });
  });
}

module.exports = countStudents;
