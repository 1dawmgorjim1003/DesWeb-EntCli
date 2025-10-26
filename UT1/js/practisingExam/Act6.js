"use strict"
{
    let num1 = prompt('Introduzca un primer número: ');
    let num2 = prompt('Introduzca un segundo número: ');
    num1++;
    
    for (let i = num1; i < num2; i++) {
        if (i % 2 !== 0) {
            console.log(i);   
        }
    }
}