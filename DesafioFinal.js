const usuarios2 = [
    {id:1, nombre:"Ana", edad:20},
    {id:2, nombre:"Juan", edad:15},
    {id:3, nombre:"Pedro", edad:30}
];

// 1
function obtenerUsuarios() {
    return usuarios2;
}

// 2
function obtenerUsuarioPorId(id) {

    for (let i = 0; i < usuarios2.length; i++) {
        if (usuarios2[i].id == id) {
            return usuarios2[i];
        }
    }

}

// 3
function obtenerMayores() {

    let mayores = [];
    let j = 0;

    for (let i = 0; i < usuarios2.length; i++) {
        if (usuarios2[i].edad >= 18) {
            mayores[j] = usuarios2[i];
            j = j + 1;
        }
    }

    return mayores;
}

// 4
function crearUsuario(nombre, edad) {

    let nuevo = {
        id: usuarios2.length + 1,
        nombre: nombre,
        edad: edad
    };

    usuarios2[usuarios2.length] = nuevo;
}


console.log(obtenerUsuarios());
console.log(obtenerUsuarioPorId(2));
console.log(obtenerMayores());

crearUsuario("Luis", 22);
console.log(usuarios2);