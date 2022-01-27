//recorrer arrays
const Array= ['Juan',0,false,1,2,'David'];

Array.forEach((elemento,posicion) => {
    
    console.log(elemento+' : '+posicion);
});


//recorrer propiedades de objetos
const ObjetoHumano={

    nombre:"david",
    edad:23,
    mascotas:true
}

for(let propiedad in humano){

    console.log(` ${propiedad} del humano:  ${humano[propiedad]}`);
}