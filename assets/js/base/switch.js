const dia = 3 ; // 0 : Domingo

// Utiliza un === para realizar la condición
switch (dia) {
    case 0:
         console.log('Domingo');
        break; // sale del switch
    case 1:
        console.log('Lunes');
        break; // sale del switch
    case 2:
        console.log('Martes');
        break; // sale del switch
    case 3:
        console.log('Miercoles');
        break; // sale del switch
    case 4:
        console.log('Jueves');
        break; // sale del switch
    case 5:
        console.log('Viernes');
        break; // sale del switch
    case 6:
        console.log('Sabado');
        break; // sale del switch

    default:
        console.log('No es un día de la semana');
        break;
}

