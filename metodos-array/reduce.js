//METODO REDUCE
//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const arrayN = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
let arr = [1,2,3,4,5,6,7,8,9];

// 1 + 2 + 3 + 4
console.log(arrayN.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(arrayN.reduce(reducer, 5));
// expected output: 15

console.log(arr.reduce((acumulador,item,indice)=>{
    
    return acumulador+item
}))