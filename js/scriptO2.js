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

}



let selectLeerlingen()=> {


}