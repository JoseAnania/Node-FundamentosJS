//creo una función tradicional
function add(a, b) {

    return a + b;
}

console.log(add(5, 10));

// otra forma de una función tradicional
function add(a, b = 10) {

    return a + b;
}

console.log(add(5));

/* Funciones de Flecha */

// creo una función de flecha
const addNumbers = (a, b) => {

    return a + b;
}

console.log(add(5, 10));

// función de flecha abreviada
const addNumbers2 = (a, b) => a + b;

console.log(add(5, 10));

const hello = () => 'Hola Mundo';

console.log(hello());