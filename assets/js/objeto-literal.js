
// Hacemos inmutable el objeto en caso de cambiar el let por const , no podemos reasignar pero si cambiar sus propiedades 
const personaje = {
    // llave + valor
    nombre :'Tony Stark',
    codeName :'Iron Man',
    vivo: false,
    edad:40,
    coords:{
        lat: 34.34,
        lng: -118.70
    },
    trajes:['Mark I','Mark V','HulkBuster'],
    direccion:{
        zip:'10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula':'End Game'
};

console.log(personaje);

// Accediendo a las propiedades
console.log('Nombre : ', personaje.nombre);  // Utilizando punto

console.log('Nombre : ', personaje['nombre']); 

console.log('Edad : ', personaje.edad);

console.log('Coors : ', personaje.coords);

console.log('Latitud : ', personaje.coords.lat);

console.log('N° de Trajes es de:', personaje.trajes.length );

console.log('último traje es :', personaje.trajes[personaje.trajes.length - 1]);

// Voy a utilizar para obtener la información de un objeto, ayuda bastante a trabajar de forma dinámica con nuestros objetos
const x = 'vivo';

console.log('Vivo', personaje[x]);

// Imprimiendo última pelicula
console.log('Última película : ', personaje['ultima-pelicula']); // No podemos utilizar la notación de punto para esta propiedad


// Más detalles

//Borrando propiedad
delete personaje.edad;
// Agregamos una propiedad
personaje.casado = true;

// Trabajar nuestro objeto como si fuera un arreglo
const entriesPares = Object.entries( personaje );
console.log(entriesPares);


// Lo hace inmutable al objeto  | lo congelaen el momento que yo hize esa instrución
Object.freeze(personaje);
personaje.dinero = 23873728437;
personaje.casado = false;
personaje.direccion.ubicacion = 'Chile'; // este se puede cambiar ya que es un objeto dentro de un objeto --> para bloquearlo hay que aplicar el Object.freeze a dirección
console.log(personaje);



// Listado de propiedades
const propiedades = Object.getOwnPropertyNames(personaje); // Obtengo arreglo de propiedades del objeto
const valores = Object.values(personaje); // obtengo arreglo de los valores de las propiedades del objeto
console.log(propiedades, ' - ', valores);






