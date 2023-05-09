const students = [];

function addStudent() {
  const name = prompt("Enter the student's name: ");
  let grade;

  while (isNaN(grade)) {
    const input = prompt("Enter the student's grade:e.g. 0 - 100");
    if (input === null) {  // user clicked cancel or closed the prompt
      break;
    }
    grade = parseInt(input);
    if (isNaN(grade)) {
      alert("Please enter a valid grade number from 0 - 100");
    }
  }

  const className = prompt("Enter the student's class: ");
  const student = {
    name: name,
    grade: grade,
    className: className,
  };

  students.push(student);
  alert("Student added");
}

function displayStudents() {
  let studentList = "List of students:\n";
  for (const student of students) {
    studentList += `${student.name} from class ${student.className} : ${student.grade}\n`;
  }
  alert(studentList);
}
