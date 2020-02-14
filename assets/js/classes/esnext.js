
class Rectangulo {
    #area = 0; // campo privado

    constructor(base = 0, altura =0 ){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea(){
        console.log(this.#area * 2);
    }
}


const rectangulo = new Rectangulo(10,15);
//rectangulo.#area = 100; // no debería poder cambiar este valor


rectangulo.calcularArea();

console.log(rectangulo);