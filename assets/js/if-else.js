let a = 1;

if ( a >= 10) {
    console.log('a es mayor o igual a 10');
}else{
    console.log('a es menor a 10');
}

console.log('Fin de programa');


// Enviamos valores booleanos a excepcion de undefinded y null

// Otro Ejemplo
const hoy = new Date();
let dia = hoy.getDay(); // 0:Domingo, 1:Lunes, 2:Martes ......


// probar con un console.log
console.log( dia == '2');

if (dia === 0) {
    console.log('Es domingo');
}else if (dia === 1) {
        console.log('Lunes');
}else if (dia === 2) {
    console.log('Martes');
}else{
    console.log('No es domingo, lunes, ni martes');

    // if (dia === 1) {
    //         console.log('Es Lunes');
    // }else{
    //     console.log('No es lunes ni domingo');
    // }
}

// =   :  asignación
// ==  :  saber si es igual sin importar el tipo
// === :  saber si es igual pero si importa el tipo 



// Sin usar if else ni switch , unicamente con objetos

dia = 3 ; 


// Con objetos
const diasLetras = {
    0:'domingo', 
    1:'lunes', 
    2:'maertes', 
    3:'miercoles', 
    4:'jueves', 
    5:'viernes', 
    6:'sabado'
}

const diasLetras2 = ['domingo','lunes','maertes','miercoles','jueves','viernes','sabado']; 

// Día de la semana | ideal uso de or en caso de condiciones
console.log(diasLetras[dia] || 'Dia no definido en el objeto');
console.log(diasLetras2[dia] || 'Dia no definido en el arreglo');






