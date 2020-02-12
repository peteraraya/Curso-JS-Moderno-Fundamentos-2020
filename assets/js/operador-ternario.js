/*
* Día de la semana abrimos a las 11
* Pero los fines de semana abrimos a las 9
*/


// Entra al sitio web a consultar , si está abierto hoy

const dia = 1; 
const horaActual = 11;


let horaApertura;
let mensaje; // Está abierto, Está cerrado, Hoy abrimos a las xx

// Evaluar el día : sabiendo cuando es fin de semana

// if (dia === 0 || dia === 6) {
// if ([0,6].includes(dia)) {  // true si es verdadero 
//         console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de la semana');
//     horaApertura = 11;
// }

// Condición ternaria
horaApertura = ([0,6].includes(dia)) ? 9 : 11

// if ( horaActual >= horaApertura ) { 
//     mensaje = `Está abierto !!`;
// }else{
//     mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}` ;
// }
// Condición ternaria
mensaje = (horaActual >= horaApertura) ? `Está abierto !!` : `Está cerrado, hoy abrimos a las ${horaApertura}`

console.log({horaApertura, mensaje});

