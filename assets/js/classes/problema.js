const peter = {
  nombre: "Peter",
  edad: 32,
  imprimir() {
    // En este scope no existen estas variables
    console.log(`Nombre: ${this.nombre} y su edad es : ${this.edad}`);
  }
};

const pedro = {
  nombre: "Pedro",
  edad: 33,
  imprimir() {
    // En este scope no existen estas variables
    console.log(`Nombre: ${this.nombre} y su edad es : ${this.edad}`);
  }
};

const melissa = {
  nombre: "Melissa",
  edad: 35,
  imprimir() {
    // En este scope no existen estas variables
    console.log(`Nombre: ${this.nombre} y su edad es : ${this.edad}`);
  }
};

// Utilización tradicional
peter.imprimir();
pedro.imprimir();
melissa.imprimir();

function Persona(nombre, edad) {
  console.log("Se ejecuto esta linea");

  // asignación
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function() {
    // En este scope no existen estas variables
    console.log(`Nombre: ${this.nombre} y su edad es : ${this.edad}`);
  };
}

const maria = new Persona("María", 18);
const melissa2 = new Persona("Melissa", 48);
console.log(maria);
console.log(melissa2);
maria.imprimir();
melissa2.imprimir();
