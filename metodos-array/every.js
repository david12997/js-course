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

//METODO EVERY
//Determina si todos los elementos en el array satisfacen una condición.
//Precaución: ¡Llamar este método en un array vacío devuelve true para cualquier condición!

const DeterminarEdad = objeto.every(obj=>obj.edad < 81);
console.log(DeterminarEdad);
