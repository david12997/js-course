
//destructuring objetos
const persona ={

    nombre:"Jose",
    apellido:"Castañeda"
}

let { nombre, apellido} = persona;

console.log(nombre, apellido);


//destructuring array
const Array1 = [0,1,2,3,true,'Juan'];

let [cero,uno,dos,tres,verdadero,nombre1] = Array1;

console.log(cero,uno,dos,tres,verdadero,nombre1)