
class Singleton{
    // 2 campos opcionales
    static instancia; // instancia inicializada de mi clase 
    nombre = '';


    constructor(nombre = ''){
        // console.log(Singleton.instancia);
        // const a = undefined;
        // console.log(a); // undefined
        // console.log(!a); // true
        // console.log(!!a); // false
        
        if ( !!Singleton.instancia) {
             return Singleton.instancia;   
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }
}


const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia3 es: ${instancia3.nombre}`);