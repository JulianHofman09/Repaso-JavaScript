//ejercicio 1
function formatearNombre(nombre) {
    let resultado = "";

    for (let i = 0; i < nombre.length; i++) {
        if (i == 0) {
            resultado += nombre[i].toUpperCase();
        } else {
            resultado += nombre[i].toLowerCase();
        }
    }

    return resultado;
}

console.log(formatearNombre("DAMIAN"));
console.log(formatearNombre("jULiAn"));
//ejercicio 2
function contarLetras(texto) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] != " ") {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetras("hola universo"));
//ejercicio 3
function maximo(a, b, c) {
    let mayor = a;

    if (b > mayor) {
        mayor = b;
    }

    if (c > mayor) {
        mayor = c;
    }

    return mayor;
}

console.log(maximo(5, 9, 3));
//ejercicio 4
function validarPassword(password) {

    if (password.length < 8) {
        return false;
    }

    let tieneNumero = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            tieneNumero = true;
        }
    }

    return tieneNumero;
}

console.log(validarPassword("abc12345"));