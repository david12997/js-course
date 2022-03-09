//

// existen los literales y los  metacaracteres que poseen 5 grupos
/*
metacaracteres: 
1 tipo caracter
2 aserciones
3 agrupamientos/rangos
4 cunatificadores
5 unicode property escapes
*/



const string1 = 'hsad alskholadjsadjk dklholaadkl';
console.log(string1.match(/hola/));
console.log(string1.match(/hola/ig));
console.log(string1.replace(/hola/,'ChaoliN'));
console.log(string1.replaceAll(/hola/ig,'ChaoliN'));
console.log(string1.split(/hola/));
console.log(/hola/.exec(string1));
