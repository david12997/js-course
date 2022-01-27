let objeto=[

    {
        nombre:'jefazo',
        edad:1,
        estado:true,
        apellido:'Diaz'
    },
    {
        nombre:'maribel',
        edad:3,
        estado:true,
        apellido:'rodriguez'
    },
    {
        nombre:'juan',
        edad:5,
        estado:false,
        apellido:'castañeda'
    },
    {
        nombre:'camilo',
        edad:80,
        estado:true,
        apellido:'gay'
    }
]

//  METODO FIND
//El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

const BuscandoCamilo = objeto.find(obj=> obj.nombre === 'camilo');
console.log(BuscandoCamilo);

const array15 = [5, 12, 8, 130, 44];
const found = array15.find(element => element > 10);
console.log(found);





// METODO SOME
//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
//Nota: Este método devuelve false para cualquier condición puesta en un array vacío.

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;// checks whether an element is even
console.log(array.some(even));// expected output: true


const VerificandoExistencia =  objeto.some(obj => obj.edad === 3);
console.log(VerificandoExistencia);




// METODO CONCAT
//El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); // expected output: Array ["a", "b", "c", "d", "e", "f"]




// METODO INCLUDES
// El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda

const array12 = [1, 2, 3];
console.log(array12.includes(2)); // expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // expected output: true
console.log(pets.includes('at')); // expected output: false





//METODO EVERY
//Determina si todos los elementos en el array satisfacen una condición.
//Precaución: ¡Llamar este método en un array vacío devuelve true para cualquier condición!

const DeterminarEdad = objeto.every(obj=>obj.edad < 81);
console.log(DeterminarEdad);





//METODO MAP
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

const Elarray = [5,10,15,20,25,30,35,40];
let responseElarray = Elarray.map((item,index)=>item/5);
console.log(responseElarray);

Elarray.map((item,indice)=>{

    console.log(item, indice);
})





// METODO FILTER
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
let arr = [1,2,3,4,5,6,7,8,9]

let newArr = arr.filter((item,indice)=>{

    return item > 5 && item < 9
})

console.log(newArr);









//METODO REDUCE
//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const arrayN = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(arrayN.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(arrayN.reduce(reducer, 5));
// expected output: 15

console.log(arr.reduce((acumulador,item,indice)=>{
    
    return acumulador+item
}))