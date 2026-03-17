//ejercicio 16

const productos2 = [
    {nombre:"Mouse", precio:10},
    {nombre:"Teclado", precio:25},
    {nombre:"Monitor", precio:200}
];

function buscarProducto(productos2, nombre) {

    for (let i = 0; i < productos2.length; i++) {

        if (productos2[i].nombre == nombre) {
            return productos2[i];
        }

    }

}

console.log(buscarProducto(productos2, "Teclado"));

//ejercicio 17


function productosCaros(productos2) {

    let caros = [];
    let j = 0;

    for (let i = 0; i < productos2.length; i++) {

        if (productos2[i].precio > 50) {
            caros[j] = productos2[i];
            j = j + 1;
        }

    }

    return caros;
}

console.log(productosCaros(productos2));

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