//ejercicio11
const usuarios = [
    {nombre:"Ana", edad:17},
    {nombre:"Juan", edad:25},
    {nombre:"Pedro", edad:30}
];

let nombres = usuarios.map(function(usuario) {
    return usuario.nombre;
});

console.log(nombres);
//ejercicio 12

let mayores = usuarios.filter(function(usuario) {
    return usuario.edad >= 18;
});

console.log(mayores);

//ejercicios 13
let total = usuarios.reduce(function(acumulador, usuario) {
    return acumulador + usuario.edad;
}, 0);

console.log(total); 