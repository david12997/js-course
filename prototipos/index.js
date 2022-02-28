function Animal(nombre,genero){

    this.nombre = nombre;
    this.genero = genero;

    this.Saludar = function(){

        console.log(`Hola ${this.nombre}`);
    } 
}

Animal.prototype.Comer = function(){

    console.log(`${this.nombre} esta comiendo`);
}

const Dog = new Animal('issis','female');
const Cat = new Animal('michi','male');

console.log(Dog);
console.log(Cat);



class Animal2{

    constructor(nombre,genero){

        this.nombre = nombre;
        this.genero = genero;
    }

    Cantar(){

        console.log(`${this.nombre} esta cantando`);
    }
}

const Dog2 = new Animal2('issis','female');
const Cat2 = new Animal2('michi','male');

console.log(Dog2);
console.log(Cat2);