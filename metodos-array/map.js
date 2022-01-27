//METODO MAP
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

const Elarray = [5,10,15,20,25,30,35,40];
let responseElarray = Elarray.map((item,index)=>item/5);
console.log(responseElarray);

Elarray.map((item,indice)=>{

    console.log(item, indice);
})
