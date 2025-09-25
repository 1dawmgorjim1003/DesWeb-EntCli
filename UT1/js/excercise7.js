"use strict"
{
    let num1 = prompt('Introduzca un numero: ');
    let $output = '';

    for (let $i = 0; $i <= num1; $i++) {
        if (num1 % $i == 0) {
            $output += $i;
            $output += ' ';
        };
    };
    console.log('Los numeros divisores de ' + num1 + " son: " + $output);
}