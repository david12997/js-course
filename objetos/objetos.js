let carro ={

    marca:"tesla",
    modelo:"s3",
    precio:50.000,
    divisa:"USD",
    prenderCarro:function(){

        console.log(`Prendiendo carro ${this.marca}`);
    },
    apagandoCarro:function(){

        console.log(`Apagando ${this.marca} ${this.modelo}`)
    }


}

console.log(carro);
console.log(carro.modelo);
console.log(carro.prenderCarro);
console.log(carro.prenderCarro());


//declarando objeto con new object
const Carro2 = new Object();

Carro2.hola ='Hola persona';
console.log(Carro2);

