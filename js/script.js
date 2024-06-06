// script.js
window.onload = ()=> {
console.log("script linked");

    fetchData();

};

async function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayStudentData(data))
        .catch(error => console.error('Error fetching data:', error));
}



