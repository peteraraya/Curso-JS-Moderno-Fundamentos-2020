class Persona {
  static _conteo = 0; // propiedad estática

  static get conteo() {
    // get estático
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    // método estático
    console.log("Hola soy un método estatico ");
  }
  // Definir propiedades
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre ",
    codigo = "Sin codigo",
    frase = "Sin frase"
  ) {
    // Validaciones
    // Iniciaizando
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }
  // Set y Get
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  // Metodos
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi codigo es  ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy(); // metodo dentro un metodo
    console.log(`Soy ${this.nombre} y mi frase es  ${this.frase}`);
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "SpiderMan",
  "Soy tu amigable vecino Spiderman"
);
const ironman = new Persona("Tony Stark", "Ironman", "Yo soy Iroman");

// Utilización de metodos
spiderman.quienSoy();
// ironman.quienSoy();

// spiderman.miFrase();
// ironman.miFrase();

// Se setea propiedad
// spiderman.setComidaFavorita = 'pie de cereza de la tía May';
// Obtengo propiedad
// console.log(spiderman.getComidaFavorita);

// console.log(ironman);

// Persona._conteo = 2;

console.log("Conteo estático", Persona._conteo);

console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = "Hola Mundo";

console.log(Persona.propiedadExterna);
console.log(Persona);
