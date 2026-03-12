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

