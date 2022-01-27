// METODO FILTER
//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
let arr = [1,2,3,4,5,6,7,8,9]

let newArr = arr.filter((item,indice)=>{

    return item > 5 && item < 9
})

console.log(newArr);