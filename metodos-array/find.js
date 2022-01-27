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
