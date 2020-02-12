
function crearPersona(nombre, apellido) {
    return {
        // Cuando la variable y la propiedad se llama igual no hace falta espsificar dos veces
        // nombre: nombre,
        // apellido: apellido
        nombre,
        apellido
        
    }
}
const persona = crearPersona('Peter', 'Araya');
// console.log(persona);

//  ----------------------------------------------------------------------------------------------------------------

// Función de flecha
const crearPersonaFlecha = (nombre, apellido) => ({nombre,apellido});

// Si quiero rescatar solo el apellido
const {apellido: nuevoApellido} = crearPersonaFlecha('Peter', 'Araya');
console.log(nuevoApellido);



// Función tradicional
function imprimeArgumentos() {
    console.log(arguments);
}
imprimeArgumentos(10, true, false, 'peter', 'saludo');


// Función de flecha
const imprimeArgumentos2 = (edad,...args) =>{ // envia todos los argumentos utilizando un parametro rest , después del parametro rest no puede ir ningun otro argumento
    // console.log(edad, args);
    return args;
}
// no toma en cuenta los arguments como en funciones tradicionales
const[casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'peter', 'saludo');

console.log({ casado, vivo, nombre, saludo});


// Si necesitamos las variables de los argumentos colocamos sus nombres en la declaración de la constante





// Destructuración de argumentos
// Para fines eductivos utilizo en la parter inferior
const tony = {
    // llave + valor
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    // edad: 40,
    coords: {
        lat: 34.34,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
};

const imprimePropiedades = ({nombre,codeName, vivo,edad=15,trajes}) => {

    // Validación de edad
    // edad = edad || 0;

    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
}


imprimePropiedades(tony);