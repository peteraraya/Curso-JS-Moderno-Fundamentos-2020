const carros = ['Ford', 'Ferrari', 'Mazda', 'Toyota'];

// Imprimir cada uno de los valores

// Ciclo While()
console.warn('While');
// Declarar contador
let i = 0;

//Imprimiendo elementos
while (carros[i]) { // Está condición debe ser verdadera para que se ejecute
    if (i === 1) {
        //break; // Salimos del while
        i++;
        continue; // Sigue ejecutando la siguiente linea
    }
    console.log(carros[i]);
    i++;
}

// Pero existen valores que podrian hacer que nuestro ciclo no se ejecute como 
// undefined , null o false


// Ciclo doWhile()
console.warn('Do While');

let j = 0;

do {

    console.log(carros[j]);
    j++;

} while (carros[j]);