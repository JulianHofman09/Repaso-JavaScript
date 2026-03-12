//ejercicio 14
const producto = {
    nombre: "Notebook",
    precio: 1000
};

let { nombre, precio } = producto;

console.log(nombre);
console.log(precio);

//ejercicio 15



let nuevoProducto = {
    ...producto,
    stock: 5
};

console.log(nuevoProducto);

