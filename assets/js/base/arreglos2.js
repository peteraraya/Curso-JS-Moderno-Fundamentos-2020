
let juegos = ['Zelda','Mario','Metroid','Chrono Triger'];

console.log('Largo:', juegos.length); // cuantos elementos hay dentro del arreglo

let primero = juegos[0];// siempre va ser el 0 para el primer elemento
console.log(primero);

let  ultimo = juegos[ juegos.length - 1]// ultimo elemento del arreglo
console.log(ultimo);

// Tambíen podemos utilizar operaciones matematicos como juegos[2-2] = posición : 0


// Ejecuta instrucción por cada uno de los elementos
juegos.forEach( (elemento, indice, arr ) =>{
    console.log(elemento, indice, arr);
}); 

// push() : Añade elementos al final al arreglo
let nuevaLongitud = juegos.push( 'F-Zero' );

console.log( { nuevaLongitud, juegos });

// unshift(): Añade elementos al comienzo al arreglo
nuevaLongiud = juegos.unshift('Fire Embled');
console.log({ nuevaLongitud, juegos});

// pop() : Remueve el ultimo elemento de nuestro arreglo
let juegoBorrado =  juegos.pop();
console.log( {juegoBorrado, juegos} );

// Borrar elementos en una posción en espesifica
let pos = 1;
console.log(juegos);
// splice() : es un metodo que recibe un punto inicial y cuantos elementos quiere borrar regresando un nuevo arreglo
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});


// Saber la posición indice de un objeto
let metroidIndex = juegos.indexOf('Metroid'); // ojo es case sentitive en caso de no encontrar el elemento regresa un -1
console.log({metroidIndex, juegos}); // Metroid está en la posicón 1