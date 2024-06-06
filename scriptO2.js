window.onload = async function() {
    const response = await fetch('dataoef2.json'); // Verander 'data.json' naar het juiste pad naar je JSON-bestand
    if (!response.ok) {
        console.error('Er is een probleem opgetreden bij het ophalen van de data.');
        return;
    }
    const data = await response.json();

    const klasgroepDropdown = document.getElementById('klasgroep');
    const leerlingenDropdown = document.getElementById('leerlingen');
    const selectedStudentDisplay = document.getElementById('selectedStudent');

    // Vul de klasgroepen dropdown
    for (const klasgroep in data) {
        const option = document.createElement('option');
        option.value = klasgroep;
        option.textContent = klasgroep;
        klasgroepDropdown.appendChild(option);
    }

    // Functie om de geselecteerde klasgroep te verwerken
    function selectGroep() {
        const selectedKlasgroep = klasgroepDropdown.value;
        leerlingenDropdown.innerHTML = ''; // Leeg de leerlingen dropdown eerst

        // Vul de leerlingen dropdown op basis van de geselecteerde klasgroep
        for (const key in data[selectedKlasgroep]) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = data[selectedKlasgroep][key];
            leerlingenDropdown.appendChild(option);
        }
    }

    // Voeg een event listener toe voor het veranderen van de klasgroep dropdown
    klasgroepDropdown.addEventListener('change', selectGroep);

    // Functie om de geselecteerde leerling te verwerken
    function selectLeerling() {
        const selectedLeerling = leerlingenDropdown.options[leerlingenDropdown.selectedIndex].textContent;
        selectedStudentDisplay.textContent = selectedLeerling;
    }

    // Voeg een event listener toe voor het veranderen van de leerlingen dropdown
    leerlingenDropdown.addEventListener('change', selectLeerling);

    // Initialiseer de leerlingen dropdown met de eerste klasgroep
    const initialKlasgroep = Object.keys(data)[0];
    for (const key in data[initialKlasgroep]) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = data[initialKlasgroep][key];
        leerlingenDropdown.appendChild(option);
    }
};
