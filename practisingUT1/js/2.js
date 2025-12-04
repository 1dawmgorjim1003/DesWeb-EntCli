"use strict"
{
    let a = 0;
    let b = 0;

    do {
        a = prompt('Introduzca el primer numero');
        b = prompt('Introduzca el segundo numero');
    } while ((isNaN(a) || isNaN(b)) || (a <= 0 || b <= 0));

    if (a > b) {
        console.log(`${a} es mayor que ${b}`);
    } else if (a < b) {
        console.log(`${a} es menor que ${b}`);
    } else {
        console.log(`${a} es igual que ${b}`);
    }
}