"use strict"
{
    let num1 = prompt('Introduzca un numero: ');

    console.log('TABLA DE MULTIPLICAR DEL ' + num1)
    for (let $i = 1; $i <= 10; $i++) {
        console.log(num1 + ' x ' + $i + ' = ' + ($i*num1));
    };
}