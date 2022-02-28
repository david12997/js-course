//contexto global, this es igual al objeto global
console.log(this);

//funcion que esta en el alcance global, this sigue haciendo referencia al objeto global
//en el caso de los navegadores a window
function Demo(){

    console.log(this);
}

Demo();

//el valor del contexo cambia cuando definimos una funcion dentro d eun objeto

//objeto literal
let obj = {

    DemoObj: function(){

        console.log(this);//el valor de this es iguala al objeto literal
    }

}

//objeto literal
//console.log(obj);

//obj.DemoObj();

//EL CONTEXTO ES EL OBJETO QUE EJECUTA LA FUNCION
//EL VALOR DE THIS DEPENDE DE DONDE SE EJECUTA LA FUNCION Y NO DE DONDE SE DECLARA

window.Demo(); //el valor de this se asigna al objeto window por que la funcion es de alcanc eglobal
obj.DemoObj();//el valor de this se asigna al objeto obj por que el alcance d ela fn es de obj

//EL VALOR DE THIS DEPENDE DE DONDE SE EJECUTA LA FUNCION Y NO DE DONDE SE DECLARA
let func = obj.DemoObj;

func();//el contexto de this es window por que la funcion se ejecuta en el alcance global de this

//funcion constructora
function Estudiante(){

    this.nombre = 'David',
    this.Context = function(){ console.log(this)}
    this.ArrowContext = ()=>console.log(this)
}

let e = new Estudiante();

e.Context();//this pertenece al objeto Estudiante
e.ArrowContext(); //this pertenece al objeto Estudiante;

let func2 = e.Context;
let func3 = e.ArrowContext;

func2();//cambia el contexto de this por que se esta ejectando en alcance global de window
func3();// no cambia el contexto de this porque las arrow function mantiene el contexto de su declaración

//para mantener el conexto se puede usar bind()
function Estudiante2(){

    this.Context = function(){ console.log(this)}
    this.Context = this.Context.bind(this)//aseguramos que el contexto de la funcion siempre sea Estudiante2

}

let e2 = new Estudiante2;
let func4 = e2.Context;
func4();




