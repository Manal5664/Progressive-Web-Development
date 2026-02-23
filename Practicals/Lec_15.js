async function loadStudents() {
    try {
        // Fetch JSON data
        let response = await fetch("Lec_15.json");
        let students = await response.json();

        // Calculate grade for each student
        students.forEach(s => {
            if(s.marks >= 90) s.grade = "A";
            else if(s.marks >= 75) s.grade = "B";
            else if(s.marks >= 50) s.grade = "C";
            else s.grade = "Fail";
        });
        // Build table
        let table = `<table>
                        <tr>
                            <th>Name</th>
                            <th>Marks</th>
                            <th>Grade</th>
                        </tr>`;

        students.forEach(s => {
            table += `<tr class="${s.grade}">
                        <td>${s.name}</td>
                        <td>${s.marks}</td>
                        <td>${s.grade}</td>
                      </tr>`;
        });

        table += "</table>";
        // Display table
        document.getElementById("studentTable").innerHTML = table;

    } catch(err) {
        console.error("Error fetching data:", err);
        document.getElementById("studentTable").innerHTML = "<p style='color:red;'>Failed to load student data.</p>";
    }
}