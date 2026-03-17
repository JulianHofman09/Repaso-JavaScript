//ejercicio 5
function sumarArray(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    return suma;
}

console.log(sumarArray([4, 6, 12]));
//ejercicio 6
function mayorNumero(numeros) {
    let mayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }

    return mayor;
}

console.log(mayorNumero([5, 6, 2, 50, 36]));
//ejercicio 7

function obtenerPares(numeros) {

    let pares = [];
    let j = 0;

    for (let i = 0; i < numeros.length; i++) {

        let numero = numeros[i];

        if (numero % 2 == 0) {
            pares[j] = numero;
            j = j + 1;
        }

    }

    return pares;
}

let resultado1 = obtenerPares([1,2,3,4,5,6]);
console.log(resultado1);