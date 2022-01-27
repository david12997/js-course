import fetch from 'node-fetch';

async function GetData(){

    console.log('Esperando datos..');

    try{

        const data = await fetch('https://runalotus.com/colombia/wp-json/wp/v2/media');
        const response = await data.json();
    
        console.log(response);

    }
    catch(error){

        console.log(error);
    }


}

console.log('antes de ejecutar getData')

GetData()

console.log('DEspues de ejecutar getData')