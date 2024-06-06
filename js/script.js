// script.js
window.onload = ()=> {
//  console.log("script linked");

    fetchData();

};

async function fetchData() {
    fetch('js/new.json')
        .then(response => response.json())
        .then(data => displayStudentData(data))
        .catch(error => console.error('Error fetching data:', error));
}

function displayStudentData(student) {
    const studentDataDiv = document.getElementById('student-data');
    studentDataDiv.innerHTML = `
        <h2>Student Information</h2>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Degree:</strong> ${student.degree}</p>
        <p><strong>Courses:</strong></p>
        <ul>
            ${student.courses.map(course => `<li>${course}</li>`).join('')}
        </ul>
    `;
}

