class Pelicula{

    constructor(nombre,id){

        this.nombre = nombre;
        this.id = id;
    }

    //atravez del metodo get se obtiene de forma adecuada la propiedad nombre
    get getNombre(){

        return this.nombre;
    }

    // los metodos set son aquellos que usamos para mutar una propiedad
    set setNombre(nombre){

        this.nombre = nombre;
    }

    ReproducirPelicula(){
        return `Reproduciendo pelicula ${this.nombre}`;
    }

    //los metodos static no neceitan d euna instancia para ser invocados
    static IniciarReproductor(pelicula){

        return `Iniciar reproductor para ver ${pelicula}`;
    }
}

// con la palabra reservada extends  heredamos metodos y propiedades de una clase padre
class Serie extends Pelicula{

    constructor(nombre,id,capitulo){
        // el metodo super nos sirve para heredar las propiedades de la clase padre
        super(nombre,id);
        this.capitulo = capitulo;
    }

    // anteponiendo un # a una variable creamos una proiedad privado que solo es accedible desde la clase
    #capitulos = [];

     // anteponiendo un # a una funcion creamos un método privado que solo es accedible desde la clase
    #showId(id){
        return id;
    }
    get getCapitulos(){

        return this.#capitulos;
    }

    set setCapitulos(capitulo){

        this.#capitulos.push(capitulo);
    }


    ReproducirSerie(){

        return `Reproduciendo serie ${this.nombre}, capitulo ${this.capitulo}, id serie : ${this.#showId(this.id)}`
    }
}

const Spiderman = new Pelicula('Spiderman no way home',001);
console.log(Spiderman.ReproducirPelicula());

const Deadpool = new Pelicula('Deadpool',002);
console.log(Deadpool.getNombre);
Deadpool.setNombre = 'Deadpool 2';
console.log(Deadpool.getNombre);

const StrangeThings = new Serie('Strange things',003,5);
console.log(StrangeThings.ReproducirSerie());

