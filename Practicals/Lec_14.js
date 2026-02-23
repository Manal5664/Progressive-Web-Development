let students = [];

const addStudent = () => {
    let name = document.getElementById("name").value;
    let marks = Number(document.getElementById("marks").value);

    // Calculate grade
    let grade;
    if(marks >= 90) grade = "A";
    else if(marks >= 75) grade = "B";
    else if(marks >= 50) grade = "C";
    else grade = "Fail";

    // Add to array
    students.push({name, marks, grade});

    // Display
    displayStudents();
}

const displayStudents = () => {
    let result = "<h3>Student List:</h3><ul>";
    students.forEach(s => {
        result += `<li>${s.name} - Marks: ${s.marks}, Grade: ${s.grade}</li>`;
    });
    result += "</ul>";
    document.getElementById("result").innerHTML = result;
}