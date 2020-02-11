
//Ejemplo de referencia por valor | Todos los primitivos se pasan por valor

let a = 10;

let b = a;

a = 30;

console.log({a, b});


//Ejemplo de referencia por referencia | Todos los objetos se pasan por referencia

let juan = { nombre: 'Juan'};

let ana = {...juan}; // colocamos entre llaves y usamos  spread ( rompe la referencia en js )

ana.nombre = 'Ana'; 

console.log({juan, ana});


function cambiaNombre({...persona}) { // rompe referencia
    persona.nombre = 'Tony';
    return persona;
}


let peter = {nombre: 'Peter'}; // peter pasa por referencia a la función
let tony = cambiaNombre(peter);

console.log({peter, tony});


// ¿Como lo resolvemos? : utilizando spread

// Arreglos
const frutas = ['Manzana','Pera','Piña'];

const otrasFrutas = [...frutas]; // se recomienda utilizar [] y operador spread para romper relación
// const otrasFrutas = frutas.slice();  --> otra forma

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas});


