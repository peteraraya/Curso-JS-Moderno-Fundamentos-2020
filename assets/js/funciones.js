function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola '+ nombre);
    return [1,2];  // hasta aquí llega nuestra función

    console.log('Soy un codigo que está despues de un return');
}

// Otra forma de definir funciones

//Función anonima : La ventaja es usar constante para evitar que se reutilize esta función | medida de seguridad
const saludar2 = function (nombre) {
    console.log('Hola '+ nombre);
}


// Funciones de Flecha
const saludarFlecha = () => {
   console.log('Hola Flecha'); 
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola '+ nombre);
}

// Llamados
const retornoSaludar = saludar('Peter', 32, true, 'Chile'); // retorna 
console.log( retornoSaludar[0], retornoSaludar[1] ); 

saludar2('Peter 2');

saludarFlecha();

saludarFlecha2('Peter Flecha');



// Ejercicios 

//Función tradicional
function sumar(a, b) {
return a + b;
}

// Función de flecha
const sumar2 = (a,b) => a+ b; // en una linea


//Otro ejemplo
function getAleatorio() {
    return Math.random();
}
// Función de flecha
const getAleatorio2 = () => Math.random();

console.log( sumar(1,2));

console.log(sumar2(1, 2));

console.log( getAleatorio() );

console.log( getAleatorio2());