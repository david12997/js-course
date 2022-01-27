let numero = 20;

const VerifyNumber = new Promise((resolve, reject)=>{

    console.log('Resolviendo promesa');

    setTimeout(()=>{

        if(numero === 20){

            resolve('El numero es igual a 20')
        
        }else{
    
            reject('Ups el numero no es 20, try again');
    
        }
        
        console.log('Promesa Ejecutada');

    },2500);


});


console.log('Antes de resolver promesa');


VerifyNumber.then(response=>{
    
    console.log('Promesa devuelta:  ',response);
    

})
.catch(error=>{

    console.log(error)

})


console.log('Despues de resolve rpromesa');