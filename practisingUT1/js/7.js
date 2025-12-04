"use strict"
{
    let num1 = prompt('Introduzca un primer número');
    for (let i = 0; i < num1; i++) {
        if (num1 % i == 0) {
            console.log(i);
        }
    }
}