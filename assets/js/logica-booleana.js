
 const regresaTrue = () =>{
    console.log('Regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
};

console.warn('Not a la negación');
console.log(true);
console.log(!true);  // negación
console.log(!false); // negación


console.log(!regresaFalse()); // negación

console.warn('Operador And'); // Condición y lógica
console.log(true && true); // true
console.log(true && false); // false

console.log('=============');
console.log(regresaFalse() && regresaTrue()); // false
// La primera instrucción regresa falso, ignora todo lo que venga despúes

console.log('=============');
console.log(regresaTrue() && regresaFalse()); // false


console.warn('Operador OR');// Condición o lógica
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false


console.log('4 condiciones :',true && true &&true && false); // false
console.log('4 condiciones :', true || true || true || false); // true


// Asignaciones
console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

// No es común hacer asignaciones con AND
const a1 = false && 'Hola Mundo' && 150; // asigna el ultimo valor | false no ejecuta nada

const a2 = 'Hola' && 'Mundo' && soyFalse && true; // ultimo valor es falso ya que todas las condiciones deben ser true

// Lo más comun es hacer asignaciones con OR

const a3 = soyFalse || 'Ya no soy falso'; // con uno que que sea diferente a un false, udefined o null envia el ultimo valor

const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // muestra el ultimo valor ,  no retorna el true porque no llega ese punto, ya que ya encontro un valor lo demas ya no se ejecuta

const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // encuentra un true e ignora lo demás

console.log({a1, a2, a3, a4, a5});

//Lógica booleana más común
if (true || true || true || false) { // La idea es no tener más de 3 condiciones y pensar una manera de simplificar esto
    console.log('Hacer algo');
}else{
    console.log('Hacer otra cosa');
}






