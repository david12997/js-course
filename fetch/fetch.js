import fetch from 'node-fetch';
const GetData = ()=>{

    console.log('Esperando datos..');

    fetch('https://runalotus.com/colombia/wp-json/wp/v2/media')
    .then(response=>response.json())
    .then(response=>{
        ('Resultado d ela ejecucionde getData');
        console.log(response);
    })
    .catch(error=>{

        console.log(error);
    })

}

console.log('antes de ejecutar getData')
GetData();
console.log('DEspues de ejecutar getData')