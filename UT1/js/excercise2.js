"use strict"
{
    let a; let b;
    do {
        a = prompt('Introduzca un número');
        b = prompt('Introduzca otro número');

    } while ((isNaN(a) || isNaN(b)) || (a <= 0 || b <= 0));

    if (a > b) {
        console.log(a + ' es mayor que ' + b);
    } else if (a < b) {
        console.log(a  + ' es menor que ' + b);
    } else if (a === b) {
        console.log('Los números son iguales');
    }
}