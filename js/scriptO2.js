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
    for (const klas in data) {
        const option = document.createElement('option');
        option.value = klas;
        option.textContent = klas;
        klasgroepDropdown.appendChild(option);

}



let selectLeerlingen ()=> {


}