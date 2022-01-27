
//object.entries devuelve los valores de un objeto en una matriz

let objeto={

    nombre:'jefazo',
    edad:5,
    estado:true,
    apellido:'Diaz'
}

const NuevaMAatriz =  Object.entries(objeto);
console.log(NuevaMAatriz);


//Objet.fromEntries devuelve los valores d euna matriz en un objeto

let matriz = [['juan','jose'],['hola','mundo'],[8,'maribel']]

console.log(Object.fromEntries(matriz));