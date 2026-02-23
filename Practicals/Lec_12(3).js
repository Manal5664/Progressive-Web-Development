// Object Constructor
function Student(name, score) {
    this.name = name;
    this.score = score;
    
    // Method to update score
    this.updateScore = function(newScore) {
        this.score = newScore;
    };
}

// Array to store students
let students = [

];

// Function to display table
function displayTable() {
    let html = "<table border='1'><tr><th>Name</th><th>Score</th><th>Action</th></tr>";
    
    for (let i = 0; i < students.length; i++) {
        html += `<tr>
                    <td>${students[i].name}</td>
                    <td>${students[i].score}</td>
                    <td><button onclick="updateStudent(${i})">Update Score</button></td>
                 </tr>`;
    }
    html += "</table>";
    
    document.getElementById("studentTable").innerHTML = html;
}

// Function to add a new student
function addStudent() {
    let name = prompt("Enter student name:");
    let score = parseInt(prompt("Enter score:"));
    students.push(new Student(name, score));
    displayTable();
}

// Function to update score
function updateStudent(index) {
    let newScore = parseInt(prompt("Enter new score:"));
    students[index].updateScore(newScore);
    displayTable();
}

// Initial table display
displayTable();