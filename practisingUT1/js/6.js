"use strict"
{
    let num1 = prompt('Introduzca un primer número');
    let num2 = prompt('Introduzca un segundo número');
    num1++;
    for (num1; num1 < num2; num1++) {
        if (num1 % 2 !== 0) {
            console.log(num1);
        }
    }
}