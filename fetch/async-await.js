import fetch from 'node-fetch';

async function GetData(){

    console.log('Inicio Esperando datos..');

    try{

        const data = await fetch('https://runalotus.com/colombia/wp-json/wp/v2/media');
        const response = await data.json();
    
       return response;

    }
    catch(error){

        throw error;
    }

}

console.log('antes de ejecutar getData')

GetData()
    .then(res=>console.log(res))
    .catch(err=>console.log(err));

console.log('DEspues de ejecutar getData')