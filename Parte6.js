//ejercicio 16

const productos = [
    {nombre:"Mouse", precio:10},
    {nombre:"Teclado", precio:25},
    {nombre:"Monitor", precio:200}
];

function buscarProducto(productos, nombre) {

    for (let i = 0; i < productos.length; i++) {

        if (productos[i].nombre == nombre) {
            return productos[i];
        }

    }

}

console.log(buscarProducto(productos, "Teclado"));

//ejercicio 17


function productosCaros(productos) {

    let caros = [];
    let j = 0;

    for (let i = 0; i < productos.length; i++) {

        if (productos[i].precio > 50) {
            caros[j] = productos[i];
            j = j + 1;
        }

    }

    return caros;
}

console.log(productosCaros(productos));

//ejercicio 18

function promedio(numeros) {

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    let resultado = suma / numeros.length;

    return resultado;
}

console.log(promedio([10,8,6,9]));