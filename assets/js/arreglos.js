

// Forma poco comun
const arr = new Array(10);
// console.log(arr);

// Forma más comun
const arr2 = []
// console.log(arr2);

// Arreglo de strings
let videoJuegos = ['Mario 3',' Megaman', 'Chrono Trigger'];
console.log( videoJuegos);

// Primera posición del arreglo
console.log( videoJuegos[0]);

// Podemos definir un arreglo con diferentes tipos de datos
let arregloCosas = [
    true, // booleanos
    123, // numeros
    'Peter', // string
    1+2, // operaciones
    function(){}, //función tradicional
    ()=>{}, // función de flecha
    { a:1 }, // literal
    ['X','Megaman','Zero','Dr Light',[
        // otro sub arreglo
        'Dr Willy',
        'Woodman'
    ]] // otro arreglo
];

// console.log(arregloCosas);

console.log(arregloCosas[7][4][1]); 

