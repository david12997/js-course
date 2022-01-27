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
// METODO SOME
//El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
//Nota: Este método devuelve false para cualquier condición puesta en un array vacío.

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;// checks whether an element is even
console.log(array.some(even));// expected output: true


const VerificandoExistencia =  objeto.some(obj => obj.edad === 3);
console.log(VerificandoExistencia);