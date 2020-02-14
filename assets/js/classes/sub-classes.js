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

  // Métodos
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi codigo es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy(); // metodo dentro un metodo
    console.log(`Soy ${this.nombre} y mi frase es ${this.frase}`);
  }
}

class Heroe extends Persona{
    clan = 'sin clan';
    // Obliga a realizar un trabajo, yo necesito llamar el contructor de persona
    constructor(nombre, codigo, frase){
        // cualquier cosa que no involucre un this
        // super siempre va primero
        super(nombre, codigo, frase); // con super hacemos referencia al contructor de la clase padre
        this.clan = 'Los Avenger';
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy(); // en caso de sobrescribir el metodo de la clase padre
    }
}

const spiderman = new Heroe(
  "Peter Parker",
  "SpiderMan",
  "Soy tu amigable vecino Spiderman"
);

console.log(spiderman);
spiderman.quienSoy();

