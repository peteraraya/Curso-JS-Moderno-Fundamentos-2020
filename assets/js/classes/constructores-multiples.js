class Persona {
  // Tip para crear multiples constructores
  // Metodo estatico : que utiliza una nueva instancia de persona
  static porObjeto({ nombre, apellido, pais }) {
    // Cree una nueva instancia de persona pero utilizando el constructor
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info : ${this.nombre}, ${this.apellido} , ${this.pais}`);
  }
}

const fher = {
  nombre: "Fernando",
  apellido: "Herrera",
  pais: "Costa Rica"
};

const nombre1 = "Melissa",
  apellido1 = "Flores",
  pais1 = "Honduras";

const persona1 = new Persona(nombre1, apellido1, pais1);

const persona2 = Persona.porObjeto(fher); // No utilizo new y llamo al objeto que va utilizar el nuevo constructor

persona1.getInfo();
persona2.getInfo();
