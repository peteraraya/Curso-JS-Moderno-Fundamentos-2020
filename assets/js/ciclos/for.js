const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');
for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    console.log(element);
}

console.warn('For in');
for (let i in heroes) {
    console.log(heroes[i]);
}

// Es muy utulizado para tener referencia a objetos d euna manera más sencilla
console.warn('For of');
for (let heroe of heroes) {
    console.log(heroe); // extrae el valor del arreglo
}