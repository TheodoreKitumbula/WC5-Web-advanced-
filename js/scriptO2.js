window.onload = async () => {

    let results = await fetch('data.json');
    data = await results.json();



    document.getElementById('klasgroep')
    .addEventListener('change', (event) => {
       vulLeerlingen(event.target.value);
       
    });

    document.getElementById('leerlingen')
    .addEventListener('change', (event) => {
    });
    
};


function selectgroep(){
    let klasgroep = document.getElementById('klasgroep');
    for (let klas in data) {
        const option = document.createElement('option');
        option.value = klas;
        option.innerText = klas;
        select.appendChild(option);
}

klasgroep.addEventListener('change', (event) => {
    selectLeerlingen(event.target.value);
})
}



let selectLeerlingen (klasgroep) => {
    let leerlingen= document.getElementById('leerlingen');
    selectLeerlingen.innerHTML = ''; 

    let leerlingen = data[selectedKlasgroep];
    for (let id in leerlingen) {
        let option = document.createElement('option');
        option.value = id;
        option.innerText = leerlingen[id];
        select.appendChild(option);
    }

}