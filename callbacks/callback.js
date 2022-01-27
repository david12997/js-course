

const Suma = (a,b,callback)=>{

    let response = a+b;
    console.log('Ejecutando suma');

    return setTimeout(()=>{

        callback(response);
    
    },1500);
}


const  ResponseSuma = (response)=>{

    console.log('Devolviendo Callback');
    console.log('la respuest a la suma es: '+response);

}


console.log('Antes de ejcutar suma');
Suma(5,3,ResponseSuma);
console.log('Despues de ejecutar suma')