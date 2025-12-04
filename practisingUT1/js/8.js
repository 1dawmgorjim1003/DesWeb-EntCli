"use strict"
{
    let num1 = prompt('Introduzca un primer número');
    for (let i = 0; i < 10; i++) {
       console.log(`${i} x ${num1} == ${(i*num1)}`);
    }
}