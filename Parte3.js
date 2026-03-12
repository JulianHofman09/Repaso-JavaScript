//ejercicio8
const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
};

function descripcionUsuario(usuario) {
    return usuario.nombre + " tiene " + usuario.edad + " años";
}

console.log(descripcionUsuario(usuario));
//ejercicio 9
function activarUsuario(usuario) {
    usuario.activo = true;
}

activarUsuario(usuario);

console.log(usuario);
//ejercicio 10
const productos = [
    {nombre:"Mouse", precio:10},
    {nombre:"Teclado", precio:25},
    {nombre:"Monitor", precio:200}
];

function precioTotal(productos) {

    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        total = total + productos[i].precio;
    }

    return total;
}

let resultado = precioTotal(productos);
console.log(resultado);