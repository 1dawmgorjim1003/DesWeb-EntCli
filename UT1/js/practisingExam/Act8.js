"use strict"
{
    let num1 = prompt('Introduzca un número: ');
    console.log(`TABLA DE MULTIPLICAR DEL ${num1}`);
    for (let i = 0; i <= num1; i++) {
        console.log (`${i} x ${num1} = ${i*num1}`);
    }
    
}