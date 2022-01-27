
//destructuring objetos
const persona ={

    nombre:"Jose",
    apellido:"Castañeda",
    edad:20
}

let { nombre, apellido} = persona;

console.log(nombre, apellido);

//destructurin como argumento para una funcion
function ImprimirPersona({nombre,apellido,edad}){

    console.log(nombre, apellido, edad);
}

ImprimirPersona(persona);

//destructuring array
const Array1 = [0,1,2,3,true,'Juan'];

let [cero,uno,dos,tres,verdadero,nombre1] = Array1;

console.log(cero,uno,dos,tres,verdadero,nombre1)