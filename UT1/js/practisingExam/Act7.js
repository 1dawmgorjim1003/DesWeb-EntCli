"use strict"
{
    let num1 = prompt('Introduzca un número: ');
    
    let output = '';
    for (let i = 0; i < num1; i++) {
        if (num1 % i == 0) {
            output += i;
            output += ' ';
        }
    }

    console.log(`Los numeros divisibles de ${num1} son: ${output}`);
    
}