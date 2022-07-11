// Variables y Constantes

const nombre = 'Andres';
let apellido = 'Rodriguez';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// No se debe usar var
if (true) {
    const nombre = 'Peter';
    //let valorDado = 6;
    console.log(nombre);
}

console.log(valorDado);